import OfficeMockup from "./OfficeMockup";
import { DEMO_EMBED_URL, DEMO_IMAGE_SRC } from "@/lib/site";

/**
 * The hero's product-demo area. Priority: a video embed (Loom/YouTube) if set,
 * else a static product screenshot from /public, else the schematic mockup.
 * Swap in a Loom later by setting NEXT_PUBLIC_DEMO_EMBED_URL with no code change.
 */
export default function DemoSlot() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 rounded bg-white px-2 py-0.5 text-[11px] font-medium text-slate-400 ring-1 ring-slate-200">
          app.ioffice.com
        </span>
      </div>

      {DEMO_EMBED_URL ? (
        <div className="aspect-video w-full">
          <iframe
            src={DEMO_EMBED_URL}
            title="iOffice product demo"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : DEMO_IMAGE_SRC ? (
        // Full product screenshot, rendered at its natural aspect ratio.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={DEMO_IMAGE_SRC}
          alt="The iOffice virtual office floor with rooms, seats and presence"
          className="block w-full"
        />
      ) : (
        <div className="aspect-video w-full">
          <OfficeMockup />
        </div>
      )}
    </div>
  );
}
