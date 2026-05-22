import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}
