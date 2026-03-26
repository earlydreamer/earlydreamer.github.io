"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function ProfileSection() {
    return (
        <Section id="about" className="pt-14 md:pt-20">
            <div className="section-shell overflow-hidden px-6 py-8 md:px-8 md:py-9">
                <div className="section-shell-inner">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="liquid-shape h-72 w-72 bg-[#6667AB]/18 top-8 right-8" />
                        <div className="liquid-shape h-64 w-64 bg-amber-200/35 bottom-0 left-[12%]" />
                    </div>

                    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative z-10 space-y-6"
                        >
                            <div className="space-y-3">
                                <span className="text-sm font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>
                                    About Me
                                </span>
                                <div className="space-y-2.5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--primary)" }}>
                                        {PROFILE.greeting}
                                    </p>
                                    <h1 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl" style={{ color: "var(--foreground)" }}>
                                        {PROFILE.name}
                                    </h1>
                                    <p className="max-w-2xl text-lg font-semibold md:text-xl" style={{ color: "color-mix(in srgb, var(--foreground) 88%, var(--primary))" }}>
                                        {PROFILE.role}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(220px,0.55fr)]">
                                <div
                                    className="rounded-[1.5rem] border p-5 md:p-6"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--surface-strong) 92%, white)",
                                        borderColor: "color-mix(in srgb, var(--primary) 14%, var(--border))",
                                    }}
                                >
                                    <p className="whitespace-pre-wrap break-keep text-[15px] leading-7 md:text-base md:leading-8" style={{ color: "var(--muted-foreground)" }}>
                                        {PROFILE.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                                    {PROFILE.stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-[1.25rem] border px-4 py-4"
                                            style={{
                                                backgroundColor: "color-mix(in srgb, var(--surface-soft) 94%, white)",
                                                borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                            }}
                                        >
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--primary)" }}>
                                                {stat.label}
                                            </p>
                                            <p className="mt-2 text-xl font-semibold md:text-2xl" style={{ color: "var(--foreground)" }}>
                                                {stat.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {PROFILE.github && (
                                    <Link
                                        href={PROFILE.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                                        style={{
                                            backgroundColor: "var(--primary)",
                                            color: "var(--primary-foreground)",
                                            boxShadow: "0 18px 36px -24px color-mix(in srgb, var(--primary) 88%, transparent)",
                                        }}
                                    >
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </Link>
                                )}
                                {PROFILE.email && (
                                    <Link
                                        href={`mailto:${PROFILE.email}`}
                                        className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                                        style={{
                                            borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                            backgroundColor: "color-mix(in srgb, var(--surface-soft) 90%, white)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        <Mail className="h-4 w-4" />
                                        Email
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="relative z-10 mx-auto w-full max-w-[24rem] lg:max-w-[26rem]"
                        >
                            <div
                                className="relative overflow-hidden rounded-[1.75rem] border p-4"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--surface-strong) 94%, white)",
                                    borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                    boxShadow: "0 28px 60px -38px rgba(28, 24, 44, 0.42)",
                                }}
                            >
                                <div className="absolute left-4 top-4 right-4 z-20 flex items-center justify-between rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, var(--border))", backgroundColor: "rgba(255,255,255,0.52)", color: "var(--foreground)" }}>
                                    <span>System Planner</span>
                                    <span style={{ color: "var(--primary)" }}>Developer</span>
                                </div>
                                <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(102,103,171,0.18),rgba(255,255,255,0))] pt-14">
                                    <div className="absolute inset-x-8 bottom-0 h-20 rounded-full bg-[#6667AB]/20 blur-3xl" />
                                    <Image
                                        src={PROFILE.image || "/images/profile.png"}
                                        alt={PROFILE.name}
                                        width={420}
                                        height={520}
                                        className="relative z-10 mx-auto h-auto w-full object-contain"
                                        style={{
                                            maskImage: "linear-gradient(to bottom, black 86%, transparent 100%)",
                                            WebkitMaskImage: "linear-gradient(to bottom, black 86%, transparent 100%)",
                                        }}
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
