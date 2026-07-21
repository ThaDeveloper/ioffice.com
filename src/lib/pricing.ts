/**
 * Pricing tiers shown on the landing page. Duplicated from the app's PLANS
 * catalog + "Plans & features" matrix (separate repo); keep in sync by hand.
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
      "Spatial audio on the open floor",
      "Hubs & direct messages",
      "Audio 1:1 calls",
      "1 GB storage · 14-day history",
      "Community support",
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
      "All rooms (Boardroom, Pods, Booths)",
      "25 GB storage · 1-year history",
      "Email support",
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
      "HD video (seats + calls)",
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
      "Custom storage",
      "Custom pricing & contracts",
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
