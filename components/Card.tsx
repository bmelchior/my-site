import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "product" | "lab" | "default";
};

export default function Card({
  children,
  className = "",
  variant = "product",
}: CardProps) {
  const variantClass =
    variant === "lab"
      ? "card-lab"
      : variant === "default"
        ? "rounded-[var(--radius-md)] border border-border bg-surface transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        : "card-product";

  return <div className={`${variantClass} ${className}`}>{children}</div>;
}
