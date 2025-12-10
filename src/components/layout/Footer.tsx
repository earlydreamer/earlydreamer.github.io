export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 py-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Jake Park. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
