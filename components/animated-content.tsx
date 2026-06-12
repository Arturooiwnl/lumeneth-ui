"use client"

import React from "react"
import { motion, type Variants, type Transition } from "motion/react"

export type AnimationPreset =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "scale-up"
  | "scale-down"
  | "blur-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"

const presetVariants: Record<AnimationPreset, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "fade-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 24 },
  },
  "fade-left": {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  },
  "fade-right": {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 24 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  "scale-down": {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  "blur-in": {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
  },
  "slide-up": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "slide-down": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "slide-left": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "slide-right": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
  "zoom-out": {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 },
  },
}

export interface AnimatedContentProps {
  /**
   * The HTML tag to render as a motion component.
   * @defaultValue "div"
   */
  as?: keyof typeof motion
  /**
   * The animation preset to use.
   * @defaultValue "fade-up"
   */
  preset?: AnimationPreset
  /**
   * Custom transition configuration that overrides duration/delay props.
   */
  transition?: Transition
  /**
   * Custom variants configuration that overrides the preset.
   */
  variants?: Variants
  /**
   * The animation delay in seconds.
   * @defaultValue 0
   */
  delay?: number
  /**
   * The animation duration in seconds.
   * @defaultValue 0.5
   */
  duration?: number
  /**
   * Whether the animation should only trigger once when entering viewport.
   * @defaultValue true
   */
  once?: boolean
  /**
   * How much of the element should be in view to trigger the animation.
   * @defaultValue 0.1
   */
  amount?: "some" | "all" | number
  /**
   * Margins to expand or contract the viewport boundaries.
   * @defaultValue "0px"
   */
  margin?: string
  /**
   * Whether to trigger the animation when in view or immediately on mount.
   * @defaultValue "whileInView"
   */
  trigger?: "whileInView" | "animate"
  /**
   * Additional CSS classes.
   */
  className?: string
  /**
   * Children elements to animate.
   */
  children?: React.ReactNode
  /**
   * Any other standard element props to forward to the motion element.
   */
  [key: string]: any
}

export function AnimatedContent({
  as = "div",
  preset = "fade-up",
  transition,
  variants,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.1,
  margin = "0px",
  trigger = "whileInView",
  className,
  children,
  ...props
}: AnimatedContentProps) {
  // Dynamically resolve the motion tag
  const MotionComponent = (motion[as] || motion.div) as any

  // Select variants: custom variants or fallback to preset
  const selectedVariants = variants || presetVariants[preset]

  // Default transition config merging user options
  const defaultTransition: Transition = {
    duration,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98], // Smooth custom cubic bezier
    ...transition,
  }

  // Set up animation controls based on the trigger
  const animationProps =
    trigger === "whileInView"
      ? {
          whileInView: "animate",
          viewport: { once, amount, margin },
        }
      : {
          animate: "animate",
        }

  return (
    <MotionComponent
      initial="initial"
      variants={selectedVariants}
      transition={defaultTransition}
      className={className}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
