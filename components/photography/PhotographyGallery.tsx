"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryDropdown from "@/components/photography/CategoryDropdown";
import PhotoThumbnailGrid from "@/components/photography/PhotoThumbnailGrid";
import PhotographyCarousel from "@/components/photography/PhotographyCarousel";
import {
  PHOTOGRAPHY_CATEGORIES,
  getCategoryBySlug,
  isValidCategorySlug,
} from "@/lib/data/photography";

function getInitialSlug(categoryParam: string | null): string {
  if (categoryParam && isValidCategorySlug(categoryParam)) {
    return categoryParam;
  }
  return PHOTOGRAPHY_CATEGORIES[0].slug;
}

export default function PhotographyGallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const [activeSlug, setActiveSlug] = useState(() =>
    getInitialSlug(categoryParam),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = useMemo(
    () => getCategoryBySlug(activeSlug) ?? PHOTOGRAPHY_CATEGORIES[0],
    [activeSlug],
  );

  const handleCategorySelect = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      setActiveIndex(0);
      router.replace(`/photography?category=${slug}`, { scroll: false });
    },
    [router],
  );

  const handleIndexChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleThumbnailSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative -mt-[var(--header-height)] pt-[var(--header-height)]">
      <section
        className="sticky top-[var(--header-height)] z-20 border-b border-border bg-bg pb-6 pt-6"
        aria-label="Featured photography"
      >
        <div className="px-[var(--page-margin)] pb-6">
          <CategoryDropdown
            categories={PHOTOGRAPHY_CATEGORIES}
            activeSlug={activeSlug}
            onSelect={handleCategorySelect}
          />
        </div>

        <div className="photography-carousel-ribbon w-full">
          <PhotographyCarousel
            images={activeCategory.images}
            activeIndex={activeIndex}
            onIndexChange={handleIndexChange}
          />
        </div>
      </section>

      <PhotoThumbnailGrid
        images={activeCategory.images}
        activeIndex={activeIndex}
        onSelect={handleThumbnailSelect}
      />
    </div>
  );
}
