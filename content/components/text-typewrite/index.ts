import { meta } from "./meta"
import TextTypewriterDemo from "./demo"
import { TextTypewriter as TextTypewriterComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const TextTypewriter: ComponentRegistryItem = {
    meta,
    demo: TextTypewriterDemo,
    component: TextTypewriterComponent,
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