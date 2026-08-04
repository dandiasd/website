This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Analytics

The site uses [PostHog](https://posthog.com/) client-side analytics. It works with the static export and is disabled until a project token is present.

1. Create a PostHog project, then copy `.env.example` to `.env.local`.
2. Fill `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and, if needed, use the matching regional `NEXT_PUBLIC_POSTHOG_HOST`.
3. Set the same values in Railway's **build** environment before deploying. `NEXT_PUBLIC_*` values are embedded when `npm run build` creates `out/`.

Tracked events:

- `$pageview` and `$pageleave` for visits, page counts, and page journeys.
- `whatsapp cta clicked`, with CTA location and selected plan when applicable.
- `portfolio demo opened`, with project name and position.

Use PostHog Web Analytics for visitors and top pages, User Paths for journeys such as `/` → `/portfolio` → WhatsApp CTA, and a funnel from `$pageview` on `/` to `whatsapp cta clicked` for conversion. The implementation intentionally disables broad autocapture, session replay, heatmaps, and person profiles; do not send visitor input, chat text, or other personal data as an event property.
