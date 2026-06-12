# Contributing

Thank you for your interest in contributing.

## Component Structure

Each component lives inside:

```text
content/components/component-name/
```

Required files:

```text
component-name/
├── component.tsx
├── demo.tsx
├── meta.ts
└── index.ts
```

## component.tsx

Contains the actual component implementation.

Example:

```tsx
export function MyBeautifulComponent() {
  return <div>Hello World!</div>
}
```

## demo.tsx

Contains the documentation preview.

Example:

```tsx
import { MyBeautifulComponent } from "./component"

export default function MyComponentDemo() {
  return <MyBeautifulComponent />
}
```

## meta.ts

Contains component metadata.

Example:

```ts
export const meta = {
  title: "My Beautiful Component",
  slug: "my-beatiful-component",
  description: "Beautiful component for your landing page",
  category: "component",
  tags: ["ui"],
  author: "your-github-username",
  isOnce: false, // If its an animation that repeats once, set it to true.
  featured: false, // simply to highlight the component
}
```

## index.ts

Registers the component.

Example:

```ts
import { meta } from "./meta"
import Demo from "./demo"
import { MyBeautifulComponent } from "./component"
import type { ComponentRegistryItem } from "@/content/types"

export const MyComponentRegistry: ComponentRegistryItem = {
  meta,
  demo: Demo,
  component: MyBeautifulComponent,
  shadcnComponents: [
      {name:"button"} // -> pnpm dlx shadcn@latest add button
  ],
  extraCode: [
      {
          path: "lib/utils.ts" // path to the file if the component has extra code
      }
  ],
  dependencies: [
      {name: "motion"}, // -> pnpm add motion
  ]
}


```

## Guidelines

### General

* Use TypeScript.
* Use functional React components.
* Keep components reusable.
* Avoid unnecessary dependencies.
* Follow existing project conventions.

### Styling

* Use Tailwind CSS. (optional)
* Respect light and dark mode.
* Avoid hardcoded colors (optional).

### Documentation

Every component should include:

* Preview demo
* Description
* Tags (for the future but optional)
* Installation requirements
* Extra files if necessary

## Pull Requests

Before opening a PR:

* Ensure the demo works correctly.
* Ensure documentation is complete.

## Code of Conduct

Be respectful and constructive when contributing.
