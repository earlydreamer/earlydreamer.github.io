"use client";

import { motion } from "framer-motion";
import { EDUCATION, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
    const { education } = SECTION_META;

    return (
        <Section id="education" title={education.title} subtitle={education.subtitle} centered className="pb-40">
            <div className="glass max-w-4xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="liquid-shape w-64 h-64 bg-yellow-200 bottom-[-50px] right-[-50px] opacity-20 blur-3xl rounded-full" />

                <div className="space-y-8 relative z-10">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-4 md:gap-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6667AB]/10 text-[#6667AB] shadow-sm">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                {index !== EDUCATION.length - 1 && (
                                    <div className="w-0.5 h-full bg-gradient-to-b from-[#6667AB]/20 to-transparent my-2" />
                                )}
                            </div>
                            <div className="flex-1 pb-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{edu.school}</h3>
                                    <span className="text-sm font-semibold text-[#6667AB]">{edu.period}</span>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-300 font-medium">{edu.course}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
