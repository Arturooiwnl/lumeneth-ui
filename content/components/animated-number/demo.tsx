"use client"

import { useEffect, useState } from "react"
import { AnimatedNumber, RollingTicker } from "./component"
import { Plus } from "lucide-react"

export default function NumberTickerDemo() {
    const [metrics, setMetrics] = useState({
        balance: 14250.50,
        conversion: 3.42,
        downloads: 84200
    })

    const randomizeValues = () => {
        setMetrics({
            balance: Math.random() * 50000 + 5000,
            conversion: Math.random() * 12 + 1,
            downloads: Math.floor(Math.random() * 200000) + 10000
        })
    }

    useEffect(() => {
        randomizeValues()
    }, [])

    return (
        <div className="relative w-full max-w-xl mx-auto p-8 border border-dashed border-border bg-card/50 text-card-foreground space-y-8 rounded-b-xl rounded-tr-xl">
            <Plus className="absolute -left-3 -top-3 text-neutral-600" />
            <div className="space-y-6">

                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        Fintech Balance (Rolling Odometer)
                    </span>
                    <div className="flex items-start gap-0.5">
                        <RollingTicker
                            value={metrics.balance}
                            className="text-3xl font-bold tracking-tight text-primary"
                            formatOptions={{ style: "currency", currency: "USD", minimumFractionDigits: 2 }}
                        />
                        <span className="text-base text-muted-foreground font-mono uppercase tracking-wider">USD</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        Real-time Conversion Velocity (Spring Ticker)
                    </span>
                    <div className="text-2xl font-semibold text-foreground flex items-center gap-0.5">
                        <AnimatedNumber
                            value={metrics.conversion}
                            formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                        />
                        <span className="text-muted-foreground">%</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        Global Package Pulls (Compact Units)
                    </span>
                    <AnimatedNumber
                        value={metrics.downloads}
                        className="text-2xl font-semibold tracking-tight text-foreground"
                        formatOptions={{ notation: "compact", compactDisplay: "short" }}
                    />
                </div>
            </div>
        </div>
    )
}