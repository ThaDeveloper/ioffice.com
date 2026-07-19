import Icon from "./Icon";
import { appLinks } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="border-b border-slate-200 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-indigo-600 px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Bring your team back together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Open your virtual office in minutes. Free for up to five people, with no credit
            card and no meeting links.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={appLinks.signup}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
            >
              Get started free
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <a
              href={appLinks.login}
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
