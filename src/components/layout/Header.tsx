"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Competency", href: "#competency" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
];

export function Header() {
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 100; // Offset for fixed header spacing
            const scrollPosition = window.scrollY + headerHeight;

            // Check if we're at the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
                setActiveSection(navItems[navItems.length - 1].href.substring(1));
                return;
            }

            let currentSection = "";

            for (const item of navItems) {
                const section = document.getElementById(item.href.substring(1));
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        currentSection = item.href.substring(1);
                    }
                }
            }

            // Only update if changed to avoid unnecessary re-renders
            setActiveSection((prev) => (currentSection !== "" ? currentSection : prev));
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-4 z-50 w-full px-4 md:px-6 pointer-events-none"
        >
            <div className="glass container mx-auto flex h-16 items-center justify-between px-6 rounded-full max-w-5xl pointer-events-auto bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-gradient-primary">
                        박재현&apos;s Portfolio
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-sm font-medium transition-all relative group"
                                style={{
                                    color: isActive ? 'var(--primary)' : 'var(--muted-foreground)',
                                    fontWeight: isActive ? 700 : 500
                                }}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6667AB] to-purple-500"
                                    />
                                )}
                                {!isActive && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6667AB] to-purple-500 transition-all group-hover:w-full" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Theme Toggle Switch */}
                <div className="flex items-center gap-2">
                    <motion.span
                        key={theme}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        {mounted && (theme === 'dark' ? 'Dark' : 'Light')}
                    </motion.span>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 shadow-inner"
                        aria-label="Toggle theme"
                    >
                        {/* Sliding Circle */}
                        <motion.span
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute top-0.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center"
                            style={{ left: mounted && theme === 'dark' ? 28 : 2 }}
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {mounted && (
                                    theme === 'dark'
                                        ? <Moon className="w-3.5 h-3.5 text-blue-400" />
                                        : <Sun className="w-3.5 h-3.5 text-amber-500" />
                                )}
                            </motion.div>
                        </motion.span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
