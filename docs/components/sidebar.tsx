"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/constants/categories";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const createSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className="hidden lg:flex fixed top-14.5 z-50 left-4 backdrop-blur-2xl"
                        size="icon-lg"
                        variant="outline"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    {isOpen ? "Close" : "Open"}
                </TooltipContent>
            </Tooltip>
            <aside className={cn(
                "hidden lg:flex fixed top-0 left-0 h-screen w-80 flex-col border-r border-dashed border-border/60 bg-background z-40 transition-all duration-300",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide mt-22">
                    <nav className="flex flex-col gap-8">
                        {CATEGORIES.map((category) => (
                            <div key={category.name} className="flex flex-col gap-3">
                                <h4 className="px-2 text-xs font-semibold tracking-widest text-foreground/40 uppercase">
                                    {category.name}
                                </h4>

                                <ul className="flex flex-col gap-0.5">
                                    {category.subCategories.map((item) => {
                                        const slug = createSlug(item);
                                        const basePath = category.name === "Get Started" ? "get-started" : "components";
                                        const href = `/${basePath}/${slug}`;

                                        const isActive = pathname === href;

                                        return (
                                            <li key={item}>
                                                <Link
                                                    href={href}
                                                    className={`flex items-center rounded-lg px-3 py-2 text-sm transition-all duration-300 ${isActive
                                                        ? "bg-accent/40 text-foreground font-medium border border-border/50 shadow-xs"
                                                        : "text-foreground/60 hover:bg-accent/20 hover:text-foreground border border-transparent"
                                                        }`}
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}