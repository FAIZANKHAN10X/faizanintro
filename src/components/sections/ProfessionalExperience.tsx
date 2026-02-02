import { Section } from "@/components/layout/Section";

const experiences = [
  "Managed end-to-end billing operations including invoicing, vendor coordination, payment tracking, and documentation control.",
  "Worked on-site for distillery plant construction projects, supporting execution, coordination, and reporting.",
  "Participated in strategic meetings with enterprise leadership across large industrial organizations.",
  "Coordinated engineers, contractors, and internal teams to maintain project timelines and reporting accuracy.",
];

export function ProfessionalExperience() {
  return (
    <Section id="professional-experience" className="bg-neutral-900">
      <div className="space-y-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Professional Experience
        </h2>

        <ul className="space-y-6 text-neutral-400 leading-relaxed">
          {experiences.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-neutral-600">{index + 1}.</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
