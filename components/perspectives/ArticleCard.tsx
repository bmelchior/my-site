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
        <Card variant="default" className="p-7 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <TagPill label={article.topic} variant="tech" />
            <time
              className="text-meta text-subtle"
              dateTime={getIsoDate(article.date)}
            >
              {article.date}
            </time>
          </div>
          <h2 className="mt-4 text-card-title text-primary transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:text-accent">
            {article.title}
          </h2>
          <p className="mt-3 text-body text-secondary">{article.excerpt}</p>
          <span className="mt-5 inline-block text-sm font-medium text-primary underline decoration-border-strong underline-offset-4 transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent group-hover:decoration-accent">
            Read &rarr;
          </span>
        </Card>
      </Link>
    </article>
  );
}
