import type { ReactNode } from "react";

type InsightCalloutProps = {
  icon?: string;
  children: ReactNode;
};

export default function InsightCallout({
  icon = "!",
  children,
}: InsightCalloutProps) {
  return (
    <div className="insight-callout">
      <span className="insight-callout__icon">{icon}</span>
      <div className="insight-callout__text">{children}</div>
    </div>
  );
}
