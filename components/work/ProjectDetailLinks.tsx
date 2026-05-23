import Link from "next/link";
import type { ProjectLink } from "@/lib/data/projects";

type ProjectDetailLinksProps = {
  links: [ProjectLink, ProjectLink];
};

export default function ProjectDetailLinks({ links }: ProjectDetailLinksProps) {
  const [first, second] = links;

  const linkClassName = "text-[#1668AA]";

  function renderLink({ label, href }: ProjectLink) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    return (
      <Link href={href} className={linkClassName}>
        {label}
      </Link>
    );
  }

  return (
    <p className="mt-4 text-[10px] font-bold uppercase">
      {renderLink(first)}
      <span className="text-primary"> • </span>
      {renderLink(second)}
    </p>
  );
}
