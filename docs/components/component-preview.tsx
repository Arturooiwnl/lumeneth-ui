"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { Monitor, Code2, RefreshCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "@/content/components/code-block/component"
import { Button } from "@/components/ui/button"
import { CodeFile } from "@/content/components/code-block/component"

interface ComponentPreviewProps {
    files: CodeFile | CodeFile[]
    demo: React.ReactNode
}

export default function ComponentPreview({ files, demo }: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
    const [replayKey, setReplayKey] = useState(0)

    return (
        <div className="w-full border border-border/60 rounded-2xl bg-card/50 shadow-sm flex flex-col max-w-4xl mx-auto">
            <div className="flex items-center justify-between bg-card/50 px-4 py-2">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={cn(
                            "relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors",
                            activeTab === "preview" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                        )}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Monitor className="size-4" />
                            Preview
                        </span>
                        {activeTab === "preview" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-accent rounded-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={cn(
                            "relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors",
                            activeTab === "code" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                        )}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Code2 className="size-4" />
                            Code
                        </span>
                        {activeTab === "code" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-accent rounded-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                </div>
                {activeTab === "preview" && (
                    <Button
                        size="icon-sm"
                        variant="ghost"
                        onClick={() => setReplayKey(k => k + 1)}
                        className="text-foreground/60 hover:text-foreground rounded-full"
                        title="Replay animation"
                    >
                        <RefreshCcw className="size-4" />
                    </Button>
                )}
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden">
                {activeTab === "preview" ? (
                    <div className="flex min-h-[400px] items-center justify-center p-8 rounded-2xl bg-background w-full">
                        <div key={replayKey} className="w-full flex items-center justify-center">
                            {demo}
                        </div>
                    </div>
                ) : (
                    <div className="w-full">
                        <CodeBlock
                            maxHeight="500px"
                            files={files}
                            className="border-0 rounded-none shadow-none w-full"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
