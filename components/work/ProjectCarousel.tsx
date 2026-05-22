"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/lib/data/projects";

const GAP = 16;

type ProjectCarouselProps = {
  images: ProjectImage[];
};

function getSlideWidth(viewportWidth: number): number {
  if (viewportWidth >= 1024) return 350;
  if (viewportWidth >= 768) return 300;
  return 270;
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = viewportWidth > 0 ? getSlideWidth(viewportWidth) : 0;
  const sidePadding = viewportWidth > 0 ? (viewportWidth - slideWidth) / 2 : 0;
  const offset = currentIndex * (slideWidth + GAP);

  const updateLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    setViewportWidth(container.offsetWidth);
  }, []);

  useEffect(() => {
    updateLayout();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateLayout);
    observer.observe(container);

    return () => observer.disconnect();
  }, [updateLayout]);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div
          className="flex"
          style={{
            gap: GAP,
            paddingLeft: sidePadding,
            paddingRight: sidePadding,
            transform: `translateX(-${offset}px)`,
            transition: "transform 300ms ease",
          }}
        >
          {images.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="relative aspect-[3/4] shrink-0 overflow-hidden bg-highlight"
              style={{
                width: slideWidth > 0 ? slideWidth : undefined,
                opacity: index === currentIndex ? 1 : 0.6,
                transition: "opacity 300ms ease",
              }}
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 270px, (max-width: 1024px) 300px, 350px"
                  className={`object-cover ${
                    image.objectPosition === "left"
                      ? "object-left-top"
                      : "object-top"
                  }`}
                />
              ) : (
                <div role="img" aria-label={image.alt} className="h-full w-full" />
              )}
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-primary shadow-sm transition-colors duration-200 ease-in-out hover:bg-surface"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-primary shadow-sm transition-colors duration-200 ease-in-out hover:bg-surface"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Carousel pagination"
      >
        {images.map((image, index) => (
          <button
            key={`dot-${image.alt}-${index}`}
            type="button"
            role="tab"
            aria-label={`Go to image ${index + 1}`}
            aria-selected={index === currentIndex}
            onClick={() => goTo(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ease-in-out ${
              index === currentIndex ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
