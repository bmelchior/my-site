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
  aspectRatio?: "4/3" | "16/9" | "square";
  variant?: "default" | "lab";
};

export default function WorkProjectCard({
  project,
  index,
  aspectRatio = "16/9",
  variant = "default",
}: WorkProjectCardProps) {
  const isLab = variant === "lab";
  const cardVariant = isLab ? "lab" : "product";

  const card = (
    <Card variant={cardVariant} className="overflow-hidden">
      <div className={`flex flex-col ${isLab ? "" : "md:flex-row"}`}>
        <div
          className={`w-full shrink-0 ${
            isLab ? "" : "md:w-[280px] lg:w-[320px]"
          }`}
        >
          <ProjectCardImage
            alt={project.imageAlt}
            src={project.cardImage}
            aspectRatio={aspectRatio}
            objectPosition={project.cardImagePosition}
            objectFit={project.cardImageFit}
            className={isLab ? "rounded-t-[var(--radius-md)]" : "md:rounded-l-[28px] md:rounded-tr-none rounded-t-[28px]"}
            showAppStoreBadge={project.appStoreAvailable}
            workInProgress={project.tags.includes("In Progress")}
          />
        </div>
        <div className={`flex flex-col justify-center ${isLab ? "p-5" : "p-7 md:p-8"}`}>
          <ProjectCardTitle as="h2" className={isLab ? "text-lg" : ""}>
            {project.title}
          </ProjectCardTitle>
          <p
            className={`mt-3 leading-relaxed text-secondary ${
              isLab ? "text-sm" : "text-body"
            }`}
          >
            {project.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${isLab ? "mt-3" : "mt-4"}`}>
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
          className="block transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-95"
        >
          {card}
        </Link>
      )}
    </TransitionWrapper>
  );
}
