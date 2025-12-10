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
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <div className={cn("mb-10 space-y-2", centered && "text-center")}>
                        {title && (
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className={cn("max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400", centered && "mx-auto")}>
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
