import Link from "next/link";
import type { ProjectLink } from "@/lib/data/projects";

type ProjectDetailLinksProps = {
  links: ProjectLink[];
};

export default function ProjectDetailLinks({ links }: ProjectDetailLinksProps) {
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
      {links.map((link, index) => (
        <span key={link.href} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-subtle" aria-hidden="true">
              •
            </span>
          )}
          {renderLink(link)}
        </span>
      ))}
    </p>
  );
}
