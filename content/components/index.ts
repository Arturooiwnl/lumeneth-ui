import { CodeBlock } from "./code-block"
import { CodeBlockCommand } from "./code-block-command"
import { GitHubStars } from "./github-stars"
import { HoldToInteract } from "./hold-to-interact"
import { AnimatedNumber } from "./animated-number"
import { ShinyText } from "./shiny-text"
import { TextBlurReveal } from "./text-blur-reveal"
import { TextFlip } from "./text-flip"
import { TextScramble } from "./text-scramble"
import { TextSlideReveal } from "./text-slide-reveal"
import { TextTypewriter } from "./text-typewrite"

export const COMPONENTS = [
    CodeBlockCommand,
    TextSlideReveal,
    TextFlip,
    TextBlurReveal,
    HoldToInteract,
    GitHubStars,
    TextTypewriter,
    CodeBlock,
    AnimatedNumber,
    TextScramble,
    ShinyText
]

export const PREVIEW_COMPONENTS = [
    CodeBlockCommand,
    CodeBlock,
    TextSlideReveal,
    ShinyText,
    TextFlip,
    TextBlurReveal,
    GitHubStars,
    TextTypewriter,
    AnimatedNumber,
    TextScramble,
    HoldToInteract,
]

export const COMPONENTS_MAP = Object.fromEntries(
    COMPONENTS.map(component => [
        component.meta.slug,
        component,
    ])
);