import { CalendarDays, Video, ExternalLink } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Google Randevu (Calendar Appointment Schedule) ve Google Meet kısayolları.
 * - Google Appointment URL .env'de tanımlıysa "Randevu Al" linki onu açar.
 * - Tanımlı değilse site içi /randevu formuna yönlendirir.
 */
export function GoogleActions({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const appointmentUrl = siteConfig.googleAppointmentUrl || `/${locale}/randevu`;
  const isExternal = !!siteConfig.googleAppointmentUrl;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <a
        href={appointmentUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
          <CalendarDays className="h-6 w-6" />
        </span>
        <span>
          <span className="flex items-center gap-1 font-semibold text-navy">
            {dict.cta.googleAppointment}
            {isExternal && <ExternalLink className="h-3.5 w-3.5 text-gray-400" />}
          </span>
          <span className="mt-1 block text-sm text-gray-500">
            {locale === "tr"
              ? "Uygun saatleri görüp anında rezervasyon yapın."
              : "See available slots and book instantly."}
          </span>
        </span>
      </a>

      <a
        href={`/${locale}/randevu?online=1`}
        className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
          <Video className="h-6 w-6" />
        </span>
        <span>
          <span className="font-semibold text-navy">{dict.cta.meet}</span>
          <span className="mt-1 block text-sm text-gray-500">
            {locale === "tr"
              ? "Görüşmenizi online yapın; Google Meet linki size iletilir."
              : "Meet online; a Google Meet link will be sent to you."}
          </span>
        </span>
      </a>
    </div>
  );
}
