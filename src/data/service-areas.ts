import type { Locale } from "@/config/site";

/**
 * Hizmet Bölgelerimiz — coğrafi olarak hizmet verilen iller/ilçeler.
 * SEO açısından "Samsun avukat", "Atakum avukat" gibi yerel aramaları hedefler.
 */
export interface ServiceArea {
  slug: string;
  name: string;
  description: Record<Locale, string>;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "samsun",
    name: "Samsun",
    description: {
      tr: "Samsun ve tüm ilçelerinde avukatlık ve hukuki danışmanlık hizmeti.",
      en: "Legal advocacy and counsel across Samsun and all its districts.",
    },
  },
  {
    slug: "atakum",
    name: "Atakum",
    description: {
      tr: "Atakum bölgesinde yerel mahkemeler nezdinde dava takibi.",
      en: "Case handling before local courts in the Atakum region.",
    },
  },
  {
    slug: "ilkadim",
    name: "İlkadım",
    description: {
      tr: "İlkadım ve çevresinde icra, ceza ve aile hukuku hizmetleri.",
      en: "Enforcement, criminal and family law services in İlkadım and surroundings.",
    },
  },
  {
    slug: "canik",
    name: "Canik",
    description: {
      tr: "Canik bölgesinde bireysel ve kurumsal hukuki destek.",
      en: "Individual and corporate legal support in the Canik region.",
    },
  },
  {
    slug: "ankara",
    name: "Ankara",
    description: {
      tr: "Yüksek yargı (Yargıtay, Danıştay) başvurularında Ankara'da hizmet.",
      en: "Service in Ankara for high court (Court of Cassation, Council of State) applications.",
    },
  },
  {
    slug: "istanbul",
    name: "İstanbul",
    description: {
      tr: "İstanbul genelinde ticaret ve şirketler hukuku danışmanlığı.",
      en: "Commercial and corporate law advisory across İstanbul.",
    },
  },
];
