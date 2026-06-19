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
    "I speak in practical, relatable terms about building with AI, and design leadership.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader
        title="Speaking"
        subtitle="I speak in practical, relatable terms about building with AI, and design leadership."
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
        <section className="rounded-[var(--radius-lg)] border border-border bg-surface-2 p-8 md:p-12">
          <h2 className="text-section-h2 text-primary">Book Me</h2>
          <p className="mt-5 max-w-2xl text-body text-secondary">
            Interested in having me speak at your conference, team offsite, or
            leadership event? I&apos;d love to hear about your audience and goals.
          </p>
          <div className="mt-8">
            <Button href="mailto:bmelchior79@gmail.com" variant="primary">
              Get in Touch
            </Button>
          </div>
        </section>
      </TransitionWrapper>
    </div>
  );
}
