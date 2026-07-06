import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/data/articles";
import { projects } from "@/lib/data/projects";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandonmelchior.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/about",
    "/perspectives",
    "/speaking",
    "/contact",
    "/photography",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${baseUrl}/perspectives/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries, ...projectEntries];
}
