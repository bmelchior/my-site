import type { FlowStep, FlowTrack, FlowVisualizerData } from "@/lib/data/leadership-timeline";

type FlowVisualizerProps = FlowVisualizerData;

function flowNodeClassName(variant?: FlowStep["variant"]): string {
  const classes = ["flow-node"];

  if (variant === "old" || variant === "old--pain" || variant === "default" || !variant) {
    classes.push("flow-node--old");
  }
  if (variant === "old--pain") {
    classes.push("flow-node--pain");
  }
  if (variant === "new" || variant === "new--gain") {
    classes.push("flow-node--new");
  }
  if (variant === "new--gain") {
    classes.push("flow-node--gain");
  }

  return classes.join(" ");
}

function FlowTrackRow({ track }: { track: FlowTrack }) {
  return (
    <div className="flow-track">
      {track.rowLabel && (
        <span
          className={`flow-track__row-label${track.rowLabelAccent ? " flow-track__row-label--accent" : ""}`}
        >
          {track.rowLabel}
        </span>
      )}
      {track.steps.map((step, index) => (
        <span key={`${step.label}-${index}`} className="contents">
          {index > 0 && <span className="flow-arrow">→</span>}
          <span className={flowNodeClassName(step.variant)}>
            <span className="flow-node__dot" />
            {step.label}
          </span>
        </span>
      ))}
    </div>
  );
}

function FlowStepsRow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flow-track">
      {steps.map((step, index) => (
        <span key={`${step.label}-${index}`} className="contents">
          {index > 0 && <span className="flow-arrow">→</span>}
          <span className={flowNodeClassName(step.variant)}>
            <span className="flow-node__dot" />
            {step.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function FlowVisualizer({
  label,
  ariaLabel,
  steps,
  tracks,
}: FlowVisualizerProps) {
  return (
    <div className="flow-viz" role="img" aria-label={ariaLabel ?? label}>
      <p className="flow-viz__label">{label}</p>
      {tracks && tracks.length > 0 ? (
        <div className="flow-viz__tracks">
          {tracks.map((track, index) => (
            <FlowTrackRow key={`${track.rowLabel ?? "track"}-${index}`} track={track} />
          ))}
        </div>
      ) : (
        steps && <FlowStepsRow steps={steps} />
      )}
    </div>
  );
}
