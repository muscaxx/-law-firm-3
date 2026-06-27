import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/appointment-schema";
import { createAppointmentEvent } from "@/lib/google-calendar";
import { sendAppointmentEmail } from "@/lib/mail";

export const runtime = "nodejs";

/**
 * POST /api/randevu
 * Online randevu formunu işler:
 *  1) Doğrulama (zod)
 *  2) Google Calendar etkinliği + (opsiyonel) Meet linki
 *  3) SMTP ile e-posta bildirimi
 * Google/SMTP yapılandırılmamışsa demo modunda yine başarı döner.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek" }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Form doğrulanamadı", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Takvim + Meet
  const calendar = await createAppointmentEvent(data);
  // E-posta bildirimi
  const mail = await sendAppointmentEmail(data, calendar.meetLink);

  return NextResponse.json({
    ok: true,
    message: "Randevu talebiniz alındı.",
    meetLink: calendar.meetLink ?? null,
    calendarCreated: calendar.created,
    mailSent: mail.sent,
  });
}
