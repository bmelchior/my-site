import type { Metadata } from "next";
import {
  Glegoo,
  IBM_Plex_Mono,
  Inter,
} from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const glegoo = Glegoo({
  subsets: ["latin"],
  variable: "--font-glegoo",
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
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
    <html
      lang="en"
      className={`${inter.variable} ${glegoo.variable} ${ibmPlexMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
