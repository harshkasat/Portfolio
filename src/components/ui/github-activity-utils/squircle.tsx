import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Paint layer behind the GitHubActivity card. Fills the parent and takes the
 * palette classes; sits under the content layer (which is `relative z-10`).
 */
export function Squircle({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 rounded-3xl", className)}
    />
  );
}
