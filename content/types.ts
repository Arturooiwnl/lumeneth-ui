export interface ExtraCodeFile {
    path: string
}

export interface Dependency {
    name: string
}

export interface ComponentRegistryItem {
    meta: {
        title: string
        slug: string
        description: string
        category: string
        tags: string[]
        author: string
        isOnce: boolean
        featured: boolean
    }

    demo: React.ComponentType<any>
    component: React.ComponentType<any>

    dependencies?: Dependency[]
    extraCode?: ExtraCodeFile[]
    shadcnComponents?: {
        name: string
    }[]
}