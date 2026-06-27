import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scale, Users, Award, MapPin } from "lucide-react";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";
import { serviceAreas } from "@/data/service-areas";
import { blogPosts } from "@/data/blog";
import { featuredLawyer } from "@/data/lawyers";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { BlogCard } from "@/components/BlogCard";
import { AppointmentForm } from "@/components/AppointmentForm";
import { MapEmbed } from "@/components/MapEmbed";
import { WorkingHours } from "@/components/WorkingHours";
import { GoogleActions } from "@/components/GoogleActions";
import { QuickAppointmentTrigger } from "@/components/QuickAppointmentTrigger";
import { SocialLinks } from "@/components/SocialLinks";
import { Testimonials } from "@/components/Testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const s = dict.sections;

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-800/70" />
        </div>

        <div className="container-x relative grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-light">
              <ShieldCheck className="h-4 w-4" /> {dict.hero.badge}
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-100">{dict.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/randevu`} className="btn-gold !px-6 !py-4 text-base">
                {dict.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <QuickAppointmentTrigger className="btn-outline !border-white/40 !px-6 !py-4 text-base !text-white hover:!bg-white hover:!text-navy">
                {dict.nav.quickAppointment}
              </QuickAppointmentTrigger>
            </div>

            {/* İstatistik şeridi */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <Stat value="15+" label={locale === "tr" ? "Yıl Deneyim" : "Years Exp."} />
              <Stat value="2.500+" label={locale === "tr" ? "Çözülen Dosya" : "Cases Solved"} />
              <Stat value="%98" label={locale === "tr" ? "Memnuniyet" : "Satisfaction"} />
            </div>
          </div>

          {/* Öne çıkan avukat tanıtımı */}
          <div className="relative animate-fade-in-up lg:pl-6">
            <div className="relative mx-auto max-w-sm pb-16">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src={featuredLawyer.photo}
                  alt={featuredLawyer.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                {/* Deneyim rozeti */}
                <div className="absolute right-4 top-4 rounded-2xl bg-gold px-4 py-2 text-center text-white shadow-lg">
                  <span className="block font-serif text-2xl font-bold leading-none">15+</span>
                  <span className="text-[10px] uppercase tracking-wide">
                    {locale === "tr" ? "Yıl Deneyim" : "Years Exp."}
                  </span>
                </div>
              </div>

              {/* Yüzen bilgi kartı */}
              <div className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-xl">
                <h3 className="font-serif text-xl font-bold text-navy">{featuredLawyer.name}</h3>
                <p className="text-sm font-medium text-gold-dark">{featuredLawyer.title[locale]}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Link
                    href={`/${locale}/kurumsal`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark"
                  >
                    {locale === "tr" ? "Hakkımda" : "About Me"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <SocialLinks socials={featuredLawyer.socials} variant="dark" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Google Randevu / Meet kısayolları ===== */}
      <section className="container-x -mt-8 relative z-10">
        <GoogleActions locale={locale} dict={dict} />
      </section>

      {/* ===================== ÇALIŞMA ALANLARI ===================== */}
      <section className="container-x py-20">
        <SectionHeading title={s.practiceAreasTitle} subtitle={s.practiceAreasSubtitle} />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} locale={locale} cta={s.learnMore} />
          ))}
        </div>
      </section>

      {/* ===================== NEDEN BİZ ===================== */}
      <section className="bg-navy-50 py-20">
        <div className="container-x">
          <SectionHeading title={s.whyUsTitle} />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Feature icon={<Award className="h-7 w-7" />} title={locale === "tr" ? "Deneyimli Kadro" : "Experienced Team"} text={locale === "tr" ? "Alanında uzman avukatlarla güçlü bir savunma." : "A strong defense with expert attorneys."} />
            <Feature icon={<Scale className="h-7 w-7" />} title={locale === "tr" ? "Adil Yaklaşım" : "Fair Approach"} text={locale === "tr" ? "Şeffaf ve müvekkil odaklı çalışma prensibi." : "Transparent, client-focused principles."} />
            <Feature icon={<Users className="h-7 w-7" />} title={locale === "tr" ? "7/24 İletişim" : "24/7 Contact"} text={locale === "tr" ? "WhatsApp hattımızdan kesintisiz destek." : "Uninterrupted support via WhatsApp."} />
            <Feature icon={<ShieldCheck className="h-7 w-7" />} title={locale === "tr" ? "Gizlilik" : "Confidentiality"} text={locale === "tr" ? "Bilgileriniz tam gizlilik ilkesiyle korunur." : "Your information is kept strictly confidential."} />
          </div>
        </div>
      </section>

      {/* ===================== HİZMET BÖLGELERİ + ÇALIŞMA SAATLERİ ===================== */}
      <section className="container-x py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading title={s.serviceAreasTitle} subtitle={s.serviceAreasSubtitle} align="left" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {serviceAreas.map((sa) => (
                <Link
                  key={sa.slug}
                  href={`/${locale}/hizmet-bolgelerimiz#${sa.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    <span className="block font-semibold text-navy group-hover:text-gold-dark">{sa.name}</span>
                    <span className="mt-0.5 block text-sm text-gray-500">{sa.description[locale]}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <WorkingHours locale={locale} dict={dict} />
          </div>
        </div>
      </section>

      {/* ===================== BLOG ===================== */}
      <section className="bg-navy-50 py-20">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <SectionHeading title={s.blogTitle} subtitle={s.blogSubtitle} align="left" />
            <Link href={`/${locale}/blog`} className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-gold-dark hover:underline sm:flex">
              {s.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} cta={s.readMore} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MÜVEKKİL YORUMLARI ===================== */}
      <Testimonials locale={locale} dict={dict} />

      {/* ===================== RANDEVU + HARİTA ===================== */}
      <section className="container-x py-20">
        <SectionHeading title={s.appointmentTitle} subtitle={s.appointmentSubtitle} />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AppointmentForm locale={locale} dict={dict} />
          <div className="flex flex-col gap-8">
            <MapEmbed locale={locale} dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div className={`wave-accent mb-3 ${align === "center" ? "mx-auto" : ""}`} />
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-500">{subtitle}</p>}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl font-bold text-gold-light md:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-navy-200">{label}</div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        {icon}
      </span>
      <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
