import posthog from "posthog-js";
import type { Properties } from "posthog-js";

const posthogProjectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

export function captureAnalyticsEvent(eventName: string, properties: Properties = {}) {
  if (!posthogProjectToken || typeof window === "undefined") {
    return;
  }

  posthog.capture(
    eventName,
    {
      ...properties,
      page_path: window.location.pathname,
    },
    {
      transport: "sendBeacon",
      send_instantly: true,
    },
  );
}
