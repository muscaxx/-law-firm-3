"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, CalendarClock } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig, type Locale } from "@/config/site";
// not: dil seçici masaüstünde üst şeride (TopBar) taşındı
import type { Dictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";
import { serviceAreas } from "@/data/service-areas";
import { openQuickAppointment } from "./QuickAppointmentModal";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = dict.nav;
  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const practiceLinks = practiceAreas.map((p) => ({
    label: p.title[locale],
    href: `${base}/calisma-alanlari/${p.slug}`,
  }));
  const regionLinks = serviceAreas.map((s) => ({
    label: s.name,
    href: `${base}/hizmet-bolgelerimiz#${s.slug}`,
  }));

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo locale={locale} />

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          <NavLink href={base}>{t.home}</NavLink>
          <NavDropdown
            label={t.about}
            items={[
              { label: t.about, href: `${base}/kurumsal` },
              { label: locale === "tr" ? "Ekibimiz" : "Our Team", href: `${base}/kurumsal#ekip` },
            ]}
          />
          <NavDropdown label={t.practiceAreas} items={practiceLinks} href={`${base}/calisma-alanlari`} />
          <NavDropdown label={t.serviceAreas} items={regionLinks} href={`${base}/hizmet-bolgelerimiz`} />
          <NavLink href={`${base}/blog`}>{t.blog}</NavLink>
        </nav>

        {/* Sağ aksiyonlar */}
        <div className="hidden items-center gap-2 xl:flex">
          <button
            onClick={openQuickAppointment}
            className="btn-gold whitespace-nowrap !px-4 !py-2.5"
          >
            <CalendarClock className="h-4 w-4" />
            {t.quickAppointment}
          </button>
          <Link href={`${base}/iletisim`} className="btn-navy whitespace-nowrap !px-4 !py-2.5">
            {t.contact}
          </Link>
        </div>

        {/* Mobil tetikleyici */}
        <button
          className="rounded-lg p-2 text-navy xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white xl:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <MobileLink href={base} onClick={() => setMobileOpen(false)}>{t.home}</MobileLink>
            <MobileLink href={`${base}/kurumsal`} onClick={() => setMobileOpen(false)}>{t.about}</MobileLink>
            <MobileLink href={`${base}/calisma-alanlari`} onClick={() => setMobileOpen(false)}>{t.practiceAreas}</MobileLink>
            <MobileLink href={`${base}/hizmet-bolgelerimiz`} onClick={() => setMobileOpen(false)}>{t.serviceAreas}</MobileLink>
            <MobileLink href={`${base}/blog`} onClick={() => setMobileOpen(false)}>{t.blog}</MobileLink>
            <MobileLink href={`${base}/iletisim`} onClick={() => setMobileOpen(false)}>{t.contact}</MobileLink>

            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
              <LanguageSwitcher locale={locale} />
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4 text-gold" /> {siteConfig.phone}
              </a>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                openQuickAppointment();
              }}
              className="btn-gold mt-2 w-full"
            >
              <CalendarClock className="h-4 w-4" />
              {t.quickAppointment}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy"
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  href,
}: {
  label: string;
  items: { label: string; href: string }[];
  href?: string;
}) {
  return (
    <div className="group relative">
      <Link
        href={href || "#"}
        className="flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy"
      >
        {label}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block rounded-lg px-3 py-2 text-sm text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
    >
      {children}
    </Link>
  );
}
