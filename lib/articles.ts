import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content/perspectives");

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  topic: string;
  content: string;
};

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function getMonthIndex(name: string): number {
  return MONTHS[name.slice(0, 3)] ?? 0;
}

function parseDate(date: string): number {
  const normalized = date.replace(/,/g, "").trim();

  const fullMatch = normalized.match(/^(\w+)\s+(\d{1,2})\s+(\d{4})$/);
  if (fullMatch) {
    return new Date(
      Number(fullMatch[3]),
      getMonthIndex(fullMatch[1]),
      Number(fullMatch[2]),
    ).getTime();
  }

  const monthMatch = normalized.match(/^(\w+)\s+(\d{4})$/);
  if (monthMatch) {
    return new Date(Number(monthMatch[2]), getMonthIndex(monthMatch[1]), 1).getTime();
  }

  return 0;
}

export function getIsoDate(date: string): string | undefined {
  const timestamp = parseDate(date);
  if (!timestamp) return undefined;
  return new Date(timestamp).toISOString().slice(0, 10);
}

function parseArticleFile(filename: string): Article {
  const filePath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split("\n");

  const metadata: Record<string, string> = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (!match) break;
    metadata[match[1]] = match[2].trim();
    i++;
  }

  while (i < lines.length && lines[i].trim() === "") i++;

  let content = lines.slice(i).join("\n").trim();
  content = content.replace(/^#\s+.+\n\n?/, "");
  content = content.replace(/^\*\*.+\*\*\n\n?/, "");

  return {
    slug: metadata.slug ?? filename.replace(/\.md$/, ""),
    title: metadata.title ?? "",
    date: metadata.date ?? "",
    excerpt: metadata.excerpt ?? "",
    topic: metadata.topic ?? "",
    content,
  };
}

function loadArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parseArticleFile)
    .sort(
      (a, b) =>
        parseDate(b.date) - parseDate(a.date) ||
        a.title.localeCompare(b.title),
    );
}

let cachedArticles: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (process.env.NODE_ENV === "development") {
    return loadArticles();
  }

  if (!cachedArticles) {
    cachedArticles = loadArticles();
  }
  return cachedArticles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getAdjacentArticles(slug: string): {
  prev: Article | null;
  next: Article | null;
} {
  const articles = getAllArticles();
  const index = articles.findIndex((article) => article.slug === slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? articles[index - 1] : null,
    next: index < articles.length - 1 ? articles[index + 1] : null,
  };
}

export function getRecentArticles(count = 3): Article[] {
  return getAllArticles().slice(0, count);
}

export function getTopics(): string[] {
  const topics = new Set(
    getAllArticles()
      .map((article) => article.topic)
      .filter(Boolean),
  );
  return Array.from(topics).sort();
}
