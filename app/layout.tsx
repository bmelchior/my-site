import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandonmelchior.com"
  ),
  title: "Brandon Melchior",
  description:
    "Design leader turned builder. I ship real products with AI — not decks about AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
