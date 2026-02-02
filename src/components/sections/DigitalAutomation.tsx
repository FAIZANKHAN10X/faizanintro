import { Section } from "@/components/layout/Section";

const automationPoints = [
  "Built and optimized CMS-based websites focused on performance and UX.",
  "Executed and scaled Meta ad campaigns using structured audience targeting.",
  "Designed CRM workflows for structured lead management and reporting.",
  "Developed automation systems using n8n, Make, and Zapier.",
  "Integrated AI tools for sales summarization and automated follow-ups.",
];

export function DigitalAutomation() {
  return (
    <Section id="digital-automation">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Digital & Automation Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {automationPoints.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-900 border border-neutral-800"
            >
              <p className="text-neutral-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
