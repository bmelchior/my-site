"use client";

import TransitionWrapper from "@/components/TransitionWrapper";

export default function Hero() {
  return (
    <section className="grid-motif bg-atmosphere relative overflow-hidden">
      <div className="content-container flex min-h-0 flex-col justify-center px-[var(--page-margin)] py-16 md:min-h-[86vh] md:py-24">
        <TransitionWrapper delay={0} className="relative z-10 max-w-5xl">
          <h1 className="text-hero text-primary">
            A leader&apos;s job is to raise the ceiling on what a team can do.
          </h1>
          <div className="mt-10 max-w-[600px] space-y-5">
            <p className="text-body-lg text-secondary">
              I've spent my career building cultures that let designers do their best work. 
            </p>
            <p className="text-body-lg text-secondary">
              Now I pair that with AI — a new way to lead by example, and to leave every team more capable than I found it. I experiment, build, deploy, and share what I've learned.
            </p>
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
}
