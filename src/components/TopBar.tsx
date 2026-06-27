import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * İnce üst şerit: solda iletişim bilgileri, sağ üst köşede dil seçici.
 */
export function TopBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="hidden bg-navy-900 text-navy-100 md:block">
      <div className="container-x flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-gold">
            <Mail className="h-3.5 w-3.5 text-gold" /> {siteConfig.email}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock className="h-3.5 w-3.5 text-gold" />
            {dict.workingHours.weekdays}: {siteConfig.workingHours.weekdays}
          </span>
        </div>

        {/* Sağ üst köşe — dil seçici */}
        <div className="rounded-full bg-white/95 px-3 py-1">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </div>
  );
}
