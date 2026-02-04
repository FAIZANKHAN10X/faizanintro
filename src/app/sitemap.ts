import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseRoutes = ["/", "/booking", "/privacy", "/terms", "/journal"];

  const postsDirectory = path.join(process.cwd(), "content/journal");

  let journalRoutes: string[] = [];

  if (fs.existsSync(postsDirectory)) {
    const postFiles = fs.readdirSync(postsDirectory);

    journalRoutes = postFiles
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => `/journal/${file.replace(".mdx", "")}`);
  }

  const routes = [...baseRoutes, ...journalRoutes];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.6,
  }));
}
