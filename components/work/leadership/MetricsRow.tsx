import type { Metric } from "@/lib/data/leadership-timeline";

type MetricsRowProps = {
  metrics: Metric[];
};

export default function MetricsRow({ metrics }: MetricsRowProps) {
  return (
    <div className="metrics-row" data-count={metrics.length}>
      {metrics.map((metric) => (
        <div key={metric.label} className="metric">
          <span className="metric__value">{metric.value}</span>
          <span className="metric__label">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
