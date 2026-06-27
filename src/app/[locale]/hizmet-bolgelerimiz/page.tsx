import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { serviceAreas } from "@/data/service-areas";
import { PageHeader } from "@/components/PageHeader";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata: Metadata = { title: "Hizmet Bölgelerimiz" };

export default async function ServiceAreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        title={dict.sections.serviceAreasTitle}
        subtitle={dict.sections.serviceAreasSubtitle}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: dict.nav.serviceAreas }]}
      />
      <section className="container-x grid grid-cols-1 gap-10 py-16 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {serviceAreas.map((sa) => (
            <div key={sa.slug} id={sa.slug} className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-lg font-bold text-navy">{sa.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{sa.description[locale]}</p>
            </div>
          ))}
        </div>
        <MapEmbed locale={locale} dict={dict} />
      </section>
    </>
  );
}
