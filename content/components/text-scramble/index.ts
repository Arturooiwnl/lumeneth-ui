import { meta } from "./meta"
import TextScrambleDemo from "./demo"
import { TextScramble as TextScrambleComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"


export const TextScramble: ComponentRegistryItem = {
    meta,
    demo: TextScrambleDemo,
    component: TextScrambleComponent,
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