import { meta } from "./meta"
import AnimatedNumberDemo from "./demo"
import { AnimatedNumber as AnimatedNumberComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const AnimatedNumber: ComponentRegistryItem = {
    meta,
    demo: AnimatedNumberDemo,
    component: AnimatedNumberComponent,
    shadcnComponents: [],
    extraCode: [
        {
            path: "/lib/utils.ts",
        },
    ],
    dependencies: [
        { name: "motion"},
    ]
}