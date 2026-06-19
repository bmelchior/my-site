import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const styles = `${
    variant === "primary" ? "btn-primary" : "btn-secondary"
  } ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
