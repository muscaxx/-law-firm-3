"use client";

import { useEffect, useState } from "react";
import { CalendarClock, CheckCircle2, ChevronDown, Loader2, X } from "lucide-react";
import { type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";

const EVENT = "open-quick-appointment";

/** Header / herhangi bir yerden modalı açmak için yardımcı */
export function openQuickAppointment() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT));
  }
}

type Status = "idle" | "loading" | "success" | "error";

export function QuickAppointmentModal({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.form;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const handler = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: locale === "tr" ? "Hızlı randevu talebi" : "Quick appointment request",
      kvkk: fd.get("kvkk") === "on",
    };
    setStatus("loading");
    try {
      const res = await fetch("/api/randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-navy-700 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
          aria-label="Kapat"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Başlık */}
        <div className="flex items-center gap-4 px-6 pt-7 sm:px-8">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold">
            <CalendarClock className="h-8 w-8 text-white" />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-white/70">{t.quickBadge}</p>
            <h3 className="font-serif text-2xl font-bold leading-tight">{t.quickHeading}</h3>
          </div>
        </div>

        <div className="mx-6 my-5 border-t border-white/15 sm:mx-8" />

        {status === "success" ? (
          <div className="px-6 pb-8 text-center sm:px-8">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-400" />
            <h4 className="mt-3 font-serif text-xl font-bold">{t.successTitle}</h4>
            <p className="mt-2 text-sm text-white/80">{t.successText}</p>
            <button onClick={() => setOpen(false)} className="btn-gold mt-5">
              {locale === "tr" ? "Kapat" : "Close"}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 px-6 pb-7 sm:grid-cols-2 sm:px-8">
            <input name="firstName" required placeholder={t.firstName} className="rounded-md border-0 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gold" />
            <input name="lastName" required placeholder={t.lastName} className="rounded-md border-0 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gold" />
            <input name="phone" required type="tel" placeholder={t.phone} className="rounded-md border-0 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gold" />

            <div className="relative">
              <select
                name="service"
                defaultValue={practiceAreas[0].title[locale]}
                className="w-full appearance-none rounded-md border-0 bg-white px-4 py-3 pr-10 text-sm text-navy-900 focus:ring-2 focus:ring-gold"
              >
                {practiceAreas.map((p) => (
                  <option key={p.slug} value={p.title[locale]}>{p.title[locale]}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>

            <label className="flex items-start gap-2 text-sm font-medium sm:col-span-2">
              <input type="checkbox" name="kvkk" required className="mt-0.5 h-4 w-4 accent-gold" />
              <span>{t.kvkk}</span>
            </label>

            {status === "error" && (
              <p className="text-sm text-red-300 sm:col-span-2">{t.errorText}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold !rounded-md !py-3.5 sm:col-span-2"
            >
              {status === "loading" ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> {t.submitting}</>
              ) : (
                t.submit
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
