"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Competency", href: "#competency" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
];

export function Header() {
    const [activeSection, setActiveSection] = useState("");
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        () => () => undefined,
        () => true,
        () => false,
    );

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
            className="fixed top-0 z-50 w-full px-4 pt-4 md:px-6 md:pt-5 pointer-events-none"
        >
            <div className="container mx-auto max-w-6xl pointer-events-auto">
                <div className="section-shell px-4 py-3 md:px-6">
                    <div className="section-shell-inner flex items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex flex-col leading-none">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--primary)" }}>
                                    Fullstack Developer
                                </span>
                                <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--foreground)" }}>
                                    박재현&apos;s Portfolio
                                </span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center gap-5">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="relative px-1 pb-1 text-sm font-semibold transition-colors"
                                        style={{
                                            color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                                        }}
                                    >
                                        {item.name}
                                        <span
                                            className="absolute bottom-0 left-0 h-px transition-all duration-300"
                                            style={{
                                                width: isActive ? "100%" : "0%",
                                                backgroundColor: "var(--primary)",
                                            }}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="flex items-center gap-3">
                            <motion.span
                                key={mounted ? resolvedTheme : "unmounted"}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] md:inline-flex"
                                style={{ color: 'var(--muted-foreground)' }}
                            >
                                {mounted && (resolvedTheme === 'dark' ? 'Dark' : 'Light')}
                            </motion.span>
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="relative h-10 w-10 rounded-full border transition-colors"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--primary) 18%, var(--border))",
                                    backgroundColor: "color-mix(in srgb, var(--surface-soft) 90%, white)",
                                    color: "var(--foreground)",
                                }}
                                aria-label="Toggle theme"
                                disabled={!mounted}
                            >
                                <span className="flex h-full w-full items-center justify-center">
                                    {mounted && (
                                        resolvedTheme === 'dark'
                                            ? <Moon className="h-4 w-4 text-blue-300" />
                                            : <Sun className="h-4 w-4 text-amber-500" />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
