import { sitePath } from "@/lib/i18n";
import type { Metadata } from "next";
import "./globals.css";
import "./refinement.css";
import "./motion.css";
import "./persian.css";

export const metadata: Metadata = {
  title: "Layer Studio | Content Systems & Creative Production",
  description: "استودیو لِیِر به مدیریت بشیر عمری، سیستم محتوا و تولید خلاق پروژه‌های خلاق، آموزشی و پژوهشی بلندمدت را طراحی می‌کند.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
