import Icon from "./Icon";

/**
 * A crafted schematic of the office floor, the placeholder in the demo slot
 * until a real product recording (Loom) is embedded. Rendered on the app's dark
 * floor with colored avatars, desks and depth so it reads like a real screenshot
 * inside the light window frame.
 */

interface Person {
  initials: string;
  name?: string;
  color: string;
  top: string;
  left: string;
  speaking?: boolean;
}

const PEOPLE: Person[] = [
  { initials: "AK", name: "Amara", color: "bg-indigo-500", top: "31%", left: "19%", speaking: true },
  { initials: "MW", color: "bg-rose-500", top: "26%", left: "31%" },
  { initials: "TS", color: "bg-sky-500", top: "30%", left: "79%" },
  { initials: "JD", name: "Jon", color: "bg-emerald-500", top: "64%", left: "38%" },
  { initials: "SL", color: "bg-amber-500", top: "68%", left: "68%", speaking: true },
  { initials: "RP", color: "bg-violet-500", top: "49%", left: "52%" },
];

function Zone({
  label,
  className,
  tint,
}: {
  label: string;
  className: string;
  tint: string;
}) {
  return (
    <div className={`absolute rounded-lg border ${tint} ${className}`}>
      <span className="absolute left-2.5 top-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function OfficeMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0e12]">
      {/* Subtle depth vignette + warm floor light. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(99,102,241,0.10), transparent 60%), radial-gradient(100% 100% at 50% 120%, rgba(0,0,0,0.5), transparent 55%)",
        }}
      />

      {/* Rooms */}
      <Zone
        label="Boardroom"
        tint="border-indigo-400/25 bg-indigo-500/[0.07]"
        className="left-[5%] top-[12%] h-[40%] w-[34%]"
      />
      <Zone
        label="Design Lab"
        tint="border-rose-400/25 bg-rose-500/[0.06]"
        className="right-[5%] top-[14%] h-[34%] w-[30%]"
      />
      <Zone
        label="Open Floor"
        tint="border-white/10 bg-white/[0.02]"
        className="bottom-[7%] left-[22%] h-[38%] w-[56%]"
      />

      {/* A shared screen in the boardroom */}
      <div className="absolute left-[9%] top-[22%] h-[22%] w-[26%] rounded-md border border-white/10 bg-slate-800/80 shadow-lg">
        <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1">
          <Icon name="screen_share" className="text-[11px] text-indigo-300" />
          <span className="text-[9px] font-medium text-white/50">Roadmap · Q3</span>
        </div>
        <div className="space-y-1 p-2">
          <div className="h-1 w-3/4 rounded-full bg-white/20" />
          <div className="h-1 w-1/2 rounded-full bg-white/12" />
          <div className="h-1 w-2/3 rounded-full bg-indigo-400/40" />
        </div>
      </div>

      {/* Desks (open floor) */}
      {[
        { top: "58%", left: "30%" },
        { top: "58%", left: "46%" },
        { top: "58%", left: "62%" },
        { top: "76%", left: "30%" },
        { top: "76%", left: "62%" },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute h-6 w-9 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-white/8 bg-white/[0.04]"
          style={{ top: d.top, left: d.left }}
        />
      ))}

      {/* People */}
      {PEOPLE.map((p) => (
        <div
          key={p.initials}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
          style={{ top: p.top, left: p.left }}
        >
          <div className="relative">
            {p.speaking && (
              <span className="absolute -inset-[3px] rounded-full ring-2 ring-emerald-400" />
            )}
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${p.color} text-[11px] font-bold text-white shadow-md ring-2 ring-black/20`}
            >
              {p.initials}
            </div>
          </div>
          {p.name && (
            <span className="rounded bg-black/40 px-1.5 py-0.5 text-[9px] font-medium text-white/70">
              {p.name}
            </span>
          )}
        </div>
      ))}

      {/* Control bar */}
      <div className="absolute bottom-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-sm">
        {[
          { icon: "mic", on: true },
          { icon: "videocam", on: false },
          { icon: "screen_share", on: false },
          { icon: "front_hand", on: false },
        ].map((b) => (
          <span
            key={b.icon}
            className={`flex h-7 w-7 items-center justify-center rounded-lg ${
              b.on ? "bg-indigo-600 text-white" : "text-white/45 hover:text-white/70"
            }`}
          >
            <Icon name={b.icon} className="text-[16px]" />
          </span>
        ))}
        <span className="mx-1 h-4 w-px bg-white/10" />
        <span className="flex h-7 items-center gap-1 rounded-lg bg-rose-500/90 px-2.5 text-[11px] font-semibold text-white">
          Leave
        </span>
      </div>
    </div>
  );
}
