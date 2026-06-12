"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import { TextSlideReveal } from "./component"

export default function TextSlideRevealDemo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    return (
        <div
            ref={containerRef}
            className="w-full relative"
        >
            {isInView && (
                <TextSlideReveal
                    text="Design systems engineered for precision and smoothness."
                    className="md:text-2xl lg:text-3xl max-w-sm font-bold tracking-tight text-foreground"
                />
            )}
        </div>
    )
}