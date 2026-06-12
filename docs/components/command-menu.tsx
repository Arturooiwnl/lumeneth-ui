"use client"

import { useState, useRef, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, LayoutGrid, CornerDownLeft } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { COMPONENTS } from "@/content/components"
import { cn } from "@/lib/utils"

interface CommandMenuProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface SearchItem {
  id: string
  title: string
  description?: string
  category: string
  href: string
  tags?: string[]
}

const PAGES: SearchItem[] = [
  {
    id: "introduction",
    title: "Introduction",
    description: "Get started with the components library",
    category: "Get Started",
    href: "/get-started/introduction",
    tags: ["start", "setup", "intro", "guide", "docs", "documentation"]
  }
]

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const activeRef = useRef<HTMLButtonElement>(null)

  const componentItems: SearchItem[] = useMemo(() => {
    return COMPONENTS.map((comp) => ({
      id: comp.meta.slug,
      title: comp.meta.title,
      description: comp.meta.description,
      category: "Components",
      href: `/components/${comp.meta.slug}`,
      tags: comp.meta.tags || []
    }))
  }, [])

  const allItems = useMemo(() => [...PAGES, ...componentItems], [componentItems])

  const filteredItems = useMemo(() => {
    if (!query) return allItems

    const q = query.toLowerCase().trim()
    return allItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
      )
    })
  }, [query, allItems])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (filteredItems.length === 0) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        const selected = filteredItems[selectedIndex]
        if (selected) {
          router.push(selected.href)
          setOpen(false)
        }
      }
    },
    [filteredItems, selectedIndex, router, setOpen]
  )

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest"
      })
    }
  }, [selectedIndex])

  const groupedItems = useMemo(() => {
    const groups: { [key: string]: { item: SearchItem; globalIndex: number }[] } = {}
    filteredItems.forEach((item, index) => {
      if (!groups[item.category]) {
        groups[item.category] = []
      }
      groups[item.category].push({ item, globalIndex: index })
    })
    return groups
  }, [filteredItems])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-lg p-0 overflow-hidden border border-dashed bg-popover/95 backdrop-blur-md font-mono"
      >
        <div className="flex items-center border-b border-dashed px-3 py-3 gap-2">
          <Search className="size-5 text-muted-foreground shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground/60 text-foreground"
          />
        </div>

        <DialogTitle className="sr-only">Command Search Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Search for components and pages in the documentation.
        </DialogDescription>

        <ScrollArea className="max-h-[300px] overflow-y-auto">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground border-dashed border-b last:border-b-0">
              No results found for "{query}".
            </div>
          ) : (
            <div className="p-2 space-y-4">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <div className="px-3 text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60">
                    {category}
                  </div>
                  <div className="space-y-0.5">
                    {items.map(({ item, globalIndex }) => {
                      const isSelected = selectedIndex === globalIndex
                      return (
                        <button
                          key={item.id}
                          ref={isSelected ? activeRef : null}
                          onClick={() => {
                            router.push(item.href)
                            setOpen(false)
                          }}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                          className={cn(
                            "w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-150 border border-transparent font-mono cursor-pointer",
                            isSelected
                              ? "bg-accent/40 text-foreground border-border/50 shadow-xs"
                              : "text-foreground/70 hover:bg-accent/10"
                          )}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {item.category === "Components" ? (
                              <LayoutGrid className="size-4 text-muted-foreground shrink-0" />
                            ) : (
                              <FileText className="size-4 text-muted-foreground shrink-0" />
                            )}
                            <div className="min-w-0">
                              <div className="font-semibold truncate">{item.title}</div>
                              {item.description && (
                                <div className="text-xs text-muted-foreground/80 truncate w-90 md:w-100 overflow-hidden">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] text-muted-foreground/80 flex items-center gap-1 border border-dashed rounded px-1.5 py-0.5 bg-muted shrink-0 animate-in fade-in duration-300">
                              <span>Go</span>
                              <CornerDownLeft className="size-3" />
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="flex items-center justify-end px-3 py-2 border-t border-dashed text-[10px] text-muted-foreground/80 gap-3 bg-muted/20 select-none">
          <div className="flex items-center gap-1">
            <kbd className="px-1 border border-dashed rounded bg-muted/40 font-sans">↑↓</kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1 border border-dashed rounded bg-muted/40 font-sans">↵</kbd>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1 border border-dashed rounded bg-muted/40 font-sans">esc</kbd>
            <span>Close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
