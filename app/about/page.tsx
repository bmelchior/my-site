import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import SectionHeader from "@/components/SectionHeader";
import TransitionWrapper from "@/components/TransitionWrapper";
import CareerTimeline from "@/components/about/CareerTimeline";
import HowIWork from "@/components/about/HowIWork";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Design leader turned AI builder with 20 years of design leadership experience.",
  path: "/about",
});

const bioBlocks: { text: string; variant?: "pullquote" }[] = [
  {
    text: "I'm a design leader who became a builder. While leading product design full-time at AXS, I experiment with AI-powered products in my spare time — mobile apps, web tools, and an EdTech platform for dyslexia support.",
  },
  {
    text: "I've spent 20 years leading design at companies like BuzzFeed, The New York Times, DirecTV, Ticketmaster, and Capital One. At three of those companies, I led teams that built products and design systems from the ground up — advocating for the investment, earning stakeholder buy-in, and working in tight collaboration with product and engineering from beginning to end. Across every role, I've raised the value and visibility of design and user research in organizations where design was historically undervalued — earning it a seat at the strategy table, not just a spot in the production line.",
  },
  {
    text: "As a designer, AI has been empowering. For the first time, I can envision something and bring it to life in minutes, not weeks. And I can help others do the same.",
    variant: "pullquote",
  },
  {
    text: "What drives me now is showing over telling. And helping team members develop a real feeling of empowerment.",
  },
  {
    text: "I'm based in Scottsdale, Arizona. When I'm not working, you'll find me watching a movie at home with my dog and husband, listening to vinyl, or traveling the world with my camera and my husband.",
  },
];

export default function AboutPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <TransitionWrapper delay={0}>
        <section>
          <SectionHeader title="My Leadership Style" />
          <p className="mb-8 text-meta text-muted">
            Transparent • Pragmatic • Integrative • Coaching-Oriented •
            Experienced
          </p>
          <HowIWork />
        </section>
      </TransitionWrapper>

      <SectionDivider />

      <TransitionWrapper delay={100}>
        <section>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <div className="aspect-square w-full max-w-[280px] shrink-0 self-start overflow-hidden rounded-[var(--radius-md)] border border-border md:w-[280px]">
              <div className="relative size-full">
                <Image
                  src="/BM_headshot.png"
                  alt="Brandon Melchior portrait"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              {bioBlocks.map((block) =>
                block.variant === "pullquote" ? (
                  <blockquote
                    key={block.text.slice(0, 40)}
                    className="pullquote"
                  >
                    {block.text}
                  </blockquote>
                ) : (
                  <p
                    key={block.text.slice(0, 40)}
                    className="text-body text-secondary"
                  >
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </div>
        </section>
      </TransitionWrapper>

      <SectionDivider />

      <TransitionWrapper delay={200}>
        <section>
          <SectionHeader title="Career Highlights" />
          <CareerTimeline />
        </section>
      </TransitionWrapper>
    </div>
  );
}
