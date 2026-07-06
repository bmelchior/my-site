"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { PhotographyCategory } from "@/lib/data/photography";

type CategoryDropdownProps = {
  categories: PhotographyCategory[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export default function CategoryDropdown({
  categories,
  activeSlug,
  onSelect,
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const activeCategory =
    categories.find((category) => category.slug === activeSlug) ?? categories[0];

  const close = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  const open = useCallback(() => {
    const activeIndex = categories.findIndex(
      (category) => category.slug === activeSlug,
    );
    setFocusedIndex(activeIndex >= 0 ? activeIndex : 0);
    setIsOpen(true);
  }, [activeSlug, categories]);

  const selectCategory = useCallback(
    (slug: string) => {
      onSelect(slug);
      close();
    },
    [close, onSelect],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close, isOpen]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        open();
      }
    } else if (event.key === "Escape") {
      close();
    }
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((index) => (index + 1) % categories.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex(
        (index) => (index - 1 + categories.length) % categories.length,
      );
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const category = categories[focusedIndex];
      if (category) {
        selectCategory(category.slug);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <h2 className="m-0 text-card-title text-primary">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          onClick={() => (isOpen ? close() : open())}
          onKeyDown={handleTriggerKeyDown}
          className={`flex items-center gap-2 text-left transition-colors duration-200 ${
            isOpen
              ? "text-accent"
              : "text-primary hover:text-accent"
          }`}
        >
          {activeCategory.name}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h2>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Photography categories"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          className="absolute left-0 top-[calc(100%+0.5rem)] z-30 min-w-[min(100vw-2rem,320px)] overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-2 py-1 shadow-[var(--shadow-card)]"
        >
          {categories.map((category, index) => {
            const isSelected = category.slug === activeSlug;
            const isFocused = index === focusedIndex;

            return (
              <li key={category.slug} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={-1}
                  onMouseEnter={() => setFocusedIndex(index)}
                  onClick={() => selectCategory(category.slug)}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                    isSelected
                      ? "bg-surface text-accent"
                      : isFocused
                        ? "bg-surface text-primary"
                        : "text-secondary hover:bg-surface hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
