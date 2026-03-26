"use client";

import { motion } from "framer-motion";
import { FREELANCE_EXPERIENCES, WORK_EXPERIENCES, Experience, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function ExperienceList({ experiences, icon, title, colorClass, intro }: { experiences: Experience[], icon: string, title: string, colorClass: string, intro?: string }) {
    return (
        <div className="section-shell overflow-hidden p-6 md:p-8">
            <div className="section-shell-inner">
            <h3 className={cn("mb-4 flex items-center gap-3 text-2xl font-bold", colorClass)}>
                <span className="text-3xl">{icon}</span> {title}
            </h3>

            {intro && (
                <p className="mb-8 whitespace-pre-wrap text-sm leading-7 md:text-base" style={{ color: 'var(--muted-foreground)' }}>
                    {intro}
                </p>
            )}

            <div className={cn("relative ml-3 space-y-12 border-l md:ml-4", !intro && "mt-8")} style={{ borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))" }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span
                            className="absolute -left-[10px] top-1.5 z-10 h-5 w-5 rounded-full border-4"
                            style={{
                                backgroundColor: "#6667AB",
                                borderColor: "color-mix(in srgb, #6667AB 28%, white)",
                            }}
                        />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h4 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>{exp.company}</h4>
                            <span
                                className="shrink-0 whitespace-nowrap text-sm font-semibold px-3 py-1 rounded-full border border-slate-300 dark:border-white/20"
                                style={{ backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}
                            >
                                {exp.period}
                            </span>
                        </div>

                        <div className={cn("text-lg font-medium mb-1", colorClass)}>
                            {exp.position}
                        </div>

                        <p className="mb-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {exp.description}
                        </p>

                        <div className="space-y-4">
                            {exp.projects.map((project, pIndex) => (
                                <div key={pIndex} className="rounded-[1.25rem] border p-5 transition-shadow hover:shadow-md" style={{ backgroundColor: 'color-mix(in srgb, var(--surface-soft) 92%, white)', borderColor: 'color-mix(in srgb, var(--primary) 14%, var(--border))' }}>
                                    <h5 className="font-bold text-lg mb-1" style={{ color: 'var(--foreground)' }}>{project.title}</h5>
                                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--primary)' }}>{project.description}</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1.5">
                                        {project.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
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
        </div>
    );
}

export function ExperienceSection() {
    const { experience } = SECTION_META;

    return (
        <Section id="experience" title={experience.title} subtitle={experience.subtitle} centered>
            <div className="flex flex-col gap-12 max-w-4xl mx-auto relative z-10">
                <ExperienceList
                    experiences={FREELANCE_EXPERIENCES}
                    icon={experience.developer.icon}
                    title={experience.developer.title}
                    colorClass="text-[#6667AB] dark:text-[#a8a9e0]"
                    intro={experience.developer.intro}
                />
                <ExperienceList
                    experiences={WORK_EXPERIENCES}
                    icon={experience.planner.icon}
                    title={experience.planner.title}
                    colorClass="text-[#6667AB] dark:text-[#a8a9e0]"
                    intro={experience.planner.intro}
                />
            </div>
        </Section>
    );
}
