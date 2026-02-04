import { siteUrl } from "@/lib/site";

export function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Faizan | Digital Systems & Automation",
        description:
          "Digital systems, automation, operations, and AI workflow implementation.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Faizan Khan",
        url: siteUrl,
        jobTitle: "Independent Systems Architect",
        description:
          "Independent Systems Architect specializing in high-performance automation and digital experiences.",
        sameAs: [
          "https://www.linkedin.com/in/...",
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
