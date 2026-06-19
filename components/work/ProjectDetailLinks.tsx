import Link from "next/link";
import type { ProjectLink } from "@/lib/data/projects";

type ProjectDetailLinksProps = {
  links: [ProjectLink, ProjectLink];
};

export default function ProjectDetailLinks({ links }: ProjectDetailLinksProps) {
  const [first, second] = links;

  function renderLink({ label, href }: ProjectLink) {
    const isExternal = href.startsWith("http");
    const className = "link-editorial text-meta text-accent-2";

    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <p className="mt-4 flex flex-wrap items-center gap-2">
      {renderLink(first)}
      <span className="text-subtle" aria-hidden="true">
        •
      </span>
      {renderLink(second)}
    </p>
  );
}
