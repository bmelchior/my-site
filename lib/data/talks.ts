export type Talk = {
  id: string;
  title: string;
  description: string;
  audiences: string[];
};

export const talks: Talk[] = [
  {
    id: "building-without-cofounder",
    title: "Building AI Products Without a Technical Co-Founder",
    description:
      "How I went from design executive to shipping AI-powered apps in the App Store — and what I learned about the tools, tradeoffs, and mindset shifts required.",
    audiences: ["Product Leaders", "Designers", "Founders"],
  },
  {
    id: "ai-for-non-engineers",
    title: "AI for Non-Engineers: A Practical Framework",
    description:
      "A hands-on session for anyone who wants to move beyond ChatGPT and start building real tools and workflows with AI.",
    audiences: ["Design Teams", "Operations", "Executives"],
  },
  {
    id: "builders-advantage",
    title: "The Builder's Advantage in AI",
    description:
      "Why the people who will win the AI era aren't theorists or strategists — they're the ones who ship.",
    audiences: ["Conferences", "Leadership Offsites", "Tech Teams"],
  },
];
