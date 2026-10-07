"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  /**
   * Fade the section in the first time it scrolls into view.
   * Leave off for anything near the top of the page: hidden-until-JS content
   * delays LCP, and the browser can paint plain sections immediately.
   */
  reveal?: boolean;
}

export function Section({ className, children, reveal = false }: SectionProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [shown, setShown] = React.useState(!reveal);

  React.useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  return (
    <section
      ref={ref}
      data-shown={shown || undefined}
      className={cn(
        "flex min-h-0 flex-col gap-y-3",
        reveal && "section-reveal",
        className,
      )}
    >
      {children}
    </section>
  );
}
