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
                <p className="mb-8 leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--muted-foreground)' }}>
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
                        <span className={cn("absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full ring-4 ring-slate-200 dark:ring-slate-700", colorClass.replace('text-', 'bg-'))} />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h4 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>{exp.company}</h4>
                            <span className="text-sm font-semibold px-3 py-1 rounded-full border border-slate-300 dark:border-white/20" style={{ backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}>{exp.period}</span>
                        </div>

                        <div className={cn("text-lg font-medium mb-1", colorClass)}>
                            {exp.position}
                        </div>

                        <p className="mb-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {exp.description}
                        </p>

                        <div className="space-y-4">
                            {exp.projects.map((project, pIndex) => (
                                <div key={pIndex} className="rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
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
    );
}

export function ExperienceSection() {
    const { experience } = SECTION_META;

    return (
        <Section id="experience" title={experience.title} subtitle={experience.subtitle} centered>
            {/* Lighting effects - 중간톤: violet, purple */}
            <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
                <div className="liquid-shape w-[550px] h-[550px] bg-violet-100 dark:bg-violet-500/15 top-[-80px] right-[-250px] opacity-60 animate-pulse" style={{ animationDuration: "13s" }} />
                <div className="liquid-shape w-64 h-64 bg-purple-100 dark:bg-purple-500/15 top-1/3 left-[-100px] opacity-50 animate-pulse" style={{ animationDuration: "9s" }} />
                <div className="liquid-shape w-48 h-48 bg-fuchsia-100 dark:bg-fuchsia-500/15 bottom-10 right-[10%] opacity-40 animate-pulse" style={{ animationDuration: "17s" }} />
            </div>
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

