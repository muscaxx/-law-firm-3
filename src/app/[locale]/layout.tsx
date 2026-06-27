import { notFound } from "next/navigation";
import { locales, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { QuickAppointmentModal } from "@/components/QuickAppointmentModal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <TopBar locale={l} dict={dict} />
      <Header locale={l} dict={dict} />
      <main>{children}</main>
      <Footer locale={l} dict={dict} />
      <WhatsAppButton locale={l} />
      <QuickAppointmentModal locale={l} dict={dict} />
    </>
  );
}
