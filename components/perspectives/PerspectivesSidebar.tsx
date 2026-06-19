"use client";

import Link from "next/link";
import { useState } from "react";
import type { Article } from "@/lib/articles";

type PerspectivesSidebarProps = {
  recentArticles: Pick<Article, "slug" | "title">[];
  topics: string[];
};

export default function PerspectivesSidebar({
  recentArticles,
  topics,
}: PerspectivesSidebarProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="mb-8 lg:mb-12">
        <h2 className="mb-4 hidden text-meta text-subtle lg:block">Topics</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() =>
                setActiveTopic(activeTopic === topic ? null : topic)
              }
              className={`shrink-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] lg:text-left ${
                activeTopic === topic
                  ? "chip-role chip-role--active"
                  : "chip-tech hover:border-border-strong hover:text-primary"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-meta text-subtle">Recent</h2>
        <ul className="space-y-4">
          {recentArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/perspectives/${article.slug}`}
                className="link-editorial text-sm text-secondary"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
