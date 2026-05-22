import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";
import TransitionWrapper from "@/components/TransitionWrapper";
import TalkCard from "@/components/speaking/TalkCard";
import { createPageMetadata } from "@/lib/metadata";
import { talks } from "@/lib/data/talks";

export const metadata = createPageMetadata({
  title: "Speaking",
  description:
    "I talk about building real products with AI — not theory, not hype.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader
        title="Speaking"
        subtitle="I talk about building real products with AI — not theory, not hype."
      />

      <TransitionWrapper delay={0}>
        <div className="flex flex-col gap-6">
          {talks.map((talk) => (
            <TalkCard key={talk.id} talk={talk} />
          ))}
        </div>
      </TransitionWrapper>

      <SectionDivider />

      <TransitionWrapper delay={100}>
        <section>
          <h2 className="text-2xl font-semibold text-primary">Book Me</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
            Interested in having me speak at your conference, team offsite, or
            leadership event? I&apos;d love to hear about your audience and goals.
          </p>
          <div className="mt-6">
            <Button href="mailto:#" variant="primary">
              Get in Touch
            </Button>
          </div>
        </section>
      </TransitionWrapper>
    </div>
  );
}
