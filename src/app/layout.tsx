import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { ConsentProvider } from "@/context/ConsentContext";
import { SeoSchema } from "@/components/SeoSchema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faizan | Digital Systems & Automation",
    template: "%s | Faizan",
  },
  description:
    "Digital systems, automation, operations, and AI workflow implementation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Faizan",
    title: "Faizan | Digital Systems & Automation",
    description:
      "Digital systems, automation, operations, and AI workflow implementation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan | Digital Systems & Automation",
    description:
      "Digital systems, automation, operations, and AI workflow implementation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <ConsentProvider>
          <Navbar />
          <main className="scroll-smooth">{children}</main>
          <Footer />
          <CookieBanner />
          <AnalyticsLoader />
        </ConsentProvider>
      </body>
    </html>
  );
}
