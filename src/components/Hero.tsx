import Icon from "./Icon";
import DemoSlot from "./DemoSlot";
import { appLinks } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 pt-36 sm:px-6 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Presence, spatial audio &amp; video for remote teams
          </span>

          <h1 className="mt-6 font-headline text-[2.75rem] font-extrabold leading-[1.03] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Your team&apos;s <span className="text-indigo-600">virtual office</span>,
            <br className="hidden sm:block" /> not another meeting link.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            See who&apos;s around, walk up and talk, drop into a room, or share your screen.
            It&apos;s the presence of a real office, wherever your team works from.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={appLinks.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 sm:w-auto"
            >
              Get started free
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              <Icon name="play_circle" className="text-[18px]" />
              Watch demo
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Free for up to 5 seats · No credit card required
          </p>
        </div>

        {/* Product demo: the centerpiece, floated on a soft ambient shadow. */}
        <div id="demo" className="relative mx-auto mt-16 max-w-5xl scroll-mt-24 pb-24">
          <div
            className="pointer-events-none absolute inset-x-8 bottom-16 top-8 rounded-full bg-indigo-600/10 blur-3xl"
            aria-hidden
          />
          <DemoSlot />
        </div>
      </div>
    </section>
  );
}
