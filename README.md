# iOffice Landing Page

Branding site for **iOffice** (ioffice.com). Standalone Next.js app, deployed
separately from our product app (app.ioffice.com).

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v3. Light theme aligned with the app's indigo/rose brand.
  Design tokens live in `tailwind.config.ts` + `globals.css`.
- Static/SSG, no backend. Auth and the product live in the separate app.

## Develop

```bash
pnpm install
pnpm dev            # http://localhost:4200
```

## Environment (`.env.local`, see `.env.example`)

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_APP_URL` | Where Login / Get started point. Dev: `http://localhost:3001`; prod: `https://app.ioffice.com`. |
| `NEXT_PUBLIC_DEMO_EMBED_URL` | Optional video embed (silent Loom/YouTube) for the hero demo. Takes priority over the screenshot when set. |
| `NEXT_PUBLIC_DEMO_IMAGE_URL` | Product screenshot for the hero demo. Defaults to `/demo-office.png`. |

## Structure

```
public/           demo-office.png (hero screenshot)
src/
  app/            layout (fonts, metadata) + globals + page.tsx
  components/     SiteNav · Hero · DemoSlot(+OfficeMockup) · Features ·
                  HowItWorks · Pricing · FinalCTA · SiteFooter · Icon · Logo
  lib/
    site.ts       APP_URL, nav links, sales mailto, demo embed/image
    pricing.ts    Pricing tiers shown on the page
```

## Hero demo

The hero demo (`DemoSlot.tsx`) renders, in order of priority: a video embed
(`NEXT_PUBLIC_DEMO_EMBED_URL`), a product screenshot (`public/demo-office.png`),
or the schematic `OfficeMockup` fallback.

## Deploy

Vercel project, root directory = repo root, domain `ioffice.com` (+ `www`).
Set `NEXT_PUBLIC_APP_URL=https://app.ioffice.com` in the project's env.
