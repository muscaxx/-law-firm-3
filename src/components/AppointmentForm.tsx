"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Loader2, Paperclip, Video } from "lucide-react";
import Link from "next/link";
import { type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { practiceAreas } from "@/data/practice-areas";
import { lawyers } from "@/data/lawyers";

type Status = "idle" | "loading" | "success" | "error";

export function AppointmentForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.form;
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string>("");
  const [meetLink, setMeetLink] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      lawyer: String(fd.get("lawyer") || ""),
      service: String(fd.get("service") || ""),
      date: String(fd.get("date") || ""),
      time: String(fd.get("time") || ""),
      message: String(fd.get("message") || "") + (fileName ? `\n[Ek dosya: ${fileName}]` : ""),
      kvkk: fd.get("kvkk") === "on",
      online: fd.get("online") === "on",
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      const data = await res.json();
      setMeetLink(data.meetLink ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-navy">{t.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">{t.successText}</p>
        {meetLink && (
          <a href={meetLink} target="_blank" rel="noreferrer" className="btn-navy mt-5">
            <Video className="h-4 w-4" /> Google Meet
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
      <div className="wave-accent mb-3" />
      <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">{t.heading}</h3>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="firstName" required placeholder={t.firstName} className="field" />
        <input name="lastName" required placeholder={t.lastName} className="field" />
        <input name="phone" required type="tel" placeholder={t.phone} className="field" />

        <SelectField name="lawyer" defaultLabel={t.lawyer}>
          {lawyers.map((l) => (
            <option key={l.id} value={l.name}>{l.name}</option>
          ))}
        </SelectField>

        <input name="date" type="date" className="field text-gray-500" />
        <input name="time" type="time" className="field text-gray-500" />

        <SelectField name="service" defaultLabel={t.service}>
          {practiceAreas.map((p) => (
            <option key={p.slug} value={p.title[locale]}>{p.title[locale]}</option>
          ))}
        </SelectField>

        {/* Dosya seç */}
        <label className="field flex cursor-pointer items-center gap-2 text-gray-500">
          <Paperclip className="h-4 w-4 shrink-0" />
          <span className="truncate">{fileName || t.noFile}</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>

        <textarea
          name="message"
          required
          rows={4}
          placeholder={`${t.message} *`}
          className="field-area sm:col-span-2"
        />

        {/* Online görüşme (Google Meet) */}
        <label className="flex items-center gap-2 text-sm text-navy-800 sm:col-span-2">
          <input type="checkbox" name="online" className="h-4 w-4 accent-gold" />
          <Video className="h-4 w-4 text-gold" />
          {locale === "tr"
            ? "Görüşme online (Google Meet) yapılsın"
            : "Hold the meeting online (Google Meet)"}
        </label>

        {/* KVKK */}
        <label className="flex items-start gap-2 text-sm font-medium text-navy-800 sm:col-span-2">
          <input type="checkbox" name="kvkk" required className="mt-0.5 h-4 w-4 accent-gold" />
          <span>
            <Link href={`/${locale}/kvkk`} className="underline decoration-gold underline-offset-2">
              {t.kvkk}
            </Link>
          </span>
        </label>

        {status === "error" && (
          <p className="text-sm text-red-600 sm:col-span-2">{t.errorText}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold !rounded-xl !py-4 text-base sm:col-span-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>
      </form>
    </div>
  );
}

function SelectField({
  name,
  defaultLabel,
  children,
}: {
  name: string;
  defaultLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select name={name} defaultValue="" className="field appearance-none pr-10 text-navy-800">
        <option value="" disabled>
          {defaultLabel}
        </option>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
