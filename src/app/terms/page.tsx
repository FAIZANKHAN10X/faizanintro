import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of this website and related services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold">Terms of Service</h1>

        <p className="text-neutral-400 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">1. Use of Website</h2>
          <p>
            This website is provided for informational purposes. By accessing
            this site, you agree to use it lawfully and not engage in misuse,
            disruption, or unauthorized access.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">2. Services</h2>
          <p>
            Any services discussed on this website are subject to individual
            agreements and contracts. Nothing on this website constitutes a
            binding offer.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">3. Limitation of Liability</h2>
          <p>
            The website and its content are provided “as is.” We are not liable
            for any damages resulting from use of this website.
          </p>
        </section>

        <section className="space-y-4 text-neutral-300 text-sm leading-relaxed">
          <h2 className="text-xl font-medium">4. Changes</h2>
          <p>
            These terms may be updated periodically. Continued use of the
            website constitutes acceptance of updated terms.
          </p>
        </section>
      </div>
    </main>
  );
}
