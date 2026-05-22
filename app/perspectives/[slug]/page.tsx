import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/perspectives/ArticleContent";
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
          <h1 className="text-3xl font-semibold text-primary lg:text-4xl">
            {article.title}
          </h1>
          <time
            className="mt-4 block text-sm text-secondary"
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
          <Link
            href="/perspectives"
            className="text-sm font-medium text-accent transition-colors duration-200 ease-in-out hover:text-accent-hover"
          >
            &larr; Back to Perspectives
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {prev && (
              <Link
                href={`/perspectives/${prev.slug}`}
                className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
              >
                &larr; {prev.title}
              </Link>
            )}
            {next && (
              <Link
                href={`/perspectives/${next.slug}`}
                className="text-sm text-secondary transition-colors duration-200 ease-in-out hover:text-primary"
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
