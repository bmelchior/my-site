import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComponentLibrary from "@/components/dev/ComponentLibrary";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Component Library (Dev)",
  robots: { index: false, follow: false },
};

export default function DevComponentsPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <ComponentLibrary />;
}
