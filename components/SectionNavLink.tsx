import type { ReactNode } from "react";

type SectionNavLinkProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export function sectionNavLinkClassName(active = false) {
  return `text-[13px] font-bold uppercase transition-colors duration-200 ease-in-out ${
    active ? "text-primary" : "text-rust"
  }`;
}

export default function SectionNavLink({
  children,
  active = false,
  onClick,
}: SectionNavLinkProps) {
  return (
    <button type="button" onClick={onClick} className={sectionNavLinkClassName(active)}>
      {children}
    </button>
  );
}
