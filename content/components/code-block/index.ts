import { meta } from "./meta"
import CodeBlockDemo from "./demo"
import { CodeBlock as CodeBlockComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const CodeBlock: ComponentRegistryItem = {
    meta,
    demo: CodeBlockDemo,
    component: CodeBlockComponent,
    shadcnComponents: [
        {name:"scroll-area"}
    ],
    extraCode: [
        {
            path: "lib/utils.ts"
        }
    ],
    dependencies: [
        {name: "motion"},
        { name: "react-syntax-highlighter"},
        { name: "lucide-react"},
    ]
}