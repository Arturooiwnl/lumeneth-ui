"use client"

import { ArrowUp, Heart } from "lucide-react";

export default function DocsFooter() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full max-w-6xl mx-auto px-6 py-12 border-t border-dashed border-border/60">
            <button
                onClick={scrollToTop}
                className="md:hidden absolute bottom-4 right-4 group/btn flex items-center justify-center p-3 rounded-full border border-dashed border-border bg-background/40 hover:bg-accent hover:border-solid transition-all duration-300 cursor-pointer"
                aria-label="Scroll to top"
            >
                <ArrowUp className="size-4 text-muted-foreground group-hover/btn:text-foreground" />
            </button>

            <div
                className="absolute inset-0 z-0 rotate-180 opacity-50 pointer-events-none"
                style={{
                    background: "hidden dark:block radial-gradient(125% 125% at 50% 90%, transparent 65%, #a5b4fc 100%)",
                }}
            />
            <div
                className="dark:hidden absolute inset-0 z-0 rotate-180 opacity-50 pointer-events-none"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, transparent 65%, #4362fa 100%)",
                }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full">

                <div className="flex items-center gap-2">
                    <img
                        src="/icon.png"
                        alt="Icon of Lumeneth"
                        className="size-12 hidden dark:block" />
                    <img
                        src="/icon-black.png"
                        alt="Icon of Lumeneth"
                        className="size-12 dark:hidden" />
                    <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tighter text-foreground/90">
                        Lumeneth.
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">

                    <div className="flex items-center gap-1 font-sans font-light">
                        <span>Crafted with</span>
                        <Heart className="size-3 text-indigo-300 mx-0.5" />
                        <span>by</span>
                        <a
                            href="https://arturoperotto.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-foreground transition-colors underline underline-offset-4 decoration-dashed decoration-border hover:decoration-solid"
                        >
                            Arturo Perotto
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="hidden md:flex group/btn items-center justify-center p-3 rounded-full border border-dashed border-border bg-background/40 hover:bg-accent hover:border-solid transition-all duration-300 cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="size-4 text-muted-foreground group-hover/btn:text-foreground" />
                    </button>

                </div>
            </div>

        </footer>
    )
}