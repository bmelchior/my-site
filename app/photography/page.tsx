import { Suspense } from "react";
import PhotographyGallery from "@/components/photography/PhotographyGallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Photography",
  description:
    "A curated collection of photography — wildlife, landscapes, urban nights, architecture, and more.",
  path: "/photography",
});

function PhotographyGalleryFallback() {
  return (
    <div className="relative -mt-[var(--header-height)] pt-[var(--header-height)]">
      <section className="sticky top-[var(--header-height)] z-20 border-b border-border bg-bg pb-6 pt-6">
        <div className="px-[var(--page-margin)] pb-6">
          <div className="h-8 w-48 animate-pulse rounded bg-surface-2" />
        </div>
        <div className="mx-auto aspect-square w-[80%] max-w-full animate-pulse rounded-[var(--radius-md)] bg-surface-2 md:aspect-video" />
      </section>
    </div>
  );
}

export default function PhotographyPage() {
  return (
    <Suspense fallback={<PhotographyGalleryFallback />}>
      <PhotographyGallery />
    </Suspense>
  );
}
