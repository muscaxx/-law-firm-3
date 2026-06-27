import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

type Socials = {
  instagram?: string;
  linkedin?: string;
  x?: string;
  facebook?: string;
};

export function SocialLinks({
  socials,
  variant = "light",
  size = "md",
}: {
  socials?: Socials;
  /** light: koyu zemin üzerinde; dark: açık zemin üzerinde */
  variant?: "light" | "dark";
  size?: "sm" | "md";
}) {
  if (!socials) return null;
  const items = [
    { href: socials.instagram, icon: Instagram, label: "Instagram" },
    { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socials.x, icon: Twitter, label: "X" },
    { href: socials.facebook, icon: Facebook, label: "Facebook" },
  ].filter((i) => i.href);

  if (items.length === 0) return null;

  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const base =
    variant === "light"
      ? "bg-white/10 text-white hover:bg-gold"
      : "bg-navy-50 text-navy hover:bg-gold hover:text-white";

  return (
    <div className="flex items-center gap-2">
      {items.map((i) => {
        const I = i.icon;
        return (
          <a
            key={i.label}
            href={i.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={i.label}
            className={`flex items-center justify-center rounded-full transition-colors ${dim} ${base}`}
          >
            <I className={icon} />
          </a>
        );
      })}
    </div>
  );
}
