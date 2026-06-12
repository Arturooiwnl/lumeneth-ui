import { CodeBlockCommand } from "./component"

export default function CodeBlockDemo() {
    // Custom commands example to render dynamic dependency additions
    const customInstallation = {
        pnpm: "pnpm add motion lucide-react clsx",
        yarn: "yarn add motion lucide-react clsx",
        npm: "npm i motion lucide-react clsx",
        bun: "bun add motion lucide-react clsx",
    }

    return (
        <div className="w-full flex flex-col items-center justify-center p-4 bg-background min-h-[200px]">
            <CodeBlockCommand commands={customInstallation} />
        </div>
    )
}