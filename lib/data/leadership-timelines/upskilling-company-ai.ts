import type { LeadershipTimeline } from "@/lib/data/leadership-timeline";

export const upskillingCompanyAiTimeline: LeadershipTimeline = {
  eyebrow: "Education & Adoption",
  steps: {
    problem: {
      label: "Problem",
      title: "The company had AI access, but not AI fluency.",
      summary:
        "Employees were given tools like ChatGPT, and a company goal to find efficiency through AI, without the foundational understanding needed to use them confidently or responsibly on real work.",
      detail: [
        "As one of the vocal leaders pushing for access to AI tools, I led discussions and Q&A with my team to understand their skill and get them ready. And when we got access, I started a monthly lunch n' learn, built GPT's for their workflows, measured adoption, and discussed responsible usage.",
        "But when I spoke to other employees, I learned no other leaders were helping their teams adopt, or understand, AI for work.",
      ],
      insight: {
        icon: "!",
        text: "Access without education creates anxiety — not adoption.",
      },
    },
    discovery: {
      label: "Discovery",
      title: "I learned that without open discussion, employees didn't know where to begin, or used it in secret.",
      summary:
        "Before designing any training, I held conversations across teams to understand skill levels, fears, and the use cases people actually cared about.",
      detail: [
        "The gap wasn't technical — it was conceptual. People needed to understand what AI is, what it isn't, and how it could fit into work they already do.",
        "I also identified champions in each function who could model practical use and help peers get past the blank-page problem.",
      ],
    },
    experiment: {
      label: "Experimentation",
      title: "Every discussion fed the content for the workshop.",
      summary:
        "In addition to talking to employees, I partnered with the CTO to understand company goals around AI, which involved agentic workflows.",
      detail: [
        "It took me months of learning about AI to feel comfortable diving into agents. But I wanted to get people there in an hour.",
        "So I focused on demystifying AI, comparing tools, and breaking down how AI works, why it hallucinates, and how to reduce hallucination. I focused on low-stakes tasks so people could build confidence quickly.",
        "I knew it was important to stay out of the technical jargon and focus on examples people could relate to.",
      ],
      carouselImages: [
        {
          src: "/work/upskilling-company-ai/workshop/1.png",
          alt: "Intro to AI workshop title slide — AI at AXS for non-technical teams",
        },
        {
          src: "/work/upskilling-company-ai/workshop/2.png",
          alt: "What is AI slide — generative AI uses pattern recognition plus logic and reasoning",
        },
        {
          src: "/work/upskilling-company-ai/workshop/3.png",
          alt: "What is AI slide — comparing human learning and AI learning through pattern recognition",
        },
        {
          src: "/work/upskilling-company-ai/workshop/4.png",
          alt: "Most important terms slide — AI, model, LLM, and agent definitions",
        },
        {
          src: "/work/upskilling-company-ai/workshop/5.png",
          alt: "Think of AI as an eager intern slide",
        },
        {
          src: "/work/upskilling-company-ai/workshop/6.png",
          alt: "Agent 1 chat agent slide — customized LLM with instructions and documents",
        },
        {
          src: "/work/upskilling-company-ai/workshop/7.png",
          alt: "Prompt fundamentals slide — task, context, and constraints",
        },
        {
          src: "/work/upskilling-company-ai/workshop/8.png",
          alt: "ChatGPT workspace agent slide — build a new agent interface",
        },
        {
          src: "/work/upskilling-company-ai/workshop/9.png",
          alt: "Agent 2 workflow agent slide — autonomous AI with tools and knowledge",
        },
        {
          src: "/work/upskilling-company-ai/workshop/10.png",
          alt: "AI is not your average intern slide — accountability and training cut-off dates",
        },
      ],
    },
    solution: {
      label: "Solution",
      title: "Two company-wide AI upskilling workshops.",
      summary:
        "In April and May of 2026, I delivered two 90-minute Intro to AI Workshops to our international staff — from executives to entry-level.",
      detail: [
        "Every slide built on the previous one — literally the building blocks to getting started with AI. And at the core was a central repetitive theme: \"AI is only as good as the context and constraints you give it, and you're accountable for the output.\"",
        "The sessions were recorded, and have become the go-to resource that employees send each other to help them get a crash course on AI.",
        "An employee started a new Slack channel, \"AI Show And Tell,\" and multiple people across the company have shared GPT's and Agents they've built, and how they've streamlined their work.",
      ],
      carouselImages: [
        {
          src: "/work/upskilling-company-ai/slack-compilation.png",
          alt: "Slack messages from employees praising the AI training sessions",
        },
        {
          alt: "Program Management feedback on AI training",
          department: "Program Management",
          quote:
            "Hey! I wanted to reach out to appreciate the overview of AI at AXS you gave recently - [My manager] shared the decks with me and it's really straightforward and useful guide. I think with some practice and set up it could really enhance some work I do",
        },
        {
          alt: "Client Services feedback on AI training",
          department: "Client Services",
          quote:
            "Something fun I worked on after attending the AI training was creating a GPT to support the pre-validation process for the event builds we create for our full-service clients.",
        },
        {
          alt: "Executive Leadership feedback on AI training",
          department: "Executive Leadership",
          quote:
            "You did an excellent job today. Thanks so much for leaning in and pulling people along with you.",
        },
        {
          alt: "Marketing feedback on AI training",
          department: "Marketing",
          quote:
            "Finally got the chance to watch Part 1 of your AI training and wow! Really well done!! I know this took a lot of time and appreciate you taking the lead on helping the business grow in this area.",
        },
        {
          alt: "Engineering feedback on AI training",
          department: "Engineering",
          quote:
            "the deck is out of this world amazing! You've taken a complex and rapidly evolving space and spoken about it so clearly.",
        },
      ],
      insight: {
        icon: "→",
        text: "**What I took from this:** The fastest path to org-wide AI adoption isn't mandates — it's meeting people where they are and giving them language, examples, and confidence to start.",
      },
    },
  },
};
