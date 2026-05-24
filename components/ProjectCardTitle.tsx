import type { ElementType, ReactNode } from "react";

type ProjectCardTitleProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function ProjectCardTitle({
  children,
  as: Tag = "h3",
  className = "",
}: ProjectCardTitleProps) {
  return (
    <Tag className={`font-semibold text-rust ${className}`}>{children}</Tag>
  );
}
