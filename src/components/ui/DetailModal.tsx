"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink, Maximize2, X } from "lucide-react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";

interface DetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    period?: string;
    imageSrc?: string;
    imageAlt?: string;
    metaBadges?: string[];
    techBadges?: string[];
    summary?: string;
    architecture?: {
        title: string;
        summary?: string;
        imageSrc?: string;
        imageAlt?: string;
        diagram: {
            label: string;
            description: string;
        }[];
        highlights?: string[];
    };
    caseStudies?: {
        title: string;
        problem: string[];
        solution: string[];
        result: string[];
    }[];
    sections?: {
        title: string;
        items: string[];
    }[];
    links?: {
        url: string;
        label: string;
    }[];
}

export function DetailModal({
    isOpen,
    onClose,
    title,
    subtitle,
    period,
    imageSrc,
    imageAlt,
    metaBadges = [],
    techBadges = [],
    summary,
    architecture,
    caseStudies = [],
    sections = [],
    links = [],
}: DetailModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleId = useId();
    const descriptionId = useId();
    const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    useDialogBehavior({
        isOpen,
        onClose,
        dialogRef,
    });

    const sectionHeadingClassName = "mb-4 text-base font-semibold md:text-lg";
    const sectionHeadingStyle = { color: "var(--foreground)" } as const;
    const sectionSurfaceColor = "color-mix(in srgb, var(--card) 86%, var(--popover))";
    const sectionBorderColor = "color-mix(in srgb, var(--primary) 22%, var(--border))";

    return (
        <>
        <AnimatePresence>
            {isImageZoomed && architecture?.imageSrc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4"
                    onClick={() => setIsImageZoomed(false)}
                    onKeyDown={(e) => e.key === "Escape" && setIsImageZoomed(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsImageZoomed(false)}
                        className="absolute right-4 top-4 rounded-full bg-white/12 p-2.5 text-white transition-colors hover:bg-white/22"
                        aria-label="닫기"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <motion.img
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.92, opacity: 0 }}
                        transition={{ type: "spring", damping: 26, stiffness: 280 }}
                        src={architecture.imageSrc}
                        alt={architecture.imageAlt ?? architecture.title}
                        className="max-h-[90vh] max-w-[95vw] cursor-zoom-out rounded-2xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-[radial-gradient(circle_at_top,_rgba(102,103,171,0.16),_transparent_36%),linear-gradient(to_bottom,_rgba(15,15,20,0.42),_rgba(15,15,20,0.62))]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.98 }}
                        transition={{ type: "spring", damping: 24, stiffness: 260 }}
                        className="fixed inset-x-0 top-1/2 z-50 mx-auto w-full max-w-4xl -translate-y-1/2 px-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        aria-describedby={subtitle ? descriptionId : undefined}
                    >
                        <div
                            ref={dialogRef}
                            tabIndex={-1}
                            className="overflow-hidden rounded-[28px] border shadow-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--background) 94%, white)",
                                borderColor: "color-mix(in srgb, var(--primary) 22%, var(--border))",
                            }}
                        >
                            <div className="modal-scrollbar max-h-[85vh] overflow-y-auto overscroll-contain">
                                {imageSrc && (
                                    <div className="relative aspect-[16/7] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        <Image
                                            src={imageSrc}
                                            alt={imageAlt ?? title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                )}

                                <div className="p-6 md:p-8">
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                                                {period && (
                                                    <span
                                                        className="rounded-full border px-3 py-1 font-medium"
                                                        style={{
                                                            backgroundColor: "var(--muted)",
                                                            color: "var(--muted-foreground)",
                                                            borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                                        }}
                                                    >
                                                        {period}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 id={titleId} className="text-2xl font-bold leading-tight break-keep [text-wrap:balance] md:text-3xl" style={{ color: "var(--foreground)" }}>
                                                {title}
                                            </h3>
                                            {subtitle && (
                                                <p
                                                    id={descriptionId}
                                                    className="mt-2 text-sm break-keep [text-wrap:pretty] md:text-base"
                                                    style={{ color: "color-mix(in srgb, var(--primary) 72%, var(--foreground))" }}
                                                >
                                                    {subtitle}
                                                </p>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                            aria-label="닫기"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {summary && (
                                        <p
                                            className="mb-6 whitespace-pre-line break-keep [text-wrap:pretty] text-sm leading-7 md:text-base"
                                            style={{ color: "color-mix(in srgb, var(--muted-foreground) 88%, var(--foreground))" }}
                                        >
                                            {summary}
                                        </p>
                                    )}

                                    {links.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                관련 링크
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {links.map((link) => {
                                                    return (
                                                        <Link
                                                            key={`${link.label}-${link.url}`}
                                                            href={link.url}
                                                            target="_blank"
                                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold no-underline outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-offset-2"
                                                            style={{
                                                                backgroundColor: "var(--primary)",
                                                                color: "var(--primary-foreground)",
                                                                WebkitTapHighlightColor: "transparent",
                                                                textDecoration: "none",
                                                                boxShadow: "none",
                                                                WebkitUserSelect: "none",
                                                                userSelect: "none",
                                                                outlineColor: "transparent",
                                                                ["--tw-ring-color" as string]: "color-mix(in srgb, var(--primary) 45%, white)",
                                                                ["--tw-ring-offset-color" as string]: "var(--card)",
                                                            }}
                                                        >
                                                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                                                            {link.label}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {(metaBadges.length > 0 || techBadges.length > 0) && (
                                        <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)]">
                                            {metaBadges.length > 0 && (
                                                <section
                                                    className="rounded-3xl border p-4 md:col-span-2"
                                                    style={{
                                                        backgroundColor: sectionSurfaceColor,
                                                        borderColor: sectionBorderColor,
                                                    }}
                                                >
                                                    <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                        개요
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {metaBadges.map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium md:text-sm"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                    color: "var(--foreground)",
                                                                    borderColor: "color-mix(in srgb, var(--primary) 24%, var(--border))",
                                                                }}
                                                            >
                                                                {badge}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </section>
                                            )}

                                            {techBadges.length > 0 && (
                                                <section
                                                    className="rounded-3xl border p-4 md:col-span-2"
                                                    style={{
                                                        backgroundColor: sectionSurfaceColor,
                                                        borderColor: sectionBorderColor,
                                                    }}
                                                >
                                                    <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                        기술 스택
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {techBadges.map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium md:text-sm"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 76%, var(--background))",
                                                                    color: "var(--foreground)",
                                                                    borderColor: "color-mix(in srgb, var(--primary) 24%, var(--border))",
                                                                }}
                                                            >
                                                                {badge}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </section>
                                            )}
                                        </div>
                                    )}

                                    {architecture && (
                                        <details
                                            className="mb-8 overflow-hidden rounded-[28px] border"
                                            style={{
                                                backgroundColor: sectionSurfaceColor,
                                                borderColor: sectionBorderColor,
                                            }}
                                            onToggle={(event) => setIsArchitectureOpen((event.currentTarget as HTMLDetailsElement).open)}
                                        >
                                            <summary
                                                className="cursor-pointer list-none px-5 py-4 md:px-6"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="flex min-w-0 items-center gap-4">
                                                        {architecture.imageSrc && (
                                                            <div
                                                                className="relative hidden h-14 w-24 shrink-0 overflow-hidden rounded-2xl border sm:block"
                                                                style={{ borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))" }}
                                                            >
                                                                <Image
                                                                    src={architecture.imageSrc}
                                                                    alt={architecture.imageAlt ?? architecture.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="min-w-0">
                                                            <div className="text-base font-semibold">아키텍처 구조</div>
                                                            {architecture.summary && (
                                                                <p
                                                                    className="mt-1 line-clamp-2 text-xs leading-5 break-keep [text-wrap:pretty] md:text-sm"
                                                                    style={{ color: "var(--muted-foreground)" }}
                                                                >
                                                                    {architecture.summary}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold md:text-sm"
                                                        style={{ color: "var(--primary)" }}
                                                    >
                                                        {isArchitectureOpen ? "접기" : "펼치기"}
                                                        <ChevronDown className="h-4 w-4" />
                                                    </span>
                                                </div>
                                            </summary>
                                            <div className="space-y-5 border-t px-5 pb-5 pt-5 md:px-6 md:pb-6" style={{ borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))" }}>
                                                {architecture.imageSrc && (
                                                    <div
                                                        className="group relative cursor-zoom-in overflow-hidden rounded-3xl border"
                                                        style={{ borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))" }}
                                                        onClick={() => setIsImageZoomed(true)}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-label="아키텍처 이미지 확대"
                                                        onKeyDown={(e) => e.key === "Enter" && setIsImageZoomed(true)}
                                                    >
                                                        <div className="relative aspect-[1/1] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                                            <Image
                                                                src={architecture.imageSrc}
                                                                alt={architecture.imageAlt ?? architecture.title}
                                                                fill
                                                                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                                            />
                                                            <div className="absolute inset-0 flex items-end justify-end bg-black/0 p-3 transition-colors duration-200 group-hover:bg-black/10">
                                                                <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                                                                    <Maximize2 className="h-3 w-3" />
                                                                    확대
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {architecture.summary && (
                                                    <p
                                                        className="text-sm leading-7 break-keep [text-wrap:pretty] md:text-base"
                                                        style={{ color: "color-mix(in srgb, var(--muted-foreground) 88%, var(--foreground))" }}
                                                    >
                                                        {architecture.summary}
                                                    </p>
                                                )}

                                                <div className="grid gap-3 md:grid-cols-2">
                                                    {architecture.diagram.map((item, index) => {
                                                        const isLastOdd = architecture.diagram.length % 2 !== 0 && index === architecture.diagram.length - 1;
                                                        return (
                                                        <div
                                                            key={item.label}
                                                            className={`rounded-3xl border p-4${isLastOdd ? " md:col-span-2" : ""}`}
                                                            style={{
                                                                backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                            }}
                                                        >
                                                            <h5 className="mb-2 text-sm font-semibold md:text-base" style={{ color: "var(--foreground)" }}>
                                                                {item.label}
                                                            </h5>
                                                            <p className="text-sm leading-6 break-keep [text-wrap:pretty]" style={{ color: "var(--muted-foreground)" }}>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        );
                                                    })}
                                                </div>

                                                {architecture.highlights && architecture.highlights.length > 0 && (
                                                    <div>
                                                        <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                            설계 포인트
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {architecture.highlights.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                    style={{
                                                                        backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                        borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                        color: "color-mix(in srgb, var(--foreground) 92%, var(--background))",
                                                                    }}
                                                                >
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </details>
                                    )}

                                    {caseStudies.length > 0 ? (
                                        <div className="space-y-6">
                                            {caseStudies.map((caseStudy) => (
                                                <section
                                                    key={caseStudy.title}
                                                    className="rounded-[28px] border p-5 md:p-6"
                                                    style={{
                                                        backgroundColor: sectionSurfaceColor,
                                                        borderColor: sectionBorderColor,
                                                        boxShadow: "0 18px 30px -24px rgba(17, 24, 39, 0.22), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)",
                                                    }}
                                                >
                                                    <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                        {caseStudy.title}
                                                    </h4>

                                                    <div className="space-y-4">
                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "color-mix(in srgb, var(--primary) 72%, var(--foreground))" }}>
                                                                문제
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.problem.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 92%, var(--background))",
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "color-mix(in srgb, var(--primary) 72%, var(--foreground))" }}>
                                                                해결
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.solution.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 92%, var(--background))",
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "color-mix(in srgb, var(--primary) 72%, var(--foreground))" }}>
                                                                결과
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.result.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 92%, var(--background))",
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </section>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            {sections.map((section) => (
                                                <section
                                                    key={section.title}
                                                    className="rounded-[28px] border p-5 md:p-6"
                                                    style={{
                                                        backgroundColor: sectionSurfaceColor,
                                                        borderColor: sectionBorderColor,
                                                        boxShadow: "0 18px 30px -24px rgba(17, 24, 39, 0.22), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)",
                                                    }}
                                                >
                                                    <h4 className={sectionHeadingClassName} style={sectionHeadingStyle}>
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 78%, var(--background))",
                                                                    borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                    color: "color-mix(in srgb, var(--foreground) 92%, var(--background))",
                                                                }}
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </section>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        </>
    );
}
