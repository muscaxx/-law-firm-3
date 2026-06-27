import type { Locale } from "@/config/site";

export interface TimelineItem {
  year: string;
  text: Record<Locale, string>;
}

export interface Lawyer {
  id: string;
  name: string;
  title: Record<Locale, string>;
  bio: Record<Locale, string>;
  /** Hakkımda sayfası için uzun biyografi (paragraflar) */
  longBio?: Record<Locale, string[]>;
  areas: string[]; // practice area slug
  photo: string;
  featured?: boolean; // ana sayfada öne çıkan avukat
  email?: string;
  phone?: string;
  education?: TimelineItem[]; // okul / akademik geçmiş
  experience?: TimelineItem[]; // mesleki deneyim
  socials?: {
    instagram?: string;
    linkedin?: string;
    x?: string;
    facebook?: string;
  };
}

export const lawyers: Lawyer[] = [
  {
    id: "av-pelin",
    name: "Av. Pelin Yıldız",
    title: { tr: "Kurucu Avukat & Arabulucu", en: "Founding Attorney & Mediator" },
    featured: true,
    email: "pelin@ornekhukuk.com",
    phone: "+90 (555) 555 55 55",
    bio: {
      tr: "15 yılı aşkın deneyimiyle ceza ve aile hukuku alanlarında uzmanlaşmıştır. Aynı zamanda sertifikalı arabulucudur.",
      en: "With over 15 years of experience, specializes in criminal and family law. Also a certified mediator.",
    },
    longBio: {
      tr: [
        "Av. Pelin Yıldız, 2008 yılından bu yana avukatlık mesleğini icra etmekte olup; ceza hukuku, aile hukuku ve arabuluculuk alanlarında uzmanlaşmıştır.",
        "Müvekkil odaklı, şeffaf ve etik değerlere bağlı çalışma anlayışıyla; her dosyayı titizlikle ele alır ve sürecin her aşamasında müvekkillerini bilgilendirir. Hukuki uyuşmazlıkların mahkeme dışı çözümünde arabuluculuk yöntemini etkin biçimde kullanır.",
        "Samsun Barosu'na kayıtlı olarak faaliyet göstermekte; bireysel ve kurumsal müvekkillere hizmet vermektedir.",
      ],
      en: [
        "Av. Pelin Yıldız has been practicing law since 2008, specializing in criminal law, family law and mediation.",
        "With a client-focused, transparent and ethics-driven approach, she handles every case meticulously and keeps clients informed at every stage. She actively uses mediation for the out-of-court resolution of disputes.",
        "Registered with the Samsun Bar Association, she serves both individual and corporate clients.",
      ],
    },
    areas: ["ceza-hukuku", "aile-hukuku"],
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    education: [
      { year: "2007", text: { tr: "Ankara Üniversitesi Hukuk Fakültesi (Lisans)", en: "Ankara University Faculty of Law (LL.B.)" } },
      { year: "2010", text: { tr: "Marmara Üniversitesi — Özel Hukuk Yüksek Lisans", en: "Marmara University — LL.M. in Private Law" } },
      { year: "2018", text: { tr: "Adalet Bakanlığı Sertifikalı Arabuluculuk", en: "Ministry of Justice Certified Mediation" } },
    ],
    experience: [
      { year: "2008", text: { tr: "Samsun Barosu'na kayıt — serbest avukatlık", en: "Registered with Samsun Bar — independent practice" } },
      { year: "2014", text: { tr: "Örnek Hukuk & Danışmanlık Bürosu'nun kuruluşu", en: "Founded Örnek Law & Consultancy Office" } },
      { year: "2018", text: { tr: "Sertifikalı arabulucu olarak faaliyet", en: "Practicing as a certified mediator" } },
    ],
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      x: "https://x.com/",
    },
  },
  {
    id: "av-mehmet",
    name: "Av. Mehmet Demir",
    title: { tr: "Avukat", en: "Attorney" },
    email: "mehmet@ornekhukuk.com",
    bio: {
      tr: "İş ve ticaret hukuku alanında şirketlere kurumsal danışmanlık vermekte, ticari uyuşmazlıkları yönetmektedir.",
      en: "Provides corporate advisory to companies in labor and commercial law and manages commercial disputes.",
    },
    areas: ["is-hukuku", "ticaret-hukuku", "icra-iflas-hukuku"],
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80",
    education: [
      { year: "2012", text: { tr: "İstanbul Üniversitesi Hukuk Fakültesi", en: "Istanbul University Faculty of Law" } },
    ],
    socials: { linkedin: "https://linkedin.com/" },
  },
  {
    id: "av-zeynep",
    name: "Av. Zeynep Kaya",
    title: { tr: "Avukat", en: "Attorney" },
    email: "zeynep@ornekhukuk.com",
    bio: {
      tr: "Gayrimenkul, miras ve tazminat hukuku alanlarında müvekkillerine çözüm odaklı hizmet sunmaktadır.",
      en: "Offers solution-focused service to clients in real estate, inheritance and compensation law.",
    },
    areas: ["gayrimenkul-hukuku", "miras-hukuku", "tazminat-hukuku"],
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    education: [
      { year: "2015", text: { tr: "Dokuz Eylül Üniversitesi Hukuk Fakültesi", en: "Dokuz Eylül University Faculty of Law" } },
    ],
    socials: { instagram: "https://instagram.com/", linkedin: "https://linkedin.com/" },
  },
];

export const featuredLawyer = lawyers.find((l) => l.featured) ?? lawyers[0];

export function getLawyer(id: string) {
  return lawyers.find((l) => l.id === id);
}
