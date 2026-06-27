import type { Metadata } from "next";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni" };

export default async function KvkkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  const title =
    locale === "tr"
      ? "Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni"
      : "Personal Data Protection Notice";

  return (
    <>
      <PageHeader
        title={title}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: "KVKK" }]}
      />
      <section className="container-x max-w-3xl py-16">
        <div className="space-y-5 leading-relaxed text-gray-700">
          {locale === "tr" ? (
            <>
              <p>
                {siteConfig.legalName} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)
                kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizin güvenliğine önem veriyoruz.
              </p>
              <p>
                <strong>Toplanan Veriler:</strong> Ad-soyad, telefon, e-posta ve randevu formu aracılığıyla
                ilettiğiniz bilgiler.
              </p>
              <p>
                <strong>İşleme Amacı:</strong> Randevu taleplerinizin değerlendirilmesi, sizinle iletişime
                geçilmesi ve hukuki hizmetlerin sunulması.
              </p>
              <p>
                <strong>Haklarınız:</strong> KVKK m.11 uyarınca verilerinize erişme, düzeltilmesini veya
                silinmesini talep etme hakkına sahipsiniz. Talepleriniz için {siteConfig.email} adresine
                başvurabilirsiniz.
              </p>
              <p className="text-sm text-gray-500">
                Bu metin örnek amaçlıdır; yayına almadan önce bir hukukçu tarafından gözden geçirilmelidir.
              </p>
            </>
          ) : (
            <>
              <p>
                As {siteConfig.legalName}, we value the security of your personal data as a data controller
                under Law No. 6698 on the Protection of Personal Data.
              </p>
              <p>
                <strong>Collected Data:</strong> Name, phone, email and information you submit via the
                appointment form.
              </p>
              <p>
                <strong>Purpose:</strong> Evaluating your appointment requests, contacting you and providing
                legal services.
              </p>
              <p>
                <strong>Your Rights:</strong> You have the right to access, rectify or request deletion of your
                data. For requests, contact {siteConfig.email}.
              </p>
              <p className="text-sm text-gray-500">
                This text is a sample and should be reviewed by a lawyer before publishing.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
