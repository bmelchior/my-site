import PageHeader from "@/components/PageHeader";
import TransitionWrapper from "@/components/TransitionWrapper";
import ArticleCard from "@/components/perspectives/ArticleCard";
import PerspectivesSidebar from "@/components/perspectives/PerspectivesSidebar";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAllArticles,
  getRecentArticles,
  getTopics,
} from "@/lib/data/articles";

export const metadata = createPageMetadata({
  title: "Perspectives",
  description:
    "Thoughts on building with AI, design leadership, and shipping products.",
  path: "/perspectives",
});

export default function PerspectivesPage() {
  const articles = getAllArticles();
  const recentArticles = getRecentArticles(3);
  const topics = getTopics();

  return (
    <div className="content-container py-12 md:py-16">
      <PageHeader
        title="Perspectives"
        subtitle="Thoughts on building with AI, design leadership, and shipping products."
        link={{
          label: "Find me on LinkedIn",
          href: "https://www.linkedin.com/in/bmelchior/",
        }}
      />

      <TransitionWrapper delay={0}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[65%_35%] lg:grid-cols-[70%_30%] lg:gap-12">
          <div className="order-2 md:order-1">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="order-1 md:order-2">
            <PerspectivesSidebar
              recentArticles={recentArticles}
              topics={topics}
            />
          </div>
        </div>
      </TransitionWrapper>
    </div>
  );
}
