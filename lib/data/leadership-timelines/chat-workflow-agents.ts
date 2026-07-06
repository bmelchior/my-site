import type { LeadershipTimeline } from "@/lib/data/leadership-timeline";

export const chatWorkflowAgentsTimeline: LeadershipTimeline = {
  eyebrow: "Process Improvement",
  steps: {
    problem: {
      label: "Problem",
      title: "Guidelines & Process docs were piling up, but not being used",
      // image: {
      //   src: "/work/chat-workflow-agents/1.png",
      //   alt: "Custom GPT agents directory at AXS",
      // },
      summary:
        "AI exposed opportunities to rethink decades-old corporate habits, where guidelines and processes were consumed and then forgotten.",
      detail: [
        "Historically, a leader would create a document to define principles or processes that determine how a team works. The document was presented, then shared with the team. From there, the team was expected to follow it.",
        "Inevitably, the document would be forgotten about, sitting on a Drive collecting digital dust, and process and work would suffer. The leader would notice this, re-share the document, and the cycle continues.",
        "Onboarding new team members became \"drinking from the firehose,\" as new employees received a pile of documents.",
      ],
      flowVisualizer: {
        label: "Current workflow",
        ariaLabel: "Old workflow steps",
        steps: [
          { label: "Process & guidelines documented", variant: "old" },
          { label: "Document shared", variant: "old" },
          { label: "Work continues", variant: "old" },
          { label: "Guidelines forgotten", variant: "old--pain" },
          { label: "Time consuming design reviews", variant: "old--pain" },
          { label: "Inconsistent quality", variant: "old--pain" },
        ],
      },
      insight: {
        icon: "!",
        text: "Processes and quality guidelines were forgotten as fast as they were presented, leading to wasted time and gaps in communication and expectations.",
      },
    },
    discovery: {
      label: "Discovery",
      title: "I studied how AI can maintain context across users",
      image: {
        src: "/work/chat-workflow-agents/discovery-ai-workflow.png",
        alt: "Diagram of AI tools and data sources connected through a central context hub for team communication",
      },
      summary:
        "As I was learning about AI throughout 2024-25, I experimented with multiple workflows and tools to understand how AI works.",
      detail: [
        "Before landing on ChatGPT Enterprise at work, I learned about Agents, Automations, Projects and Chat Agents (Gems & GPTs) and I applied them to as many personal use cases as I could, tracking strengths and weaknesses of each method.",
      ],
    },
    experiment: {
      label: "Experimentation",
      title: "I built chat agents and tested GPT's with a few team members",
      image: {
        src: "/work/chat-workflow-agents/experiment-team-testing.png",
        alt: "Diagram of team members exchanging messages and documents through a central AI hub",
      },
      summary:
        "I safely built test GPT's on my personal account, then rolled them out to a representative sample of team members with a range of AI experience.",
      detail: [
        "I abstracted work documents to safely use on my personal account so I could test specific use cases.",
        "I led open discussions with my team to understand everyone's skill level and experience with AI. The team was all over the map.",
        "Once the company landed on ChatGPT, I built a few GPT's to test with four team members on real use cases. The early testers had varying levels of AI skill, so they were representative of the broader team.",
      ],
      flowVisualizer: {
        label: "3-step process",
        ariaLabel: "Three experiment tracks",
        tracks: [
          {
            rowLabel: "Identify",
            steps: [
              { label: "Heavy documentation", variant: "old--pain" },
              { label: "Requires vendors", variant: "old--pain" },
              { label: "Inconsistent quality", variant: "old--pain" },
            ],
          },
          {
            rowLabel: "Test",
            steps: [
              { label: "Collect documents", variant: "old" },
              { label: "Define constraints", variant: "old" },
              { label: "Test & refine", variant: "new" },
            ],
          },
          {
            rowLabel: "Build",
            rowLabelAccent: true,
            steps: [
              { label: "Build custom GPT agents", variant: "new--gain" },
              { label: "Controlled tests", variant: "new--gain" },
              { label: "Refine & distribute", variant: "new--gain" },
            ],
          },
        ],
      },
    },
    solution: {
      label: "Solution",
      title: "A library of purpose-built agents for real design workflows.",
      image: {
        src: "/work/chat-workflow-agents/solution-agent-capabilities.png",
        alt: "Diagram of AI agent capabilities for writing, thinking, researching, collaborating, and synthesizing",
      },
      summary:
        "Instead of a single \"use ChatGPT for stuff\" directive, I gave the team agents tailored to the work we already do — each trained on our standards, voice, and context.",
      detail: [
        "I built a library of custom chat agents (GPT's) tailored to my team's real workflows that follow a defined process or are driven by quality guidelines. I also included other scenarios with a heavy dependence on documentation.",
        "A User Research Assistant turned 5 process documents into a single chat agent that can also improve research plans and synthesize research. A UX Copywriter wrote based on voice and tone guidelines, industry glossary and design principles. A Career Coach is a 24/7 professional coach based on our Career Ladder. A PRINT Coach turned our company-wide personality assessment into a collaboration coach.",
      ],
      flowVisualizer: {
        label: "New workflow",
        ariaLabel: "New workflow steps",
        steps: [
          { label: "Documented processes", variant: "new" },
          { label: "Design new workflow", variant: "new--gain" },
          { label: "Build & share GPT", variant: "new--gain" },
          { label: "Monitor & improve", variant: "new" },
        ],
      },
    },
    result: {
      label: "Result",
      title: "Higher quality. Faster output. Broader adoption.",
      image: {
        src: "/work/chat-workflow-agents/result-survey-metrics.png",
        alt: "Survey results charts showing strategic thinking, brainstorming, time savings, and quality improvements",
      },
      metrics: [
        { value: "9", label: "purpose-built agents built by my team" },
        { value: "$65k+", label: "Minimum annual retainer saved on UX copywriter" },
        { value: "100%", label: "Design team adoption" },
      ],
      summary:
        "The agent library was adopted by the full design team within weeks — not because of mandates, but because it made people's jobs easier.",
      detail: [
        "Adoption jumped when people stopped thinking of AI as a generic tool and started seeing it as something built for them. And the most effective agents weren't the most sophisticated ones. Inspired by these agents, other teams in the company have built their own custom agents.",
        "To measure adoption and effectiveness, I surveyed the team every 2 weeks, asking them which tools and GPT's they're using, how much time they estimate they're saving, and how AI is helping them.",
        "I also collected ideas, feedback, and let designers share their projects through a monthly AI lunch and learn.",
      ],
      insight: {
        icon: "→",
        text: "**What I took from this:** The biggest unlock wasn't the agents themselves — it came from strategically redesigning workflows that empowered team members and met them where they were in their individual AI journeys.",
      },
    },
  },
};
