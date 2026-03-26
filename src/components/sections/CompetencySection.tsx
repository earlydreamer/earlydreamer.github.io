"use client";

import { motion } from "framer-motion";
import { COMPETENCIES, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

export function CompetencySection() {
    const { competency } = SECTION_META;

    return (
        <Section
            id="competency"
            title={competency.title}
            subtitle={competency.subtitle}
            centered
            className="relative"
        >
            <div className="section-shell overflow-hidden px-5 py-6 md:px-6 md:py-8">
                <div className="section-shell-inner">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="liquid-shape h-[28rem] w-[28rem] bg-rose-200 dark:bg-rose-500/15 top-[15%] left-[-20%]" />
                    </div>
                    <div className="grid gap-5 pt-2 md:grid-cols-3 relative z-10">
                        {COMPETENCIES.map((competency, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 md:p-7"
                            >
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--primary)" }}>
                                        0{index + 1}
                                    </span>
                                    <div className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 18%, var(--border))" }} />
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold leading-snug md:text-xl" style={{ color: 'var(--foreground)' }}>
                                        {competency.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6" style={{ color: 'var(--primary)' }}>
                                        {competency.description}
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {competency.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
                                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" style={{ color: 'var(--primary)' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
