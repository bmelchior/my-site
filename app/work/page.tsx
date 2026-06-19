import PageHeader from "@/components/PageHeader";
import TransitionWrapper from "@/components/TransitionWrapper";
import FeaturedWorkGrid from "@/components/work/FeaturedWorkGrid";
import WorkProjectCard from "@/components/work/WorkProjectCard";
import { createPageMetadata } from "@/lib/metadata";
import { featuredProjects, projects } from "@/lib/data/projects";

export const metadata = createPageMetadata({
  title: "Work",
  description: "Products and tools I've built with AI.",
  path: "/work",
});

const nonFeaturedProjects = projects.filter((p) => !p.featured);

export default function WorkPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader
        title="Work"
        subtitle="Products and tools I've built with AI."
      />

      <TransitionWrapper delay={0}>
        <FeaturedWorkGrid projects={featuredProjects} variant="home" />
      </TransitionWrapper>

      {nonFeaturedProjects.length > 0 && (
        <div className="mt-12 flex flex-col gap-6">
          {nonFeaturedProjects.map((project, index) => (
            <WorkProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
