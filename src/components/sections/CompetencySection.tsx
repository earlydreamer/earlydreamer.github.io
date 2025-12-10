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
            <div className="liquid-shape w-[500px] h-[500px] bg-pink-200 top-1/2 left-0 opacity-30 -translate-x-1/2 blur-3xl p-20" />

            <div className="grid md:grid-cols-3 gap-8 pt-8 relative z-10">
                {COMPETENCIES.map((competency, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 flex flex-col gap-4 border-t-4 border-t-[#6667AB]"
                    >
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                            {competency.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                            {competency.description}
                        </p>
                        <ul className="space-y-3 mt-4">
                            {competency.items.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-[#6667AB] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
