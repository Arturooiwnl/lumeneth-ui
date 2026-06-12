import { meta } from "./meta"
import TextFlipDemo from "./demo"
import { TextFlip as TextFlipComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"


export const TextFlip: ComponentRegistryItem = {
    meta,
    demo: TextFlipDemo,
    component: TextFlipComponent,
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