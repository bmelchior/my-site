import SectionHeader from "@/components/SectionHeader";
import TransitionWrapper from "@/components/TransitionWrapper";
import FeaturedWorkGrid from "@/components/work/FeaturedWorkGrid";
import WorkProjectCard from "@/components/work/WorkProjectCard";
import { createPageMetadata } from "@/lib/metadata";
import {
  featuredProjects,
  leadershipProjects,
  personalProjects,
} from "@/lib/data/projects";

export const metadata = createPageMetadata({
  title: "Work",
  description: "Products and tools I've built with AI.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <TransitionWrapper delay={0}>
        <SectionHeader
          title="Work"
          description="Redesigning workflows and upskilling teams."
          metaLabels={[
            "Principles",
            "Strategic Vision",
            "Influence",
            "Adaptability",
          ]}
        />
        <FeaturedWorkGrid projects={leadershipProjects} variant="home" />
      </TransitionWrapper>

      <section className="mt-16 md:mt-24">
        <TransitionWrapper delay={100}>
          <SectionHeader
            title="Personal"
            description="Products and tools I've built with AI."
          />
          <FeaturedWorkGrid projects={featuredProjects} variant="home" />
        </TransitionWrapper>

        {personalProjects.length > 0 && (
          <div className="mt-12 flex flex-col gap-6">
            {personalProjects.map((project, index) => (
              <WorkProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
