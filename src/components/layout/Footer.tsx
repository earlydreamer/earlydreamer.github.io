export function Footer() {
    return (
        <footer className="px-4 pb-10 pt-6 md:px-6 md:pb-14">
            <div className="container mx-auto max-w-6xl">
                <div className="section-shell overflow-hidden px-6 py-6 md:px-8">
                    <div className="section-shell-inner flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-2">
                            <span className="text-sm font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>Contact</span>
                            <p className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--foreground)" }}>
                                Building from planning to production.
                            </p>
                        </div>
                        <div className="space-y-1 text-sm md:text-right" style={{ color: "var(--muted-foreground)" }}>
                            <p>© Jake Park. All rights reserved.</p>
                            <p>Portfolio renewal branch for comparative review.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
