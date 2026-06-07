import Link from "next/link";
import Card from "@/components/Card";
import TagPill from "@/components/TagPill";
import type { Article } from "@/lib/data/articles";
import { getIsoDate } from "@/lib/data/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article>
      <Link href={`/perspectives/${article.slug}`} className="group block">
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-primary transition-colors duration-200 ease-in-out group-hover:text-accent-hover">
            {article.title}
          </h2>
          <time
            className="mt-2 block text-sm text-secondary"
            dateTime={getIsoDate(article.date)}
          >
            {article.date}
          </time>
          <p className="mt-4 text-base leading-relaxed text-secondary">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <TagPill label={article.topic} />
            <span className="text-sm font-medium text-accent transition-colors duration-200 ease-in-out group-hover:text-accent-hover">
              Read &rarr;
            </span>
          </div>
        </Card>
      </Link>
    </article>
  );
}
