"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { WORKFLOW_STEPS, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function CollaborationSection() {
    const { collaboration } = SECTION_META;

    return (
        <Section
            id="collaboration"
            title={collaboration.title}
            subtitle={collaboration.subtitle}
            centered
            className="relative"
        >
            <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
                <div className="liquid-shape w-[420px] h-[420px] bg-sky-100 dark:bg-sky-500/15 top-10 left-[-180px] opacity-60" />
                <div className="liquid-shape w-[360px] h-[360px] bg-emerald-100 dark:bg-emerald-500/15 bottom-0 right-[-120px] opacity-50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto pt-8">
                <div className="space-y-4 md:space-y-5">
                    {WORKFLOW_STEPS.map((principle, index) => {
                        const isAiStep = principle.accent === "ai";

                        return (
                            <motion.article
                                key={principle.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.06 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div
                                    className="rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
                                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                                >
                                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="shrink-0 whitespace-nowrap rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold dark:border-white/20"
                                                style={{ backgroundColor: "var(--muted)", color: "var(--muted-foreground)" }}
                                            >
                                                Step {principle.step}
                                            </span>
                                            <h3 className="text-xl font-bold break-keep" style={{ color: "var(--foreground)" }}>
                                                {principle.title}
                                            </h3>
                                        </div>
                                        {isAiStep && (
                                            <span
                                                className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold"
                                                style={{
                                                    backgroundColor: "var(--muted)",
                                                    color: "var(--muted-foreground)",
                                                    borderColor: "var(--border)",
                                                }}
                                            >
                                                <Bot className="h-3.5 w-3.5" />
                                                AI Assisted
                                            </span>
                                        )}
                                    </div>

                                    <p className="mb-4 text-sm font-medium leading-relaxed break-keep" style={{ color: "var(--primary)" }}>
                                        {principle.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {principle.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2.5 text-sm leading-relaxed"
                                                style={{ color: "var(--muted-foreground)" }}
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
