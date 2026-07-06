"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PhotographyImage } from "@/lib/data/photography";

const GAP = 16;
const SLIDE_WIDTH_RATIO = 0.8;
const MAX_SLIDE_HEIGHT_RATIO = 0.8;
const SWIPE_THRESHOLD = 50;
const MOBILE_BREAKPOINT = 768;
const HERO_CHROME_HEIGHT = 96;
const MIN_GRID_VISIBLE = 120;
const MIN_SLIDE_HEIGHT = 160;

type SlideDimensions = {
  width: number;
  height: number;
};

function getHeaderHeight(): number {
  if (typeof window === "undefined") return 64;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  return Number.parseInt(value, 10) || 64;
}

function getSlideDimensions(
  viewportWidth: number,
  viewportHeight: number,
): SlideDimensions {
  if (viewportWidth <= 0) {
    return { width: 0, height: 0 };
  }

  const isWide = viewportWidth >= MOBILE_BREAKPOINT;
  const aspectWidth = isWide ? 16 : 1;
  const aspectHeight = isWide ? 9 : 1;
  const effectiveViewportHeight =
    viewportHeight > 0 ? viewportHeight : viewportWidth;
  const maxFromViewportRatio =
    effectiveViewportHeight * MAX_SLIDE_HEIGHT_RATIO;
  const maxFromGridVisibility =
    effectiveViewportHeight -
    getHeaderHeight() -
    HERO_CHROME_HEIGHT -
    MIN_GRID_VISIBLE;
  const maxSlideHeight = Math.max(
    MIN_SLIDE_HEIGHT,
    Math.min(maxFromViewportRatio, maxFromGridVisibility),
  );

  let width = Math.round(viewportWidth * SLIDE_WIDTH_RATIO);
  let height = Math.round((width * aspectHeight) / aspectWidth);

  if (height > maxSlideHeight) {
    height = Math.round(maxSlideHeight);
    width = Math.round((height * aspectWidth) / aspectHeight);
  }

  return { width, height };
}

type PhotographyCarouselProps = {
  images: PhotographyImage[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
};

function getLogicalIndex(trackIndex: number, count: number): number {
  if (count <= 1) return 0;
  if (trackIndex === 0) return count - 1;
  if (trackIndex === count + 1) return 0;
  return trackIndex - 1;
}

export default function PhotographyCarousel({
  images,
  activeIndex,
  onIndexChange,
}: PhotographyCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const pointerStartX = useRef<number | null>(null);
  const isSyncingFromProp = useRef(false);
  const trackIndexRef = useRef(trackIndex);

  trackIndexRef.current = trackIndex;

  const isLooping = images.length > 1;
  const isWide = viewportWidth >= MOBILE_BREAKPOINT;
  const { width: slideWidth, height: slideHeight } = getSlideDimensions(
    viewportWidth,
    viewportHeight,
  );
  const sidePadding = viewportWidth > 0 ? (viewportWidth - slideWidth) / 2 : 0;
  const slideStep = slideWidth + GAP;
  const offset = slideWidth > 0 ? trackIndex * slideStep : 0;
  const currentIndex = getLogicalIndex(trackIndex, images.length);

  const slideStyle =
    slideWidth > 0 && slideHeight > 0
      ? {
          width: slideWidth,
          height: slideHeight,
          maxHeight: "80vh",
        }
      : {
          width: `${SLIDE_WIDTH_RATIO * 100}%`,
          aspectRatio: isWide ? ("16 / 9" as const) : ("1 / 1" as const),
          maxHeight: "80vh",
        };

  const carouselImages = useMemo(() => {
    if (!isLooping) return images;
    return [images[images.length - 1], ...images, images[0]];
  }, [images, isLooping]);

  const updateLayout = useCallback(() => {
    const container = containerRef.current;
    setViewportWidth(container?.offsetWidth ?? window.innerWidth);
    setViewportHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    updateLayout();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateLayout);
    observer.observe(container);

    window.addEventListener("resize", updateLayout);
    window.visualViewport?.addEventListener("resize", updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.visualViewport?.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout, images.length]);

  useEffect(() => {
    setTrackIndex(isLooping ? 1 : 0);
    setTransitionEnabled(true);
  }, [images, isLooping]);

  useEffect(() => {
    if (images.length === 0) return;

    const logicalIndex = getLogicalIndex(trackIndexRef.current, images.length);
    if (logicalIndex === activeIndex) return;

    isSyncingFromProp.current = true;
    setTransitionEnabled(true);
    setTrackIndex(isLooping ? activeIndex + 1 : 0);
  }, [activeIndex, images.length, isLooping]);

  useEffect(() => {
    if (images.length === 0) return;
    if (isSyncingFromProp.current) {
      isSyncingFromProp.current = false;
      return;
    }

    const logicalIndex = getLogicalIndex(trackIndex, images.length);
    if (logicalIndex !== activeIndex) {
      onIndexChange(logicalIndex);
    }
  }, [activeIndex, images.length, onIndexChange, trackIndex]);

  const goPrev = () => {
    if (!isLooping) return;
    isSyncingFromProp.current = false;
    setTransitionEnabled(true);
    setTrackIndex((index) => index - 1);
  };

  const goNext = () => {
    if (!isLooping) return;
    isSyncingFromProp.current = false;
    setTransitionEnabled(true);
    setTrackIndex((index) => index + 1);
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;
    if (!isLooping) return;

    setTrackIndex((index) => {
      if (index === 0) {
        setTransitionEnabled(false);
        return images.length;
      }
      if (index === images.length + 1) {
        setTransitionEnabled(false);
        return 1;
      }
      return index;
    });
  };

  useEffect(() => {
    if (transitionEnabled) return;
    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled, trackIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isLooping) return;
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;

    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
  };

  if (images.length === 0) {
    return (
      <div ref={containerRef} className="relative w-full">
        <div
          className="mx-auto overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-2"
          style={{
            ...slideStyle,
            maxWidth: "100%",
          }}
        >
          <div className="flex h-full items-center justify-center px-6 text-center">
            <p className="text-body text-secondary">
              Photos coming soon for this category.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: slideHeight > 0 ? slideHeight : undefined }}
      >
        <div
          className="flex touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
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
              key={`${image.src}-${index}`}
              className="relative shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-2"
              style={{
                ...slideStyle,
                opacity: index === trackIndex ? 1 : 0.6,
                transition:
                  "opacity 300ms ease, width 200ms ease, height 200ms ease",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 80vw, 80vw"
                className="object-contain"
                priority={index === trackIndex}
              />
            </div>
          ))}
        </div>
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

      <span className="sr-only" aria-live="polite">
        Image {currentIndex + 1} of {images.length}
      </span>
    </div>
  );
}
