import { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPONENTS_MAP, COMPONENTS } from "@/content/components";
import Sidebar from "@/docs/components/sidebar";
import clsx from "clsx";
import DocsHeader from "@/docs/components/header";
import { SectionTitle } from "@/components/section-title";
import fs from "fs";
import path from "path";
import ComponentPreview from "@/docs/components/component-preview";
import DocsFooter from "@/docs/components/footer";
import { GitHub } from "@/components/icons";
import { CodeBlockCommand } from "@/content/components/code-block-command/component";
import { CodeFile } from "@/content/components/code-block/component";
import { getLanguage } from "@/lib/get-language";

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;

    const Component = COMPONENTS_MAP[slug];

    if (!Component) {
        return {};
    }

    return {
        title: `Lumeneth | ${Component.meta.title}`,
        description: Component.meta.description,
    };
}

export function generateStaticParams() {
    return COMPONENTS.map((component) => ({
        slug: component.meta.slug,
    }));
}

export default async function ComponentPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const Component = COMPONENTS_MAP[slug];

    if (!Component) {
        notFound();
    }

    const componentFilePath = path.join(process.cwd(), "content", "components", slug, "component.tsx");

    let componentCode = "";

    try {
        componentCode = fs.readFileSync(componentFilePath, "utf8");
    } catch (error) {
        console.error(`Could not read file at ${componentFilePath}`);
    }

    const getDependencies = () => {
        const dependencies = Component.dependencies!.map((dependency) => dependency.name);
        return dependencies;
    }

    const getShadcnComponents = () => {
        const shadcnComponents = Component.shadcnComponents!.map((shadcnComponent) => shadcnComponent.name);
        return shadcnComponents;
    }

    const files: CodeFile[] = [
        {
            name: `${Component.meta.slug}.tsx`,
            code: componentCode,
            language: "tsx",
        },
    ];

    if (Component.extraCode?.length) {
        for (const file of Component.extraCode) {
            try {
                const absolutePath = path.join(
                    process.cwd(),
                    file.path
                );

                const code = fs.readFileSync(
                    absolutePath,
                    "utf8"
                );

                files.push({
                    name: file.path,
                    code,
                    language: getLanguage(file.path),
                });
            } catch {
                console.error(
                    `Could not read extra code file: ${file.path}`
                );
            }
        }
    }

    return (
        <main
            className={clsx(
                "relative h-content",
                "before:absolute before:pointer-events-none before:-z-1 before:left-1/2 before:w-full before:inset-y-0 before:max-w-7xl before:border-x before:border-dashed before:border-border before:-translate-x-1/2",
                "after:absolute after:pointer-events-none after:-z-1 after:border-x after:inset-y-0 after:w-full after:max-w-6xl after:-translate-x-1/2 after:left-1/2 after:border-border",
            )}>
            <DocsHeader />
            <Sidebar />
            <section>
                <div className="max-w-4xl mx-auto space-y-2 py-10 px-6">
                    <div className="flex items-end gap-2">
                        <h1 className="text-left font-bold text-3xl md:text-4xl">
                            {Component.meta.title}
                        </h1>
                        <span
                            className="text-sm flex items-center gap-1 mb-0.5">
                            by
                            <a
                                rel="noopener"
                                target="_blank"
                                className="bg-accent/50 hover:bg-accent transition-colors duration-300 px-2 py-0.5 rounded-full flex gap-1 items-center"
                                href={`https://github.com/${Component.meta.author}`}>
                                <GitHub className="size-4" />
                                {Component.meta.author}
                            </a>
                        </span>
                    </div>
                    <p className="text-xl leading-tight text-foreground/80">
                        {Component.meta.description}
                    </p>
                </div>


                {
                    Component.dependencies!.length > 0 && (
                        <>
                            <SectionTitle
                                title="Dependencies"
                            />
                            <div className="max-w-4xl mx-auto w-full py-12 px-6">

                                <h2 className="text-left font-bold text-xl mb-6">Install Dependencies</h2>

                                <CodeBlockCommand
                                    commands={{
                                        npm: `npm install ${getDependencies().join(" ")}`,
                                        yarn: `yarn add ${getDependencies().join(" ")}`,
                                        pnpm: `pnpm add ${getDependencies().join(" ")}`,
                                        bun: `bun add ${getDependencies().join(" ")}`,
                                    }}
                                />
                                {
                                    getShadcnComponents().length > 0 && (
                                        <>
                                            <h2 className="text-left font-bold text-xl my-6">Shadcn Components</h2>

                                            <CodeBlockCommand
                                                commands={{
                                                    npm: `npx shadcn@latest add ${getShadcnComponents().join(" ")}`,
                                                    yarn: `yarn dlx shadcn@latest add ${getShadcnComponents().join(" ")}`,
                                                    pnpm: `pnpm dlx shadcn@latest add ${getShadcnComponents().join(" ")}`,
                                                    bun: `bunx --bun shadcn@latest add ${getShadcnComponents().join(" ")}`,
                                                }}
                                            />
                                        </>
                                    )
                                }


                            </div>
                        </>
                    )

                }
                <SectionTitle
                    title="Component"
                />
                <div className="max-w-4xl mx-auto w-full my-12 px-6">
                    <ComponentPreview
                        demo={<Component.demo />}
                        files={files} />
                </div>
            </section>
            <DocsFooter />
        </main>
    )
}