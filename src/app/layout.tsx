import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { SeoSchema } from "@/components/SeoSchema";
import { siteUrl } from "@/lib/site";
import { WebVitals } from "@/components/WebVitals";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Faizan Khan | AI Automation & Systems Architect",
    template: "%s | Faizan Khan",
  },

  description:
    "AI automation systems, workflow infrastructure, CRM architecture, and operational scaling for modern businesses.",

  keywords: [
    "AI Automation",
    "Systems Architect",
    "Workflow Automation",
    "CRM Architecture",
    "Operational Scaling",
    "n8n Automation",
    "Next.js Systems",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Faizan Khan",
    title: "Faizan Khan | AI Automation & Systems Architect",
    description:
      "AI automation systems, workflow infrastructure, CRM architecture, and operational scaling for modern businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Faizan Khan | AI Automation & Systems Architect",
    description:
      "AI automation systems, workflow infrastructure, CRM architecture, and operational scaling for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <SeoSchema />
        <Navbar />
        <main className="scroll-smooth">{children}</main>
        <Footer />
        <AnalyticsLoader />
        <WebVitals />
      </body>
    </html>
  );
}
