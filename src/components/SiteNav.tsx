import Logo from "./Logo";
import { appLinks, navLinks } from "@/lib/site";

/** Top navigation: a white bar with a hairline border, like the app chrome. */
export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="iOffice home">
          <Logo className="text-xl" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={appLinks.login}
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Log in
          </a>
          <a
            href={appLinks.signup}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
