import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif" }}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
          <p className="font-serif text-7xl font-bold text-navy">404</p>
          <h1 className="mt-4 text-xl font-semibold text-navy-800">Sayfa bulunamadı</h1>
          <p className="mt-2 text-gray-500">Aradığınız sayfa taşınmış veya silinmiş olabilir.</p>
          <Link href="/tr" className="btn-gold mt-6">
            <Home className="h-4 w-4" /> Ana Sayfaya Dön
          </Link>
        </div>
      </body>
    </html>
  );
}
