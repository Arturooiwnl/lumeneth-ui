import { cn } from "@/lib/utils";

export default function ShinyText({
    className,
    text,
    ...props
}: React.ComponentProps<"span"> & { text?: string }) {
    return (
        <span
            className={cn(
                "animate-[shine_2s_linear_infinite] bg-[linear-gradient(120deg,transparent_40%,var(--shine,var(--foreground)),transparent_60%)] bg-size-[200%_100%] bg-clip-text inline-block w-fit text-foreground/60",
                className
            )}
            {...props}
        >
            {text}
        </span>
    );
}