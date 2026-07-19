import { appLinks, navLinks, salesMailto } from "@/lib/site";

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-xs">
            <span className="font-headline text-xl font-black tracking-tighter">
              <span className="text-rose-500">i</span>
              <span className="text-white">Office</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              A spatial virtual office for teams that work from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Product
              </p>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Company
              </p>
              <a
                href={salesMailto}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Contact sales
              </a>
              <a
                href={appLinks.login}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Log in
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Get started
              </p>
              <a
                href={appLinks.signup}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Create your office
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} iOffice. All rights reserved.</p>
          <p className="text-xs text-slate-500">Made for teams that miss the office.</p>
        </div>
      </div>
    </footer>
  );
}
