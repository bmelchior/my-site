import type { LeadershipTimeline } from "@/lib/data/leadership-timeline";

export const leadershipAccountabilityTimeline: LeadershipTimeline = {
  eyebrow: "Team Leadership",
  steps: {
    problem: {
      label: "Problem",
      title: "Retros produced insights, but the value faded fast",
      summary:
        "The typical retro format surfaces issues and opportunities, but everything's weighted equally, causing the exercise to feel more like venting.",
      detail: [
        "The classic retro format, Start Doing / Stop Doing / Continue Doing, always left me with more questions than answers.",
        "The team usually felt obligated to fill in columns, mixing serious issues with less urgent or even trivial problems. Also, the \"Stop Doing\" column ended up being pretty close to the opposite of \"Start Doing.\"",
        "With no clarity on what really matters, teams often felt like they weren't getting answers to the things that matter most to them.",
      ],
      insight: {
        icon: "!",
        text: "Teams often adopted the typical retro format, without questioning if it was working.",
      },
    },
    discovery: {
      label: "Discovery",
      title: "I worked with my research team to find the gaps",
      summary:
        "While working at Dish, I asked my researchers to lead retros and collect feedback from the team.",
      detail: [
        "I tried attending retros to offer context or solutions in real time. And I tried skipping them, to help the team feel more comfortable speaking openly and honestly.",
        "Patterns emerged quickly: the team didn't want to vent, they wanted solutions. Without guidance, small concerns became bigger issues. The team wanted to celebrate wins. And without clear progress, retros became repetitive.",
        "Teams wanted retros to feel like a working session — not a documentation exercise that disappeared into a shared doc.",
      ],
    },
    solution: {
      label: "Solution",
      title: "We tested a new retro format that was familiar, but more natural and actionable",
      image: {
        src: "/work/leadership-accountability/experiment-retro-matrix.png",
        alt: "Retro prioritization matrix with axes for work impact, well-being impact, and urgency",
      },
      summary:
        "The main improvement was to let the team think about how something affects them and the urgency of their concerns.",
      detail: [
        "First, letting the team think about what's working well, and give shout outs, opened the team up.",
        "Next, the \"How it Affects Me vs Urgency\" axis helped the team really think about their concerns and talk about how important they are.",
        "Lastly, having gone through wins and issues, future ideas came easily and some addressed current problems.",
        "Finally, the team's own ranking helped managers understand what to prioritize or respond to.",
      ],
      closingSummary:
        "To help managers stay accountable to improving how we work, I built an agent that posts a summary of last month's retro in our leadership Slack channel, and creates a new blank template for next month. In our Leads Meeting, we went through the summary and discussed how we could help.",
      flowVisualizer: {
        label: "Experiments run in parallel",
        ariaLabel: "Retro experiment tracks",
        tracks: [
          {
            rowLabel: "Old",
            steps: [
              { label: "Start Doing", variant: "old" },
              { label: "Stop Doing", variant: "old" },
              { label: "Continue Doing", variant: "old" },
            ],
          },
          {
            rowLabel: "New ✓",
            rowLabelAccent: true,
            steps: [
              { label: "Working Well", variant: "new--gain" },
              { label: "How it Affects Me vs Urgency", variant: "new--gain" },
              { label: "Ideas for Future", variant: "new--gain" },
            ],
          },
        ],
      },
    },
    result: {
      label: "Result",
      title: "More solutions and fewer issues",
      bodyImage: {
        src: "/work/leadership-accountability/result-retro-board.png",
        alt: "Retro board template with sections for wins, prioritized concerns, and future ideas",
        width: 1024,
        height: 391,
        objectFit: "contain",
      },
      summary:
        "Teams reported retros felt more empowering and purposeful — and leaders had a practical tool to maintain momentum between sessions.",
      detail: [
        "Participation improved when people saw their input lead to visible follow-through. The agent reduced the overhead of tracking commitments manually.",
        "Retros shifted from a recurring complaint session to a working rhythm the team could trust.",
      ],
      insight: {
        icon: "→",
        text: "**What I took from this:** Accountability isn't about more meetings or oversight — it's about designing a loop that makes commitments easy to make and hard to forget.",
      },
    },
  },
};
