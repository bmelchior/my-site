import type { ReactNode } from "react";

type SectionNavLinkProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export function sectionNavLinkClassName(active = false) {
  return `chip-role cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary hover:border-border-strong ${
    active ? "chip-role--active" : ""
  }`;
}

export default function SectionNavLink({
  children,
  active = false,
  onClick,
}: SectionNavLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={sectionNavLinkClassName(active)}
    >
      {children}
    </button>
  );
}
