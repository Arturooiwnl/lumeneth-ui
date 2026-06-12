"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { navigations } from "@/constants/home"
import { CommandMenu } from "./command-menu"
import { GitHub } from "@/components/icons"
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/constants/categories";
import Link from "next/link"
import { AnimatedThemeToggler } from "@/components/ui/theme-toggle"

const createSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export default function DocsHeader() {

    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <header
            className={`sticky w-full top-0 bg-background border-b border-dashed px-2 z-50 animate-in blur-in-xs duration-500 ${isMenuOpen ? "overflow-visible" : "overflow-hidden"
                }`}
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between">

                <div className="flex border-x px-2 border-dashed">
                    <Link
                        href="/">
                        <img
                            loading="eager"
                            src="/icon.png"
                            alt="Icono de Arturo Perotto"
                            className="size-12 hidden dark:block"
                        />
                        <img
                            loading="eager"
                            src="/icon-black.png"
                            alt="Icono de Arturo Perotto"
                            className="size-12 dark:hidden"
                        />
                    </Link>
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
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="flex items-center justify-between w-48 px-3 py-1.5 text-xs text-muted-foreground border border-dashed border-border rounded-full hover:bg-accent/40 hover:text-foreground transition-all duration-300 font-mono cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <Search size={14} className="text-muted-foreground" />
                            <span>Search...</span>
                        </div>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-dashed bg-muted px-1.5 font-mono text-[9px] font-medium opacity-100 shrink-0">
                            <span className="text-[10px]">⌘</span>K
                        </kbd>
                    </button>
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
                <div className="flex lg:hidden items-center border-x border-dashed h-12">

                    <button
                        onClick={() => setSearchOpen(true)}
                        className="md:hidden text-muted-foreground hover:text-foreground transition-colors focus:outline-none p-3 h-full border-r border-dashed"
                        aria-label="Search components"
                    >
                        <Search size={20} />
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none p-3 h-full"
                        aria-label="Toggle structural layout map navigation"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full bg-background border-t border-dashed border-border left-0 absolute top-full lg:hidden overflow-hidden"
                    >

                        <div className="px-4 py-6">
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
                        </div>

                        <div className="lg:hidden px-4 py-6 flex flex-col gap-6 max-w-5xl mx-auto">

                            <nav className="flex flex-col gap-8">
                                {CATEGORIES.map((category) => (
                                    <div key={category.name} className="flex flex-col gap-3">
                                        <h4 className="px-2 text-xs font-semibold tracking-widest text-foreground/40 uppercase">
                                            {category.name}
                                        </h4>

                                        <ul className="flex flex-col gap-0.5">
                                            {category.subCategories.map((item) => {
                                                const slug = createSlug(item);
                                                const basePath = category.name === "Get Started" ? "get-started" : "components";
                                                const href = `/${basePath}/${slug}`;

                                                const isActive = pathname === href;

                                                return (
                                                    <li key={item}>
                                                        <Link
                                                            href={href}
                                                            className={`flex items-center rounded-lg px-3 py-2 text-sm transition-all duration-300 ${isActive
                                                                ? "bg-accent/40 text-foreground font-medium border border-border/50 shadow-xs"
                                                                : "text-foreground/60 hover:bg-accent/20 hover:text-foreground border border-transparent"
                                                                }`}
                                                        >
                                                            {item}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </nav>

                            <div className="md:hidden flex items-center gap-3 pt-2">
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setSearchOpen(true)
                                    }}
                                    className="w-full justify-center bg-accent/20 rounded-full border border-dashed hover:bg-accent/40 transition-all duration-300 py-2.5 flex items-center text-sm font-mono cursor-pointer"
                                >
                                    <Search size={16} className="mr-2 text-muted-foreground" />
                                    Search...
                                </button>
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <CommandMenu open={searchOpen} setOpen={setSearchOpen} />
        </header>
    )
}