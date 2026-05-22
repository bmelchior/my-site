import Link from "next/link";
import type { ProjectLink } from "@/lib/data/projects";

type ProjectDetailLinksProps = {
  links: [ProjectLink, ProjectLink];
};

export default function ProjectDetailLinks({ links }: ProjectDetailLinksProps) {
  const [first, second] = links;

  return (
    <p className="mt-4 text-[10px] font-bold uppercase">
      <Link href={first.href} className="text-[#1668AA]">
        {first.label}
      </Link>
      <span className="text-primary"> • </span>
      <Link href={second.href} className="text-[#1668AA]">
        {second.label}
      </Link>
    </p>
  );
}
