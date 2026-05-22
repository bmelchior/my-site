"use client";

import type { ReactNode } from "react";

type TransitionWrapperProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function TransitionWrapper({
  children,
  delay = 0,
  className = "",
}: TransitionWrapperProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
