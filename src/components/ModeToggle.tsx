"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => {
    const switchTheme = () => setTheme(isDark ? "light" : "dark");
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative h-8 w-8 overflow-hidden"
    >
      <Sun
        aria-hidden="true"
        className="h-4 w-4 transition-all duration-300 dark:-translate-y-6 dark:opacity-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute h-4 w-4 translate-y-6 opacity-0 transition-all duration-300 dark:translate-y-0 dark:opacity-100"
      />
    </Button>
  );
}
