"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PhotographyImage } from "@/lib/data/photography";

type PhotoThumbnailGridProps = {
  images: PhotographyImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function PhotoThumbnailGrid({
  images,
  activeIndex,
  onSelect,
}: PhotoThumbnailGridProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (images.length === 0) return;
    activeRef.current?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [activeIndex, images.length]);

  if (images.length === 0) {
    return (
      <div className="px-[var(--page-margin)] pb-16 pt-6">
        <p className="text-body text-secondary">
          No photos in this category yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2 px-[var(--page-margin)] pb-16 pt-6 sm:grid-cols-[repeat(auto-fill,minmax(96px,1fr))] sm:gap-3 md:grid-cols-[repeat(auto-fill,minmax(112px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(128px,1fr))]">
      {images.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={`${image.src}-${index}`}
            ref={isActive ? activeRef : undefined}
            type="button"
            aria-label={`View ${image.alt}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(index)}
            className={`group relative aspect-square overflow-hidden rounded-[var(--radius-md)] border-2 transition-all duration-200 ${
              isActive
                ? "border-accent scale-[1.02] shadow-[var(--shadow-accent)]"
                : "border-transparent hover:border-border-strong"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </button>
        );
      })}
    </div>
  );
}
