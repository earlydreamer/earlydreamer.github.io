export function Footer() {
    return (
        <footer className="border-t py-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    © {new Date().getFullYear()} Jake Park. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
