"use client";

import { useEffect, useState } from "react";
import SectionNavLink from "@/components/SectionNavLink";
import { useMobileMenu } from "@/components/MobileMenuContext";
import { getScrollOffset, scrollToSection } from "@/lib/scroll";

const sections = [
  { id: "what-ive-built", label: "Maker" },
  { id: "what-ive-done", label: "Leader" },
  { id: "personal-projects", label: "Explorer" },
] as const;

export default function HomeSectionNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { menuMounted } = useMobileMenu();

  useEffect(() => {
    function updateActiveSection() {
      const offset = getScrollOffset() + 1;
      let current: string | null = null;

      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function handleClick(id: string) {
    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <div
      className={`sticky top-16 z-30 w-full bg-hero-bg max-md:transition-opacity max-md:duration-200 ${
        menuMounted ? "max-md:pointer-events-none max-md:opacity-0" : ""
      }`}
    >
      <nav
        className="content-container flex flex-wrap items-center justify-center gap-x-3 py-3"
        aria-label="Homepage sections"
      >
        {sections.map((section, index) => (
          <span key={section.id} className="flex items-center gap-3">
            {index > 0 && (
              <span className="text-[13px] font-bold text-primary" aria-hidden="true">
                •
              </span>
            )}
            <SectionNavLink
              active={activeSection === section.id}
              onClick={() => handleClick(section.id)}
            >
              {section.label}
            </SectionNavLink>
          </span>
        ))}
      </nav>
    </div>
  );
}
