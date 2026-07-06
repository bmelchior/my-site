import DoneBlocks from "@/components/home/DoneBlocks";
import Hero from "@/components/home/Hero";
import HomeSectionNav from "@/components/home/HomeSectionNav";
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
  title: "Home",
  description:
    "Design leader turned builder. I build, ship, and lead with AI — empowering others to do the same.",
  path: "/",
});

const doneBlocks = [
  {
    image: "/images/done/Axs_logo-w.png",
    imageAlt: "AXS",
    smallLogo: true,
    leadIn: "AI-driven leader —",
    story:
      "Turning AI from a curiosity into a measurable capability across my team and organization.",
  },
  {
    image: "/images/done/Ticketmaster-Logo-w.png",
    imageAlt: "Ticketmaster",
    smallLogo: true,
    leadIn: "+42pt NPS lift at Ticketmaster —",
    story:
      "Led the design transformation that turned a 20-person team into a strategic function.",
  },
  {
    image: "/images/done/Sling_Logo-w.png",
    imageAlt: "Sling",
    leadIn: "3.5x conversion on sling.com —",
    story:
      "Designed and launched a global navigation that multiplied signups.",
  },
  {
    images: [
      { src: "/images/done/Dish_Network-Logo-w.png", alt: "Dish", compact: true, offsetY: 3 },
      { src: "/images/done/Ticketmaster-Logo-w.png", alt: "Ticketmaster" },
      { src: "/images/done/Axs_logo-w.png", alt: "AXS", compact: true },
    ],
    leadIn: "3 design systems built from zero —",
    story:
      "Advocated, got buy-in, and shipped design systems at companies that had none.",
  },
  {
    images: [
      { src: "/images/done/DirecTV-Logo-w.png", alt: "DIRECTV" },
      { src: "/images/done/BuzzFeed-Logo-w.png", alt: "BuzzFeed" },
      { src: "/images/done/Axs_logo-w.png", alt: "AXS", compact: true },
    ],
    leadIn: "zero-to-one-products-and-teams",
    metric: "Zero-to-one",
    label: "Brought new products to market and new teams to companies",
    story:
      "Starting from a problem to solve and a goal to achieve, I brought new products to market and new teams to companies. DirecTV's streaming product & prototyping team • Animation team at Buzzfeed • User Research at AXS",
  },
  {
    image: "/images/done/Capital_One_logo-w.png",
    imageAlt: "Capital One",
    leadIn: "4.5% increase in funded loans at Capital One through a front-end redesign —",
    story:
      "Led a 10-week redesign that lifted every metric in the conversion funnel.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSectionNav />

      <section
        id="what-ive-done"
        className="home-section pt-16 md:pt-24 pb-12 md:pb-16"
      >
        <TransitionWrapper delay={100}>
          <div className="content-container mb-8">
            <SectionHeader title="What I've Done" />
          </div>
          <DoneBlocks blocks={doneBlocks} />
        </TransitionWrapper>
      </section>

      <section
        id="enhanced-leadership"
        className="home-section content-container pb-16 md:pb-24"
      >
        <TransitionWrapper delay={200}>
          <SectionHeader title="Enhanced Leadership" />
          <FeaturedWorkGrid projects={leadershipProjects} variant="home" />
        </TransitionWrapper>
      </section>

      <section
        id="what-ive-built"
        className="home-section content-container pb-16 md:pb-24"
      >
        <TransitionWrapper delay={300}>
          <SectionHeader
            title="What I've Built"
            description="In my spare time, I've identified pain points and market opportunities, founding two companies."
          />
          <FeaturedWorkGrid projects={featuredProjects} variant="home" />
        </TransitionWrapper>
      </section>

      <section
        id="personal-projects"
        className="home-section content-container pb-16 md:pb-24"
      >
        <TransitionWrapper delay={400}>
          <SectionHeader
            title="Personal Projects"
            description="Expanding my AI understanding and skills by putting them into practice — building consumer apps and personal agents."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {personalProjects.map((project, index) => (
              <WorkProjectCard
                key={project.slug}
                project={project}
                index={index}
                aspectRatio="16/9"
                variant="lab"
              />
            ))}
          </div>
        </TransitionWrapper>
      </section>
    </>
  );
}
