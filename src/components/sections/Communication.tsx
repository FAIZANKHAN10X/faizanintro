import { Section } from "@/components/layout/Section";

const communicationPoints = [
  "Fluent in English with strong written and verbal communication skills.",
  "Active participant in international business and technology communities.",
  "Regular engagement in English-based discussions and virtual conferences.",
  "Continuous self-learning in digital systems, automation technologies, and AI tools.",
];

export function Communication() {
  return (
    <Section id="communication" className="bg-neutral-900">
      <div className="space-y-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Communication & Professional Development
        </h2>

        <div className="space-y-6 text-neutral-400 leading-relaxed">
          {communicationPoints.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
