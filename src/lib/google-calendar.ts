import { google } from "googleapis";
import type { AppointmentInput } from "./appointment-schema";

/**
 * Google Calendar entegrasyonu.
 *
 * Service Account ile takvime etkinlik oluşturur ve istenirse
 * Google Meet bağlantısı ekler. Ortam değişkenleri tanımlı değilse
 * sessizce "demo modu"na düşer (site yine çalışır, etkinlik oluşmaz).
 *
 * Gerekli .env değerleri:
 *   GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID
 *   (opsiyonel) GOOGLE_IMPERSONATE_USER  -> domain-wide delegation
 */

export interface CalendarResult {
  created: boolean;
  eventId?: string;
  htmlLink?: string;
  meetLink?: string;
  reason?: string;
}

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) return null;

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar.events"],
    // Domain-wide delegation için kişiselleştirme (opsiyonel)
    subject: process.env.GOOGLE_IMPERSONATE_USER || undefined,
  });
}

export async function createAppointmentEvent(
  data: AppointmentInput
): Promise<CalendarResult> {
  const auth = getAuth();
  if (!auth) {
    return { created: false, reason: "Google Calendar yapılandırılmamış (demo modu)" };
  }

  try {
    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

    // Tarih/saat -> ISO. Belirtilmemişse 1 saatlik bir taslak oluştur.
    const start = buildDateTime(data.date, data.time);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const requestId = `meet-${Date.now()}`;
    const summary = `Randevu: ${data.firstName} ${data.lastName}`;
    const description = [
      `Telefon: ${data.phone}`,
      data.email ? `E-posta: ${data.email}` : null,
      data.service ? `Hizmet: ${data.service}` : null,
      data.lawyer ? `Avukat: ${data.lawyer}` : null,
      "",
      `Konu: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const event = await calendar.events.insert({
      calendarId,
      conferenceDataVersion: data.online ? 1 : 0,
      requestBody: {
        summary,
        description,
        start: { dateTime: start.toISOString(), timeZone: "Europe/Istanbul" },
        end: { dateTime: end.toISOString(), timeZone: "Europe/Istanbul" },
        attendees: data.email ? [{ email: data.email }] : undefined,
        ...(data.online
          ? {
              conferenceData: {
                createRequest: {
                  requestId,
                  conferenceSolutionKey: { type: "hangoutsMeet" },
                },
              },
            }
          : {}),
      },
    });

    const meetLink =
      event.data.conferenceData?.entryPoints?.find(
        (e) => e.entryPointType === "video"
      )?.uri || event.data.hangoutLink || undefined;

    return {
      created: true,
      eventId: event.data.id || undefined,
      htmlLink: event.data.htmlLink || undefined,
      meetLink,
    };
  } catch (err) {
    console.error("[google-calendar] etkinlik oluşturulamadı:", err);
    return { created: false, reason: "Takvim API hatası" };
  }
}

function buildDateTime(date?: string, time?: string): Date {
  if (date) {
    const t = time && /^\d{2}:\d{2}$/.test(time) ? time : "10:00";
    const d = new Date(`${date}T${t}:00`);
    if (!isNaN(d.getTime())) return d;
  }
  // Varsayılan: yarın 10:00
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(10, 0, 0, 0);
  return d;
}
