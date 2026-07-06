import TagPill from "@/components/TagPill";

type LeadershipCaseStudyHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags: string[];
};

export default function LeadershipCaseStudyHeader({
  eyebrow,
  title,
  subtitle,
  tags,
}: LeadershipCaseStudyHeaderProps) {
  return (
    <header className="leadership-case-study-header">
      <p className="leadership-header__eyebrow">{eyebrow}</p>
      <h1 className="text-hero font-display text-primary">{title}</h1>
      <p className="mt-5 text-body-lg text-secondary">{subtitle}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>
    </header>
  );
}
