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
        <h2 className="mb-4 hidden text-lg font-semibold text-primary lg:block">
          Topics
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() =>
                setActiveTopic(activeTopic === topic ? null : topic)
              }
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors duration-200 ease-in-out lg:rounded-none lg:bg-transparent lg:px-0 lg:py-1 lg:text-left ${
                activeTopic === topic
                  ? "bg-accent text-surface lg:bg-transparent lg:font-medium lg:text-primary"
                  : "bg-highlight text-secondary hover:text-primary lg:bg-transparent"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-primary">Recent</h2>
        <ul className="space-y-3">
          {recentArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/perspectives/${article.slug}`}
                className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
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
