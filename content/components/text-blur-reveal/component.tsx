"use client"

import type { Transition, Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.h1 | typeof motion.h2

export type TextBlurRevealProps = {
    as?: MotionElement
    text: string
    className?: string
    stagger?: number
    duration?: number
    transition?: Transition
    variants?: Variants
}

const defaultContainerVariants: Variants = {
    hidden: {},
    visible: (stagger: number) => ({
        transition: { staggerChildren: stagger },
    }),
}

const defaultChildVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 6 },
    visible: (duration: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
            duration: duration,
            ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic-bezier suave
        },
    }),
}

export function TextBlurReveal({
    as: Component = motion.h2,
    text,
    className,
    stagger = 0.08,
    duration = 0.6,
    variants = defaultChildVariants,
}: TextBlurRevealProps) {
    const words = text.split(" ")

    return (
        <Component
            variants={defaultContainerVariants}
            initial="hidden"
            animate="visible"
            custom={stagger}
            className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1", className)}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    custom={duration}
                    variants={variants}
                    className="inline-block origin-left select-none"
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    )
}