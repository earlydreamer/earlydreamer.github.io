"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { DetailModal } from "@/components/ui/DetailModal";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink, Github } from "lucide-react";

function ProjectTechStack({ techStack, projectId }: { techStack: string[]; projectId: string }) {
    const [expanded, setExpanded] = useState(false);
    const visibleTechStack = expanded ? techStack : techStack.slice(0, 6);
    const hiddenTechCount = Math.max(techStack.length - 6, 0);

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {visibleTechStack.map((tech) => (
                <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border"
                    style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--accent-foreground)",
                        borderColor: "var(--border)",
                    }}
                >
                    {tech}
                </span>
            ))}
            {hiddenTechCount > 0 && !expanded && (
                <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border transition-colors"
                    style={{
                        backgroundColor: "var(--muted)",
                        color: "var(--muted-foreground)",
                        borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--primary) 14%, white)";
                        e.currentTarget.style.color = "var(--primary)";
                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 40%, var(--border))";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--muted)";
                        e.currentTarget.style.color = "var(--muted-foreground)";
                        e.currentTarget.style.borderColor = "var(--border)";
                    }}
                    aria-expanded={expanded}
                    aria-controls={`project-tech-stack-${projectId}`}
                >
                    +{hiddenTechCount}
                </button>
            )}
            {hiddenTechCount > 0 && expanded && (
                <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border transition-colors"
                    style={{
                        backgroundColor: "var(--muted)",
                        color: "var(--muted-foreground)",
                        borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--primary) 14%, white)";
                        e.currentTarget.style.color = "var(--primary)";
                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 40%, var(--border))";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--muted)";
                        e.currentTarget.style.color = "var(--muted-foreground)";
                        e.currentTarget.style.borderColor = "var(--border)";
                    }}
                    aria-expanded={expanded}
                    aria-controls={`project-tech-stack-${projectId}`}
                >
                    접기
                </button>
            )}
        </div>
    );
}

export function ProjectsSection() {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const { projects } = SECTION_META;
    const selectedProject = PROJECTS.find((project) => project.id === selectedProjectId) ?? null;

    return (
        <>
            <Section id="projects" title={projects.title} subtitle={projects.subtitle} centered>
                {/* Lighting effects - 따뜻한톤: fuchsia, rose, amber */}
                <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
                    <div className="liquid-shape w-[480px] h-[480px] bg-fuchsia-100 dark:bg-fuchsia-500/15 top-[-60px] left-[-280px] opacity-60 animate-pulse" style={{ animationDuration: "15s" }} />
                    <div className="liquid-shape w-56 h-56 bg-rose-100 dark:bg-rose-500/15 top-[40%] right-[-80px] opacity-50 animate-pulse" style={{ animationDuration: "11s" }} />
                    <div className="liquid-shape w-40 h-40 bg-amber-100 dark:bg-amber-500/15 bottom-[-20px] left-[15%] opacity-40 animate-pulse" style={{ animationDuration: "8s" }} />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden group flex flex-col"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-slate-200">
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
                                <div className="mb-1 flex items-start justify-between gap-3">
                                    <h3 className="font-bold text-xl break-keep [text-wrap:balance] group-hover:text-[#6667AB] transition-colors" style={{ color: 'var(--foreground)' }}>
                                        {project.title}
                                    </h3>
                                    {project.links?.demo && (
                                        <Link
                                            href={project.links.demo}
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-opacity hover:opacity-85"
                                            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                                        >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                            Demo
                                        </Link>
                                    )}
                                </div>
                                <span className="text-xs mb-3 block" style={{ color: 'var(--muted-foreground)' }}>{project.period}</span>

                                <p className="text-sm mb-4 flex-1 line-clamp-3 break-keep [text-wrap:pretty] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                                    {project.description}
                                </p>

                                <div id={`project-tech-stack-${project.id}`}>
                                    <ProjectTechStack techStack={project.techStack} projectId={project.id} />
                                </div>

                                {/* Reference Links */}
                                {(!project.links?.demo && project.links?.references && project.links.references.length > 0) && (
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-500">
                                        {(project.links?.references ?? []).slice(0, 1).map((link) => (
                                            <Link
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
                                            >
                                                <Github className="w-4 h-4" />
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-500">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProjectId(project.id)}
                                        className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
                                        style={{
                                            backgroundColor: "var(--primary)",
                                            color: "var(--primary-foreground)",
                                        }}
                                    >
                                        <span>프로젝트 상세 보기</span>
                                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {selectedProject && (
                <DetailModal
                    isOpen={selectedProject !== null}
                    onClose={() => setSelectedProjectId(null)}
                    title={selectedProject.title}
                    subtitle={selectedProject.description}
                    period={selectedProject.period}
                    imageSrc={selectedProject.images?.[0]}
                    imageAlt={selectedProject.title}
                    metaBadges={selectedProject.modalContent?.metaBadges}
                    techBadges={selectedProject.techStack}
                    summary={selectedProject.modalContent?.detailDescription}
                    caseStudies={selectedProject.modalContent?.caseStudies}
                    sections={selectedProject.modalContent?.sections}
                    links={[
                        ...(selectedProject.links?.demo
                            ? [{ url: selectedProject.links.demo, label: "Demo" }]
                            : []),
                        ...(selectedProject.links?.references ?? []),
                    ]}
                />
            )}
        </>
    );
}
