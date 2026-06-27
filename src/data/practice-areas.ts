import type { Locale } from "@/config/site";

export interface PracticeArea {
  slug: string;
  icon: string; // lucide-react icon adı
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  services: Record<Locale, string[]>;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "ceza-hukuku",
    icon: "Gavel",
    title: { tr: "Ceza Hukuku", en: "Criminal Law" },
    summary: {
      tr: "Soruşturma ve kovuşturma aşamalarında etkin müdafilik ve mağdur vekilliği hizmetleri.",
      en: "Effective defense and victim representation during investigation and prosecution.",
    },
    description: {
      tr: "Ceza hukuku alanında; soruşturma aşamasından infaza kadar tüm süreçlerde müvekkillerimize hukuki destek sağlıyoruz. İfade alma, tutuklama, ağır ceza ve asliye ceza davalarında deneyimli kadromuzla yanınızdayız.",
      en: "In criminal law, we provide legal support throughout all stages from investigation to enforcement. We stand by you with our experienced team in statements, detention, and heavy/criminal court cases.",
    },
    services: {
      tr: [
        "Soruşturma ve kovuşturmada müdafilik",
        "Ağır ceza davaları",
        "Beyaz yaka suçları",
        "Mağdur ve katılan vekilliği",
        "İstinaf ve temyiz başvuruları",
      ],
      en: [
        "Defense in investigation and prosecution",
        "Heavy criminal court cases",
        "White-collar crimes",
        "Victim and intervenor representation",
        "Appeals and cassation",
      ],
    },
  },
  {
    slug: "aile-hukuku",
    icon: "Heart",
    title: { tr: "Aile Hukuku", en: "Family Law" },
    summary: {
      tr: "Boşanma, velayet, nafaka ve mal paylaşımı davalarında hassas ve çözüm odaklı yaklaşım.",
      en: "Sensitive, solution-focused approach in divorce, custody, alimony and property cases.",
    },
    description: {
      tr: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka, mal rejimi ve tanıma-tenfis davalarında müvekkillerimizin haklarını titizlikle koruyoruz.",
      en: "We meticulously protect our clients' rights in contested/uncontested divorce, custody, alimony, property regime and recognition-enforcement cases.",
    },
    services: {
      tr: [
        "Anlaşmalı ve çekişmeli boşanma",
        "Velayet ve kişisel ilişki",
        "Nafaka davaları",
        "Mal rejimi ve mal paylaşımı",
        "Yabancı mahkeme kararlarının tanınması",
      ],
      en: [
        "Contested & uncontested divorce",
        "Custody and visitation",
        "Alimony cases",
        "Property regime & division",
        "Recognition of foreign judgments",
      ],
    },
  },
  {
    slug: "is-hukuku",
    icon: "Briefcase",
    title: { tr: "İş Hukuku", en: "Labor Law" },
    summary: {
      tr: "İşçi ve işveren uyuşmazlıklarında, alacak ve tazminat davalarında uzman destek.",
      en: "Expert support in employee-employer disputes, receivables and compensation cases.",
    },
    description: {
      tr: "İşe iade, kıdem ve ihbar tazminatı, fazla mesai ve işçilik alacakları ile iş kazası kaynaklı tazminat davalarında hizmet veriyoruz.",
      en: "We handle reinstatement, severance and notice pay, overtime and labor receivables, and work-accident compensation cases.",
    },
    services: {
      tr: [
        "İşe iade davaları",
        "Kıdem ve ihbar tazminatı",
        "Fazla mesai ve işçilik alacakları",
        "İş kazası ve meslek hastalığı",
        "İş sözleşmelerinin hazırlanması",
      ],
      en: [
        "Reinstatement lawsuits",
        "Severance and notice pay",
        "Overtime and labor receivables",
        "Work accidents & occupational disease",
        "Drafting employment contracts",
      ],
    },
  },
  {
    slug: "ticaret-hukuku",
    icon: "Building2",
    title: { tr: "Ticaret ve Şirketler Hukuku", en: "Commercial & Corporate Law" },
    summary: {
      tr: "Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklarda kurumsal danışmanlık.",
      en: "Corporate advisory in company formation, contracts and commercial disputes.",
    },
    description: {
      tr: "Şirket kuruluşu, birleşme-devralma, ticari sözleşmeler, çek-senet ve ticari alacakların tahsili konularında işletmelere uçtan uca hukuki danışmanlık sunuyoruz.",
      en: "We provide end-to-end legal advisory to businesses in company formation, M&A, commercial contracts, and collection of commercial receivables.",
    },
    services: {
      tr: [
        "Şirket kuruluşu ve yapılandırma",
        "Ticari sözleşmeler",
        "Birleşme ve devralmalar",
        "Çek-senet ve alacak tahsili",
        "Kurumsal danışmanlık",
      ],
      en: [
        "Company formation & structuring",
        "Commercial contracts",
        "Mergers & acquisitions",
        "Cheque/note & receivable collection",
        "Corporate advisory",
      ],
    },
  },
  {
    slug: "gayrimenkul-hukuku",
    icon: "Home",
    title: { tr: "Gayrimenkul Hukuku", en: "Real Estate Law" },
    summary: {
      tr: "Tapu, kira, kat mülkiyeti ve gayrimenkul uyuşmazlıklarında güvenilir çözümler.",
      en: "Reliable solutions in title deeds, leases, condominium and property disputes.",
    },
    description: {
      tr: "Tapu iptali ve tescili, kamulaştırma, kira tespiti ve tahliye, kat mülkiyeti ve izale-i şuyu davalarında hukuki destek sağlıyoruz.",
      en: "We provide support in title cancellation/registration, expropriation, rent determination & eviction, condominium and partition cases.",
    },
    services: {
      tr: [
        "Tapu iptali ve tescili",
        "Kira tespiti ve tahliye",
        "Kat mülkiyeti uyuşmazlıkları",
        "İzale-i şuyu (ortaklığın giderilmesi)",
        "Kamulaştırma davaları",
      ],
      en: [
        "Title cancellation & registration",
        "Rent determination & eviction",
        "Condominium disputes",
        "Partition of property",
        "Expropriation cases",
      ],
    },
  },
  {
    slug: "miras-hukuku",
    icon: "Scroll",
    title: { tr: "Miras Hukuku", en: "Inheritance Law" },
    summary: {
      tr: "Veraset, vasiyet, tenkis ve miras paylaşımı süreçlerinde rehberlik.",
      en: "Guidance in succession, wills, abatement and estate division processes.",
    },
    description: {
      tr: "Veraset ilamı, mirasın reddi, vasiyetnamenin iptali, tenkis ve mirasta mal paylaşımı davalarında müvekkillerimize hizmet veriyoruz.",
      en: "We serve clients in certificates of inheritance, renunciation, will annulment, abatement and estate division cases.",
    },
    services: {
      tr: [
        "Veraset ilamı çıkarılması",
        "Mirasın reddi",
        "Vasiyetname ve miras sözleşmesi",
        "Tenkis ve denkleştirme",
        "Mirasta mal paylaşımı",
      ],
      en: [
        "Certificate of inheritance",
        "Renunciation of inheritance",
        "Wills & inheritance contracts",
        "Abatement & equalization",
        "Estate division",
      ],
    },
  },
  {
    slug: "icra-iflas-hukuku",
    icon: "FileText",
    title: { tr: "İcra ve İflas Hukuku", en: "Enforcement & Bankruptcy Law" },
    summary: {
      tr: "Alacak takibi, haciz ve iflas süreçlerinde hızlı ve etkin takip.",
      en: "Fast and effective handling of receivable enforcement, attachment and bankruptcy.",
    },
    description: {
      tr: "İlamlı ve ilamsız icra takipleri, itirazın iptali/kaldırılması, haciz işlemleri ve iflas süreçlerinde alacaklı ve borçlu vekilliği yapıyoruz.",
      en: "We represent creditors and debtors in enforcement proceedings, objection annulment/removal, attachment and bankruptcy processes.",
    },
    services: {
      tr: [
        "İlamlı/ilamsız icra takibi",
        "İtirazın iptali ve kaldırılması",
        "Haciz ve satış işlemleri",
        "İflas ve konkordato",
        "Menfi tespit ve istirdat",
      ],
      en: [
        "Enforcement proceedings",
        "Objection annulment & removal",
        "Attachment & sale",
        "Bankruptcy & composition",
        "Negative declaratory & recovery",
      ],
    },
  },
  {
    slug: "tazminat-hukuku",
    icon: "ShieldCheck",
    title: { tr: "Tazminat Hukuku", en: "Compensation Law" },
    summary: {
      tr: "Trafik kazası, malpraktis ve haksız fiil kaynaklı maddi-manevi tazminat.",
      en: "Pecuniary & non-pecuniary compensation from accidents, malpractice and torts.",
    },
    description: {
      tr: "Trafik kazaları, iş kazaları, hatalı tıbbi uygulama (malpraktis) ve haksız fiillerden kaynaklanan maddi ve manevi tazminat davalarını yürütüyoruz.",
      en: "We handle pecuniary and non-pecuniary compensation cases arising from traffic/work accidents, medical malpractice and torts.",
    },
    services: {
      tr: [
        "Trafik kazası tazminatı",
        "Malpraktis (tıbbi hata) davaları",
        "Maddi ve manevi tazminat",
        "Sigorta tahkim başvuruları",
        "Destekten yoksun kalma tazminatı",
      ],
      en: [
        "Traffic accident compensation",
        "Medical malpractice cases",
        "Pecuniary & non-pecuniary damages",
        "Insurance arbitration",
        "Loss of support compensation",
      ],
    },
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
