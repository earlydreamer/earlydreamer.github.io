"use client";

import { motion } from "framer-motion";
import { PROJECTS, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
    const { projects } = SECTION_META;

    return (
        <Section id="projects" title={projects.title} subtitle={projects.subtitle} centered>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card overflow-hidden group flex flex-col"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            {project.images?.[0] ? (
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-zinc-400">
                                    No Image
                                </div>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="font-bold text-xl mb-1 group-hover:text-[#6667AB] transition-colors">{project.title}</h3>
                            <span className="text-xs text-zinc-500 mb-3 block">{project.period}</span>

                            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#6667AB]/10 text-[#6667AB]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub Links */}
                            {project.links?.githubLinks && project.links.githubLinks.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700">
                                    {project.links.githubLinks.map((link) => (
                                        <Link
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
                                        >
                                            <Github className="w-4 h-4" />
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
