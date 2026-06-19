import AppStoreBadge from "@/components/AppStoreBadge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProjectCardTitle from "@/components/ProjectCardTitle";
import SectionDivider from "@/components/SectionDivider";
import SectionHeader from "@/components/SectionHeader";
import TagPill from "@/components/TagPill";
import TextLink from "@/components/TextLink";
import ShowcaseSection from "@/components/dev/ShowcaseSection";
import TokenSwatch from "@/components/dev/TokenSwatch";

const navSections = [
  { id: "tokens", label: "Tokens" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "links", label: "Links" },
  { id: "chips", label: "Chips" },
  { id: "cards", label: "Cards" },
  { id: "sections", label: "Sections" },
  { id: "navigation", label: "Navigation" },
  { id: "forms", label: "Forms" },
  { id: "motion", label: "Motion" },
];

export default function ComponentLibrary() {
  return (
    <div className="content-container py-12 md:py-16">
      <header className="mb-12 border-b border-border pb-10">
        <p className="text-meta text-accent">Development only</p>
        <h1 className="mt-3 text-page-h1 text-primary">Component Library</h1>
        <p className="mt-4 max-w-xl text-body-lg text-secondary">
          Executive Builder OS design system — not shipped to production.
        </p>
      </header>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <nav
          className="flex shrink-0 flex-wrap gap-2 lg:sticky lg:top-24 lg:w-44 lg:flex-col lg:gap-1"
          aria-label="Component library sections"
        >
          {navSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="chip-tech text-left hover:border-border-strong hover:text-primary"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="min-w-0 flex-1 space-y-16">
          <ShowcaseSection
            id="tokens"
            title="Design Tokens"
            description="Core palette, surfaces, accents, and elevation."
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <TokenSwatch name="Background" variable="--color-bg" className="bg-bg" />
              <TokenSwatch name="Bg Soft" variable="--color-bg-soft" className="bg-bg-soft" />
              <TokenSwatch name="Surface" variable="--color-surface" className="bg-surface" />
              <TokenSwatch name="Surface 2" variable="--color-surface-2" className="bg-surface-2" />
              <TokenSwatch name="Surface 3" variable="--color-surface-3" className="bg-surface-3" />
              <TokenSwatch name="Text" variable="--color-text" className="bg-primary" />
              <TokenSwatch name="Text Muted" variable="--color-text-muted" className="bg-secondary" />
              <TokenSwatch name="Accent" variable="--color-accent" className="bg-accent" />
              <TokenSwatch name="Accent 2" variable="--color-accent-2" className="bg-accent-2" />
              <TokenSwatch name="Accent Warm" variable="--color-accent-warm" className="bg-accent-warm" />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="card-product p-6">
                <p className="text-meta text-subtle">--shadow-card</p>
              </div>
              <div
                className="rounded-[var(--radius-lg)] border border-border p-6"
                style={{ boxShadow: "var(--shadow-card-hover)" }}
              >
                <p className="text-meta text-subtle">--shadow-card-hover</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {(["sm", "md", "lg", "xl"] as const).map((size) => (
                  <div
                    key={size}
                    className="flex h-12 w-12 items-center justify-center border border-border bg-surface-2 text-meta text-subtle"
                    style={{ borderRadius: `var(--radius-${size})` }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="typography" title="Typography">
            <p className="mb-8 max-w-2xl text-body text-secondary">
              Styles come from CSS tokens in{" "}
              <code className="font-mono text-sm text-accent">app/globals.css</code>{" "}
              (<code className="font-mono text-sm text-subtle">--type-*</code> variables).
              Previews below use the same components and markup as the live site.
            </p>
            <div className="space-y-10">
              <div>
                <p className="text-meta text-subtle mb-2">
                  Hero · <code className="font-mono">Hero</code> ·{" "}
                  <code className="font-mono">--type-hero-letter-spacing</code>
                </p>
                <h1 className="max-w-5xl text-hero text-primary">
                  I don&apos;t just talk about AI.
                  <br />
                  <span className="text-hero-emphasis">I build with it.</span>
                </h1>
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">
                  Page H1 · <code className="font-mono">PageHeader</code> ·{" "}
                  <code className="font-mono">--type-page-h1-letter-spacing</code>
                </p>
                <PageHeader title="About" />
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">
                  Section H2 · <code className="font-mono">SectionHeader</code> ·{" "}
                  <code className="font-mono">--type-section-h2-letter-spacing</code>
                </p>
                <SectionHeader title="What I&apos;ve Built" className="!mb-0" />
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">
                  Card title · <code className="font-mono">ProjectCardTitle</code> ·{" "}
                  <code className="font-mono">--type-card-title-letter-spacing</code>
                </p>
                <ProjectCardTitle>Teller Family</ProjectCardTitle>
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">Body large</p>
                <p className="text-body-lg text-secondary">Twenty years of design leadership.</p>
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">Body</p>
                <p className="text-body text-secondary">Now I ship my own ideas.</p>
              </div>
              <div>
                <p className="text-meta text-subtle mb-2">Meta</p>
                <p className="text-meta text-subtle">Available in the App Store</p>
              </div>
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            id="buttons"
            title="Buttons"
            description="Hover states: primary lifts with accent green; secondary brightens border."
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Get in Touch</Button>
              <Button variant="secondary">Get in touch</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="links" title="Links">
            <div className="flex flex-wrap gap-6">
              <TextLink href="/work">Editorial link</TextLink>
              <TextLink href="https://example.com" external>
                External link
              </TextLink>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="chips" title="Chips & Badges">
            <div className="flex flex-wrap gap-3">
              <TagPill label="AI" variant="tech" />
              <TagPill label="Mobile" variant="tech" />
              <TagPill label="Workflow Automation" variant="tech" />
              <AppStoreBadge />
              <span className="chip-status">WORK IN PROGRESS</span>
              <span className="chip-role">Maker</span>
              <span className="chip-role chip-role--active">Leader</span>
              <span className="chip-role">Explorer</span>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="cards" title="Cards">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card variant="product" className="overflow-hidden">
                <PlaceholderImage alt="Demo" aspectRatio="16/9" workInProgress />
                <div className="p-7">
                  <ProjectCardTitle>Teller Family</ProjectCardTitle>
                  <p className="mt-2 text-body text-secondary">
                    Turn family photos into personalized illustrated bedtime stories with AI.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <TagPill label="AI" />
                    <TagPill label="Mobile" />
                  </div>
                </div>
              </Card>
              <Card variant="lab" className="overflow-hidden p-5">
                <ProjectCardTitle className="text-lg">Daily Vinyl Recommender</ProjectCardTitle>
                <p className="mt-2 text-sm text-secondary">
                  A personal tool that recommends vinyl based on mood and collection.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <TagPill label="AI" />
                  <TagPill label="Cursor" />
                </div>
              </Card>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="sections" title="Section Patterns">
            <SectionHeader
              eyebrow="Work"
              title="What I&apos;ve Built"
              description="Great products don't start with ideas. They start with a clear-eyed read of a problem or an opportunity."
            />
            <SectionDivider />
            <PageHeader
              title="Speaking"
              subtitle="I speak in practical, relatable terms about building with AI, and design leadership."
            />
          </ShowcaseSection>

          <ShowcaseSection id="navigation" title="Navigation">
            <div className="flex flex-wrap items-center gap-8">
              <a href="#" className="nav-link">
                Work
              </a>
              <a href="#" className="nav-link nav-link--active">
                About
              </a>
              <span className="nav-link text-primary">Hover state preview</span>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="forms" title="Forms">
            <div className="max-w-md space-y-4">
              <input
                type="text"
                className="field-input"
                placeholder="Name"
                readOnly
              />
              <textarea
                className="field-input min-h-[120px] resize-y"
                placeholder="Message"
                readOnly
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            id="motion"
            title="Motion"
            description="Duration 160–240ms, easing cubic-bezier(0.22, 1, 0.36, 1). Respects prefers-reduced-motion."
          >
            <p className="text-body text-secondary">
              Card hover lift, link underline transitions, hero fade-in on load.
              No count-up animations.
            </p>
          </ShowcaseSection>
        </div>
      </div>

      <footer className="mt-16 border-t border-border pt-8">
        <p className="text-meta text-subtle">
          Development only — not shipped
        </p>
      </footer>
    </div>
  );
}
