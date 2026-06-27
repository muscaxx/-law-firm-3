import {
  Gavel,
  Heart,
  Briefcase,
  Building2,
  Home,
  Scroll,
  FileText,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";

const icons = {
  Gavel,
  Heart,
  Briefcase,
  Building2,
  Home,
  Scroll,
  FileText,
  ShieldCheck,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? FileText;
  return <Cmp {...props} />;
}
