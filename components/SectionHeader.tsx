type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  description,
  eyebrow,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-intro ${className}`}>
      {eyebrow && (
        <p className="section-intro__eyebrow text-meta text-subtle">{eyebrow}</p>
      )}
      <h2 className="section-intro__title text-section-h2 text-primary">
        {title}
      </h2>
      {description && (
        <p className="section-intro__body text-body-lg">{description}</p>
      )}
    </div>
  );
}
