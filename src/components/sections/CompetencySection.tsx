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
                        className="glass-card p-8 border-t-4 border-t-[#6667AB]"
                    >
                        {/* Title + Description 밀착 */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                {competency.title}
                            </h3>
                            <p className="text-sm font-medium text-[#6667AB] dark:text-[#8889CC] mt-1">
                                {competency.description}
                            </p>
                        </div>

                        {/* Items */}
                        <ul className="space-y-2.5">
                            {competency.items.map((item, i) => (
                                <li key={i} className="flex gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 items-start leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#6667AB] shrink-0 mt-0.5" />
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
