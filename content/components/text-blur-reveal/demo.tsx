"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import { TextBlurReveal } from "./component"

export default function TextBlurRevealDemo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    return (
        <div
            ref={containerRef}
            className="w-full backdrop-blur-xs relative"
        >
            <div className="space-y-2">
                {isInView && (
                    <TextBlurReveal
                        text="Elevating interface designs with fine-tuned micro animations."
                        className="text-2xl font-serif text-foreground/90 font-medium"
                    />
                )}
            </div>
        </div>
    )
}