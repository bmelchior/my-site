import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

const baseStyles =
  "inline-block rounded p-4 text-base font-medium transition-all duration-200 ease-in-out";

const variants = {
  primary:
    "bg-accent text-surface hover:bg-accent-hover",
  secondary:
    "border border-border bg-transparent text-primary hover:bg-highlight",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
