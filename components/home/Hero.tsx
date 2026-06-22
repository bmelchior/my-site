"use client";

import TransitionWrapper from "@/components/TransitionWrapper";

export default function Hero() {
  return (
    <section className="grid-motif bg-atmosphere relative overflow-hidden">
      <div className="content-container flex min-h-0 flex-col justify-center px-[var(--page-margin)] py-16 md:min-h-[86vh] md:py-24">
        <TransitionWrapper delay={0} className="relative z-10 max-w-5xl">
          <h1 className="text-hero text-primary">
            I don&apos;t just talk about AI.
            <br />
            <span className="text-hero-emphasis">I build with it.</span>
          </h1>
          <div className="mt-10 max-w-[600px] space-y-5">
            <p className="text-body-lg text-secondary">
              Twenty years of design leadership taught me how to design andthink about
              products. AI gave me the power to build them.
            </p>
            <p className="text-body-lg text-secondary">
              Now I prototype, build and ship my ideas and help team members transition from intimidated to empowered.
            </p>
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
}
