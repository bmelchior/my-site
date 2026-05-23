import DoneBlocks from "@/components/home/DoneBlocks";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ProjectCardImage from "@/components/ProjectCardImage";
import TransitionWrapper from "@/components/TransitionWrapper";
import WorkProjectCard from "@/components/work/WorkProjectCard";
import { createPageMetadata } from "@/lib/metadata";
import { featuredProjects, personalProjects } from "@/lib/data/projects";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Design leader turned builder. I ship real products with AI — not decks about AI.",
  path: "/",
});

const doneBlocks = [
  {
    image: "/images/done/tm.png",
    imageAlt: "Ticketmaster",
    leadIn: "+42pt NPS lift at Ticketmaster —",
    story:
      "Led the design transformation that turned a 20-person team into a strategic function.",
  },
  {
    image: "/images/done/sling.png",
    imageAlt: "Sling",
    leadIn: "3.5x conversion on sling.com —",
    story:
      "Designed and launched a global navigation that multiplied signups.",
  },
  {
    image: "/images/done/tri.png",
    imageAlt: "Design systems",
    leadIn: "3 design systems built from zero —",
    story:
      "Advocated, got buy-in, and shipped design systems at companies that had none.",
  },
  {
    image: "/images/done/cap.png",
    imageAlt: "Capital One",
    leadIn: "4.5% increase in funded loans at Capital One —",
    story:
      "Led a 10-week redesign that lifted every metric in the conversion funnel.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[300px] flex-col items-center justify-center bg-hero-bg p-12 text-center">
        <TransitionWrapper
          delay={0}
          className="flex max-w-3xl flex-col items-center gap-8"
        >
          <h1 className="text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
            I don&apos;t just talk about AI.
            <br />
            I build with it.
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-secondary">
          Twenty years of design leadership taught me how to think about products. AI gave me the power to build them. 
          </p>
          <p className="mx-auto max-w-[600px] text-lg text-secondary">
          Now I ship my own ideas and help others turn AI from something overwhelming to empowering.
          </p>
          <div>
            <Button href="/work" variant="primary">
              See What I&apos;ve Built
            </Button>
          </div>
        </TransitionWrapper>
      </section>

      <section className="content-container pt-16 md:pt-24 pb-12 md:pb-16">
        <TransitionWrapper delay={100}>
          <h2 className="mb-8 text-2xl font-semibold text-primary md:text-3xl">
            What I&apos;ve Built
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const card = (
                <Card className="overflow-hidden">
                  <ProjectCardImage
                    alt={project.imageAlt}
                    src={project.cardImage}
                    aspectRatio="4/3"
                    objectPosition={project.cardImagePosition}
                    showAppStoreBadge={project.appStoreAvailable}
                    workInProgress={project.tags.includes("In Progress")}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary">
                      {project.cardDescription ?? project.description}
                    </p>
                  </div>
                </Card>
              );

              return project.detailPageDisabled ? (
                <div key={project.slug} className="block">
                  {card}
                </div>
              ) : (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="block"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        </TransitionWrapper>
      </section>

      <section className="content-container pb-16 md:pb-24">
        <TransitionWrapper delay={200}>
          <h2 className="mb-8 text-2xl font-semibold text-primary md:text-3xl">
            What I&apos;ve Done
          </h2>
          <DoneBlocks blocks={doneBlocks} />
        </TransitionWrapper>
      </section>

      <section className="content-container pb-16 md:pb-24">
        <TransitionWrapper delay={300}>
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Personal Projects
          </h2>
          <p className="mt-4 max-w-[600px] text-lg text-secondary">
            Smaller experiments and side builds — quick ideas I ship to learn,
            scratch an itch, or test something new.
          </p>
          <div className="mt-8 flex flex-col gap-8">
            {personalProjects.map((project, index) => (
              <WorkProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </TransitionWrapper>
      </section>
    </>
  );
}
