import Link from "next/link";
import { notFound } from "next/navigation";
import TagPill from "@/components/TagPill";
import TextLink from "@/components/TextLink";
import TransitionWrapper from "@/components/TransitionWrapper";
import LeadershipCaseStudyTemplate from "@/components/work/leadership/LeadershipCaseStudyTemplate";
import ProjectCarousel from "@/components/work/ProjectCarousel";
import ProjectDetailLinks from "@/components/work/ProjectDetailLinks";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function renderBody(content: string | string[]) {
  const paragraphs = Array.isArray(content) ? content : [content];
  return paragraphs.map((paragraph) => (
    <p
      key={paragraph.slice(0, 40)}
      className="text-body text-secondary"
    >
      {paragraph}
    </p>
  ));
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const { sections } = project;

  if (project.template === "leadership-timeline" && project.leadershipTimeline) {
    return (
      <LeadershipCaseStudyTemplate
        project={project}
        timeline={project.leadershipTimeline}
        prev={prev}
        next={next}
      />
    );
  }

  return (
    <>
      <ProjectCarousel images={project.images} />

      <div className="content-container py-12 md:py-16">
        <div className="mx-auto max-w-[800px]">
          <TransitionWrapper delay={0}>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>

            <h1 className="text-hero text-primary">{project.title}</h1>
            <p className="mt-5 text-body-lg text-secondary">
              {project.description}
            </p>
            {project.links && <ProjectDetailLinks links={project.links} />}

            <div className="mt-14 space-y-14">
              {sections.hypothesis && (
                <section className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-6">
                  <h2 className="text-meta text-subtle">Hypothesis</h2>
                  {(Array.isArray(sections.hypothesis)
                    ? sections.hypothesis
                    : [sections.hypothesis]
                  ).map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-2 text-body text-primary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              )}

              <section>
                <h2 className="mb-4 text-card-title text-primary">Timeline</h2>
                <div className="space-y-4">
                  {renderBody(sections.timeline ?? "Placeholder")}
                </div>
              </section>

              {!project.hideContentSections && (
                <>
                  <section>
                    <h2 className="mb-4 text-card-title text-primary">
                      The Problem
                    </h2>
                    <div className="space-y-4">
                      {renderBody(sections.problem)}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-card-title text-primary">
                      The Solution
                    </h2>
                    <div className="space-y-4">
                      {renderBody(sections.solution)}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-card-title text-primary">
                      How AI Is Used
                    </h2>
                    <div className="space-y-4">
                      {renderBody(sections.howAiIsUsed)}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-card-title text-primary">
                      Tech Stack
                    </h2>
                    <div className="space-y-4">
                      <p className="text-body text-secondary">
                        {sections.techStack.intro}
                      </p>
                      {sections.techStack.items.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {sections.techStack.items.map((item) => (
                            <TagPill key={item} label={item} />
                          ))}
                        </div>
                      )}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-card-title text-primary">
                      What I Learned
                    </h2>
                    <div className="space-y-4">
                      {renderBody(sections.whatILearned)}
                    </div>
                  </section>
                </>
              )}
            </div>
          </TransitionWrapper>

          <nav
            className="mt-16 flex flex-col items-center gap-8 border-t border-border pt-10"
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
      </div>
    </>
  );
}
