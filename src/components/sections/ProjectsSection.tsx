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
                <div className="section-shell overflow-hidden px-5 py-6 md:px-6 md:py-8">
                    <div className="section-shell-inner">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="liquid-shape h-[26rem] w-[26rem] bg-fuchsia-100 dark:bg-fuchsia-500/15 top-[-4rem] left-[-8rem]" />
                            <div className="liquid-shape h-60 w-60 bg-amber-100 dark:bg-amber-500/15 bottom-[-2rem] right-[10%]" />
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 relative z-10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden group flex h-full flex-col"
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-slate-200">
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

                            <div className="flex flex-1 flex-col p-6 md:p-7">
                                <div className="mb-2 flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-extrabold tracking-tight break-keep [text-wrap:balance] transition-colors group-hover:text-[#6667AB]" style={{ color: 'var(--foreground)' }}>
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
                                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--primary)' }}>{project.period}</span>

                                <p className="mb-5 flex-1 text-sm leading-7 break-keep [text-wrap:pretty]" style={{ color: 'var(--muted-foreground)' }}>
                                    {project.description}
                                </p>

                                <div id={`project-tech-stack-${project.id}`}>
                                    <ProjectTechStack techStack={project.techStack} projectId={project.id} />
                                </div>

                                {/* Reference Links */}
                                {(!project.links?.demo && project.links?.references && project.links.references.length > 0) && (
                                    <div className="mt-auto flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, var(--border))" }}>
                                        {(project.links?.references ?? []).slice(0, 1).map((link) => (
                                            <Link
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                                                style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 92%, var(--primary))", color: "var(--primary-foreground)" }}
                                            >
                                                <Github className="w-4 h-4" />
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-3 border-t pt-4" style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, var(--border))" }}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProjectId(project.id)}
                                        className="group flex w-full items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
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
                    </div>
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
                    architecture={selectedProject.modalContent?.architecture}
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
