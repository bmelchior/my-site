import Link from "next/link";
import type { Article } from "@/lib/data/articles";
import { getIsoDate } from "@/lib/data/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="border-b border-border py-8 first:pt-0">
      <Link
        href={`/perspectives/${article.slug}`}
        className="group block"
      >
        <h2 className="text-xl font-semibold text-primary transition-colors duration-200 ease-in-out group-hover:text-accent-hover">
          {article.title}
        </h2>
        <time
          className="mt-2 block text-sm text-secondary"
          dateTime={getIsoDate(article.date)}
        >
          {article.date}
        </time>
        <p className="mt-3 line-clamp-2 text-base text-secondary">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-accent transition-colors duration-200 ease-in-out group-hover:text-accent-hover">
          Read &rarr;
        </span>
      </Link>
    </article>
  );
}
