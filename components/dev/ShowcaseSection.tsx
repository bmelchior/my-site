import type { ReactNode } from "react";

type ShowcaseSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function ShowcaseSection({
  id,
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-border pb-16 last:border-b-0">
      <p className="text-meta text-accent">{title}</p>
      {description && (
        <p className="mt-2 max-w-xl text-body text-secondary">{description}</p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
