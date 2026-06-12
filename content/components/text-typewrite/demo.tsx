"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import { TextTypewriter } from "./component"

export default function TextTypewriterDemo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    return (
        <div
            ref={containerRef}
            className="w-full backdrop-blur-xs relative"
        >
            <div className="space-y-2">
                <div className="h-8"> {/* Container with fixed height to avoid CLS*/}
                    {isInView && (
                        <TextTypewriter
                            text="Building the next generation of web components."
                            mode="blur"
                            speed={0.03}
                            cursorClassName="bg-foreground"
                            className="text-xl text-foreground/90 font-light"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}