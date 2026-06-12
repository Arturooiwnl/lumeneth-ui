import { meta } from "./meta"
import HoldToInteractDemo from "./demo"
import { HoldToInteract as HoldToInteractComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"


export const HoldToInteract: ComponentRegistryItem = {
    meta,
    demo: HoldToInteractDemo,
    component: HoldToInteractComponent,
    shadcnComponents: [],
    extraCode: [
        {
            path: "lib/utils.ts"
        }
    ],
    dependencies: [
        {
            name: "motion"
        },
        {
            name: "lucide-react"
        }
    ]
}