"use client";

import { useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SECONDARY_SKILLS, SecondarySkill, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { X, ChevronRight, Star, StarHalf } from "lucide-react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

const levelColors: Record<SecondarySkill["level"], { bg: string; text: string }> = {
    "주력 활용": { bg: "bg-emerald-100 dark:bg-emerald-500/20", text: "text-emerald-800 dark:text-emerald-300" },
    "능숙함": { bg: "bg-sky-100 dark:bg-sky-500/20", text: "text-sky-800 dark:text-sky-300" },
    "개발 가능": { bg: "bg-amber-100 dark:bg-amber-500/20", text: "text-amber-800 dark:text-amber-300" },
    "경험 있음": { bg: "bg-rose-100 dark:bg-rose-500/20", text: "text-rose-800 dark:text-rose-300" },
};

const levelOrder: SecondarySkill["level"][] = ["주력 활용", "능숙함", "개발 가능", "경험 있음"];
const cardTextColor = "color-mix(in srgb, var(--foreground) 88%, var(--muted-foreground))";
const cardSubtleTextColor = "color-mix(in srgb, var(--muted-foreground) 92%, var(--foreground))";



// 별점 표시 컴포넌트 (0.5 단위 지원)
function StarRating({ rating }: { rating: number }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <Star key={`full-${i}`} className="w-3 h-3 fill-amber-400 text-amber-400" />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <StarHalf key="half" className="w-3 h-3 fill-amber-400 text-amber-400" />
        );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <Star key={`empty-${i}`} className="w-3 h-3 text-zinc-300 dark:text-zinc-600" />
        );
    }

    return <div className="flex items-center gap-0.5">{stars}</div>;
}

function SkillModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = useState<SecondarySkill["level"] | null>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleId = useId();

    // 카테고리 목록 추출 (순서 지정)
    const categoryOrder = SECTION_META.skills.categoryOrder;
    const categories = categoryOrder.filter(cat =>
        SECONDARY_SKILLS.some(skill => skill.category === cat)
    );

    // 필터링된 스킬
    const filteredSkills = SECONDARY_SKILLS.filter(skill => {
        const categoryMatch = selectedCategory === null || skill.category === selectedCategory;
        const levelMatch = selectedLevel === null || skill.level === selectedLevel;
        return categoryMatch && levelMatch;
    });

    // 카테고리별 그룹화 및 레이팅 순 정렬
    const groupedByCategory = categories.reduce((acc, category) => {
        const skills = filteredSkills
            .filter(skill => skill.category === category)
            .sort((a, b) => b.rating - a.rating);
        if (skills.length > 0) {
            acc[category] = skills;
        }
        return acc;
    }, {} as Record<string, typeof filteredSkills>);

    useDialogBehavior({
        isOpen,
        onClose: () => {
            setSelectedCategory(null);
            setSelectedLevel(null);
            onClose();
        },
        dialogRef,
    });

    const handleClose = () => {
        setSelectedCategory(null);
        setSelectedLevel(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-[radial-gradient(circle_at_top,_rgba(102,103,171,0.16),_transparent_36%),linear-gradient(to_bottom,_rgba(15,15,20,0.42),_rgba(15,15,20,0.62))]"
                    />
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                    >
                        <div
                            ref={dialogRef}
                            tabIndex={-1}
                            className="mx-4 flex max-h-[80vh] flex-col overflow-hidden rounded-[28px] border shadow-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--background) 98%, white)",
                                borderColor: "color-mix(in srgb, var(--primary) 24%, var(--border))",
                            }}
                        >
                            {/* Fixed Header */}
                            <div
                                className="border-b p-6 pb-4"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                    background: "linear-gradient(180deg, color-mix(in srgb, var(--background) 97%, white), color-mix(in srgb, var(--muted) 92%, var(--background)))",
                                }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 id={titleId} className="text-xl font-bold" style={{ color: cardTextColor }}>
                                        {SECTION_META.skills.modalTitle}
                                    </h3>
                                    <button
                                        onClick={handleClose}
                                        className="rounded-full p-2 transition-colors"
                                        style={{ color: "var(--muted-foreground)" }}
                                        aria-label="닫기"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--primary) 10%, white)";
                                            e.currentTarget.style.color = "var(--primary)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = "var(--muted-foreground)";
                                        }}
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* 카테고리 필터 */}
                                <div className="mb-3">
                                    <div className="mb-2 text-xs font-semibold" style={{ color: cardTextColor }}>카테고리</div>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                                            style={selectedCategory === null
                                                ? { backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }
                                                : {
                                                    backgroundColor: "color-mix(in srgb, var(--muted) 82%, var(--card))",
                                                    color: cardTextColor,
                                                    border: "1px solid color-mix(in srgb, var(--primary) 14%, var(--border))",
                                                }}
                                        >
                                            전체
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                                                style={selectedCategory === category
                                                    ? { backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }
                                                    : {
                                                        backgroundColor: "color-mix(in srgb, var(--muted) 82%, var(--card))",
                                                        color: cardTextColor,
                                                        border: "1px solid color-mix(in srgb, var(--primary) 14%, var(--border))",
                                                    }}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* 숙련도 필터 */}
                                <div
                                    className="rounded-2xl p-3 text-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 96%, white)",
                                        border: "1px solid color-mix(in srgb, var(--primary) 22%, var(--border))",
                                    }}
                                >
                                    <div className="mb-2 text-xs font-semibold" style={{ color: cardTextColor }}>숙련도</div>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedLevel(null)}
                                            className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                                            style={selectedLevel === null
                                                ? { backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }
                                                : {
                                                    backgroundColor: "color-mix(in srgb, var(--card) 82%, var(--background))",
                                                    color: cardTextColor,
                                                    border: "1px solid color-mix(in srgb, var(--primary) 14%, var(--border))",
                                                }}
                                        >
                                            전체
                                        </button>
                                        {levelOrder.map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => setSelectedLevel(level)}
                                                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${selectedLevel === level ? "" : "hover:opacity-85"} ${levelColors[level].bg} ${levelColors[level].text}`}
                                                style={selectedLevel === level
                                                    ? { boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--primary) 35%, transparent)" }
                                                    : undefined}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 pt-4 overflow-y-auto overscroll-contain flex-1 modal-scrollbar">
                                {/* Skills by Category */}
                                <div className="space-y-6">
                                    {categories.map((category) => {
                                        const skills = groupedByCategory[category];
                                        if (!skills || skills.length === 0) return null;
                                        return (
                                            <div key={category}>
                                                <h4 className="mb-3 text-sm font-semibold" style={{ color: "color-mix(in srgb, var(--primary) 72%, var(--foreground))" }}>
                                                    {category}
                                                </h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {skills.map((skill) => (
                                                        <div
                                                            key={skill.name}
                                                            className="rounded-[22px] border p-4 transition-all"
                                                            style={{
                                                                backgroundColor: "color-mix(in srgb, var(--background) 96%, white)",
                                                                borderColor: "color-mix(in srgb, var(--primary) 24%, var(--border))",
                                                                boxShadow: "0 18px 30px -24px rgba(17, 24, 39, 0.24), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)",
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="text-base font-bold" style={{ color: cardTextColor }}>
                                                                    {skill.name}
                                                                </span>
                                                                <div className="flex items-center gap-2">
                                                                        <span
                                                                            className="rounded-full px-2 py-1 text-xs font-medium"
                                                                            style={{
                                                                                backgroundColor: "color-mix(in srgb, var(--background) 92%, white)",
                                                                                color: cardTextColor,
                                                                                border: "1px solid color-mix(in srgb, var(--primary) 16%, var(--border))",
                                                                            }}
                                                                    >
                                                                        {skill.category}
                                                                    </span>
                                                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[skill.level].bg} ${levelColors[skill.level].text}`}>
                                                                        {skill.level}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {skill.description && (
                                                                <p className="text-sm leading-relaxed" style={{ color: cardSubtleTextColor }}>
                                                                    {skill.description}
                                                                </p>
                                                            )}
                                                            <div
                                                                className="mt-3 flex items-center gap-2 border-t pt-2"
                                                                style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, var(--border))" }}
                                                            >
                                                                <span className="text-xs font-medium" style={{ color: cardTextColor }}>숙련도</span>
                                                                <StarRating rating={skill.rating} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function SkillsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { skills } = SECTION_META;

    return (
        <>
            <Section id="skills" title={skills.title} subtitle={skills.subtitle} centered>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 pt-8"
                >
                    {SKILLS.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={item}
                            className="glass-card flex flex-col items-center justify-center p-6 gap-4 group hover:border-[#6667AB]/50 transition-colors"
                        >
                            <div className="relative w-16 h-16 flex items-center justify-center p-2 bg-white dark:bg-slate-200 rounded-2xl shadow-inner">
                                {skill.icon ? (
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <span className="text-2xl font-bold">{skill.name[0]}</span>
                                )}
                            </div>
                            <div className="text-center min-h-[52px]">
                                <h3
                                    className="font-semibold leading-snug break-keep group-hover:text-[#6667AB] transition-colors"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {skill.name}
                                </h3>
                                <span
                                    className="text-xs px-2 py-1 rounded-full mt-2 inline-block border"
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        color: 'var(--accent-foreground)',
                                        borderColor: 'var(--border)'
                                    }}
                                >
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 기타 스킬 버튼 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-8"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-2 rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        style={{
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)",
                            boxShadow: "0 14px 30px -18px color-mix(in srgb, var(--primary) 75%, transparent)",
                        }}
                    >
                        <span className="text-sm font-semibold">
                            {skills.buttonText}
                        </span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </Section>

            {/* Modal */}
            <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
