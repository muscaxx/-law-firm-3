import type { Locale } from "@/config/site";

/**
 * Basit sözlük tabanlı i18n.
 * Harici bağımlılık olmadan, App Router [locale] segmenti ile çalışır.
 */
export const dictionaries = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Kurumsal",
      practiceAreas: "Çalışma Alanları",
      services: "Avukatlık Hizmetleri",
      serviceAreas: "Hizmet Bölgelerimiz",
      blog: "Blog",
      contact: "İletişim",
      appointment: "Randevu Al",
      quickAppointment: "Hızlı Randevu",
    },
    hero: {
      badge: "Güvenilir Hukuki Çözüm Ortağınız",
      title: "Hakkınızı Korumak İçin Yanınızdayız",
      subtitle:
        "Ceza, aile, iş ve ticaret hukuku başta olmak üzere geniş bir yelpazede deneyimli avukat kadromuzla profesyonel hukuki destek sunuyoruz.",
      ctaPrimary: "Online Randevu Al",
      ctaSecondary: "WhatsApp'tan Yazın",
    },
    sections: {
      practiceAreasTitle: "Çalışma Alanlarımız",
      practiceAreasSubtitle: "Uzmanlaştığımız başlıca hukuk dalları",
      whyUsTitle: "Neden Bizi Tercih Etmelisiniz?",
      serviceAreasTitle: "Hizmet Bölgelerimiz",
      serviceAreasSubtitle: "Türkiye genelinde hizmet veriyoruz",
      workingHoursTitle: "Çalışma Saatlerimiz",
      blogTitle: "Hukuk Bülteni & Blog",
      blogSubtitle: "Güncel hukuki gelişmeler ve bilgilendirici yazılar",
      testimonialsTitle: "Müvekkil Yorumları",
      testimonialsSubtitle: "Bizimle çalışan müvekkillerimizin görüşleri",
      testimonialsBased: "yorum üzerinden ortalama puan",
      appointmentTitle: "Online Randevu Formu",
      appointmentSubtitle:
        "Aşağıdaki formu doldurarak hızlıca randevu talebinde bulunabilirsiniz.",
      contactTitle: "Bize Ulaşın",
      mapTitle: "Ofis Konumumuz",
      readMore: "Devamını Oku",
      viewAll: "Tümünü Gör",
      learnMore: "Detaylı Bilgi",
    },
    workingHours: {
      weekdays: "Hafta İçi (Pzt - Cum)",
      saturday: "Cumartesi",
      sunday: "Pazar",
      closed: "Kapalı",
      note: "Acil durumlar için 7/24 WhatsApp hattımızdan ulaşabilirsiniz.",
    },
    form: {
      heading: "Online Randevu Formu",
      firstName: "Adınız",
      lastName: "Soyadınız",
      phone: "Telefon Numaranız",
      email: "E-posta (opsiyonel)",
      lawyer: "Avukat Seç",
      date: "Tarih",
      time: "Saat",
      service: "Hizmet Seç",
      file: "Dosya Seç",
      noFile: "Dosya seçilmedi",
      message: "Kısaca Konuyu Açıklayınız",
      kvkk: "Kişisel Verilerin Korunması Politikası'nı okudum ve anladım, onaylıyorum.",
      submit: "Randevuyu Onayla",
      submitting: "Gönderiliyor...",
      successTitle: "Randevu Talebiniz Alındı",
      successText:
        "En kısa sürede sizinle iletişime geçeceğiz. Onay e-postası / araması ile randevunuz kesinleşecektir.",
      errorText: "Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.",
      selectPlaceholder: "Seçiniz",
      quickHeading: "Hukuk Bürosu Hızlı Randevu Formu",
      quickBadge: "HIZLI RANDEVU",
    },
    cta: {
      callNow: "Hemen Ara",
      whatsapp: "WhatsApp",
      meet: "Google Meet ile Görüşme",
      googleAppointment: "Google Takvim'den Randevu",
      directions: "Yol Tarifi Al",
    },
    footer: {
      quickLinks: "Hızlı Bağlantılar",
      practiceAreas: "Çalışma Alanları",
      contact: "İletişim",
      rights: "Tüm hakları saklıdır.",
      disclaimer:
        "Bu internet sitesinde yer alan bilgiler genel bilgilendirme amacı taşımaktadır. İçerikler, herhangi bir hukuki danışmanlık veya avukat-müvekkil ilişkisi oluşturmaz. Somut olayınıza ilişkin hukuki değerlendirme için profesyonel destek almanız önerilir.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      practiceAreas: "Practice Areas",
      services: "Legal Services",
      serviceAreas: "Service Regions",
      blog: "Blog",
      contact: "Contact",
      appointment: "Book Appointment",
      quickAppointment: "Quick Appointment",
    },
    hero: {
      badge: "Your Trusted Legal Partner",
      title: "By Your Side to Protect Your Rights",
      subtitle:
        "From criminal, family and labor law to commercial law, our experienced attorneys provide professional legal support across a broad range of practice areas.",
      ctaPrimary: "Book Appointment Online",
      ctaSecondary: "Message on WhatsApp",
    },
    sections: {
      practiceAreasTitle: "Our Practice Areas",
      practiceAreasSubtitle: "The main fields of law we specialize in",
      whyUsTitle: "Why Choose Us?",
      serviceAreasTitle: "Service Regions",
      serviceAreasSubtitle: "We serve clients across Türkiye",
      workingHoursTitle: "Working Hours",
      blogTitle: "Legal Bulletin & Blog",
      blogSubtitle: "Current legal developments and informative articles",
      testimonialsTitle: "Client Testimonials",
      testimonialsSubtitle: "Opinions of clients who have worked with us",
      testimonialsBased: "average rating based on reviews",
      appointmentTitle: "Online Appointment Form",
      appointmentSubtitle:
        "Fill in the form below to quickly request an appointment.",
      contactTitle: "Get in Touch",
      mapTitle: "Our Office Location",
      readMore: "Read More",
      viewAll: "View All",
      learnMore: "Learn More",
    },
    workingHours: {
      weekdays: "Weekdays (Mon - Fri)",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      note: "For emergencies you can reach us 24/7 via our WhatsApp line.",
    },
    form: {
      heading: "Online Appointment Form",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      email: "Email (optional)",
      lawyer: "Select Attorney",
      date: "Date",
      time: "Time",
      service: "Select Service",
      file: "Choose File",
      noFile: "No file selected",
      message: "Briefly describe your matter",
      kvkk: "I have read and accept the Personal Data Protection Policy.",
      submit: "Confirm Appointment",
      submitting: "Sending...",
      successTitle: "Your Appointment Request Was Received",
      successText:
        "We will contact you shortly. Your appointment will be confirmed via email / call.",
      errorText: "An error occurred. Please try again or call us.",
      selectPlaceholder: "Select",
      quickHeading: "Law Office Quick Appointment Form",
      quickBadge: "QUICK APPOINTMENT",
    },
    cta: {
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      meet: "Meet via Google Meet",
      googleAppointment: "Book via Google Calendar",
      directions: "Get Directions",
    },
    footer: {
      quickLinks: "Quick Links",
      practiceAreas: "Practice Areas",
      contact: "Contact",
      rights: "All rights reserved.",
      disclaimer:
        "The information on this website is for general informational purposes only. It does not constitute legal advice or create an attorney-client relationship. For an assessment of your specific situation, please seek professional support.",
    },
  },
};

export type Dictionary = (typeof dictionaries)["tr"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
