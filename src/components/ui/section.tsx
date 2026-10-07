"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  /**
   * Fade the section in the first time it scrolls into view.
   * Fail-open: the section is visible by default; it is only hidden once
   * JS has confirmed it is below the fold, so content can never get stuck
   * invisible and above-the-fold text never delays LCP.
   */
  reveal?: boolean;
}

export function Section({ className, children, reveal = false }: SectionProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [state, setState] = React.useState<"visible" | "hidden" | "shown">(
    "visible",
  );

  React.useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount: leave it visible, no animation.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  return (
    <section
      ref={ref}
      data-reveal={state === "visible" ? undefined : state}
      className={cn("section-reveal flex min-h-0 flex-col gap-y-3", className)}
    >
      {children}
    </section>
  );
}
