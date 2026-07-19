/** Site-wide config and outbound links. */

/**
 * The product app. Login / Get started / dashboard links point here. Set
 * NEXT_PUBLIC_APP_URL per environment (localhost in dev, https://app.ioffice.com
 * in production). Falls back to the production app URL.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ioffice.com";

/** Deep links into the app. */
export const appLinks = {
  login: `${APP_URL}/login`,
  signup: `${APP_URL}/signup`,
  home: APP_URL,
};

/** In-page anchor nav. */
export const navLinks: { label: string; href: string }[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

/**
 * The hero product demo, in priority order:
 *  1. DEMO_EMBED_URL: a silent Loom/YouTube walkthrough (set the env var).
 *  2. DEMO_IMAGE_SRC: a static product screenshot in /public.
 *  3. the schematic OfficeMockup fallback.
 */
export const DEMO_EMBED_URL = process.env.NEXT_PUBLIC_DEMO_EMBED_URL ?? "";

/** Product screenshot shown when there's no video embed. Save the image to
 *  `public/demo-office.png` (or point the env var elsewhere). */
export const DEMO_IMAGE_SRC = process.env.NEXT_PUBLIC_DEMO_IMAGE_URL ?? "/demo-office.png";

/** Where "Contact sales" points (Enterprise tier + CTA). */
export const SALES_EMAIL = "sales@ioffice.com";
export const salesMailto = `mailto:${SALES_EMAIL}?subject=iOffice%20Enterprise%20enquiry`;
