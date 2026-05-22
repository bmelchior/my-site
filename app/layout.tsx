import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main
          className="min-h-screen"
          style={{ paddingTop: "var(--header-height)" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
