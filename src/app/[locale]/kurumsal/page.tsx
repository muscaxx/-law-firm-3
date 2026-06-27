import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Phone, Mail, Target, Eye, Award, ArrowRight } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lawyers, featuredLawyer } from "@/data/lawyers";
import { practiceAreas } from "@/data/practice-areas";
import { PageHeader } from "@/components/PageHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { QuickAppointmentTrigger } from "@/components/QuickAppointmentTrigger";

export const metadata: Metadata = { title: "Hakkımda / Kurumsal" };

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const me = featuredLawyer;
  const myAreas = practiceAreas.filter((p) => me.areas.includes(p.slug));
  const team = lawyers.filter((l) => l.id !== me.id);

  return (
    <>
      <PageHeader
        title={locale === "tr" ? "Hakkımda" : "About Me"}
        subtitle={me.title[locale]}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: dict.nav.about }]}
      />

      {/* ===== HAKKIMDA (bireysel avukat) ===== */}
      <section className="container-x grid grid-cols-1 gap-10 py-16 lg:grid-cols-5">
        {/* Sol: foto + iletişim kartı */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image src={me.photo} alt={me.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" priority />
          </div>
          <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-navy">{me.name}</h3>
            <p className="text-sm font-medium text-gold-dark">{me.title[locale]}</p>
            <div className="mt-4 space-y-2 text-sm">
              {me.phone && (
                <a href={`tel:${me.phone}`} className="flex items-center gap-2 text-navy-800 hover:text-gold-dark">
                  <Phone className="h-4 w-4 text-gold" /> {me.phone}
                </a>
              )}
              {me.email && (
                <a href={`mailto:${me.email}`} className="flex items-center gap-2 text-navy-800 hover:text-gold-dark">
                  <Mail className="h-4 w-4 text-gold" /> {me.email}
                </a>
              )}
            </div>
            <div className="mt-4 border-t border-gray-100 pt-4">
              <SocialLinks socials={me.socials} variant="dark" />
            </div>
            <QuickAppointmentTrigger className="btn-gold mt-4 w-full">
              {dict.nav.quickAppointment}
            </QuickAppointmentTrigger>
          </div>
        </div>

        {/* Sağ: biyografi + uzmanlık */}
        <div className="lg:col-span-3">
          <div className="wave-accent mb-3" />
          <h2 className="section-title">{me.name}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-700">
            {(me.longBio?.[locale] ?? [me.bio[locale]]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Uzmanlık alanları */}
          <h3 className="mt-8 font-serif text-lg font-bold text-navy">
            {locale === "tr" ? "Uzmanlık Alanları" : "Areas of Expertise"}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {myAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/${locale}/calisma-alanlari/${a.slug}`}
                className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark hover:bg-gold hover:text-white"
              >
                {a.title[locale]}
              </Link>
            ))}
          </div>

          {/* Zaman çizelgeleri: eğitim + deneyim */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {me.education && me.education.length > 0 && (
              <Timeline
                icon={<GraduationCap className="h-5 w-5" />}
                title={locale === "tr" ? "Eğitim" : "Education"}
                items={me.education.map((e) => ({ year: e.year, text: e.text[locale] }))}
              />
            )}
            {me.experience && me.experience.length > 0 && (
              <Timeline
                icon={<Briefcase className="h-5 w-5" />}
                title={locale === "tr" ? "Mesleki Deneyim" : "Experience"}
                items={me.experience.map((e) => ({ year: e.year, text: e.text[locale] }))}
              />
            )}
          </div>
        </div>
      </section>

      {/* ===== MİSYON / VİZYON / DEĞERLER ===== */}
      <section className="bg-navy-50 py-14">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Value icon={<Target className="h-6 w-6" />} title={locale === "tr" ? "Misyon" : "Mission"} text={locale === "tr" ? "Adalete erişimi kolaylaştırmak ve hakkınızı en etkin şekilde savunmak." : "Facilitating access to justice and defending your rights effectively."} />
          <Value icon={<Eye className="h-6 w-6" />} title={locale === "tr" ? "Vizyon" : "Vision"} text={locale === "tr" ? "Güvenilirliğiyle ilk akla gelen hukuk bürosu olmak." : "To be the first law office that comes to mind for reliability."} />
          <Value icon={<Award className="h-6 w-6" />} title={locale === "tr" ? "Değerler" : "Values"} text={locale === "tr" ? "Gizlilik, şeffaflık ve etik ilkelere mutlak bağlılık." : "Absolute commitment to confidentiality, transparency and ethics."} />
        </div>
      </section>

      {/* ===== EKİP ===== */}
      {team.length > 0 && (
        <section id="ekip" className="scroll-mt-24 py-16">
          <div className="container-x">
            <div className="text-center">
              <div className="wave-accent mx-auto mb-3" />
              <h2 className="section-title">{locale === "tr" ? "Ekibimiz" : "Our Team"}</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((l) => (
                <div key={l.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="relative h-64">
                    <Image src={l.photo} alt={l.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-navy">{l.name}</h3>
                    <p className="text-sm font-medium text-gold-dark">{l.title[locale]}</p>
                    <p className="mt-2 text-sm text-gray-600">{l.bio[locale]}</p>
                    <div className="mt-3">
                      <SocialLinks socials={l.socials} variant="dark" size="sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-x pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-navy-700 p-8 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold">{siteConfig.slogan[locale]}</h3>
            <p className="mt-1 text-navy-100">
              {locale === "tr" ? "Hukuki sürecinizi birlikte yönetelim." : "Let's manage your legal process together."}
            </p>
          </div>
          <Link href={`/${locale}/randevu`} className="btn-gold shrink-0 !px-6 !py-4">
            {dict.nav.appointment} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Timeline({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: { year: string; text: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold text-navy">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold">{icon}</span>
        {title}
      </h4>
      <ol className="relative space-y-5 border-l-2 border-gold/30 pl-5">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-white" />
            <span className="text-xs font-bold text-gold-dark">{it.year}</span>
            <p className="text-sm text-navy-800">{it.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
      <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
        {icon}
      </span>
      <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
