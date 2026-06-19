"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMobileMenu } from "@/components/MobileMenuContext";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/perspectives", label: "Perspectives" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, menuMounted, setMenuMounted } = useMobileMenu();

  const openMenu = () => {
    setMenuMounted(true);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handlePanelAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
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
      <header className="fixed top-0 left-0 right-0 z-50 h-16 shrink-0 border-b border-[rgba(244,241,232,0.08)] bg-[rgba(13,16,22,0.72)] backdrop-blur-[16px]">
        <div className="content-container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-primary transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent"
            onClick={closeMenu}
          >
            Brandon Melchior
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active
                      ? "text-primary after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-accent"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex flex-col justify-center gap-1.5 p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
          >
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {menuMounted && (
        <div
          className="fixed inset-0 top-16 z-40 bg-bg-soft md:hidden"
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <nav
            className={`flex flex-col gap-6 px-6 py-12 ${
              menuOpen ? "mobile-menu-panel--open" : "mobile-menu-panel--closing"
            }`}
            aria-label="Mobile"
            onAnimationEnd={handlePanelAnimationEnd}
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-medium transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active ? "text-accent" : "text-primary hover:text-accent"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
