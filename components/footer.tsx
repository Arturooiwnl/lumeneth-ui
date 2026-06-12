"use client"

import { ArrowUp, ArrowUpRight, Heart } from "lucide-react";
import { navigations } from "@/constants/home";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full relative border-t border-dashed border-border bg-background overflow-hidden mt-20">
            <div className="absolute bottom-4 right-4 z-50">
                <button
                    onClick={scrollToTop}
                    className="group/btn flex items-center justify-center p-3 rounded-full border border-dashed border-border bg-background/40 hover:bg-accent hover:border-solid transition-all duration-300 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="size-4 text-muted-foreground group-hover/btn:text-foreground" />
                </button>
            </div>
            <div
                className="absolute inset-0 z-0 rotate-180 opacity-50"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, transparent 65%, #a5b4fc 100%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10 flex flex-col justify-between min-h-[450px]">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">

                    <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="Icon of Lumeneth" className="size-12 hidden dark:block" />
                                <img src="/icon-black.png" alt="Icon of Lumeneth" className="size-12 dark:hidden" />
                                <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tighter text-foreground/90">
                                    Lumeneth.
                                </h2>
                            </div>
                            <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                                A place for visual creators.
                            </p>
                        </div>

                    </div>


                    <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">

                        <div className="space-y-4">
                            <h4 className="text-xs font-mono tracking-wider text-foreground font-medium uppercase">
                                Library
                            </h4>
                            <ul className="space-y-2.5 text-sm font-light text-muted-foreground">
                                {navigations.map((nav) => (
                                    <li key={nav.label}>
                                        <a
                                            href={nav.disabled ? "#" : nav.href}
                                            className={`font-mono uppercase text-sm transition-colors duration-300 ${nav.disabled ? "cursor-not-allowed opacity-50" : "hover:text-foreground"}`}
                                        >
                                            {nav.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-mono tracking-wider text-foreground font-medium uppercase">
                                Connect
                            </h4>
                            <ul className="space-y-2.5 text-sm font-light text-muted-foreground">
                                <li>
                                    <a href="https://github.com/Arturooiwnl/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex w-fit items-center gap-1 group">
                                        GitHub <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/ArturoPerotto" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex w-fit items-center gap-1 group">
                                        Twitter / X <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://arturoperotto.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex w-fit items-center gap-1 group">
                                        Portfolio <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/80">
                    <div>
                        <span>© 2026 LUMENETH. Open source deployment.</span>
                    </div>

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
                </div>

            </div>
        </footer>
    );
}