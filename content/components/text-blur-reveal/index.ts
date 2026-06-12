import { meta } from "./meta"
import TextBlurRevealDemo from "./demo"
import { TextBlurReveal as TextBlurRevealComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const TextBlurReveal: ComponentRegistryItem = {
    meta,
    demo: TextBlurRevealDemo,
    component: TextBlurRevealComponent,
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