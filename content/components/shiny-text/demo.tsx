"use client"

import ShinyText from "./component"

export default function ShinyTextDemo() {

    return (
        <div className="p-2">
            <ShinyText
                text="AI is thinking..."
                className="text-2xl font-serif text-foreground/40 font-medium"
            />
        </div>
    )
}