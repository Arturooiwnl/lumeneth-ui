"use client"

import { useRef, useEffect, useMemo, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export interface NumberFormatProps {
    /** The target number to animate towards. */
    value: number
    /** Standard configuration object for currency, decimals, and compact units. */
    formatOptions?: Intl.NumberFormatOptions
    /** Regional locale identification string. Defaults to system/en-US. */
    locale?: string
    /** Optional overrides for Framer Motion's spring physics. */
    springOptions?: { stiffness?: number; damping?: number; mass?: number }
    className?: string
}

export function AnimatedNumber({
    value,
    formatOptions = {},
    locale = "en-US",
    springOptions = { stiffness: 75, damping: 18, mass: 0.8 },
    className,
}: NumberFormatProps) {
    const elementRef = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)

    // Smooth physics-driven spring driver
    const spring = useSpring(motionValue, springOptions)

    // Trigger update animation whenever target value updates
    useEffect(() => {
        motionValue.set(value)
    }, [value, motionValue])

    useEffect(() => {
        const formatter = new Intl.NumberFormat(locale, formatOptions)

        return spring.on("change", (latest) => {
            if (elementRef.current) {
                elementRef.current.textContent = formatter.format(latest)
            }
        })
    }, [spring, formatOptions, locale])

    return (
        <span
            ref={elementRef}
            className={cn("tabular-nums font-medium text-foreground", className)}
        >
            {new Intl.NumberFormat(locale, formatOptions).format(0)}
        </span>
    )
}

export interface NumberFormatProps {
    /** The target number to animate towards. */
    value: number
    /** Standard configuration object for currency, decimals, and compact units. */
    formatOptions?: Intl.NumberFormatOptions
    /** Regional locale identification string. Defaults to es-AR. */
    locale?: string
    /** Custom Spring physics for the rolling effect. */
    springOptions?: { stiffness?: number; damping?: number; mass?: number }
    className?: string
}

export function RollingTicker({
    value,
    formatOptions = {},
    locale = "en-US",
    springOptions = { stiffness: 80, damping: 8, mass: 0.4 },
    className,
}: NumberFormatProps) {
    const formatter = useMemo(() => new Intl.NumberFormat(locale, formatOptions), [locale, formatOptions])
    const formattedString = formatter.format(value)
    const characters = formattedString.split("")

    return (
        <span className={cn("inline-flex overflow-hidden tabular-nums font-medium text-foreground", className)}>
            <AnimatePresence mode="popLayout">
                {characters.map((char, index) => {
                    const isDigit = !isNaN(parseInt(char, 10))

                    if (!isDigit) {
                        return (
                            <span key={`symbol-${index}-${char}`} className="inline-block whitespace-pre -translate-y-0.5">
                                {char}
                            </span>
                        )
                    }

                    const keyPosition = characters.length - index

                    return (
                        <DigitColumn
                            key={`digit-${keyPosition}`}
                            digit={parseInt(char, 10)}
                            springOptions={springOptions}
                        />
                    )
                })}
            </AnimatePresence>
        </span>
    )
}

/**
 * Subpixel-accurate single digit column scroller
 */
function DigitColumn({ digit, springOptions }: { digit: number; springOptions: any }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    // Measure exact floating-point subpixel heights to kill layout jitter permanently
    useEffect(() => {
        if (containerRef.current) {
            const singleNode = containerRef.current.querySelector("span")
            if (singleNode) {
                const rect = singleNode.getBoundingClientRect()
                setHeight(rect.height)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative inline-block overflow-hidden shrink-0"
            style={{ height: height ? `${height}px` : "auto" }}
        >

            <motion.div
                className="flex flex-col absolute left-0 top-0w-full"
                animate={{ y: -digit * height }}
                transition={{
                    type: "spring",
                    ...springOptions,
                    restDelta: 0.01
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num} className="inline-block leading-none text-center">
                        {num}
                    </span>
                ))}
            </motion.div>
            <span className="opacity-0 pointer-events-none select-none leading-none block">0</span>
        </div>
    )
}