import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";
import TransitionWrapper from "@/components/TransitionWrapper";
import ContactForm from "@/components/contact/ContactForm";
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
          <p className="mb-8 text-base leading-relaxed text-secondary">
            Interested in working together, booking a talk, or just want to
            connect? Fill out this form or email me at bmelchior79@gmail.com.
          </p>
          <ContactForm />
        </TransitionWrapper>

        <SectionDivider />

        <nav
          className="flex flex-wrap justify-center gap-6 text-sm"
          aria-label="Contact links"
        >
          <Link
            href="#"
            className="text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            Email
          </Link>
          <Link
            href="#"
            className="text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </div>
  );
}
