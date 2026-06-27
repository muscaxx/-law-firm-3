/**
 * Site geneli yapılandırma.
 * Marka adı, iletişim bilgileri ve entegrasyon linkleri burada tutulur.
 * Üretimde değerler .env.local üzerinden gelir; geliştirmede aşağıdaki
 * varsayılanlar kullanılır.
 */

export const siteConfig = {
  name: "Av. Örnek HUKUK",
  legalName: "Örnek Hukuk & Danışmanlık Bürosu",
  slogan: {
    tr: "Hakkınızı Korumak İçin Yanınızdayız",
    en: "By Your Side to Protect Your Rights",
  },
  description: {
    tr: "Ceza, aile, iş ve ticaret hukuku başta olmak üzere geniş bir yelpazede profesyonel hukuki danışmanlık ve avukatlık hizmetleri.",
    en: "Professional legal counsel and advocacy across criminal, family, labor and commercial law and many more practice areas.",
  },

  // İletişim
  phone: process.env.NEXT_PUBLIC_PHONE || "+90 (545) 637 62 13",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@ornekhukuk.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905456376213",
  address: {
    tr: "Atatürk Bulvarı, Yıldız Plaza No: 297 Kat:1 Daire:2, 55200 Atakum / Samsun",
    en: "Ataturk Blvd, Yildiz Plaza No: 297 Floor:1 Office:2, 55200 Atakum / Samsun, Türkiye",
  },

  // Çalışma saatleri (gün indeksi 1=Pazartesi ... 7=Pazar)
  workingHours: {
    weekdays: "09:00 - 18:00",
    saturday: "10:00 - 14:00",
    sunday: null, // kapalı
  },

  // Sosyal medya
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    x: "https://x.com/",
  },

  // Google entegrasyon linkleri (.env üzerinden gelir)
  googleAppointmentUrl: process.env.NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL || "",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=Atakum+Samsun&output=embed",
  mapsProfileUrl: "https://maps.google.com/?q=Atakum+Samsun",
};

export type Locale = "tr" | "en";
export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";
