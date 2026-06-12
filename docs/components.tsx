"use client"

import { SectionTitle } from "@/components/section-title";
import PreviewCard from "@/components/preview-card";
import { PREVIEW_COMPONENTS } from "@/content";
import { Plus } from "lucide-react";
import ShinyText from "@/content/components/shiny-text/component";

const left = PREVIEW_COMPONENTS.filter((_, i) => i % 2 === 0);
const right = PREVIEW_COMPONENTS.filter((_, i) => i % 2 === 1);

export default function Components() {
    return (
        <section id="features" className="relative mt-4 flex flex-col items-center">

            <SectionTitle title="Components" />

            <div className="relative mt-1 w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden">

                <div className="absolute top-0 -left-10 flex w-40 flex-col items-start justify-start">
                    {Array.from({ length: 110 }).map((_, i) => (
                        <div
                            key={i}
                            className="outline-accent/50 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
                        />
                    ))}
                </div>

                <div className="absolute top-0 -right-10 flex w-40 flex-col items-start justify-start">
                    {Array.from({ length: 110 }).map((_, i) => (
                        <div
                            key={i}
                            className="outline-accent/50 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
                        />
                    ))}
                </div>

                <div className="flex flex-col">
                    {left.map((item) => (
                        <PreviewCard
                            key={item.meta.slug}
                            title={item.meta.title}
                            category={item.meta.category}
                            demo={item.demo}
                            slug={item.meta.slug}
                            isOnce={item.meta.isOnce}
                        />
                    ))}
                </div>

                <div className="flex flex-col">
                    <div className="flex-1">
                        {right.map((item) => (
                            <PreviewCard
                                key={item.meta.slug}
                                title={item.meta.title}
                                category={item.meta.category}
                                demo={item.demo}
                                slug={item.meta.slug}
                                isOnce={item.meta.isOnce}
                            />
                        ))}
                    </div>

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-12 md:h-full w-full p-2 text-sm font-medium text-center rounded-2xl border border-border border-dashed bg-card/50 backdrop-blur-3xl hover:bg- z-10 group"
                    >
                        <div className="flex items-center justify-center size-full bg-background rounded-xl">
                            <span className="flex items-center gap-1 text-foreground/80 group-hover:text-foreground text-sm md:text-xl transition-all duration-300">
                                <Plus className="size-4 md:size-6" />
                                <ShinyText
                                    text="Add your component"
                                />
                            </span>
                        </div>
                    </a>

                </div>

            </div>

            <div className="w-full border-t mt-1" />
        </section>
    )
}