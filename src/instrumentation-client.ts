import posthog from "posthog-js";

const posthogProjectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

// The Threads OAuth callback URL carries an auth code, so it must never reach analytics.
if (posthogProjectToken && !window.location.pathname.startsWith("/threads/")) {
  posthog.init(posthogProjectToken, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    defaults: "2026-05-30",
    capture_pageview: "history_change",
    capture_pageleave: "if_capture_pageview",

    // Keep the marketing-site analytics intentional and anonymous.
    autocapture: false,
    capture_dead_clicks: false,
    rageclick: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    disable_scroll_properties: true,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_flags: true,
    person_profiles: "never",
    respect_dnt: true,
  });
}
