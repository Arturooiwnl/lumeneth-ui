"use client"

import type { Transition, Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.h1

export type TextSlideRevealProps = {
    as?: MotionElement
    text: string
    className?: string
    stagger?: number
    direction?: "up" | "down"
    transition?: Transition
}

export function TextSlideReveal({
    as: Component = motion.h3,
    text,
    className,
    stagger = 0.04,
    direction = "up",
    transition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
}: TextSlideRevealProps) {
    const words = text.split(" ")
    const initialY = direction === "up" ? "100%" : "-100%"

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: stagger }
        }
    }

    const childVariants: Variants = {
        hidden: { y: initialY, opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: transition
        }
    }

    return (
        <Component
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn("flex flex-wrap gap-x-[0.2em] overflow-hidden py-1", className)}
        >
            {words.map((word, i) => (
                <span key={i} className="relative overflow-hidden inline-block vertical-align-bottom">
                    <motion.span
                        variants={childVariants}
                        className="inline-block will-change-transform text-transparent bg-linear-to-br from-white via-foreground to-muted-foreground bg-clip-text"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Component>
    )
}