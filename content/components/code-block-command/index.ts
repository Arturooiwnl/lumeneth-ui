import { meta } from "./meta"
import CodeBlockCommandDemo from "./demo"
import { CodeBlockCommand as CodeBlockCommandComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const CodeBlockCommand: ComponentRegistryItem = {
    meta,
    demo: CodeBlockCommandDemo,
    component: CodeBlockCommandComponent,
    shadcnComponents: [],
    extraCode: [
        {
            path: "lib/utils.ts"
        }
    ],
    dependencies: [
        {name: "motion"},
        {name: "lucide-react"},
    ]
}