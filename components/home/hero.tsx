import { ArrowRight, ArrowUpRight, CircleArrowRight, Plus } from "lucide-react";
import { AnimatedContent } from "../animated-content";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="top" className="relative h-screen px-4 md:px-0 max-w-4xl lg:max-w-6xl mx-auto">
            <AnimatedContent
                as="div"
                preset="fade"
                trigger="animate"
                delay={0.3}
                duration={0.6}
                className="hidden dark:block absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, transparent 65%, #a5b4fc 100%)",
                }}
            />
            <AnimatedContent
                as="div"
                preset="fade"
                trigger="animate"
                delay={0.3}
                duration={0.6}
                className="dark:hidden block absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, transparent 65%, #4362fa 100%)",
                }}
            />
            <div className="flex flex-col items-center gap-10 h-full justify-center max-w-3xl lg:max-w-4xl mx-auto">
                <div className="flex flex-col w-full">
                    <AnimatedContent
                        as="div"
                        preset="blur-in"
                        trigger="animate"
                        delay={0.4}
                        duration={0.6}
                        className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-[7rem] lg:text-9xl font-bold tracking-tighter font-serif text-transparent bg-linear-to-br from-foreground via-black dark:via-white to-indigo-400 dark:to-indigo-300 bg-clip-text">
                            Lumeneth.
                        </h1>
                        <p className="flex items-center gap-1 text-foreground/80 text-xs w-full z-10">By
                            <a
                                className="hover:text-primary transition-colors duration-300 flex items-center gap-1 group/link"
                                href="https://arturoperotto.vercel.app/"
                            >
                                Arturo Perotto
                                <ArrowUpRight className="size-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                            </a>
                        </p>
                    </AnimatedContent>

                    <AnimatedContent
                        as="div"
                        preset="blur-in"
                        trigger="animate"
                        delay={0.4}
                        duration={0.6}
                        className="relative flex flex-col justify-center translate-y-32 border border-dashed text-center h-30">
                        <Plus className="absolute -top-3 -left-3 text-neutral-600" />
                        <Plus className="absolute -bottom-3 -right-3 text-neutral-600" />
                        <h2
                            className="text-xl md:text-3xl text-foreground/80 font-serif"
                        >
                            Design without
                            <span className="text-transparent bg-linear-to-br from-foreground dark:via-indigo-300 dark:to-indigo-300 via-indigo-400 to-indigo-400 bg-clip-text ml-2">
                                limits
                            </span>
                        </h2>
                        <p className="text-sm md:text-[1.2rem] text-foreground/90 dark:text-foreground/50 font-thin max-w-sm md:max-w-lg mx-auto">
                            Open-source components and effects for creators who love building beautiful things.
                        </p>
                        <div className="absolute -bottom-22 left-1/2 -translate-1/2">
                            <Link
                                href="/get-started/introduction"
                                className="bg-accent/40 rounded-full border border-dashed hover:bg-accent/60 hover:border-solid transition-all duration-300 px-6 h-11 flex items-center group/cta"
                            >
                                Get started
                                <ArrowRight size={18} className="ml-1 md:ml-0 md:w-0 group-hover/cta:w-8 group-hover/cta:-rotate-45 transition-all duration-300" />
                            </Link>
                        </div>
                    </AnimatedContent>
                </div>
            </div>

        </section>
    )
}