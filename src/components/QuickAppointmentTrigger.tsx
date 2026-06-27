"use client";

import { openQuickAppointment } from "./QuickAppointmentModal";

/** Server bileşenlerden hızlı randevu modalını açmak için tıklanabilir sarmalayıcı */
export function QuickAppointmentTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openQuickAppointment} className={className}>
      {children}
    </button>
  );
}
