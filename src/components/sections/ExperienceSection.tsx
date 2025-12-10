"use client";

import { motion } from "framer-motion";
import { FREELANCE_EXPERIENCES, WORK_EXPERIENCES, Experience, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function ExperienceList({ experiences, icon, title, colorClass, intro }: { experiences: Experience[], icon: string, title: string, colorClass: string, intro?: string }) {
    return (
        <div className="glass p-8 rounded-3xl">
            <h3 className={cn("text-2xl font-bold mb-4 flex items-center gap-3", colorClass)}>
                <span className="text-3xl">{icon}</span> {title}
            </h3>

            {intro && (
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed whitespace-pre-wrap">
                    {intro}
                </p>
            )}

            <div className={cn("relative border-l-2 border-zinc-200 dark:border-zinc-700 ml-3 md:ml-4 space-y-12", !intro && "mt-8")}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span className={cn("absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-background border-4", colorClass.replace('text-', 'border-'))} />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{exp.company}</h4>
                            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">{exp.period}</span>
                        </div>

                        <div className={cn("text-lg font-medium mb-4", colorClass)}>
                            {exp.position}
                        </div>

                        <p className="mb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {exp.description}
                        </p>

                        <div className="space-y-4">
                            {exp.projects.map((project, pIndex) => (
                                <div key={pIndex} className="bg-white/50 dark:bg-zinc-900/50 rounded-xl p-5 border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                                    <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">{project.title}</h5>
                                    <p className="text-sm font-medium text-[#6667AB] dark:text-[#8889CC] mb-3">{project.description}</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1.5">
                                        {project.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function ExperienceSection() {
    const { experience } = SECTION_META;

    return (
        <Section id="experience" title={experience.title} subtitle={experience.subtitle} centered>
            <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                <ExperienceList
                    experiences={FREELANCE_EXPERIENCES}
                    icon={experience.developer.icon}
                    title={experience.developer.title}
                    colorClass="text-blue-600 dark:text-blue-400"
                    intro={experience.developer.intro}
                />
                <ExperienceList
                    experiences={WORK_EXPERIENCES}
                    icon={experience.planner.icon}
                    title={experience.planner.title}
                    colorClass="text-[#6667AB]"
                    intro={experience.planner.intro}
                />
            </div>
        </Section>
    );
}

