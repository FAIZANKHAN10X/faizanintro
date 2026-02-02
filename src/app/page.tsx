import { Hero } from "@/components/sections/Hero";
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary";
import { CoreCompetencies } from "@/components/sections/CoreCompetencies";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { DigitalAutomation } from "@/components/sections/DigitalAutomation";
import { Communication } from "@/components/sections/Communication";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfessionalSummary />
      <CoreCompetencies />
      <ProfessionalExperience />
      <DigitalAutomation />
      <Communication />
    </>
  );
}
