export type FlowNodeVariant = "default" | "old" | "old--pain" | "new" | "new--gain";

export type FlowStep = {
  label: string;
  variant?: FlowNodeVariant;
};

export type FlowTrack = {
  rowLabel?: string;
  rowLabelAccent?: boolean;
  steps: FlowStep[];
};

export type FlowVisualizerData = {
  label: string;
  ariaLabel?: string;
  steps?: FlowStep[];
  tracks?: FlowTrack[];
};

export type Metric = {
  value: string;
  label: string;
};

export type TimelineCarouselImage = {
  alt: string;
  src?: string;
  objectPosition?: "left" | "center";
  department?: string;
  quote?: string;
};

export type LeadershipTimelineStep = {
  label: string;
  title: string;
  image?: { src: string; alt: string; objectPosition?: "left" | "center" };
  bodyImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectFit?: "cover" | "contain";
  };
  placeholderAlt?: string;
  summary?: string;
  closingSummary?: string;
  detail?: string | string[];
  flowVisualizer?: FlowVisualizerData;
  carouselImages?: TimelineCarouselImage[];
  insight?: { icon?: string; text: string };
  metrics?: Metric[];
};

export type LeadershipTimeline = {
  eyebrow: string;
  steps: {
    problem: LeadershipTimelineStep;
    discovery: LeadershipTimelineStep;
    experiment?: LeadershipTimelineStep;
    solution: LeadershipTimelineStep;
    result?: LeadershipTimelineStep;
  };
};

export type ProjectTemplate = "default" | "leadership-timeline";
