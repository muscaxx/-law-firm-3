# Hukuk Bürosu — Tam Kapsamlı Avukatlık Sitesi

Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş, avukatlık / hukuk büroları için çok dilli (TR/EN) kurumsal web sitesi.

## ✨ Özellikler

| Özellik | Durum | Nerede |
|---|---|---|
| WhatsApp entegrasyonu | ✅ | Sabit buton + iletişim kartı (`WhatsAppButton.tsx`) |
| Google Meet entegrasyonu | ✅ | Randevu formunda "online görüşme" → API'de Meet linki üretir |
| Google Randevu (Calendar Appointment) | ✅ | `GoogleActions.tsx` + `.env` linki |
| Google Calendar API (etkinlik oluşturma) | ✅ | `lib/google-calendar.ts` + `/api/randevu` |
| Blog | ✅ | `/[locale]/blog` + detay sayfaları |
| İngilizce destek (i18n) | ✅ | `/tr` ve `/en`, sözlük tabanlı |
| Online Randevu Formu | ✅ | `AppointmentForm.tsx` (görsel #2) |
| Hızlı Randevu (modal) | ✅ | `QuickAppointmentModal.tsx` (görsel #3) |
| Çalışma Alanları + detay | ✅ | `/[locale]/calisma-alanlari/[slug]` |
| Maps entegrasyonu | ✅ | `MapEmbed.tsx` (görsel #4) |
| Hizmet Bölgelerimiz | ✅ | `/[locale]/hizmet-bolgelerimiz` |
| Çalışma Saatleri | ✅ | `WorkingHours.tsx` |
| Yasal uyarı (disclaimer) | ✅ | Footer'da, her sayfada (görsel #6) |
| E-posta bildirimi (SMTP) | ✅ | `lib/mail.ts` |
| SEO (sitemap/robots/metadata) | ✅ | `app/sitemap.ts`, `app/robots.ts` |

> Tüm entegrasyonlar **"demo modu"** ile çalışır: `.env` doldurulmadan da site açılır, form çalışır (konsola log düşer), gerçek API çağrısı yapılmaz.

## 🚀 Çalıştırma

```bash
npm install
cp .env.example .env.local   # değerleri doldurun (opsiyonel)
npm run dev                  # http://localhost:3000  -> /tr'ye yönlenir
npm run build && npm start   # production
```

## ⚙️ Yapılandırma

İçerik ve marka bilgileri kod içinde, kolay düzenlenebilir şekilde:

- **Marka / iletişim / saatler:** `src/config/site.ts`
- **Çalışma alanları:** `src/data/practice-areas.ts`
- **Avukatlar:** `src/data/lawyers.ts`
- **Hizmet bölgeleri:** `src/data/service-areas.ts`
- **Blog yazıları:** `src/data/blog.ts`
- **Çeviriler:** `src/i18n/dictionaries.ts`

---

## 🔌 Google Randevu / Meet — KURULUM (yayına almadan önce yapmanız gerekenler)

İki yöntem var. **A** en kolayı, **B** ise siteye tam gömülü (form + otomatik Meet linki) çözümdür.

### Yöntem A — Google Takvim "Randevu Programı" (kod gerektirmez) ✅ Önerilen başlangıç

1. **Google Workspace** veya kişisel Google hesabıyla [Google Takvim](https://calendar.google.com) → **Oluştur → Randevu programı**.
2. Hizmet süresi, müsait saatler, tampon süre ve (isteğe bağlı) ödeme ayarlayın.
3. Konum olarak **Google Meet**'i seçerseniz, her rezervasyonda otomatik Meet linki oluşur.
4. "**Rezervasyon sayfasını paylaş**" → linki kopyalayın.
5. `.env.local` içine yapıştırın:
   ```
   NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL=https://calendar.app.google/xxxxxxxx
   ```
6. Sitedeki **"Google Takvim'den Randevu"** butonu artık bu sayfayı açar.

> Not: Google Takvim randevu programı **Google Workspace** (ücretli) veya destekli kişisel hesaplarda mevcuttur.

### Yöntem B — Site içi form + Google Calendar API (otomatik etkinlik + Meet linki)

Site formundan gelen randevuyu **otomatik olarak takviminize etkinlik** olarak yazar ve istenirse **Google Meet linki** üretir.

1. [Google Cloud Console](https://console.cloud.google.com) → yeni proje.
2. **APIs & Services → Library** → **Google Calendar API**'yi etkinleştirin.
3. **Service Account** oluşturun → JSON anahtarı indirin.
4. Etkinlik yazılacak takvimi (örn. büro takvimi) açın → **Ayarlar → Belirli kişilerle paylaş** → Service Account e-postasını ekleyin, **"Etkinliklerde değişiklik yapma"** yetkisi verin.
5. `.env.local`:
   ```
   GOOGLE_CALENDAR_ID=buro@ornekhukuk.com        # ya da primary
   GOOGLE_CLIENT_EMAIL=xxx@proje.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```
   > `GOOGLE_PRIVATE_KEY` tek satırda, satır sonları `\n` olarak yazılır (kod bunu otomatik çözer).
6. **Google Meet linki** için: Meet, Service Account ile yalnızca **domain-wide delegation** ile üretilebilir.
   - Workspace **Admin Console → Security → API Controls → Domain-wide delegation** → Service Account Client ID'sine `https://www.googleapis.com/auth/calendar.events` scope'unu yetkilendirin.
   - `.env.local`'e büronuzun bir kullanıcısını ekleyin:
     ```
     GOOGLE_IMPERSONATE_USER=randevu@ornekhukuk.com
     ```
7. **E-posta bildirimi** (forma gelen randevuyu mail olarak almak için):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=info@ornekhukuk.com
   SMTP_PASS=uygulama-sifresi          # Gmail "Uygulama Şifresi"
   MAIL_TO=info@ornekhukuk.com
   ```

### Google Maps (harita)

1. Google Maps'te büronuzu bulun → **Paylaş → Harita yerleştir (Embed a map)** → iframe `src` URL'sini kopyalayın.
2. `.env.local`:
   ```
   NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
   ```

### WhatsApp

```
NEXT_PUBLIC_WHATSAPP_NUMBER=905555555555   # ülke kodu dahil, + ve boşluk olmadan
```

---

## ⚠️ Yayına Almadan Önce Kontrol Listesi

- [ ] `src/config/site.ts` → gerçek büro adı, adres, telefon, e-posta
- [ ] `.env.local` → WhatsApp, Maps, Google Appointment/Calendar değerleri
- [ ] `src/data/*` → gerçek avukatlar, çalışma alanları, blog içerikleri
- [ ] `/kvkk` aydınlatma metnini bir hukukçuya **gözden geçirtin** (örnek metindir)
- [ ] Logoyu (`Logo.tsx`) gerçek logo ile değiştirin
- [ ] Domain + SSL + `NEXT_PUBLIC_SITE_URL`
- [ ] (Önemli) Footer'daki **yasal uyarı metni** baroya/mevzuata uygun şekilde teyit edilsin

## 🧱 Teknolojiler

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS · googleapis · nodemailer · zod · lucide-react
