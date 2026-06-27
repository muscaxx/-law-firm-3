import { ExternalLink, Navigation, MapPin, Star } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Google Maps yerleştirme (iframe) + işletme kartı.
 * Referans görsel #4'teki gibi adres, puan ve "yol tarifi" linki içerir.
 */
export function MapEmbed({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* İşletme kartı */}
      <div className="border-b border-gray-100 p-5">
        <h3 className="font-serif text-lg font-bold text-navy">{siteConfig.legalName}</h3>
        <div className="mt-2 flex items-start gap-2 text-sm text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <span>{siteConfig.address[locale]}</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-sm">
          <span className="font-semibold text-navy">5,0</span>
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </span>
          <span className="text-gray-400">(80)</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={siteConfig.mapsProfileUrl} target="_blank" rel="noreferrer" className="btn-outline !px-4 !py-2 text-xs">
            <ExternalLink className="h-4 w-4" />
            {locale === "tr" ? "İşletme Profili" : "Business Profile"}
          </a>
          <a href={siteConfig.mapsProfileUrl} target="_blank" rel="noreferrer" className="btn-navy !px-4 !py-2 text-xs">
            <Navigation className="h-4 w-4" />
            {dict.cta.directions}
          </a>
        </div>
      </div>

      {/* Harita */}
      <iframe
        src={siteConfig.mapsEmbedUrl}
        title={dict.sections.mapTitle}
        className="h-[320px] w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      <div className="bg-gray-50 px-5 py-3 text-center">
        <a
          href={siteConfig.mapsProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gold-dark hover:underline"
        >
          {locale === "tr"
            ? "Google İşletme Profilinde görüntüle ve yol tarifi al →"
            : "View on Google Business Profile and get directions →"}
        </a>
      </div>
    </div>
  );
}
