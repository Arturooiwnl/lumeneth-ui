"use client"

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { AnimatedContent } from "./animated-content"
import { navigations } from "@/constants/home"
import { GitHub } from "./icons"
import { AnimatedThemeToggler } from "./ui/theme-toggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <AnimatedContent
            as="header"
            preset="fade"
            trigger="animate"
            duration={0.6}
            className={`fixed top-0 left-1/2 -translate-x-1/2 w-full bg-background border-b border-dashed px-2 z-50 animate-in blur-in-xs duration-500 ${isMenuOpen ? "overflow-visible" : "overflow-hidden"
                }`}
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between">

                <div className="flex border-x px-2 border-dashed">
                    <img
                        loading="eager"
                        src="/icon.png"
                        alt="Icono de Lumeneth UI"
                        className="hidden dark:block size-12"
                    />
                    <img
                        loading="eager"
                        src="/icon-black.png"
                        alt="Icono of Lumeneth UI"
                        className="dark:hidden size-12"
                    />
                </div>

                <nav className="hidden md:flex items-center gap-12 border-x border-dashed py-2.5 px-4">
                    {navigations.map((nav) => (
                        <a
                            key={nav.label}
                            href={nav.disabled ? "#" : nav.href}
                            className={`font-mono uppercase text-sm rounded-full hover:bg-accent/50 transition-all duration-300 px-2 py-1 ${nav.disabled && "cursor-not-allowed opacity-50"
                                }`}
                        >
                            {nav.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    {/* <GitHubStars
                        repo="Arturooiwnl/Arturooiwnl"
                        starsCount={20}
                    /> */}
                    <a
                        href="/get-started/introduction"
                        className="bg-accent/40 rounded-full border border-dashed hover:bg-accent/60 hover:border-solid transition-all duration-300 px-6 py-1.5 flex items-center group/cta"
                    >
                        Get started
                        <ArrowRight
                            size={18}
                            className="ml-1 md:ml-0 md:w-0 group-hover/cta:w-8 group-hover/cta:-rotate-45 transition-all duration-300"
                        />
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Arturooiwnl/lumeneth-ui"
                        className="text-neutral-500 hover:text-foreground transition-all duration-300 border-r border-dashed py-1 px-2"
                    >
                        <GitHub className="size-5.5" />
                    </a>
                    <AnimatedThemeToggler variant="circle" />
                </div>

                <div className="flex items-center">
                    <div className="md:hidden border-l border-dashed flex items-center p-3">
                        <AnimatedThemeToggler variant="circle" />
                    </div>
                    <div className="flex md:hidden items-center border-x border-dashed p-3 h-full">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                            aria-label="Toggle structural layout map navigation"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full bg-background border-t border-dashed border-border left-0 absolute top-full md:hidden overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-6 max-w-5xl mx-auto">

                            <nav className="flex flex-col gap-2">
                                {navigations.map((nav) => (
                                    <a
                                        key={nav.label}
                                        href={nav.disabled ? "#" : nav.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`font-mono uppercase text-sm tracking-wider py-2 border-b border-dashed border-border/40 transition-colors hover:text-accent-foreground ${nav.disabled && "cursor-not-allowed opacity-40"
                                            }`}
                                    >
                                        {nav.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="flex items-center gap-4 pt-2">
                                {/* <GitHubStars
                                    repo="Arturooiwnl/Arturooiwnl"
                                    starsCount={20}
                                /> */}
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full justify-center bg-accent/40 rounded-full border border-dashed hover:bg-accent/60 transition-all duration-300 py-2.5 flex items-center text-sm"
                                >
                                    Get started
                                    <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatedContent>
    )
}