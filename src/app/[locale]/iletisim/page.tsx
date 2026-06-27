import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";
import { AppointmentForm } from "@/components/AppointmentForm";
import { MapEmbed } from "@/components/MapEmbed";
import { WorkingHours } from "@/components/WorkingHours";

export const metadata: Metadata = { title: "İletişim" };

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  const waText =
    locale === "en"
      ? "Hello, I would like to get information."
      : "Merhaba, bilgi almak istiyorum.";

  return (
    <>
      <PageHeader
        title={dict.sections.contactTitle}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: dict.nav.contact }]}
      />

      <section className="container-x py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<Phone className="h-6 w-6" />} title={dict.cta.callNow} value={siteConfig.phone} href={`tel:${siteConfig.phone}`} />
          <ContactCard icon={<Mail className="h-6 w-6" />} title="E-posta" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
          <ContactCard icon={<MessageCircle className="h-6 w-6" />} title="WhatsApp" value={siteConfig.phone} href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waText)}`} />
          <ContactCard icon={<MapPin className="h-6 w-6" />} title={locale === "tr" ? "Adres" : "Address"} value={siteConfig.address[locale]} href={siteConfig.mapsProfileUrl} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AppointmentForm locale={locale} dict={dict} />
          <div className="flex flex-col gap-8">
            <MapEmbed locale={locale} dict={dict} />
            <WorkingHours locale={locale} dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors group-hover:bg-gold group-hover:text-white">
        {icon}
      </span>
      <h3 className="font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{value}</p>
    </a>
  );
}
