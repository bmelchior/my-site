import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";
import TransitionWrapper from "@/components/TransitionWrapper";
import CareerTimeline from "@/components/about/CareerTimeline";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Design leader turned AI builder with 20 years of design leadership experience.",
  path: "/about",
});

const bioParagraphs = [
  "I'm a design leader who became a builder. While leading product design full-time at AXS, I ship AI-powered products on my own — mobile apps, web tools, and an EdTech platform for dyslexia support. Everything on this site was designed, built, and launched by me.",
  "I've spent 20 years leading design at companies like BuzzFeed, The New York Times, DirecTV, Ticketmaster, and Capital One. At three of those companies, I built design systems from the ground up where none existed — advocating for the investment, earning stakeholder buy-in, and designing and building in tight collaboration with engineering from day one. Across every role, I've raised the value and visibility of design and user research in organizations where design was historically undervalued — earning it a seat at the strategy table, not just a spot in the production line.",
  "As a designer, AI has been empowering. For the first time, I can envision and ship an idea.",
  "What drives me now is shipping over theorizing. I'd rather have a working product in someone's hands than a strategy deck in a boardroom. AI didn't change my values — it gave me new tools to live them.",
  "I'm based in Scottsdale, Arizona. When I'm not building, you'll find me with my dog, listening to vinyl, or behind a camera.",
];

export default function AboutPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader title="About" />

      <TransitionWrapper delay={0}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[278px] w-[278px]">
              <Image
                src="/BM_headshot.png"
                alt="Brandon Melchior portrait"
                fill
                className="rounded-lg object-cover object-top"
                sizes="278px"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            {bioParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </TransitionWrapper>

      <SectionDivider />

      <TransitionWrapper delay={100}>
        <section>
          <h2 className="mb-8 text-2xl font-semibold text-primary">
            Career Highlights
          </h2>
          <CareerTimeline />
        </section>
      </TransitionWrapper>
    </div>
  );
}
