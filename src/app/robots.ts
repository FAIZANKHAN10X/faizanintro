import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://faizanintroduction.netlify.app";

const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

// Toggle: allow training crawlers or not
const allowTraining = process.env.ALLOW_AI_TRAINING === "true";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const internalDisallows = ["/api/", "/_next/", "/admin/"];

  return {
    rules: [
      // AI TRAINING (block by default)
      ...(allowTraining
        ? []
        : [
            {
              userAgent: [
                "GPTBot", // OpenAI training crawler [page:1]
                "ClaudeBot", // Anthropic training crawler [page:2]
                "CCBot", // Common Crawl (often used in training pipelines)
                "Meta-ExternalAgent",
              ],
              disallow: "/",
            },
          ]),

      // Gemini: do NOT block Google-Extended if your goal is AI visibility;
      // it doesn't affect Google Search indexing, but can affect AI usage. [page:3]
      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      // High-load SEO scrapers
      {
        userAgent: ["AhrefsBot", "SemrushBot", "DotBot", "MJ12bot", "Rogerbot"],
        disallow: "/",
      },

      // Everyone else (includes Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          ...internalDisallows,
          // Optional; only keep if you actually generate crawlable query URLs:
          // "/*?*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
