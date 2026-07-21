import Icon from "./Icon";

interface Feature {
  icon: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: "graphic_eq",
    title: "Spatial audio",
    body: "You hear the people in the space you've joined, and no one else. Drop into a room to talk, leave and the conversation stays private to whoever's inside. Huddle without booking a thing.",
  },
  {
    icon: "sensors",
    title: "Presence you can feel",
    body: "See who's online, away, in a room, or heads-down at their desk. No more “are you free?” pings. You can just tell.",
  },
  {
    icon: "videocam",
    title: "Video & screen share",
    body: "Turn on camera, share a screen, or present to the room. Frictionless when you need face time, invisible when you don't.",
  },
  {
    icon: "meeting_room",
    title: "Rooms for everything",
    body: "Boardroom, design lab, focus pods, quiet booths. Audio is scoped per room, so teams work side by side without crosstalk.",
  },
  {
    icon: "forum",
    title: "Hubs & direct messages",
    body: "Team chat spaces (hubs) and 1:1 DMs with reactions, replies, threads, and files. The async layer that never leaves the office.",
  },
  {
    icon: "call",
    title: "Ring anyone, instantly",
    body: "Call a teammate or the front desk and drop straight into a private conversation. Audio or video, no links, no lobby.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-16 border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">Features</p>
          <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything an office is, minus the commute
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The presence, spontaneity, and togetherness of a physical office, rebuilt for
            teams that work from anywhere.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white p-6 transition-colors hover:bg-slate-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                <Icon name={f.icon} className="text-[20px] text-indigo-600" />
              </div>
              <h3 className="mt-4 font-headline text-base font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
