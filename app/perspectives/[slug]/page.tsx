import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/perspectives/ArticleContent";
import TagPill from "@/components/TagPill";
import TextLink from "@/components/TextLink";
import TransitionWrapper from "@/components/TransitionWrapper";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAllArticles,
  getAdjacentArticles,
  getArticleBySlug,
  getIsoDate,
} from "@/lib/data/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/perspectives/${slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(slug);

  return (
    <article className="content-container py-12 md:py-16">
      <div className="mx-auto max-w-[720px]">
        <TransitionWrapper delay={0}>
          <TagPill label={article.topic} />
          <h1 className="mt-4 text-hero text-primary">{article.title}</h1>
          <time
            className="mt-4 block text-meta text-subtle"
            dateTime={getIsoDate(article.date)}
          >
            {article.date}
          </time>
          <ArticleContent content={article.content} />
        </TransitionWrapper>

        <nav
          className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Article navigation"
        >
          <TextLink href="/perspectives" className="text-sm font-medium">
            &larr; Back to Perspectives
          </TextLink>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {prev && (
              <Link
                href={`/perspectives/${prev.slug}`}
                className="link-editorial text-sm text-secondary"
              >
                &larr; {prev.title}
              </Link>
            )}
            {next && (
              <Link
                href={`/perspectives/${next.slug}`}
                className="link-editorial text-sm text-secondary"
              >
                {next.title} &rarr;
              </Link>
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
