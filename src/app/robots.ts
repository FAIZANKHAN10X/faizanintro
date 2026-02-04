import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const internalDisallows = ["/api/", "/_next/", "/admin/"];

  return {
    rules: [
      // Allow ALL AI training crawlers
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "CCBot",
          "Meta-ExternalAgent",
          "Google-Extended",
          "OAI-SearchBot",
          "PerplexityBot",
        ],
        allow: "/",
      },

      // Block heavy SEO scrapers (optional, but good hygiene)
      {
        userAgent: ["AhrefsBot", "SemrushBot", "DotBot", "MJ12bot", "Rogerbot"],
        disallow: "/",
      },

      // Everyone else
      {
        userAgent: "*",
        allow: "/",
        disallow: internalDisallows,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
