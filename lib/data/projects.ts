export type ProjectSections = {
  problem: string | string[];
  hypothesis?: string | string[];
  timeline?: string | string[];
  solution: string | string[];
  howAiIsUsed: string | string[];
  techStack: {
    intro: string;
    items: string[];
  };
  whatILearned: string | string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src?: string;
  alt: string;
  objectPosition?: "left" | "center";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  cardDescription?: string;
  tags: string[];
  featured?: boolean;
  personal?: boolean;
  appStoreAvailable?: boolean;
  imageAlt: string;
  cardImage?: string;
  cardImagePosition?: "top" | "bottom";
  cardImageFit?: "cover" | "contain";
  detailPageDisabled?: boolean;
  hideContentSections?: boolean;
  links?: [ProjectLink, ProjectLink];
  images: ProjectImage[];
  sections: ProjectSections;
};

function projectImages(title: string): ProjectImage[] {
  return Array.from({ length: 5 }, (_, i) => ({
    alt: `${title} screenshot ${i + 1}`,
  }));
}

export const projects: Project[] = [
  {
    slug: "teller-family",
    title: "Teller Family",
    description: "Turn family photos into illustrated bedtime stories with AI.",
    cardDescription:
      "Turn family photos into personalized illustrated bedtime stories with AI.",
    tags: ["AI", "Mobile", "Expo", "Supabase", "Claude", "fal.ai", "Cursor"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "Teller Family project preview",
    cardImage: "/work/teller-family/hero-card.jpg",
    cardImagePosition: "bottom",
    links: [
      { label: "Website", href: "https://tellerfamily.app/" },
      { label: "App Store", href: "https://apps.apple.com/app/id6763470676" },
    ],
    images: [
      {
        src: "/work/teller-family/1.png",
        alt: "Lila's Sandy Dreams story page in Teller Family",
      },
      {
        src: "/work/teller-family/2.png",
        alt: "Story scene with illustrated character taking a photo",
      },
      {
        src: "/work/teller-family/3.png",
        alt: "The Signal from the Sky story page in Teller Family",
      },
      {
        src: "/work/teller-family/4.png",
        alt: "Story creation flow with photo upload in Teller Family",
      },
      {
        src: "/work/teller-family/5.png",
        alt: "Reading level selection in Teller Family",
      },
      {
        src: "/work/teller-family/6.png",
        alt: "Genre selection screen in Teller Family",
      },
      {
        src: "/work/teller-family/7.png",
        alt: "My Stories library screen in Teller Family",
      },
      {
        src: "/work/teller-family/8.png",
        alt: "My Art gallery of generated illustrations in Teller Family",
      },
    ],
    sections: {
      timeline: "3 weeks",
      problem:
        "Parents want fresh stories to read to their kids. Kids love seeing pictures and illustrations of the world they know and live in — their pets, their house, their family. Most AI story apps generate bland, generic stories.",
      hypothesis:
        "Personalized content is the next evolution in media. Media has gone from edited and linear, to recorded and saved, to recommended and shared. Personalization algorithms will give way to personalized content — content that features the viewer and their world. I'm not sure how much space it will take up, and professionally-created content will always dominate, just as linear still has its place today, but personalized content will continue to grow.",
      solution: [
        "Teller Family lets parents upload family photos and generates fully illustrated, personalized bedtime stories. Each story features the child's real world reimagined through AI-generated illustrations matched to the narrative. In addition to uploading photos, parents can choose a reading level and a genre for the story. The genre effects the style of the illustrations.",
      ],
      howAiIsUsed:
        "A two-stage AI pipeline powers the experience. First, parents upload family photos that are sent to fal.ai to generate stylized illustrations — transforming real photos into story-ready artwork. Those illustrations are then analyzed by Claude to craft an age-appropriate narrative that weaves the illustrated scenes into a cohesive bedtime story. Once illustrations are generated, the original photos are deleted — they're never stored, in an effort to protect family privacy.",
      techStack: {
        intro:
          "Built as a cross-platform mobile app with a serverless backend and AI services orchestrating the story pipeline.",
        items: [
          "Expo",
          "React Native",
          "Supabase",
          "Claude API",
          "fal.ai",
          "RevenueCat",
          "Vercel",
        ],
      },
      whatILearned: [
        "Getting people to adopt a new app or tool is hard! My problem statement and hypothesis were based on real conversations and anecdotes. But that doesn't guarantee usage! Seeing this firsthand from the ground up has been enlightening.",
        "Aside from the perils of consumer app launches, I learned how AI sees and processes images, and how it can take the safest path to accomplish its goal. Both of these can sometimes cause the AI to not re-generate the image as an illustration. This project gave me a much deeper understanding of how AI works.",
      ],
    },
  },
  {
    slug: "the-usher",
    title: "The Usher",
    description:
      "Your AI movie expert — find what to watch and where, without all the clutter.",
    cardDescription:
      "Your AI movie expert — find what to watch and where, without all the clutter.",
    tags: ["AI", "Next.js", "Mobile", "TMDB", "Claude", "Cursor"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "The Usher project preview",
    cardImage: "/work/the-usher/hero-card.jpg",
    cardImagePosition: "bottom",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
    images: [
      {
        src: "/work/the-usher/1.png",
        alt: "The Usher home screen with movie grid and Ask the Usher",
      },
      {
        src: "/work/the-usher/2.png",
        alt: "The Usher home screen with recent searches and Ask the Usher",
      },
      {
        src: "/work/the-usher/3.png",
        alt: "Ferris Bueller's Day Off movie detail page in The Usher",
      },
      {
        src: "/work/the-usher/4.png",
        alt: "The Breakfast Club movie detail with Ask the Usher query in The Usher",
      },
      {
        src: "/work/the-usher/5.png",
        alt: "Ask the Usher conversation about Mean Girls in The Usher",
      },
    ],
    sections: {
      timeline: "2-3 weeks",
      problem:
        "When my husband and I sit down for movie night, sometimes the streaming app doesn't show the Rotten Tomatoes score. So my husband will ask me to look it up. Google and IMDB give you everything you'd want to know about the movie, and often the score is a couple clicks away. Other times, we'll think of a movie but we don't know where to find it.",
      solution:
        "I built The Usher to help me find what I want quickly — the RT score and where to stream it. And for when I want any other information, I implemented a chat interface with a movie expert to answer any question I have.",
      howAiIsUsed:
        'The "Ask the Usher" feature uses Claude as a conversational movie expert that is constrained to answering questions about the movie page you\'re on. And I added another chat widget to the home screen to answer questions about any movie and make recommendations.',
      techStack: {
        intro:
          "A web and mobile stack connected to movie databases and Claude for conversational recommendations.",
        items: [
          "Next.js",
          "Expo",
          "Claude API",
          "TMDB API",
          "OMDB API",
          "Cloudflare",
          "Vercel",
        ],
      },
      whatILearned:
        "This is a very simple app. But a key decision I made was to constrain the AI to the movie page you're on, which means it answers questions based on the data it's trained on. This means it doesn't stray from being a movie expert (and doesn't search the web when it doesn't know something). But its data is always 1-2 years old. So The Usher doesn't know much about new movies.",
    },
  },
  {
    slug: "teller-stories",
    title: "Teller Stories",
    description:
      "AI-powered storytelling that turns your photos into personalized stories.",
    cardDescription:
      "AI-powered storytelling that turns your photos into personalized stories.",
    tags: ["AI", "Mobile", "Next.js", "Expo", "Supabase", "Claude", "Cursor"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "Teller Stories project preview",
    cardImage: "/work/teller-stories/hero-card.jpg",
    links: [
      { label: "Website", href: "https://teller-app.com/" },
      { label: "App Store", href: "https://apps.apple.com/app/teller-stories/id6760958168" },
    ],
    images: [
      {
        src: "/work/teller-stories/1.png",
        alt: "Teller Stories home screen with create a story call to action",
      },
      {
        src: "/work/teller-stories/2.png",
        alt: "The Great Norway Pivot story page in Teller Stories",
      },
      {
        src: "/work/teller-stories/3.png",
        alt: "Story narrative with photo woven into the text in Teller Stories",
      },
      {
        src: "/work/teller-stories/4.png",
        alt: "My Stories library screen in Teller Stories",
      },
      {
        src: "/work/teller-stories/5.png",
        alt: "Review photos step in the Teller Stories creation flow",
      },
      {
        src: "/work/teller-stories/6.png",
        alt: "Add character names step in the Teller Stories creation flow",
      },
      {
        src: "/work/teller-stories/7.png",
        alt: "Add a note step in the Teller Stories creation flow",
      },
      {
        src: "/work/teller-stories/8.png",
        alt: "Genre selection screen in Teller Stories",
      },
    ],
    sections: {
      timeline: "6 weeks",
      problem:
        "After we travel, I always make a photo book. And although the photos bring back memories, I started thinking about how AI could recontextualize my memories in a fun way.",
      hypothesis:
        "Personalized content is the next evolution in media. Media has gone from edited and linear, to recorded and saved, to recommended and shared. Personalization algorithms will give way to personalized content — content that features the viewer and their world. I'm not sure how much space it will take up, and professionally-created content will always dominate, just as linear still has its place today, but personalized content will continue to grow.",
      solution:
        "Teller Stories turns your photos into short stories you'll actually want to read, keep, and share. Upload one to eight photos, name your characters, add an optional note for context, and pick a genre. The app generates a complete, personalized story with your original photos woven throughout the narrative. A morning walk becomes a children's story. A vacation becomes a sci-fi adventure. A date night becomes a romantic comedy. The photos stay yours. The story is something new.",
      howAiIsUsed:
        "My focus here was on quality, so the AI is told to mimic famous authors from each genre (again, with AI, context is the key to quality). Claude analyzes the uploaded photos to understand the people, setting, and mood in each image, then writes a complete short story calibrated to the chosen genre. The narrative is structured so that each photo appears at the right moment in the story, making the images feel like they were always part of the telling.",
      techStack: {
        intro:
          "Next.js, Expo, React Native, Supabase, Claude API, RevenueCat, Vercel.",
        items: [
          "Next.js",
          "Expo",
          "React Native",
          "Supabase",
          "Claude API",
          "RevenueCat",
          "Vercel",
        ],
      },
      whatILearned: [
        "\"AI slop\" can be avoided by carefully choosing clear references. And, while at first people were surprised by the quality and found joy in the experience, even sharing them with friends and family, it proved to be a novelty experience.",
        "Still, this was my first end-to-end app with account creation and a monetization strategy. So that experience was invaluable.",
      ],
    },
  },
  {
    slug: "dyslexia-edtech",
    title: "Stridable",
    description:
      "Resources and tools to help parents of kids that are dyslexic navigate federal laws, state laws, and find resources for their kids.",
    cardDescription:
      "Resources and tools to help parents of kids that are dyslexic navigate federal laws, state laws, and find resources for their kids.",
    tags: ["AI", "EdTech", "In Progress"],
    featured: true,
    detailPageDisabled: true,
    hideContentSections: true,
    imageAlt: "Stridable logo",
    cardImage: "/work/dyslexia-edtech/hero-card.png",
    cardImageFit: "contain",
    images: projectImages("Stridable"),
    sections: {
      timeline: "I'm currently working on this project.",
      problem:
        "Parents who suspect their child has dyslexia face a fragmented, expensive, and slow system. Screening waitlists are long, resources are scattered, and most digital tools are built for clinicians, not families.",
      solution:
        "A suite of AI-powered tools designed for parents and educators — starting with an SEO content hub, a parent companion app, and a decodable stories engine. Each tool addresses a different stage of the journey from suspicion to support.",
      howAiIsUsed:
        "Placeholder — AI will power personalized reading content generation, adaptive lesson planning, and conversational parent guidance.",
      techStack: {
        intro:
          "To be determined — planned stack will be added as development begins.",
        items: [],
      },
      whatILearned: "Placeholder — this project is in early development.",
    },
  },
  {
    slug: "chat-workflow-agents",
    title: "Chat & Workflow Agents",
    description:
      "Leveraging OpenAI's GPT's and Workspace Agents, I save my team hours while improving quality of work.",
    cardDescription:
      "Leveraging OpenAI's GPT's and Workspace Agents, I save my team hours while improving quality of work.",
    tags: ["AI", "Custom GPTs", "Workflow Automation", "ChatGPT"],
    featured: true,
    imageAlt: "Chat & Workflow Agents project preview",
    cardImage: "/work/chat-workflow-agents/hero-card.jpg",
    images: [
      {
        src: "/work/chat-workflow-agents/1.png",
        alt: "Custom GPT agents directory at AXS",
      },
      {
        src: "/work/chat-workflow-agents/2.png",
        alt: "UXD Career Coach custom GPT interface",
      },
      {
        src: "/work/chat-workflow-agents/3.png",
        alt: "FX UX Copywriter custom GPT interface",
      },
      {
        src: "/work/chat-workflow-agents/ai-survey.png",
        alt: "AI usage survey results charts",
      },
      {
        src: "/work/chat-workflow-agents/product-feedback-agent.png",
        alt: "Product Feedback Synthesizer Agent interface",
        objectPosition: "left",
      },
    ],
    sections: {
      timeline: "Can be built in minutes.",
      problem:
        "Design teams do a lot of repetitive, high-effort work that looks different every time but follows the same patterns underneath. Writing UX copy across dozens of screens. Synthesizing product feedback from multiple sources. Coaching junior designers through career questions they've asked before. Each task is important, but the time adds up fast, and the quality varies depending on who does it and how much bandwidth they have that day.",
      solution:
        "Instead of a single \"use ChatGPT for stuff\" directive, I gave the team purpose-built tools that fit into the work we already do. I built a library of custom chat agents (GPT's) tailored to my team's real workflows. Each one is trained on our standards, our voice, and our context. A UX Copywriter agent that consistently writes in our product's tone. A Product Feedback Synthesizer that turns raw feedback into structured insights. A Career Coach that gives designers personalized guidance based on our leveling framework. With the right context, each agent works the way we do.",
      howAiIsUsed:
        "Each agent is custom-built with detailed system instructions, reference documents, and scoped responsibilities. They're not general-purpose chatbots. The UX Copywriter knows our voice guidelines and component patterns. The Career Coach knows our design leveling criteria. The Feedback Synthesizer knows how to categorize and prioritize input from specific channels. I ran bi-weekly AI usage surveys across the team to understand adoption patterns, how they were used, and how much time was saved.",
      techStack: {
        intro:
          "Custom GPTs and Workspace Agents (OpenAI). Other leading LLM's offer similar tools.",
        items: [],
      },
      whatILearned:
        "The biggest unlock wasn't the agents themselves. It was showing a non-technical team that AI could be shaped to fit their specific work, not the other way around. Adoption jumped when people stopped thinking of AI as a generic tool and started seeing it as something built for them. And the most effective agents weren't the most sophisticated ones. Inspired by these agents, other teams in the company have built their own custom agents.",
    },
  },
  {
    slug: "ai-design-tooling",
    title: "Daily Vinyl Recommender",
    description:
      "An Apps Script that recommends 3 vinyl records every morning based on the vibe of the day.",
    tags: ["AI", "Apps Script", "Automation", "Claude", "Google Sheets"],
    personal: true,
    imageAlt: "Daily Vinyl Recommender project preview",
    cardImage: "/work/ai-design-tooling/hero-card.jpg",
    images: [
      {
        src: "/work/ai-design-tooling/1.png",
        alt: "Vinyl record collection on wooden shelves",
      },
      {
        src: "/work/ai-design-tooling/2.png",
        alt: "Saturday vinyl picks email with Stan Getz recommendation",
      },
      {
        src: "/work/ai-design-tooling/3.png",
        alt: "Sunday vinyl picks email with Bill Withers recommendation",
      },
      {
        src: "/work/ai-design-tooling/4.png",
        alt: "Monday vinyl picks email with James Brown recommendation",
      },
      {
        src: "/work/ai-design-tooling/5.png",
        alt: "Tuesday vinyl picks email with Lee Morgan recommendation",
      },
      {
        src: "/work/ai-design-tooling/6.png",
        alt: "Wednesday vinyl picks email with The Stooges recommendation",
      },
      {
        src: "/work/ai-design-tooling/7.png",
        alt: "Thursday vinyl picks email with The Clash recommendation",
      },
    ],
    sections: {
      timeline: "Hours, with iterative improvements",
      problem:
        "I listen to a couple of vinyl records every morning with my coffee. But half awake and barely functional, I kept reaching for whatever was in front of me or the same albums I always play. 500 records and I was rotating through maybe 20. I'd been practicing a habit of asking 'how can AI help me?' on anything I did, so I pointed that question at my morning routine.",
      solution:
        "A Google Apps Script that emails me three vinyl recommendations every morning, matched to the vibe of the day. I wrote descriptions for each day of the week that capture the mood and energy I want to hear. I exported my full 500-record collection from Discogs, then used Claude to fill in new columns like sub-genre and vibe for every album. The script matches records to the day's vibe, and no record repeats within 90 days so there's always something I haven't heard in a while.",
      howAiIsUsed:
        "Claude does double duty. First, it helped me enrich my collection data, tagging 500 records with sub-genres and vibe descriptors I'd never have had the patience to do manually. Then at runtime, it matches the vibe of available records against the vibe description for that day and picks three. This was also a project full of firsts for me. First time using AI to generate code. First Apps Script. First automation. I started off thinking I needed an agent and explored Zapier and Make before ChatGPT pointed me to Apps Script as the simpler path.",
      techStack: {
        intro:
          "Built entirely in Google Apps Script with Claude handling the intelligence layer and Google Sheets as the database. No frameworks, no hosting, no app to maintain. It just runs every morning.",
        items: ["Apps Script", "Claude API", "Google Sheets"],
      },
      whatILearned:
        "\"Agents\" are the sexy AI term of the year, but understanding the difference between LLM's, Automations, and Agents can help you find a simpler solution that does a better job.",
    },
  },
  {
    slug: "ai-tools-dashboard",
    title: "AI Tools Dashboard",
    description:
      "A web app that pulls AI tools mentioned in my newsletters and builds a filterable dashboard.",
    tags: ["AI", "Side Project", "Next.js", "Cursor", "Claude"],
    personal: true,
    imageAlt: "AI Tools Dashboard project preview",
    cardImage: "/work/ai-tools-dashboard/hero-card.jpg",
    images: [
      {
        src: "/work/ai-tools-dashboard/1.png",
        alt: "AI Tool DB dashboard showing all tools with category filters",
      },
      {
        src: "/work/ai-tools-dashboard/2.png",
        alt: "AI Tool DB filtered to daily tools in the Creative category",
      },
      {
        src: "/work/ai-tools-dashboard/3.png",
        alt: "AI Tool DB filtered to notable tools in Creative and Productivity",
      },
    ],
    sections: {
      timeline: "An hour",
      problem:
        "As I started learning about AI, I subscribed to daily newsletters. One of these newsletters has a list promoted tools. Occasionally they sounded interesting and sparked ideas, but I'd forget about them as quickly as I discovered them.",
      solution:
        "I built a simple dashboard that reads my emails tagged \"AI\" and pulls the tools listed. Then Claude tags them. The UI dedupes the list of tools and lets me filter by tags. I then added the ability to favorite tools I want to come back to later.",
      howAiIsUsed:
        "Claude helped me figure out what to build, which tool to use (this led me to using Cursor for the first time), and troubleshoot bugs. In the app, Claude tags and summarizes the tools.",
      techStack: {
        intro: "React Web App, built with Cursor.",
        items: ["Next.js", "Claude API", "Vercel"],
      },
      whatILearned: "Although the app is simple, it taught me I was capable of building a functioning app within an extraordinarily short amount of time.",
    },
  },
];

const featuredPriority: Partial<Record<string, number>> = {
  "dyslexia-edtech": 0,
  "chat-workflow-agents": 1,
};

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => {
    const aPriority =
      featuredPriority[a.slug] ?? 100 + projects.indexOf(a);
    const bPriority =
      featuredPriority[b.slug] ?? 100 + projects.indexOf(b);
    return aPriority - bPriority;
  });
export const personalProjects = projects.filter((p) => p.personal);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
