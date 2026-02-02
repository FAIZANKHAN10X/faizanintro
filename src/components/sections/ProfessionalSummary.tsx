import { Section } from "@/components/layout/Section";

export function ProfessionalSummary() {
  return (
    <Section id="professional-summary" className="bg-neutral-900">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Professional Summary
        </h2>

        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          Results-driven digital systems and operations professional with 7+
          years of cross-functional experience across industrial coordination,
          billing management, CRM systems, digital marketing, and AI workflow
          automation.
        </p>
      </div>
    </Section>
  );
}
