import type { Metadata } from "next";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";
import { PageHeader } from "@/components/PageHeader";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";

export const metadata: Metadata = { title: "Çalışma Alanları" };

export default async function PracticeAreasPage({
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
        title={dict.sections.practiceAreasTitle}
        subtitle={dict.sections.practiceAreasSubtitle}
        crumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.practiceAreas },
        ]}
      />
      <section className="container-x py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} locale={locale} cta={dict.sections.learnMore} />
          ))}
        </div>
      </section>
    </>
  );
}
