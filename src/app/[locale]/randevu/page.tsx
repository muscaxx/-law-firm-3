import type { Metadata } from "next";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";
import { AppointmentForm } from "@/components/AppointmentForm";
import { WorkingHours } from "@/components/WorkingHours";
import { GoogleActions } from "@/components/GoogleActions";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata: Metadata = { title: "Online Randevu" };

export default async function AppointmentPage({
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
        title={dict.sections.appointmentTitle}
        subtitle={dict.sections.appointmentSubtitle}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: dict.nav.appointment }]}
      />

      <section className="container-x py-16">
        <div className="mb-10">
          <GoogleActions locale={locale} dict={dict} />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AppointmentForm locale={locale} dict={dict} />
          </div>
          <div className="flex flex-col gap-8">
            <WorkingHours locale={locale} dict={dict} />
            <MapEmbed locale={locale} dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
