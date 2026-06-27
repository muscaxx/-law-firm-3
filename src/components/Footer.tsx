import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Scale, AlertTriangle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const f = dict.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-navy-900 text-navy-100">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Marka */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gold">
              <Scale className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <span className="font-serif text-lg font-bold text-white">{siteConfig.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-navy-200">
            {siteConfig.description[locale]}
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={siteConfig.social.instagram}><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={siteConfig.social.linkedin}><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={siteConfig.social.facebook}><Facebook className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        {/* Hızlı bağlantılar */}
        <div>
          <h3 className="mb-4 font-serif text-base font-semibold text-white">{f.quickLinks}</h3>
          <ul className="space-y-2 text-sm">
            <FootLink href={base}>{dict.nav.home}</FootLink>
            <FootLink href={`${base}/kurumsal`}>{dict.nav.about}</FootLink>
            <FootLink href={`${base}/calisma-alanlari`}>{dict.nav.practiceAreas}</FootLink>
            <FootLink href={`${base}/hizmet-bolgelerimiz`}>{dict.nav.serviceAreas}</FootLink>
            <FootLink href={`${base}/blog`}>{dict.nav.blog}</FootLink>
            <FootLink href={`${base}/iletisim`}>{dict.nav.contact}</FootLink>
          </ul>
        </div>

        {/* Çalışma alanları */}
        <div>
          <h3 className="mb-4 font-serif text-base font-semibold text-white">{f.practiceAreas}</h3>
          <ul className="space-y-2 text-sm">
            {practiceAreas.slice(0, 6).map((p) => (
              <FootLink key={p.slug} href={`${base}/calisma-alanlari/${p.slug}`}>
                {p.title[locale]}
              </FootLink>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="mb-4 font-serif text-base font-semibold text-white">{f.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-navy-200">{siteConfig.address[locale]}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* ====== YASAL UYARI (DISCLAIMER) — görsel #6 ====== */}
      <div className="border-t border-white/10 bg-navy-900">
        <div className="container-x py-6">
          <div className="flex items-start gap-3 text-xs leading-relaxed text-navy-300/90">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
            <p>{f.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Alt bant */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-300 sm:flex-row">
          <p>© {year} {siteConfig.legalName}. {f.rights}</p>
          <p>
            {locale === "tr" ? "Tasarım & Geliştirme" : "Design & Development"}:{" "}
            <span className="text-gold">Web Stüdyo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-navy-200 transition-colors hover:text-gold">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold"
    >
      {children}
    </a>
  );
}
