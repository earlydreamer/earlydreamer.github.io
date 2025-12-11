import { ProfileSection } from "@/components/sections/ProfileSection";
import { CompetencySection } from "@/components/sections/CompetencySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20 pt-24">
      <ProfileSection />
      <CompetencySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}
