import Link from "next/link";
import Card from "@/components/Card";
import ProjectCardImage from "@/components/ProjectCardImage";
import ProjectCardTitle from "@/components/ProjectCardTitle";
import TagPill from "@/components/TagPill";
import type { Project } from "@/lib/data/projects";

type FeaturedWorkGridProps = {
  projects: Project[];
  variant?: "home" | "work";
};

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <ProjectCardImage
        alt={project.imageAlt}
        src={project.cardImage}
        aspectRatio="16/9"
        objectPosition={project.cardImagePosition}
        objectFit={project.cardImageFit}
        showAppStoreBadge={project.appStoreAvailable}
        showComingSoonBadge={project.comingSoon}
        workInProgress={project.tags.includes("In Progress")}
      />
      <div className="p-7 md:p-8">
        <ProjectCardTitle>{project.title}</ProjectCardTitle>
        <p className="mt-3 text-body text-secondary">
          {project.cardDescription ?? project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function FeaturedWorkGrid({
  projects,
  variant = "home",
}: FeaturedWorkGridProps) {
  return (
    <div
      className={
        variant === "home"
          ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {projects.map((project) => {
        const card = (
          <Card variant="product" className="overflow-hidden">
            <ProjectCardContent project={project} />
          </Card>
        );

        const wrapperClass = project.comingSoon
          ? "group block h-full"
          : "block h-full";

        return project.detailPageDisabled ? (
          <div key={project.slug} className={wrapperClass}>
            {card}
          </div>
        ) : (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={wrapperClass}
          >
            {card}
          </Link>
        );
      })}
    </div>
  );
}
