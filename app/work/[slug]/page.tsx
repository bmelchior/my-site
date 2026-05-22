import Link from "next/link";
import { notFound } from "next/navigation";
import TagPill from "@/components/TagPill";
import TransitionWrapper from "@/components/TransitionWrapper";
import ProjectCarousel from "@/components/work/ProjectCarousel";
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
      className="text-base leading-relaxed text-primary"
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

            <h1 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-secondary">{project.description}</p>

            <div className="mt-12 space-y-12">
              {sections.hypothesis && (
                <section className="rounded-lg bg-highlight p-2">
                  <h2 className="text-sm font-bold text-secondary">
                    Hypothesis
                  </h2>
                  {(Array.isArray(sections.hypothesis)
                    ? sections.hypothesis
                    : [sections.hypothesis]
                  ).map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-1 text-sm text-primary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              )}

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  Timeline
                </h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-primary">
                    Placeholder
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  The Problem
                </h2>
                <div className="space-y-4">{renderBody(sections.problem)}</div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  The Solution
                </h2>
                <div className="space-y-4">{renderBody(sections.solution)}</div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  How AI Is Used
                </h2>
                <div className="space-y-4">
                  {renderBody(sections.howAiIsUsed)}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  Tech Stack
                </h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-primary">
                    {sections.techStack.intro}
                  </p>
                  {sections.techStack.items.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {sections.techStack.items.map((item) => (
                        <TagPill key={item} label={item} size="md" />
                      ))}
                    </div>
                  )}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  What I Learned
                </h2>
                <div className="space-y-4">
                  {renderBody(sections.whatILearned)}
                </div>
              </section>
            </div>
          </TransitionWrapper>

          <nav
            className="mt-16 flex flex-col items-center gap-8"
            aria-label="Project navigation"
          >
            <Link
              href="/work"
              className="text-sm font-medium text-accent transition-colors duration-200 ease-in-out hover:text-accent-hover"
            >
              Back to Work
            </Link>

            <div className="flex w-full items-center justify-between">
              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
                >
                  &larr; Previous Project
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
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
