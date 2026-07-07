import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { LeadershipTimelineStep } from "@/lib/data/leadership-timeline";
import FlowVisualizer from "./FlowVisualizer";
import InsightCallout from "./InsightCallout";
import MetricsRow from "./MetricsRow";
import TimelineImageCarousel from "./TimelineImageCarousel";

export type TimelineStepVariant =
  | "problem"
  | "discovery"
  | "experiment"
  | "solution"
  | "result";

type TimelineStepProps = LeadershipTimelineStep & {
  variant: TimelineStepVariant;
  animationDelay?: number;
};

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);

  return parts.map((part, index) => {
    const boldMatch = part.match(/^\*\*(.+?)\*\*$/);

    if (boldMatch) {
      return <strong key={index}>{boldMatch[1]}</strong>;
    }

    return part;
  });
}

function renderDetail(detail?: string | string[]) {
  if (!detail) return null;

  const paragraphs = Array.isArray(detail) ? detail : [detail];
  return paragraphs.map((paragraph) => (
    <p key={paragraph.slice(0, 40)} className="timeline-step__detail">
      {renderInlineBold(paragraph)}
    </p>
  ));
}

function renderSummary(summary?: string | string[]) {
  if (!summary) return null;

  const paragraphs = Array.isArray(summary) ? summary : [summary];
  return paragraphs.map((paragraph) => (
    <p key={paragraph.slice(0, 40)} className="timeline-step__summary">
      {paragraph}
    </p>
  ));
}

function renderInsightText(text: string) {
  const boldMatch = text.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);

  if (boldMatch) {
    return (
      <>
        <strong>{boldMatch[1]}</strong> {boldMatch[2]}
      </>
    );
  }

  return text;
}

export default function TimelineStep({
  variant,
  label,
  title,
  image,
  bodyImage,
  placeholderAlt,
  summary,
  closingSummary,
  detail,
  flowVisualizer,
  carouselImages,
  insight,
  metrics,
  animationDelay,
}: TimelineStepProps) {
  return (
    <article
      className={`timeline-step timeline-step--${variant}`}
      style={animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <div className="timeline-step__node-wrap">
        <div className="timeline-step__node">{label}</div>
      </div>

      <h2 className="timeline-step__title">{title}</h2>

      {(image?.src || placeholderAlt) && (
        <div className="timeline-step__image">
          {image?.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={1520}
              height={665}
              className={`h-full w-full object-cover${image.objectPosition === "left" ? " object-left" : ""}`}
              sizes="(max-width: 760px) 100vw, 760px"
            />
          ) : (
            <PlaceholderImage
              alt={placeholderAlt ?? title}
              aspectRatio="16/7"
              className="h-full border-0 bg-transparent"
            />
          )}
        </div>
      )}

      <div className="timeline-step__body">
        {bodyImage ? (
          <div className="timeline-step__body-image">
            <Image
              src={bodyImage.src}
              alt={bodyImage.alt}
              width={bodyImage.width}
              height={bodyImage.height}
              className={
                bodyImage.objectFit === "cover" ? "object-cover" : undefined
              }
              sizes="(max-width: 760px) 100vw, 760px"
            />
          </div>
        ) : (
          metrics &&
          metrics.length > 0 && <MetricsRow metrics={metrics} />
        )}

        {renderSummary(summary)}

        {carouselImages && carouselImages.length > 0 && (
          <div className="timeline-step__carousel-ribbon">
            <TimelineImageCarousel images={carouselImages} />
          </div>
        )}

        {flowVisualizer && <FlowVisualizer {...flowVisualizer} />}

        {renderDetail(detail)}

        {closingSummary && (
          <p className="timeline-step__summary">{closingSummary}</p>
        )}

        {insight && (
          <InsightCallout icon={insight.icon}>
            {renderInsightText(insight.text)}
          </InsightCallout>
        )}
      </div>
    </article>
  );
}
