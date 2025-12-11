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
            className={cn("relative py-16 md:py-24", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <div className={cn("mb-10 space-y-2", centered && "text-center")}>
                        {title && (
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: 'var(--foreground)' }}>
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className={cn("max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", centered && "mx-auto")} style={{ color: 'var(--muted-foreground)' }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
