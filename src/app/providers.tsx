"use client";

import { useEffect } from "react";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

/**
 * Loads PostHog after the page is idle. The SDK is imported dynamically so its
 * ~57 KB never lands in the initial bundle; nothing on the page reads PostHog
 * state, so a provider/context is not needed.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!KEY) return;
    let cancelled = false;

    const init = async () => {
      const { default: posthog } = await import("posthog-js");
      if (cancelled) return;
      posthog.init(KEY, {
        api_host: HOST,
        person_profiles: "identified_only",
        defaults: "2025-05-24",
        persistence: "localStorage",
        disable_surveys: true,
        capture_dead_clicks: false,
        capture_performance: false,
        autocapture: false,
      });
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => void init(), { timeout: 3000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t = setTimeout(() => void init(), 1500);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return <>{children}</>;
}
