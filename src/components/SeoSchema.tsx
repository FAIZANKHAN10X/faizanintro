import { siteUrl } from "@/lib/site";

export function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Faizan Khan",
        description:
          "AI automation systems, workflow infrastructure, CRM architecture, and operational scaling.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/journal?query={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Faizan Khan",
        url: siteUrl,
        jobTitle: "AI Automation & Systems Architect",
        description:
          "Independent systems architect specializing in AI workflow automation and scalable operational infrastructure.",
        sameAs: [
          "https://www.linkedin.com/in/faizankhan10x",
          "https://www.instagram.com/fznmco/",
        ],
      },
    ],
  };

  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
