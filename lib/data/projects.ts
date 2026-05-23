export type ProjectSections = {
  problem: string | string[];
  hypothesis?: string | string[];
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
  detailPageDisabled?: boolean;
  links: [ProjectLink, ProjectLink];
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
    slug: "chat-workflow-agents",
    title: "Chat & Workflow Agents",
    description:
      "Custom agents that save my team hours while improving quality of work.",
    cardDescription:
      "Custom agents that save my team hours while improving quality of work.",
    tags: ["AI", "EdTech", "In Progress"],
    featured: true,
    imageAlt: "Chat & Workflow Agents project preview",
    cardImage: "/work/chat-workflow-agents/card.png",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
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
      problem: "Placeholder — will write later.",
      solution: "Placeholder — will write later.",
      howAiIsUsed: "Placeholder — will write later.",
      techStack: {
        intro:
          "To be determined — planned stack will be added as development begins.",
        items: [],
      },
      whatILearned: "Placeholder — will write later.",
    },
  },
  {
    slug: "teller-family",
    title: "Teller Family",
    description: "Turn family photos into illustrated bedtime stories with AI.",
    cardDescription:
      "Turn family photos into personalized illustrated bedtime stories with AI.",
    tags: ["AI", "Mobile", "Expo", "Supabase", "Claude", "fal.ai"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "Teller Family project preview",
    cardImage: "/work/teller-family/card.png",
    cardImagePosition: "bottom",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
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
      problem:
        "Parents want to create personalized stories for their kids but don't have the time or illustration skills to make them special. Generic children's books can't include the child's own world — their pets, their house, their family.",
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
      whatILearned: "Placeholder — will write later.",
    },
  },
  {
    slug: "the-usher",
    title: "The Usher",
    description: "Your AI movie expert — skip the scrolling, find what to watch.",
    cardDescription: "Your AI movie expert — skip the scrolling, find what to watch.",
    tags: ["AI", "Next.js", "Mobile", "TMDB", "Claude"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "The Usher project preview",
    cardImage: "/work/the-usher/card-v2.png",
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
      problem:
        "Picking a movie shouldn't take longer than watching one. Streaming platforms optimize for engagement, not for helping you find something you'll actually enjoy. You end up scrolling for 30 minutes and settling.",
      solution:
        "The Usher is a movie discovery app with an AI-powered conversational expert. Tell it what you're in the mood for, and it recommends films based on taste, mood, and streaming availability — no algorithm, no endless browsing.",
      howAiIsUsed:
        'The "Ask the Usher" feature uses Claude as a conversational movie expert that considers your preferences, mood, and viewing history to make tailored recommendations. It pulls real-time data from TMDB and OMDB for ratings and streaming availability.',
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
      whatILearned: "Placeholder — will write later.",
    },
  },
  {
    slug: "teller-stories",
    title: "Teller Stories",
    description:
      "AI-powered storytelling that turns your photos into personalized stories.",
    cardDescription:
      "AI-powered storytelling that turns your photos into personalized stories.",
    tags: ["AI", "Mobile", "Next.js", "Expo", "Supabase", "Claude"],
    featured: true,
    appStoreAvailable: true,
    imageAlt: "Teller Stories project preview",
    cardImage: "/work/teller-stories/card.png",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
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
      problem:
        "Your photos sit in a camera roll, sorted by date, forgotten by next week. The moments they capture matter, but nobody has time to turn them into something more. Scrapbooks are a project. Journals fall off after a week. The photos just pile up.",
      hypothesis:
        "Personalized content is the next evolution in media. Media has gone from edited and linear, to recorded and saved, to recommended and shared. Personalization algorithms will give way to personalized content — content that features the viewer and their world. I'm not sure how much space it will take up, and professionally-created content will always dominate, just as linear still has its place today, but personalized content will continue to grow.",
      solution:
        "Teller Stories turns your photos into short stories you'll actually want to read, keep, and share. Upload one to eight photos, name your characters, add an optional note for context, and pick a genre. The app generates a complete, personalized story with your original photos woven throughout the narrative. A morning walk becomes a children's story. A vacation becomes a sci-fi adventure. A date night becomes a romantic comedy. The photos stay yours. The story is something new.",
      howAiIsUsed:
        "Claude analyzes the uploaded photos to understand the people, setting, and mood in each image, then writes a complete short story calibrated to the chosen genre. The narrative is structured so that each photo appears at the right moment in the story, making the images feel like they were always part of the telling. No illustrations are generated. Your real photos are the visuals.",
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
      whatILearned: "Placeholder — will write later.",
    },
  },
  {
    slug: "dyslexia-edtech",
    title: "Dyslexia EdTech Suite",
    description:
      "AI tools that help parents and educators support struggling readers.",
    cardDescription:
      "AI tools that help parents and educators support struggling readers — coming soon",
    tags: ["AI", "EdTech", "In Progress"],
    featured: true,
    detailPageDisabled: true,
    imageAlt: "Dyslexia EdTech Suite project preview",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
    images: projectImages("Dyslexia EdTech Suite"),
    sections: {
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
    slug: "ai-design-tooling",
    title: "Daily Vinyl Recommender",
    description:
      "An Apps Script that recommends 3 vinyl records every morning based on the vibe of the day.",
    tags: ["AI", "Apps Script", "Automation"],
    personal: true,
    imageAlt: "Daily Vinyl Recommender project preview",
    cardImage: "/work/ai-design-tooling/card.png",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
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
      whatILearned: "Placeholder — will write later.",
    },
  },
  {
    slug: "recipe-scraper",
    title: "AI Tools Dashboard",
    description:
      "A web app that pulls AI tools mentioned in my newsletters and builds a filterable dashboard.",
    tags: ["AI", "Side Project", "Next.js"],
    personal: true,
    imageAlt: "AI Tools Dashboard project preview",
    cardImage: "/work/recipe-scraper/card.png",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
    images: projectImages("AI Tools Dashboard"),
    sections: {
      problem:
        "Placeholder — Recipe blogs bury the actual instructions under life stories and ads. Saving a clean version means manual copy-paste.",
      solution:
        "Placeholder — Paste a URL and get a structured recipe with ingredients and steps, stripped of everything else.",
      howAiIsUsed:
        "Placeholder — Claude parses page HTML and extracts a normalized recipe format.",
      techStack: {
        intro: "Placeholder — A lightweight web app built to test extraction quality.",
        items: ["Next.js", "Claude API", "Vercel"],
      },
      whatILearned: "Placeholder — will write later.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
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
