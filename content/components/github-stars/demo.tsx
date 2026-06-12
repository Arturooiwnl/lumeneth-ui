"use client"

import { GitHubStars } from "./component"

export default function ShinyTextDemo() {

    return (
        <div className="p-2">
            <GitHubStars
                repo="cristian-labs/components"
                starsCount={2300}
            />
        </div>
    )
}