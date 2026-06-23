import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";
import TextLink from "@/components/TextLink";
import TransitionWrapper from "@/components/TransitionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Interested in working together, booking a talk, or just want to connect? Reach out.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="content-container py-12 md:py-16">
      <div className="mx-auto max-w-[600px]">
        <PageHeader
          title="Let's talk"
          image={{
            src: "/contact-portrait.png",
            alt: "Brandon Melchior portrait",
          }}
        />

        <TransitionWrapper delay={0}>
          <p className="text-body text-secondary">
            Interested in working together, booking a talk, or just want to
            connect? Email me at bmelchior79@gmail.com.
          </p>
        </TransitionWrapper>

        <SectionDivider />

        <nav
          className="flex flex-wrap justify-center gap-6"
          aria-label="Contact links"
        >
          <TextLink href="mailto:bmelchior79@gmail.com" className="text-sm">
            Email
          </TextLink>
          <TextLink
            href="https://www.linkedin.com/in/bmelchior/"
            external
            className="text-sm"
          >
            LinkedIn
          </TextLink>
          <TextLink
            href="https://www.instagram.com/bmelchior"
            external
            className="text-sm"
          >
            Instagram
          </TextLink>
        </nav>
      </div>
    </div>
  );
}
