"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MobileMenuProvider } from "@/components/MobileMenuContext";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <MobileMenuProvider>
      <div className="bg-atmosphere min-h-screen">
        <Header />
        <main
          className="min-h-screen"
          style={{ paddingTop: "var(--header-height)" }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
}
