import DocsHeader from "@/docs/components/header"
import DocsFooter from "@/docs/components/footer"
import { AnimatedContent } from "@/components/animated-content"
import clsx from "clsx"

interface DocsLayoutProps {
    children: React.ReactNode
    className?: string
}

export default function DocsLayout({
    children,
    className,
}: DocsLayoutProps) {
    return (
        <AnimatedContent
            as="div"
            preset="fade"
            trigger="animate"
            duration={0.6}
            className={clsx(
                "relative min-h-screen flex flex-col",
                "before:absolute before:pointer-events-none before:-z-1 before:left-1/2 before:w-full before:inset-y-0 before:max-w-7xl before:border-x before:border-dashed before:border-border before:-translate-x-1/2",
                "after:absolute after:pointer-events-none after:-z-1 after:border-x after:inset-y-0 after:w-full after:max-w-6xl after:-translate-x-1/2 after:left-1/2 after:border-border",
                className
            )}
        >
            <DocsHeader />

            <main className="max-w-6xl mx-auto w-full flex-1">
                {children}
            </main>

            <DocsFooter />
        </AnimatedContent>
    )
}