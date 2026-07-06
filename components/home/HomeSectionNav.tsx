"use client";

import { useEffect, useRef, useState } from "react";
import SectionNavLink from "@/components/SectionNavLink";
import { useMobileMenu } from "@/components/MobileMenuContext";
import { getScrollOffset, scrollToSection } from "@/lib/scroll";

const sections = [
  { id: "what-ive-done", label: "Leader" },
  { id: "enhanced-leadership", label: "Amplifier" },
  { id: "what-ive-built", label: "Maker" },
  { id: "personal-projects", label: "Explorer" },
] as const;

export default function HomeSectionNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrollLockRef = useRef<string | null>(null);
  const updateActiveSectionRef = useRef<() => void>(() => {});
  const { menuMounted } = useMobileMenu();

  useEffect(() => {
    function updateActiveSection() {
      if (scrollLockRef.current) {
        setActiveSection(scrollLockRef.current);
        return;
      }

      const offset = getScrollOffset() + 1;
      let current: string | null = null;

      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();
        const bottom = top + element.offsetHeight;

        if (top <= offset && bottom > offset) {
          current = id;
        }
      }

      if (!current) {
        for (const { id } of sections) {
          const element = document.getElementById(id);
          if (!element) continue;

          if (element.getBoundingClientRect().top <= offset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    }

    updateActiveSectionRef.current = updateActiveSection;
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function handleClick(id: string) {
    scrollLockRef.current = id;
    setActiveSection(id);
    scrollToSection(id, 300, () => {
      scrollLockRef.current = null;
      updateActiveSectionRef.current();
    });
  }

  return (
    <div
      className={`sticky top-16 z-30 w-full border-b border-[rgba(244,241,232,0.08)] bg-[rgba(13,16,22,0.72)] backdrop-blur-[16px] max-md:transition-opacity max-md:duration-200 ${
        menuMounted ? "max-md:pointer-events-none max-md:opacity-0" : ""
      }`}
    >
      <nav
        className="content-container flex flex-wrap items-center justify-center gap-3 py-3"
        aria-label="Homepage sections"
      >
        {sections.map((section) => (
          <SectionNavLink
            key={section.id}
            active={activeSection === section.id}
            onClick={() => handleClick(section.id)}
          >
            {section.label}
          </SectionNavLink>
        ))}
      </nav>
    </div>
  );
}
