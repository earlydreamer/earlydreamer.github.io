"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";

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
    caseStudies = [],
    sections = [],
    links = [],
}: DetailModalProps) {
    const restoreBodyStyleRef = useRef<null | (() => void)>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const previousActiveElementRef = useRef<HTMLElement | null>(null);
    const titleId = useId();

    const restoreModalEnvironment = useCallback(() => {
        restoreBodyStyleRef.current?.();
        restoreBodyStyleRef.current = null;
        previousActiveElementRef.current?.focus();
        previousActiveElementRef.current = null;
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        previousActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

        const htmlStyle = document.documentElement.style;
        const bodyStyle = document.body.style;
        const scrollY = window.scrollY;
        const previous = {
            htmlOverflow: htmlStyle.overflow,
            bodyOverflow: bodyStyle.overflow,
            bodyPosition: bodyStyle.position,
            bodyTop: bodyStyle.top,
            bodyWidth: bodyStyle.width,
            bodyPaddingRight: bodyStyle.paddingRight,
        };
        const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

        htmlStyle.overflow = "hidden";
        bodyStyle.overflow = "hidden";
        bodyStyle.position = "fixed";
        bodyStyle.top = `-${scrollY}px`;
        bodyStyle.width = "100%";

            const htmlStyle = document.documentElement.style;
            const bodyStyle = document.body.style;
            const scrollY = window.scrollY;
            const previous = {
                htmlOverflow: htmlStyle.overflow,
                bodyOverflow: bodyStyle.overflow,
                bodyPosition: bodyStyle.position,
                bodyTop: bodyStyle.top,
                bodyWidth: bodyStyle.width,
                bodyPaddingRight: bodyStyle.paddingRight,
            };
            const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

            htmlStyle.overflow = "hidden";
            bodyStyle.overflow = "hidden";
            bodyStyle.position = "fixed";
            bodyStyle.top = `-${scrollY}px`;
            bodyStyle.width = "100%";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            restoreBodyStyleRef.current = () => {
                htmlStyle.overflow = previous.htmlOverflow;
                bodyStyle.overflow = previous.bodyOverflow;
                bodyStyle.position = previous.bodyPosition;
                bodyStyle.top = previous.bodyTop;
                bodyStyle.width = previous.bodyWidth;
                bodyStyle.paddingRight = previous.bodyPaddingRight;
                window.scrollTo(0, scrollY);
            };
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        return () => {
            restoreModalEnvironment();
        };
    }, [restoreModalEnvironment]);

    return (
        <AnimatePresence onExitComplete={restoreModalEnvironment}>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-[radial-gradient(circle_at_top,_rgba(102,103,171,0.16),_transparent_36%),linear-gradient(to_bottom,_rgba(15,15,20,0.42),_rgba(15,15,20,0.62))]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.98 }}
                        transition={{ type: "spring", damping: 24, stiffness: 260 }}
                        className="fixed inset-x-0 top-1/2 z-[70] mx-auto w-full max-w-4xl -translate-y-1/2 px-4 pointer-events-none"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${title} 상세 정보`}
                    >
                        <div
                            className="pointer-events-auto overflow-hidden rounded-[28px] border shadow-2xl"
                            style={{
                                backgroundColor: "var(--popover)",
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
                                                            borderColor: "var(--border)",
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
                                                <p className="mt-2 text-sm break-keep [text-wrap:pretty] md:text-base" style={{ color: "var(--primary)" }}>
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
                                        <p className="mb-6 whitespace-pre-line break-keep [text-wrap:pretty] text-sm leading-7 md:text-base" style={{ color: "var(--muted-foreground)" }}>
                                            {summary}
                                        </p>
                                    )}

                                    {links.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="mb-3 text-sm font-semibold" style={{ color: "var(--primary)" }}>
                                                관련 링크
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {links.map((link) => {
                                                    return (
                                                        <Link
                                                            key={`${link.label}-${link.url}`}
                                                            href={link.url}
                                                            target="_blank"
                                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white no-underline outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-offset-2"
                                                            style={{
                                                                backgroundColor: "var(--primary)",
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
                                                        backgroundColor: "color-mix(in srgb, var(--muted) 84%, var(--card))",
                                                        borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                                    }}
                                                >
                                                    <h4 className="mb-3 text-sm font-semibold" style={{ color: "var(--primary)" }}>
                                                        개요
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {metaBadges.map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium md:text-sm"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--background))",
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
                                                        backgroundColor: "color-mix(in srgb, var(--muted) 84%, var(--card))",
                                                        borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                                    }}
                                                >
                                                    <h4 className="mb-3 text-sm font-semibold" style={{ color: "var(--primary)" }}>
                                                        기술 스택
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {techBadges.map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium md:text-sm"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 70%, var(--background))",
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

                                    {caseStudies.length > 0 ? (
                                        <div className="space-y-6">
                                            {caseStudies.map((caseStudy) => (
                                                <section
                                                    key={caseStudy.title}
                                                    className="rounded-[28px] border p-5 md:p-6"
                                                    style={{
                                                        backgroundColor: "color-mix(in srgb, var(--card) 82%, var(--background))",
                                                        borderColor: "color-mix(in srgb, var(--primary) 22%, var(--border))",
                                                        boxShadow: "0 18px 30px -24px rgba(17, 24, 39, 0.22), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)",
                                                    }}
                                                >
                                                    <h4 className="mb-5 text-base font-semibold md:text-lg" style={{ color: "var(--foreground)" }}>
                                                        {caseStudy.title}
                                                    </h4>

                                                    <div className="space-y-4">
                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "var(--primary)" }}>
                                                                문제
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.problem.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 80%, var(--background))",
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "var(--primary)" }}>
                                                                해결
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.solution.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 80%, var(--background))",
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h5 className="mb-2 text-sm font-semibold break-keep [text-wrap:balance]" style={{ color: "var(--primary)" }}>
                                                                결과
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {caseStudy.result.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                        style={{
                                                                            backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--background))",
                                                                            borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            color: "color-mix(in srgb, var(--foreground) 80%, var(--background))",
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
                                                        backgroundColor: "color-mix(in srgb, var(--card) 82%, var(--background))",
                                                        borderColor: "color-mix(in srgb, var(--primary) 22%, var(--border))",
                                                        boxShadow: "0 18px 30px -24px rgba(17, 24, 39, 0.22), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)",
                                                    }}
                                                >
                                                    <h4 className="mb-4 text-base font-semibold md:text-lg" style={{ color: "var(--foreground)" }}>
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="rounded-2xl border px-4 py-3 text-sm leading-6 break-keep [text-wrap:pretty] md:text-base"
                                                                style={{
                                                                    backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--background))",
                                                                    borderColor: "color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                    color: "color-mix(in srgb, var(--foreground) 80%, var(--background))",
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
    );
}
