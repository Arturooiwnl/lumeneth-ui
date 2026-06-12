"use client"

import React, { useState } from "react"
import { Copy, Check, Eye, Code, Terminal, Plus, ExternalLink, Loader2, ArrowRightCircle, RefreshCcw } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "./ui/button"

export interface PreviewCardProps {
    title: string
    category?: string
    demo?: React.ComponentType
    slug: string
    isOnce?: boolean
    className?: string
}

export default function PreviewCard({
    title,
    category = "component",
    demo: DemoComponent,
    slug,
    isOnce,
    className,
}: PreviewCardProps) {

    const [replayKey, setReplayKey] = useState(0);

    return (
        <div
            className={cn(
                "break-inside-avoid rounded-2xl border border-dashed mb-1 border-border bg-card/40 backdrop-blur-md p-1 transition-all duration-300 group relative flex flex-col overflow-hidden",
                className
            )}
        >
            {isOnce && (
                <Button
                    size="icon-sm"
                    variant="ghost"
                    className="cursor-pointer text-foreground/80 hover:text-foreground transition-all duration-300 absolute top-2 right-2 z-20 rounded-full group/refresh"
                    onClick={() => setReplayKey(prev => prev + 1)}
                >
                    <RefreshCcw className="group-hover/refresh:rotate-180 transition-all duration-300" />
                </Button>
            )}

            <div
                className={cn(
                    "flex items-center justify-center min-h-[200px] rounded-xl border border-dashed border-border/60 bg-background relative overflow-hidden transition-all duration-300")}
            >
                <div className="p-6 w-full flex items-center justify-center relative z-10">
                    {DemoComponent ? <DemoComponent key={replayKey} /> : null}
                </div>

            </div>
            <div className="flex items-center justify-between px-2 pt-1 text-foreground/70">
                <p className="text-sm">
                    {title}
                </p>
                <Link
                    className="flex justify-center bg-accent/50 border border-dashed hover:border-solid w-10 hover:w-20 py-0.5 transition-all duration-300 rounded-full group/link"
                    href={`/components/${slug}`}>
                    <ArrowRightCircle className="size-5 group-hover/link:-rotate-45 transition-all duration-300" />
                </Link>
            </div>
        </div>
    )
}