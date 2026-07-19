/**
 * Pricing tiers shown on the landing page.
 *
 * ⚠️ DUPLICATED ON PURPOSE. These mirror the app's `PLANS` catalog
 * (packages/shared/src/billing/plans.ts) but live here because the landing site
 * is a separate repo. Keep the numbers in sync by hand for now.
 *
 * FUTURE: extract the app's plan catalog into a publishable package
 * (e.g. `@ioffice/pricing`) and replace this file's data with an import, so
 * marketing pricing can never drift from the product.
 */

export interface PricingTier {
  key: "free" | "team" | "business" | "enterprise";
  name: string;
  /** Per-seat monthly price in USD; null = free or custom (Enterprise). */
  perSeatUsd: number | null;
  tagline: string;
  /** Shown feature bullets. */
  features: string[];
  cta: { label: string; kind: "primary" | "secondary" };
  /** Override the price display (Free, Custom). */
  priceOverride?: string;
}

// Yearly billing charges this many months (~2 months free), matching the app.
export const YEARLY_MONTHS_CHARGED = 10;

export const PRICING_TIERS: PricingTier[] = [
  {
    key: "free",
    name: "Free",
    perSeatUsd: 0,
    priceOverride: "$0",
    tagline: "For small teams getting started.",
    features: [
      "Up to 5 seats",
      "Spatial audio & presence",
      "Hubs & direct messages",
      "1 GB shared storage",
      "14-day message history",
    ],
    cta: { label: "Get started free", kind: "secondary" },
  },
  {
    key: "team",
    name: "Team",
    perSeatUsd: 6,
    tagline: "For growing teams that live in the office.",
    features: [
      "Unlimited seats",
      "Everything in Free, plus:",
      "Screen sharing",
      "All meeting rooms",
      "25 GB storage · 1-year history",
    ],
    cta: { label: "Subscribe", kind: "secondary" },
  },
  {
    key: "business",
    name: "Business",
    perSeatUsd: 12,
    tagline: "For teams that need video and scale.",
    features: [
      "Everything in Team, plus:",
      "HD video calls",
      "100 GB storage",
      "Unlimited message history",
      "Priority support",
    ],
    cta: { label: "Start free trial", kind: "primary" },
  },
  {
    key: "enterprise",
    name: "Enterprise",
    perSeatUsd: null,
    priceOverride: "Custom",
    tagline: "For organizations with custom needs.",
    features: [
      "Everything in Business, plus:",
      "Unlimited storage",
      "Custom pricing & contracts",
      "Dedicated onboarding",
      "Dedicated support",
    ],
    cta: { label: "Contact sales", kind: "secondary" },
  },
];

/** Format a per-seat price for display, honoring overrides. */
export function priceLabel(tier: PricingTier): string {
  if (tier.priceOverride) return tier.priceOverride;
  if (tier.perSeatUsd == null) return "Custom";
  return `$${tier.perSeatUsd}`;
}
