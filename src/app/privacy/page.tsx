import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy outlining data collection, usage, and protection practices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>

        <p className="text-neutral-400 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">1. Information We Collect</h2>
          <p>
            We may collect basic information such as your name, email address,
            and any details you provide when booking a strategy call or
            contacting us. We also collect anonymous analytics data to improve
            performance and user experience.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">2. How We Use Information</h2>
          <p>
            Information is used to respond to inquiries, schedule calls, improve
            website performance, and analyze traffic patterns. We do not sell or
            rent personal data to third parties.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">3. Cookies & Analytics</h2>
          <p>
            This site may use cookies and analytics tools to measure usage and
            improve performance. You may accept or decline analytics tracking
            via the cookie preferences banner.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">4. Data Protection</h2>
          <p>
            Reasonable technical measures are taken to protect your data.
            However, no online system is completely secure.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">5. Contact</h2>
          <p>
            For privacy-related inquiries, please contact us through the
            official booking or communication channels listed on the website.
          </p>
        </section>
      </div>
    </main>
  );
}
