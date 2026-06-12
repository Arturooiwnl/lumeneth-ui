"use client"

import { motion } from "motion/react"
import { TextScramble } from "./component"
import { Plus } from "lucide-react"

export default function TextScrambleDemo() {
    return (
        <div className="w-full text-center p-8 flex flex-col gap-12">
            <div className="space-y-2">
                <TextScramble
                    as={motion.h2}
                    text="ACTIVATE IN VIEW"
                    delay={0.2}
                    trigger="view"
                    className="text-2xl lg:text-3xl font-bold font-mono"
                />
            </div>
            <div className="space-y-2">
                <TextScramble
                    as={motion.h2}
                    text="HOVER TO ACTIVE"
                    delay={0.2}
                    trigger="hover"
                    className="text-2xl lg:text-3xl font-bold font-mono"
                />
            </div>
        </div>
    )
}