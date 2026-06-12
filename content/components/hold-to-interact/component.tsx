"use client"

import { useRef, useState, forwardRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react"
import { Lock, Unlock, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface HoldToInteractProps {
    /** Total time required to hold the button in milliseconds. */
    duration?: number
    /** Callback function triggered once progress reaches 100%. */
    onComplete?: () => void
    /** Plain text label for the idle/holding state (ignored if children is provided). */
    label?: string
    /** Plain text label for the success state (ignored if successChildren is provided). */
    successLabel?: string
    /** Custom node or component to display when the action is fully completed. */
    successChildren?: React.ReactNode
    /** Custom Tailwind classes specifically for the background progress track overlay. */
    fillClassName?: string
    /** Whether the button should be disabled. */
    disabled?: boolean
    /** Additional Tailwind layout adjustments for the container box. */
    className?: string
    /** Standard children or a render function that exposes the internal interaction states. */
    children?: React.ReactNode | ((states: { isHolding: boolean; isCompleted: boolean }) => React.ReactNode)
}

const HoldToInteract = forwardRef<HTMLButtonElement, HoldToInteractProps>(
    ({
        className,
        duration = 2000,
        onComplete,
        label = "Hold to confirm",
        successLabel = "Action completed",
        successChildren,
        fillClassName,
        children,
        disabled,
        ...props
    }, ref) => {
        const [isHolding, setIsHolding] = useState(false)
        const [isCompleted, setIsCompleted] = useState(false)

        const progress = useMotionValue(0)
        const animationRef = useRef<any>(null)
        const scaleX = useTransform(progress, [0, 100], [0, 1])

        const startHolding = (e: React.PointerEvent<HTMLButtonElement>) => {
            if (isCompleted || disabled) return
            setIsHolding(true)

            if (animationRef.current) animationRef.current.stop()

            const currentProgress = progress.get()
            const remainingDuration = ((100 - currentProgress) / 100) * duration

            animationRef.current = animate(progress, 100, {
                duration: remainingDuration / 1000,
                ease: "linear",
                onComplete: () => {
                    setIsCompleted(true)
                    setIsHolding(false)
                    if (onComplete) onComplete()
                },
            })
        }

        const stopHolding = () => {
            if (isCompleted || disabled) return
            setIsHolding(false)

            if (animationRef.current) animationRef.current.stop()

            const currentProgress = progress.get()
            const decayDuration = (currentProgress / 100) * 0.25
            animationRef.current = animate(progress, 0, {
                duration: decayDuration,
                ease: "easeInOut",
            })
        }

        useEffect(() => {
            return () => {
                if (animationRef.current) animationRef.current.stop()
            }
        }, [])

        const renderActiveContent = () => {
            if (typeof children === "function") {
                return children({ isHolding, isCompleted })
            }
            if (children) return children

            return (
                <div className="flex items-center gap-2">
                    {isHolding ? (
                        <Unlock className="size-3.5 shrink-0 text-foreground transition-transform duration-200" />
                    ) : (
                        <Lock className="size-3.5 shrink-0 text-muted-foreground" />
                    )}
                    <span>{label}</span>
                </div>
            )
        }

        return (
            <button
                ref={ref}
                onPointerDown={startHolding}
                onPointerUp={stopHolding}
                onPointerLeave={stopHolding}
                disabled={disabled}
                data-state={isCompleted ? "completed" : isHolding ? "holding" : "idle"}
                className={cn(
                    "relative w-full max-w-sm h-14 border text-sm font-medium select-none overflow-hidden outline-none transition-colors duration-200 cursor-pointer",
                    "rounded-lg",
                    isCompleted
                        ? "bg-primary/5 border-border text-primary cursor-default"
                        : isHolding
                            ? "active:scale-98 bg-background border-border text-foreground"
                            : "bg-background border-border/70 hover:border-border text-muted-foreground hover:text-foreground transition-all duration-300",
                    disabled && "opacity-50 pointer-events-none bg-muted text-muted-foreground border-muted",
                    className
                )}
                {...props}
            >
                {!isCompleted && (
                    <motion.div
                        className={cn(
                            "absolute inset-0 right-0 pointer-events-none origin-left bg-secondary/50 rounded-r-3xl",
                            fillClassName
                        )}
                        style={{ scaleX }}
                    />
                )}

                <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full px-4 tracking-tight">
                    <AnimatePresence mode="wait">
                        {isCompleted ? (
                            <motion.div
                                key="success"
                                initial={{ y: 3, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                                {successChildren || (
                                    <div className="flex items-center gap-2 text-primary">
                                        <Check className="size-3.5 shrink-0 stroke-[2.5]" />
                                        <span>{successLabel}</span>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div key="active" className="w-full flex items-center justify-center">
                                {renderActiveContent()}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        )
    }
)
HoldToInteract.displayName = "HoldToInteract"

export { HoldToInteract }