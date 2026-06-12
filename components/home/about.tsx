"use client"

import { SectionTitle } from "../section-title";
import { GitHub } from "../icons";
import { AnimatedContent } from "../animated-content";
import ShinyText from "@/content/components/shiny-text/component";

export default function About() {
    return (
        <section id="top" className="relative h-[50vh] mb-12">
            <SectionTitle
                title="About Lumeneth"
            />
            <div className="flex max-w-3xl lg:max-w-4xl mx-auto w-full px-4 md:px-0 mt-22 justify-center">
                <div className="flex flex-col">
                    <AnimatedContent
                        as="h2"
                        preset="blur-in"
                        duration={0.6}
                        className="text-center md:text-start text-2xl md:text-5xl text-foreground/80 font-bold font-serif"
                    >
                        Built for creators.
                        <br />
                        <span className="md:ml-16 text-transparent bg-linear-to-br from-foreground dark:via-white via-black to-indigo-400 bg-clip-text">Shared for everyone.</span>
                    </AnimatedContent>

                    <AnimatedContent
                        preset="fade-up"
                        delay={0.2}
                        duration={0.6}
                        className="text-foreground/60 leading-8.5 text-base md:text-xl mt-12 flex max-w-xl px-2 md:px-0"
                    >
                        <p className="leading-loose md:leading-10">Lumeneth is where I collect the components, effects, and ideas that inspire my work. Everything here is
                            <a
                                href="https://github.com/Arturooiwnl/lumeneth-ui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1">

                                <ShinyText
                                    text="open source"
                                    className="underline underline-offset-4"
                                />
                            </a>
                            and made to be copied, modified, and used in real projects.</p>
                    </AnimatedContent>
                </div>
            </div>

        </section>
    )
}
