"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useMobileMenu } from "@/components/MobileMenuContext";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/perspectives", label: "Perspectives" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { menuOpen, setMenuOpen, menuMounted, setMenuMounted } = useMobileMenu();

  const openMenu = () => {
    setMenuMounted(true);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handlePanelAnimationEnd = (
    e: React.AnimationEvent<HTMLElement>
  ) => {
    if (e.target !== e.currentTarget) return;
    if (!menuOpen && e.animationName === "slide-up") {
      setMenuMounted(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuMounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMounted]);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 h-16 shrink-0 border-b border-border bg-surface">
      <div className="content-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-bold text-primary transition-colors duration-200 ease-in-out hover:text-accent-hover"
          onClick={closeMenu}
        >
          Brandon Melchior
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 p-2 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
        >
          <span
            className={`block h-0.5 w-6 bg-accent transition-all duration-200 ease-in-out ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent transition-all duration-200 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent transition-all duration-200 ease-in-out ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>

    {menuMounted && (
      <div
        className="fixed inset-0 top-16 z-40 bg-surface md:hidden"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <nav
          className={`flex flex-col gap-8 px-6 py-12 ${
            menuOpen
              ? "mobile-menu-panel--open"
              : "mobile-menu-panel--closing"
          }`}
          aria-label="Mobile"
          onAnimationEnd={handlePanelAnimationEnd}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-primary transition-colors duration-200 ease-in-out hover:text-accent-hover"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    )}
    </>
  );
}
