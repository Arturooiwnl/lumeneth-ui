import { cn } from "@/lib/utils";
import React from "react";

export function SectionTitle({
    title,
    className,
    children,
    ...props
}: React.ComponentProps<"div"> & { title: string }) {
    return (
        <div className={cn("relative w-full border-y", className)} {...props}>
            <div
                className={cn(
                    "relative max-w-6xl px-2 py-2.5 mx-auto text-center ",
                )}
            >
                <span className="text-sm uppercase text-foreground/80 font-semibold">
                    {title}
                </span>
                {children}
                <span className="hidden xl:inline absolute bottom-0 left-0 size-2 bg-background border -translate-x-1/2 translate-y-1/2" />
                <span className="hidden xl:inline absolute bottom-0 right-0 size-2 bg-background border translate-x-1/2 translate-y-1/2" />
                <span className="hidden xl:inline absolute -top-2 left-0 size-2 bg-background border -translate-x-1/2 translate-y-1/2" />
                <span className="hidden xl:inline absolute -top-2 right-0 size-2 bg-background border translate-x-1/2 translate-y-1/2" />
            </div>
        </div>
    );
}