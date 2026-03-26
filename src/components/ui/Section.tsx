import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    title?: string;
    subtitle?: string;
    centered?: boolean;
}

export function Section({
    id,
    title,
    subtitle,
    centered = false,
    className,
    children,
    ...props
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn("relative py-10 md:py-14", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <div className={cn("mb-8 space-y-3 md:mb-9", centered && "text-center")}>
                        {subtitle && (
                            <p className={cn("text-sm font-semibold tracking-[0.04em]", centered && "mx-auto")} style={{ color: "var(--primary)" }}>
                                {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem] [text-wrap:balance] break-keep" style={{ color: 'var(--foreground)' }}>
                                {title}
                            </h2>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
