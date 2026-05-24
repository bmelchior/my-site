import Link from "next/link";
import Card from "@/components/Card";
import ProjectCardImage from "@/components/ProjectCardImage";
import ProjectCardTitle from "@/components/ProjectCardTitle";
import TagPill from "@/components/TagPill";
import TransitionWrapper from "@/components/TransitionWrapper";
import type { Project } from "@/lib/data/projects";

type WorkProjectCardProps = {
  project: Project;
  index: number;
};

export default function WorkProjectCard({
  project,
  index,
}: WorkProjectCardProps) {
  const card = (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full shrink-0 md:w-[280px] lg:w-[320px]">
          <ProjectCardImage
            alt={project.imageAlt}
            src={project.cardImage}
            aspectRatio="4/3"
            objectPosition={project.cardImagePosition}
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            showAppStoreBadge={project.appStoreAvailable}
            workInProgress={project.tags.includes("In Progress")}
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <ProjectCardTitle as="h2" className="text-xl">
            {project.title}
          </ProjectCardTitle>
          <p className="mt-3 text-base leading-relaxed text-secondary">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <TransitionWrapper delay={index * 100}>
      {project.detailPageDisabled ? (
        <div className="block">{card}</div>
      ) : (
        <Link
          href={`/work/${project.slug}`}
          className="block transition-opacity duration-200 ease-in-out hover:opacity-95"
        >
          {card}
        </Link>
      )}
    </TransitionWrapper>
  );
}
