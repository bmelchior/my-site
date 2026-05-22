import PageHeader from "@/components/PageHeader";
import WorkProjectCard from "@/components/work/WorkProjectCard";
import { createPageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/data/projects";

export const metadata = createPageMetadata({
  title: "Work",
  description: "Products and tools I've built with AI.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader
        title="Work"
        subtitle="Products and tools I've built with AI."
      />
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <WorkProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
