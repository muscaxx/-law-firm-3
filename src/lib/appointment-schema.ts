import { z } from "zod";

/** Online randevu formu doğrulama şeması (sunucu + istemci) */
export const appointmentSchema = z.object({
  firstName: z.string().min(2, "Adınızı giriniz"),
  lastName: z.string().min(2, "Soyadınızı giriniz"),
  phone: z
    .string()
    .min(7, "Geçerli bir telefon numarası giriniz")
    .max(20),
  email: z.string().email("Geçerli bir e-posta giriniz").optional().or(z.literal("")),
  lawyer: z.string().optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  date: z.string().optional().or(z.literal("")),
  time: z.string().optional().or(z.literal("")),
  message: z.string().min(5, "Konuyu kısaca açıklayınız"),
  kvkk: z
    .union([z.boolean(), z.literal("on"), z.literal("true")])
    .refine((v) => v === true || v === "on" || v === "true", {
      message: "KVKK metnini onaylamanız gerekir",
    }),
  // Google Meet'li online görüşme talebi
  online: z.boolean().optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
