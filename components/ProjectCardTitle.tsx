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
    <Tag className={`text-card-title text-primary ${className}`}>
      {children}
    </Tag>
  );
}
