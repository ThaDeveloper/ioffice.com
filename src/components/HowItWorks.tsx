import Icon from "./Icon";

const STEPS: { icon: string; title: string; body: string }[] = [
  {
    icon: "add_home_work",
    title: "Create your office",
    body: "Spin up your organization in a minute and invite your team by email. Your floor plan is ready the moment they join.",
  },
  {
    icon: "directions_walk",
    title: "Walk in and work",
    body: "Everyone gets an avatar on the floor. Sit at a desk, gather in a room, or roam. Presence and spatial audio just happen.",
  },
  {
    icon: "rocket_launch",
    title: "Collaborate in the moment",
    body: "Talk, share screens, raise a hand, hop on a call, or drop a message in a hub. The distance disappears.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">How it works</p>
          <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Up and running in three steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50">
                  <Icon name={s.icon} className="text-[22px] text-indigo-600" />
                </div>
                <span className="font-headline text-2xl font-extrabold text-slate-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-headline text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
