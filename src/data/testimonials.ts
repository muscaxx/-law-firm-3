import type { Locale } from "@/config/site";

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Locale, string>; // müvekkil türü / dava türü
  rating: number; // 1-5
  text: Record<Locale, string>;
  /** Baş harfler avatar yerine kullanılır */
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "M. Yılmaz",
    initials: "MY",
    rating: 5,
    role: { tr: "Boşanma Davası Müvekkili", en: "Divorce Case Client" },
    text: {
      tr: "Sürecin her aşamasında bilgilendirildim. Profesyonel, ilgili ve güven veren bir çalışma anlayışına sahipler. Davam beklediğimden çok daha kısa sürede olumlu sonuçlandı.",
      en: "I was informed at every stage of the process. They are professional, attentive and trustworthy. My case concluded positively much faster than I expected.",
    },
  },
  {
    id: "t2",
    name: "A. Demirtaş",
    initials: "AD",
    rating: 5,
    role: { tr: "İşçi Alacakları", en: "Labor Receivables" },
    text: {
      tr: "İşten çıkarıldıktan sonra haklarımı alabileceğime inanmıyordum. Titiz takipleri sayesinde kıdem ve ihbar tazminatımı eksiksiz aldım. Çok teşekkür ederim.",
      en: "After being dismissed, I didn't believe I could claim my rights. Thanks to their meticulous follow-up, I received my severance and notice pay in full.",
    },
  },
  {
    id: "t3",
    name: "S. Kara",
    initials: "SK",
    rating: 5,
    role: { tr: "Ticari Danışmanlık", en: "Commercial Advisory" },
    text: {
      tr: "Şirketimizin tüm sözleşme süreçlerini güvenle emanet ettiğimiz bir büro. Hukuki riskleri önceden öngörüp bizi yönlendirmeleri en büyük avantajımız oldu.",
      en: "An office we confidently entrust all our company's contract processes to. Their ability to foresee legal risks and guide us has been our greatest advantage.",
    },
  },
  {
    id: "t4",
    name: "E. Şahin",
    initials: "EŞ",
    rating: 5,
    role: { tr: "Tazminat Davası", en: "Compensation Case" },
    text: {
      tr: "Trafik kazası sonrası tazminat sürecimi büyük bir özveriyle yürüttüler. Empati kuran, sorularıma her zaman yanıt veren bir ekip. Gönül rahatlığıyla tavsiye ederim.",
      en: "They handled my compensation process after a traffic accident with great dedication. An empathetic team that always answered my questions. I recommend them wholeheartedly.",
    },
  },
  {
    id: "t5",
    name: "H. Aydın",
    initials: "HA",
    rating: 5,
    role: { tr: "Miras Hukuku", en: "Inheritance Law" },
    text: {
      tr: "Karmaşık bir miras paylaşımı meselesini sabırla ve net bir yol haritasıyla çözdüler. Aile içi bir konuda gösterdikleri hassasiyet için minnettarım.",
      en: "They resolved a complex inheritance division matter patiently and with a clear roadmap. I am grateful for the sensitivity they showed in a family matter.",
    },
  },
  {
    id: "t6",
    name: "B. Çelik",
    initials: "BÇ",
    rating: 5,
    role: { tr: "Ceza Hukuku", en: "Criminal Law" },
    text: {
      tr: "Zor bir süreçte yanımızda oldular. Dosyaya hâkimiyetleri ve savunmadaki başarıları sayesinde lehimize sonuç aldık. Teşekkürler.",
      en: "They stood by us during a difficult process. Thanks to their command of the case and success in defense, we obtained a favorable result. Thank you.",
    },
  },
];

export const averageRating =
  Math.round(
    (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length) * 10
  ) / 10;
