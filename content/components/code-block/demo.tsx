import { CodeBlock, type CodeFile } from "./component"

export default function CodeBlockDemo() {
    const projectFiles: CodeFile[] = [
        {
            name: "App.tsx",
            language: "tsx",
            code: `import * as React from "react"\nimport "./styles.css"\n\nexport default function App() {\n  return (\n    <main className="container">\n      <h1>Hello React</h1>\n    </main>\n  )\n}`
        },
        {
            name: "utils.js",
            language: "js",
            code: `/**\n * Calculates clean multipliers safely\n */\nexport function calculateVelocity(rate, duration) {\n  if (!rate) return 0;\n  return (rate * 100) / duration;\n}`
        },
        {
            name: "styles.css",
            language: "css",
            code: `.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background-color: #09090b;\n}`
        },
    ]

    return (
        <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
            <CodeBlock files={projectFiles} />
        </div>
    )
}