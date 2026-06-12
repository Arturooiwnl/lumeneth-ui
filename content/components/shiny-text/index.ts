import { meta } from "./meta"
import ShinyTextDemo from "./demo"
import ShinyTextComponent from "./component"
import type { ComponentRegistryItem } from "@/content/types"


export const ShinyText: ComponentRegistryItem = {
    meta,
    demo: ShinyTextDemo,
    component: ShinyTextComponent,
    shadcnComponents: [],
    extraCode: [
        {
            path: "lib/utils.ts"
        }
    ],
    dependencies: []
}