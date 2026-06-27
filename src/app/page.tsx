import { redirect } from "next/navigation";
import { defaultLocale } from "@/config/site";

// Kök yol -> varsayılan dile (TR) yönlendir
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
