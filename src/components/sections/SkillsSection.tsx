"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SECONDARY_SKILLS, SecondarySkill, SECTION_META } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { X, ChevronRight, Star, StarHalf } from "lucide-react";

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
    "실무 경험": { bg: "bg-emerald-500/20", text: "text-emerald-400" },
    "능숙함": { bg: "bg-blue-500/20", text: "text-blue-400" },
    "개발 가능": { bg: "bg-amber-500/20", text: "text-amber-400" },
    "경험 있음": { bg: "bg-rose-500/20", text: "text-rose-400" },
};

const levelOrder: SecondarySkill["level"][] = ["실무 경험", "능숙함", "개발 가능", "경험 있음"];

function groupByLevel(skills: SecondarySkill[]): Record<string, SecondarySkill[]> {
    return skills.reduce((acc, skill) => {
        if (!acc[skill.level]) acc[skill.level] = [];
        acc[skill.level].push(skill);
        return acc;
    }, {} as Record<string, SecondarySkill[]>);
}

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

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // 모달이 닫힐 때 필터 초기화
    useEffect(() => {
        if (!isOpen) {
            setSelectedCategory(null);
            setSelectedLevel(null);
        }
    }, [isOpen]);

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80vh] overflow-hidden"
                    >
                        <div className="mx-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
                            {/* Fixed Header */}
                            <div className="p-6 pb-4 border-b border-zinc-200 dark:border-zinc-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                                        {SECTION_META.skills.modalTitle}
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                        aria-label="닫기"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* 카테고리 필터 */}
                                <div className="mb-3">
                                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">카테고리</div>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${selectedCategory === null
                                                ? 'bg-[#6667AB] text-white'
                                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                                }`}
                                        >
                                            전체
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${selectedCategory === category
                                                    ? 'bg-[#6667AB] text-white'
                                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* 숙련도 필터 */}
                                <div className="p-3 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 text-sm">
                                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">숙련도</div>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedLevel(null)}
                                            className={`px-2 py-1 rounded transition-all ${selectedLevel === null
                                                ? 'ring-2 ring-[#6667AB] bg-zinc-200 dark:bg-zinc-700'
                                                : 'hover:opacity-80'
                                                } bg-zinc-300 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-300`}
                                        >
                                            전체
                                        </button>
                                        {levelOrder.map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => setSelectedLevel(level)}
                                                className={`px-2 py-1 rounded transition-all ${selectedLevel === level
                                                    ? 'ring-2 ring-[#6667AB]'
                                                    : 'hover:opacity-80'
                                                    } ${levelColors[level].bg} ${levelColors[level].text}`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 pt-4 overflow-y-auto flex-1 modal-scrollbar">
                                {/* Skills by Category */}
                                <div className="space-y-6">
                                    {categories.map((category) => {
                                        const skills = groupedByCategory[category];
                                        if (!skills || skills.length === 0) return null;
                                        return (
                                            <div key={category}>
                                                <h4 className="text-sm font-semibold mb-3 text-[#6667AB] dark:text-[#8b8cd9]">
                                                    {category}
                                                </h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {skills.map((skill) => (
                                                        <div
                                                            key={skill.name}
                                                            className="p-4 rounded-lg bg-white/70 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 hover:border-[#6667AB]/50 hover:shadow-md transition-all"
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="font-bold text-zinc-800 dark:text-zinc-100 text-base">
                                                                    {skill.name}
                                                                </span>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-xs px-2 py-1 rounded-full bg-[#6667AB]/10 text-[#6667AB] font-medium">
                                                                        {skill.category}
                                                                    </span>
                                                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[skill.level].bg} ${levelColors[skill.level].text}`}>
                                                                        {skill.level}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {skill.description && (
                                                                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                                                    {skill.description}
                                                                </p>
                                                            )}
                                                            <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-700 flex items-center gap-2">
                                                                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">숙련도</span>
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
                            <div className="relative w-16 h-16 flex items-center justify-center p-2 bg-white/50 dark:bg-zinc-800/50 rounded-2xl shadow-inner">
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
                            <div className="text-center">
                                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-[#6667AB] transition-colors">{skill.name}</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-[#6667AB]/10 text-[#6667AB] mt-2 inline-block">
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
                        className="group flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-[#6667AB]/10 dark:hover:bg-[#6667AB]/20 border border-zinc-200 dark:border-zinc-700 hover:border-[#6667AB]/50 transition-all duration-300"
                    >
                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-[#6667AB] transition-colors">
                            {skills.buttonText}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#6667AB] group-hover:translate-x-1 transition-all" />
                    </button>
                </motion.div>
            </Section>

            {/* Modal */}
            <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
