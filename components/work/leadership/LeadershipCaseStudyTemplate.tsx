import Link from "next/link";
import TextLink from "@/components/TextLink";
import ProjectDetailLinks from "@/components/work/ProjectDetailLinks";
import type { LeadershipTimeline } from "@/lib/data/leadership-timeline";
import type { Project } from "@/lib/data/projects";
import LeadershipCaseStudyHeader from "./LeadershipCaseStudyHeader";
import StepConnector from "./StepConnector";
import TimelineStep, { type TimelineStepVariant } from "./TimelineStep";

type LeadershipCaseStudyTemplateProps = {
  project: Project;
  timeline: LeadershipTimeline;
  prev: Project | null;
  next: Project | null;
};

const STEP_DELAYS = [60, 130, 200, 270, 340] as const;

type TimelineStepKey = keyof LeadershipTimeline["steps"];

export default function LeadershipCaseStudyTemplate({
  project,
  timeline,
  prev,
  next,
}: LeadershipCaseStudyTemplateProps) {
  const stepOrder: TimelineStepKey[] = [
    "problem",
    "discovery",
    "experiment",
    "solution",
    "result",
  ];

  const stepEntries = stepOrder.flatMap((key, index) => {
    const step = timeline.steps[key];
    if (!step) return [];

    return [
      {
        key,
        variant: key as TimelineStepVariant,
        step,
        animationDelay: STEP_DELAYS[index],
      },
    ];
  });

  return (
    <>
      <LeadershipCaseStudyHeader
        eyebrow={timeline.eyebrow}
        title={project.title}
        subtitle={project.description}
        tags={project.tags}
      />

      {project.links && (
        <div className="mx-auto mb-8 max-w-[760px] px-[clamp(1.5rem,5vw,4rem)] text-center">
          <ProjectDetailLinks links={project.links} />
        </div>
      )}

      <main className="leadership-timeline" role="main">
        {stepEntries.map(({ key, variant, step, animationDelay }, index) => (
          <div key={key}>
            <TimelineStep
              {...step}
              variant={variant}
              animationDelay={animationDelay}
            />
            {index < stepEntries.length - 1 && <StepConnector />}
          </div>
        ))}
      </main>

      <div className="content-container pb-16">
        <nav
          className="mx-auto flex max-w-[760px] flex-col items-center gap-8 border-t border-border px-[clamp(1.5rem,5vw,4rem)] pt-10"
          aria-label="Project navigation"
        >
          <TextLink href="/work" className="text-sm font-medium">
            Back to Work
          </TextLink>

          <div className="flex w-full items-center justify-between">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="link-editorial text-sm text-secondary"
              >
                &larr; Previous Project
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="link-editorial text-sm text-secondary"
              >
                Next Project &rarr;
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
