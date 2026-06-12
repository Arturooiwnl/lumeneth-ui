import { AnimatedContent } from "@/components/animated-content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import clsx from "clsx";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <AnimatedContent
        as="main"
        preset="fade"
        trigger="animate"
        duration={0.6}
        className={clsx(
          "relative overflow-x-hidden",
          "before:absolute before:pointer-events-none before:-z-1 before:left-1/2 before:w-full before:inset-y-0 before:max-w-7xl before:border-x before:border-dashed before:border-border before:-translate-x-1/2",
          "after:absolute after:pointer-events-none after:-z-1 after:border-x after:inset-y-0 after:w-full after:max-w-6xl after:-translate-x-1/2 after:left-1/2 after:border-border",
        )}
      >
        <Header />
        <Hero />
        <About />
        <Features />
        <Footer />
      </AnimatedContent>
    </ReactLenis>
  );
}
