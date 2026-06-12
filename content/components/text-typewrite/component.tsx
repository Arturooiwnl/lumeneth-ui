"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.div

export type TextTypewriterProps = {
    as?: MotionElement
    text: string
    className?: string
    speed?: number // seconds per character
    mode?: "normal" | "blur"
    showCursor?: boolean
    cursorClassName?: string
    delay?: number
}

export function TextTypewriter({
    as: Component = motion.p,
    text,
    className,
    speed = 0.04,
    mode = "blur",
    showCursor = true,
    cursorClassName,
    delay = 0,
}: TextTypewriterProps) {
    const [visibleChars, setVisibleChars] = useState(0)

    useEffect(() => {
        setVisibleChars(0)

        let intervalId: NodeJS.Timeout

        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                setVisibleChars((prev) => {
                    if (prev >= text.length) {
                        clearInterval(intervalId)
                        return prev
                    }
                    return prev + 1
                })
            }, speed * 1000)
        }, delay * 1000)

        return () => {
            clearTimeout(timeoutId)
            if (intervalId) clearInterval(intervalId)
        }
    }, [text, speed, delay])

    const displayedText = text.slice(0, visibleChars)

    return (
        <Component className={cn("inline-flex flex-wrap items-center tracking-tight", className)}>
            {displayedText.split("").map((char, index) => (
                <span key={index} className="relative inline-block whitespace-pre">
                    {mode === "blur" ? (
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(6px)", y: 2 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            {char}
                        </motion.span>
                    ) : (
                        <span>{char}</span>
                    )}
                </span>
            ))}


            {showCursor && visibleChars <= text.length && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                    className={cn(
                        "inline-block w-[2px] h-[1.1em] bg-indigo-400 ml-0.5 origin-center select-none",
                        cursorClassName
                    )}
                />
            )}
        </Component>
    )
}