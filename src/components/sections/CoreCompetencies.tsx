import { Section } from "@/components/layout/Section";

const competencies = [
  "Operations & Project Coordination",
  "CRM & Sales Systems",
  "Billing & Financial Documentation",
  "Website Development (CMS)",
  "Meta Ads & Paid Acquisition",
  "AI Workflow Automation (n8n, Make, Zapier)",
  "Process Optimization",
  "Stakeholder Communication",
];

export function CoreCompetencies() {
  return (
    <Section id="core-competencies">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors"
            >
              <p className="text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
