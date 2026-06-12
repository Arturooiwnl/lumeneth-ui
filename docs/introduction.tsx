import React from "react"
import { SectionTitle } from "@/components/section-title"
import { ArrowUpRight, Plus } from "lucide-react";

const INSPIRATIONS = [
    { title: "Shadcn/ui", url: "https://ui.shadcn.com/" },
    { title: "Vercel", url: "https://vercel.com/home" },
    { title: "React Bits", url: "https://www.reactbits.dev/" },
    { title: "Magic UI", url: "http://magicui.design/" },
]

export default function Introduction() {
    return (
        <section className="relative border-b border-dashed border-border/60">
            <Plus className="hidden lg:block absolute -bottom-3 -right-3 text-neutral-600" />
            <Plus className="absolute lg:block -bottom-3 -left-3 text-neutral-600" />
            <div className="max-w-4xl mx-auto space-y-4 py-10 px-6">
                <h1 className="text-left font-bold text-3xl md:text-4xl">
                    Introduction
                </h1>
                <p className="text-xl leading-tight text-foreground/80">
                    Lumeneth is where I collect the components, effects, and ideas that inspire my work.
                </p>
                <p className="text-xl leading-tight text-muted-foreground/80">
                    Every component in this collection is open source and designed to be
                    copied, modified, and used in real projects. The goal is not to provide
                    a complete design system, but rather a curated set of building blocks
                    that help developers create polished user experiences faster.
                </p>
            </div>

            <SectionTitle title="Content" />

            <div className="max-w-4xl mx-auto space-y-6 py-12 text-muted-foreground leading-relaxed px-6">
                <p>
                    Most of the components are built with React, Tailwind CSS, and Motion. Others are based on shadcn/ui, extending its familiar components with custom interactions and visual effects.
                </p>
                <p>
                    These resources aren't exclusively for this library; they were used in some projects I developed, and I wanted to centralize all my resources in one place and share them.
                </p>
                <p>
                    You'll find a variety of components for different types of projects you might want to develop. Use them to create beautiful things.
                </p>
                <p>
                    Feel free to explore the collection, adapt the components to your needs, and customize them.
                </p>
            </div>

            <SectionTitle title="inspired by" />

            <div className="py-6 flex justify-center max-w-4xl mx-auto w-full">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm md:text-base">
                    {INSPIRATIONS.map((item) => (
                        <div key={item.title}>
                            <li>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 group text-foreground/60 hover:text-foreground transition-colors duration-300 font-medium"
                                >
                                    {item.title}
                                    <ArrowUpRight className="size-3.5 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5 transition-all duration-300" />
                                </a>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
}