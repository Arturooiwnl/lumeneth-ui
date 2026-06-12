"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.h1 | typeof motion.h2 | typeof motion.div

export type TextScrambleProps = {
    /** The HTML tag or motion component to render as. */
    as?: MotionElement
    /** The target text to be scrambled and revealed. */
    text: string
    /** Additional Tailwind classes. */
    className?: string
    /** Characters used during the scrambling phase. */
    glyphs?: string
    /** Speed of the shuffle cycle in milliseconds. */
    speed?: number
    /** How the animation triggers: 'view' (when visible) or 'hover' (on mouse enter). */
    trigger?: "view" | "hover"
    /** Initial delay before the scramble animation begins (in seconds). */
    delay?: number
}

const DEFAULT_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789X_Y_Z_#_$_%_&_*_?_+"

export function TextScramble({
    as: Component = motion.p,
    text,
    className,
    glyphs = DEFAULT_GLYPHS,
    speed = 25,
    trigger = "view",
    delay = 0,
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    const frameRef = useRef<number>(0)
    const iterationRef = useRef<number>(0)
    const isAnimating = useRef<boolean>(false)

    /**
     * Core scramble loop logic using requestAnimationFrame for pixel-perfect 60fps execution.
     */
    const scramble = useCallback(() => {
        if (isAnimating.current) return
        isAnimating.current = true
        iterationRef.current = 0

        const run = () => {
            setDisplayText((currentText) =>
                text
                    .split("")
                    .map((char, index) => {
                        // If the character is a space, preserve it immediately
                        if (char === " ") return " "

                        // If the iteration loop has surpassed this index, lock the correct letter
                        if (index < iterationRef.current) {
                            return text[index]
                        }

                        // Otherwise, return a random glyph from the matrix
                        return glyphs[Math.floor(Math.random() * glyphs.length)]
                    })
                    .join("")
            )

            // Terminate the animation frame loop once all letters are decrypted
            if (iterationRef.current >= text.length) {
                isAnimating.current = false
                cancelAnimationFrame(frameRef.current)
            } else {
                // Incrementally reveal letters based on frame pacing
                iterationRef.current += 1 / 3
                frameRef.current = requestAnimationFrame(run)
            }
        }

        frameRef.current = requestAnimationFrame(run)
    }, [text, glyphs])

    // Trigger on Viewport Entry
    useEffect(() => {
        if (trigger !== "view" || !isInView) return

        const timeoutId = setTimeout(() => {
            scramble()
        }, delay * 1000)

        return () => {
            clearTimeout(timeoutId)
            cancelAnimationFrame(frameRef.current)
        }
    }, [isInView, trigger, scramble, delay])

    // Cleanup loops on unmount
    useEffect(() => {
        return () => cancelAnimationFrame(frameRef.current)
    }, [])

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            scramble()
        }
    }

    return (
        <Component
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            className={cn(
                "inline-block font-mono tracking-tight select-none will-change-contents",
                trigger === "hover" && "cursor-pointer",
                className
            )}
        >
            {displayText}
        </Component>
    )
}