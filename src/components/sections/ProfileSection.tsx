"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import Image from "next/image";

export function ProfileSection() {
    return (
        <Section id="about" className="pt-20 md:pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
            {/* Liquid Background Shapes */}
            <div className="liquid-shape w-96 h-96 bg-purple-300 top-0 left-[-100px] animate-pulse" style={{ animationDuration: "10s" }} />
            <div className="liquid-shape w-96 h-96 bg-blue-300 bottom-0 right-[-100px] animate-pulse" style={{ animationDuration: "15s" }} />
            <div className="liquid-shape w-80 h-80 bg-[#6667AB] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-0 w-full relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-[3] space-y-6"
                >
                    <div>
                        <h2 className="text-2xl font-bold text-[#6667AB] mb-2">{PROFILE.greeting}</h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-primary">
                            {PROFILE.name}
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300">
                        {PROFILE.role}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed glass p-6 rounded-2xl whitespace-pre-wrap break-keep">
                        {PROFILE.description}
                    </p>
                    <div className="flex gap-4 pt-4">
                        {PROFILE.github && (
                            <Link
                                href={PROFILE.github}
                                target="_blank"
                                className="flex items-center gap-2 px-6 py-3 bg-[#6667AB] hover:bg-[#5a5b9f] text-white rounded-full transition-all hover:scale-105 font-medium shadow-lg hover:shadow-xl"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </Link>
                        )}
                        {PROFILE.email && (
                            <Link
                                href={`mailto:${PROFILE.email}`}
                                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full border border-zinc-200 dark:border-zinc-700 transition-all hover:scale-105 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-sm hover:shadow-md"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </Link>
                        )}
                    </div>
                </motion.div>

                {/* Profile Image - Frameless with Natural Aspect Ratio */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex-1 flex justify-end -ml-20"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6667AB]/30 to-transparent blur-3xl rounded-full opacity-50 scale-110" />

                    {/* Image with natural aspect ratio */}
                    <Image
                        src={PROFILE.image || "/images/profile.png"}
                        alt={PROFILE.name}
                        width={350}
                        height={450}
                        className="relative z-10 drop-shadow-2xl object-contain"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                        }}
                        priority
                    />
                </motion.div>
            </div>
        </Section>
    );
}
