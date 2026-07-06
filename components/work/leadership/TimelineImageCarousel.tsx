"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { TimelineCarouselImage } from "@/lib/data/leadership-timeline";

const GAP = 16;

type TimelineImageCarouselProps = {
  images: TimelineCarouselImage[];
};

function getSlideWidth(viewportWidth: number): number {
  if (viewportWidth >= 1024) return 560;
  if (viewportWidth >= 768) return 480;
  return 320;
}

function getLogicalIndex(trackIndex: number, count: number): number {
  if (count <= 1) return 0;
  if (trackIndex === 0) return count - 1;
  if (trackIndex === count + 1) return 0;
  return trackIndex - 1;
}

export default function TimelineImageCarousel({
  images,
}: TimelineImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const isLooping = images.length > 1;
  const slideWidth = viewportWidth > 0 ? getSlideWidth(viewportWidth) : 0;
  const sidePadding = viewportWidth > 0 ? (viewportWidth - slideWidth) / 2 : 0;
  const slideStep = slideWidth + GAP;
  const offset = trackIndex * slideStep;
  const currentIndex = getLogicalIndex(trackIndex, images.length);

  const carouselImages = useMemo(() => {
    if (!isLooping) return images;
    return [images[images.length - 1], ...images, images[0]];
  }, [images, isLooping]);

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

  useEffect(() => {
    setTrackIndex(isLooping ? 1 : 0);
    setTransitionEnabled(true);
  }, [images, isLooping]);

  const goTo = (index: number) => {
    if (!isLooping) {
      setTrackIndex(0);
      return;
    }

    setTransitionEnabled(true);
    setTrackIndex(index + 1);
  };

  const goPrev = () => {
    if (!isLooping) return;
    setTransitionEnabled(true);
    setTrackIndex((index) => index - 1);
  };

  const goNext = () => {
    if (!isLooping) return;
    setTransitionEnabled(true);
    setTrackIndex((index) => index + 1);
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;
    if (!isLooping) return;

    if (trackIndex === 0) {
      setTransitionEnabled(false);
      setTrackIndex(images.length);
    } else if (trackIndex === images.length + 1) {
      setTransitionEnabled(false);
      setTrackIndex(1);
    }
  };

  useEffect(() => {
    if (transitionEnabled) return;
    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled, trackIndex]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: GAP,
            paddingLeft: sidePadding,
            paddingRight: sidePadding,
            transform: `translateX(-${offset}px)`,
            transition: transitionEnabled ? "transform 300ms ease" : "none",
          }}
        >
          {carouselImages.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="relative aspect-video shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-2"
              style={{
                width: slideWidth > 0 ? slideWidth : undefined,
                opacity: index === trackIndex ? 1 : 0.6,
                transition: "opacity 300ms ease",
              }}
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 480px, 560px"
                  className={`object-cover ${
                    image.objectPosition === "left" ? "object-left" : "object-center"
                  }`}
                />
              ) : image.quote || image.department ? (
                <div className="flex h-full flex-col items-start p-6 text-left md:p-8">
                  {image.department && (
                    <p className="text-meta text-subtle">{image.department}</p>
                  )}
                  {image.quote && (
                    <p className="mt-4 text-body-lg text-primary">{image.quote}</p>
                  )}
                </div>
              ) : (
                <PlaceholderImage
                  alt={image.alt}
                  aspectRatio="16/9"
                  className="h-full border-0 bg-transparent"
                />
              )}
            </div>
          ))}
        </div>

        {isLooping && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-primary shadow-[var(--shadow-card)] transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-strong hover:bg-surface-2"
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

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-primary shadow-[var(--shadow-card)] transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-strong hover:bg-surface-2"
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
          </>
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
