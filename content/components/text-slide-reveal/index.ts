import { meta } from "./meta"
import TextSlideRevealDemo from "./demo"
import { TextSlideReveal as TextSlideRevealComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const TextSlideReveal: ComponentRegistryItem = {
    meta,
    demo: TextSlideRevealDemo,
    component: TextSlideRevealComponent,
    shadcnComponents: [],
    extraCode: [
        {
            path: "lib/utils.ts"
        }
    ],
    dependencies: [
        {
            name: "motion"
        }
    ]
}