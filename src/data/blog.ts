import type { Locale } from "@/config/site";

export interface BlogPost {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  category: Record<Locale, string>;
  date: string; // ISO
  author: string;
  cover: string;
  /** Paragraf dizisi olarak içerik */
  content: Record<Locale, string[]>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "anlasmali-bosanma-sureci",
    title: {
      tr: "Anlaşmalı Boşanma Süreci Nasıl İşler?",
      en: "How Does the Uncontested Divorce Process Work?",
    },
    excerpt: {
      tr: "Anlaşmalı boşanmanın şartları, gerekli belgeler ve dava süresi hakkında bilinmesi gerekenler.",
      en: "Conditions, required documents and duration of the uncontested divorce process.",
    },
    category: { tr: "Aile Hukuku", en: "Family Law" },
    date: "2026-05-12",
    author: "Av. Pelin Yıldız",
    cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    content: {
      tr: [
        "Anlaşmalı boşanma, eşlerin boşanmanın tüm sonuçları (velayet, nafaka, mal paylaşımı, tazminat) üzerinde anlaşmaya vardığı boşanma türüdür.",
        "Türk Medeni Kanunu'na göre anlaşmalı boşanma için evliliğin en az bir yıl sürmüş olması gerekir. Tarafların hâkim huzurunda bizzat beyanda bulunması zorunludur.",
        "Süreç, hazırlanan boşanma protokolünün mahkemeye sunulması ile başlar. Protokolde tarafların tüm hususlardaki mutabakatı yer almalıdır.",
        "Anlaşmalı boşanma davaları genellikle tek celsede sonuçlanır ve diğer boşanma türlerine göre çok daha kısa sürede tamamlanır.",
      ],
      en: [
        "An uncontested divorce is one where spouses agree on all consequences of the divorce (custody, alimony, property division, compensation).",
        "Under the Turkish Civil Code, the marriage must have lasted at least one year. Parties must personally make statements before the judge.",
        "The process begins with submitting the prepared divorce protocol to the court, reflecting full agreement on all matters.",
        "Uncontested divorces usually conclude in a single hearing and far more quickly than other divorce types.",
      ],
    },
  },
  {
    slug: "ise-iade-davasi-sartlari",
    title: {
      tr: "İşe İade Davası Şartları ve Süreleri",
      en: "Reinstatement Lawsuit: Conditions and Deadlines",
    },
    excerpt: {
      tr: "İş güvencesi kapsamında işe iade davası açabilmenin koşulları ve hak düşürücü süreler.",
      en: "Conditions for filing a reinstatement lawsuit under job security and statutory deadlines.",
    },
    category: { tr: "İş Hukuku", en: "Labor Law" },
    date: "2026-04-28",
    author: "Av. Mehmet Demir",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    content: {
      tr: [
        "İşe iade davası açabilmek için işçinin en az 6 aylık kıdeminin bulunması ve işyerinde en az 30 işçi çalıştırılması gerekir.",
        "İş sözleşmesi geçerli bir neden olmaksızın feshedilen işçi, fesih bildiriminden itibaren bir ay içinde arabulucuya başvurmak zorundadır.",
        "Arabuluculuk görüşmesinin anlaşmazlıkla sonuçlanması halinde, iki hafta içinde iş mahkemesinde dava açılabilir.",
        "Mahkeme feshin geçersizliğine karar verirse, işçi kesinleşen karardan sonra 10 iş günü içinde işe başlamak için başvuruda bulunmalıdır.",
      ],
      en: [
        "To file a reinstatement lawsuit, the employee must have at least 6 months of seniority and the workplace must employ at least 30 workers.",
        "An employee dismissed without a valid reason must apply to a mediator within one month of the termination notice.",
        "If mediation fails, a lawsuit may be filed before the labor court within two weeks.",
        "If the court rules the termination invalid, the employee must apply to return to work within 10 business days of the finalized decision.",
      ],
    },
  },
  {
    slug: "kira-artis-orani-2026",
    title: {
      tr: "2026 Yılı Kira Artış Oranı ve Hukuki Çerçeve",
      en: "2026 Rent Increase Rate and Legal Framework",
    },
    excerpt: {
      tr: "Konut kiralarında uygulanacak artış oranı, TÜFE bağlantısı ve kira tespit davası.",
      en: "Applicable rent increase rate, CPI link and rent determination lawsuits.",
    },
    category: { tr: "Gayrimenkul Hukuku", en: "Real Estate Law" },
    date: "2026-03-15",
    author: "Av. Zeynep Kaya",
    cover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: {
      tr: [
        "Konut kiralarında yıllık artış oranı, Türk Borçlar Kanunu uyarınca bir önceki kira yılındaki on iki aylık TÜFE ortalamasını geçemez.",
        "Taraflar sözleşmede daha düşük bir artış oranı belirleyebilir; ancak yasal üst sınırın üzerinde bir artış geçersizdir.",
        "Kira bedelinin emsallere göre çok düşük kaldığı durumlarda, beş yılın sonunda kira tespit davası açılabilir.",
        "Kiracı veya kiraya verenin haklarını korumak için sözleşmenin ve ödeme belgelerinin saklanması büyük önem taşır.",
      ],
      en: [
        "Under the Turkish Code of Obligations, the annual rent increase for residential leases cannot exceed the prior 12-month CPI average.",
        "Parties may set a lower increase in the contract, but an increase above the legal cap is invalid.",
        "Where the rent is far below comparable values, a rent determination lawsuit may be filed at the end of five years.",
        "Keeping the contract and payment records is crucial to protect the rights of both tenant and landlord.",
      ],
    },
  },
  {
    slug: "ceza-soruşturmasinda-musteki-haklari",
    title: {
      tr: "Ceza Soruşturmasında Müşteki (Şikâyetçi) Hakları",
      en: "Rights of the Complainant in a Criminal Investigation",
    },
    excerpt: {
      tr: "Suç mağduru olarak soruşturma aşamasında sahip olduğunuz temel haklar.",
      en: "Fundamental rights you have as a victim during the investigation stage.",
    },
    category: { tr: "Ceza Hukuku", en: "Criminal Law" },
    date: "2026-02-08",
    author: "Av. Pelin Yıldız",
    cover: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    content: {
      tr: [
        "Suç mağduru, soruşturma aşamasında bir vekil (avukat) ile temsil edilme hakkına sahiptir.",
        "Müşteki, dosya içeriğini inceleme, delillerin toplanmasını talep etme ve ifadesinin alınmasını isteme hakkına sahiptir.",
        "Kovuşturmaya yer olmadığına dair karara (takipsizlik) karşı, tebliğden itibaren 15 gün içinde itiraz edilebilir.",
        "Mağdurun maddi ve manevi zararları için ceza davasıyla birlikte veya ayrıca tazminat davası açılabilir.",
      ],
      en: [
        "A victim has the right to be represented by an attorney during the investigation.",
        "The complainant may examine the file, request evidence collection and ask to be heard.",
        "A decision of non-prosecution may be appealed within 15 days of notification.",
        "Compensation for the victim's pecuniary and non-pecuniary damages may be sought with or separately from the criminal case.",
      ],
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
