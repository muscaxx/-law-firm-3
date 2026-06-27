import nodemailer from "nodemailer";
import type { AppointmentInput } from "./appointment-schema";

/**
 * Randevu formu bildirimi için SMTP e-posta gönderimi.
 * SMTP yapılandırılmamışsa demo moduna düşer (konsola yazar).
 */
export async function sendAppointmentEmail(
  data: AppointmentInput,
  meetLink?: string
): Promise<{ sent: boolean; reason?: string }> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[mail] SMTP yapılandırılmamış — randevu (demo modu):", {
      ...data,
      meetLink,
    });
    return { sent: false, reason: "SMTP yapılandırılmamış (demo modu)" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <h2>Yeni Online Randevu Talebi</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><b>Ad Soyad</b></td><td>${esc(data.firstName)} ${esc(data.lastName)}</td></tr>
        <tr><td><b>Telefon</b></td><td>${esc(data.phone)}</td></tr>
        <tr><td><b>E-posta</b></td><td>${esc(data.email || "-")}</td></tr>
        <tr><td><b>Avukat</b></td><td>${esc(data.lawyer || "-")}</td></tr>
        <tr><td><b>Hizmet</b></td><td>${esc(data.service || "-")}</td></tr>
        <tr><td><b>Tarih / Saat</b></td><td>${esc(data.date || "-")} ${esc(data.time || "")}</td></tr>
        <tr><td><b>Konu</b></td><td>${esc(data.message)}</td></tr>
        ${meetLink ? `<tr><td><b>Google Meet</b></td><td><a href="${meetLink}">${meetLink}</a></td></tr>` : ""}
      </table>
    `;

    await transporter.sendMail({
      from: `"Web Sitesi" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: data.email || undefined,
      subject: `Yeni Randevu: ${data.firstName} ${data.lastName}`,
      html,
    });

    return { sent: true };
  } catch (err) {
    console.error("[mail] gönderim hatası:", err);
    return { sent: false, reason: "E-posta gönderilemedi" };
  }
}

function esc(s: string) {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
}
