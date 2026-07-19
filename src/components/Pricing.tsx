import Icon from "./Icon";
import { appLinks, salesMailto } from "@/lib/site";
import { PRICING_TIERS, priceLabel, type PricingTier } from "@/lib/pricing";

function ctaHref(tier: PricingTier): string {
  if (tier.key === "enterprise") return salesMailto;
  return appLinks.signup;
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">Pricing</p>
          <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple per-seat pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade when your team grows. Billed per seat, monthly or yearly
            (two months free on annual).
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.key}
              className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-headline text-lg font-bold text-slate-900">{tier.name}</h3>
              {/* Reserve two lines so a wrapping tagline (e.g. Team) doesn't push
                  the price + CTA out of alignment with the other cards. */}
              <p className="mt-1 min-h-[2.5rem] text-sm text-slate-500">{tier.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-headline text-4xl font-extrabold text-slate-900">
                  {priceLabel(tier)}
                </span>
                {tier.perSeatUsd != null && tier.perSeatUsd > 0 && (
                  <span className="text-sm text-slate-500">/seat/mo</span>
                )}
              </div>

              <a
                href={ctaHref(tier)}
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  tier.cta.kind === "primary"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tier.cta.label}
              </a>

              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Icon name="check" className="mt-0.5 shrink-0 text-[16px] text-indigo-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">Video</span> calling is included on{" "}
          <span className="font-semibold text-slate-700">Business</span> and above.
        </p>
      </div>
    </section>
  );
}
