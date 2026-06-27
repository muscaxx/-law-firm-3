import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { siteConfig, locales, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { QuickAppointmentTrigger } from "@/components/QuickAppointmentTrigger";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    practiceAreas.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Çalışma Alanı" };
  return { title: area.title[locale as Locale], description: area.summary[locale as Locale] };
}

export default async function PracticeAreaDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHeader
        title={area.title[locale]}
        subtitle={area.summary[locale]}
        crumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.practiceAreas, href: `/${locale}/calisma-alanlari` },
          { label: area.title[locale] },
        ]}
      />

      <section className="container-x grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
        {/* İçerik */}
        <div className="lg:col-span-2">
          <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy">
            <Icon name={area.icon} className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <p className="text-lg leading-relaxed text-gray-700">{area.description[locale]}</p>

          <h2 className="mt-10 font-serif text-2xl font-bold text-navy">
            {locale === "tr" ? "Sunduğumuz Hizmetler" : "Services We Offer"}
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {area.services[locale].map((srv) => (
              <li key={srv} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-navy-800">{srv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Yan panel */}
        <aside className="space-y-6">
          <div className="rounded-2xl bg-navy-700 p-6 text-white">
            <h3 className="font-serif text-xl font-bold">
              {locale === "tr" ? "Hukuki Destek Alın" : "Get Legal Support"}
            </h3>
            <p className="mt-2 text-sm text-navy-100">
              {locale === "tr"
                ? "Bu alanla ilgili randevu talebinizi hemen oluşturun."
                : "Create your appointment request for this area now."}
            </p>
            <Link href={`/${locale}/randevu`} className="btn-gold mt-5 w-full">
              {dict.nav.appointment} <ArrowRight className="h-4 w-4" />
            </Link>
            <QuickAppointmentTrigger className="btn-outline mt-3 w-full !border-white/40 !text-white hover:!bg-white hover:!text-navy">
              {dict.nav.quickAppointment}
            </QuickAppointmentTrigger>
            <a href={`tel:${siteConfig.phone}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-gold-light hover:underline">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-navy">
              {locale === "tr" ? "Diğer Çalışma Alanları" : "Other Practice Areas"}
            </h3>
            <ul className="mt-4 space-y-1">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/${locale}/calisma-alanlari/${o.slug}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-navy-800 hover:bg-navy-50 hover:text-navy"
                  >
                    <Icon name={o.icon} className="h-4 w-4 text-gold" />
                    {o.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
