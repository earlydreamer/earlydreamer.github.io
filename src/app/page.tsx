import { ProfileSection } from "@/components/sections/ProfileSection";
import { CompetencySection } from "@/components/sections/CompetencySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24 pt-20 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(102,103,171,0.1),_transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[36rem] h-[42rem] bg-[radial-gradient(circle_at_20%_20%,_rgba(240,146,92,0.08),_transparent_28%),radial-gradient(circle_at_80%_30%,_rgba(102,103,171,0.08),_transparent_32%)]" />
      <div className="flex flex-col gap-6 md:gap-10">
      <ProfileSection />
      <ProjectsSection />
      <CompetencySection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      </div>
    </div>
  );
}
