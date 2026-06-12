import { meta } from "./meta"
import GitHubStarsDemo from "./demo"
import { GitHubStars as GitHubStarsComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const GitHubStars: ComponentRegistryItem = {
    meta,
    demo: GitHubStarsDemo,
    component: GitHubStarsComponent,
    shadcnComponents: [{
        name: "tooltip"
    }],
    extraCode: [],
    dependencies: [
        {
            name: "motion"
        }
    ]
}