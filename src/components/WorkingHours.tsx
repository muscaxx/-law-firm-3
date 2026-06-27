import { Clock } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function WorkingHours({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const w = dict.workingHours;
  const wh = siteConfig.workingHours;

  const rows = [
    { label: w.weekdays, value: wh.weekdays },
    { label: w.saturday, value: wh.saturday },
    { label: w.sunday, value: wh.sunday ?? w.closed },
  ];

  return (
    <div className="rounded-2xl bg-navy-700 p-6 text-white shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold">
          <Clock className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-xl font-bold">{dict.sections.workingHoursTitle}</h3>
      </div>
      <ul className="divide-y divide-white/10">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-navy-100">{r.label}</span>
            <span className={`font-semibold ${r.value === w.closed ? "text-red-300" : "text-gold-light"}`}>
              {r.value}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-lg bg-white/5 px-4 py-3 text-xs text-navy-200">{w.note}</p>
    </div>
  );
}
