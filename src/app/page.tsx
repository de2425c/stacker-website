import Link from "next/link";

const FEATURES = [
  {
    icon: "📊",
    title: "Track Every Session",
    description:
      "Log buy-ins, cash-outs, game type, stakes, and location — all in seconds.",
  },
  {
    icon: "📈",
    title: "Performance Analytics",
    description:
      "See your hourly rate, win streaks, and profit trends across stakes and venues.",
  },
  {
    icon: "📝",
    title: "Session Notes",
    description:
      "Tag key hands, table dynamics, and mental-game notes so you can review later.",
  },
  {
    icon: "☁️",
    title: "Cloud Sync",
    description:
      "Your data is encrypted and synced across devices — never lose a session.",
  },
] as const;

const APP_STORE_URL = "https://apps.apple.com/app/id6745683972";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,.25),transparent)]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-400 to-emerald-600 text-4xl font-bold shadow-lg shadow-emerald-500/20 sm:h-24 sm:w-24 sm:text-5xl">
            S
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stacker
          </h1>

          <p className="mt-4 max-w-lg text-lg text-slate-400 sm:text-xl">
            The poker session tracker built for grinders. Log sessions, analyse
            your edge, and grow your bankroll — all from your pocket.
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Download Stacker on the App Store"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.9 59 127.5 107.2 126 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.7zm-56.6-176.6c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Everything you need to beat the game
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-slate-400">
          Simple enough to log a session in 10 seconds. Powerful enough to
          spot leaks over thousands of hours.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-emerald-500/40"
            >
              <span className="mb-3 block text-3xl" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-3xl bg-linear-to-br from-emerald-600 to-emerald-500 px-8 py-12 text-center shadow-xl shadow-emerald-500/10 sm:px-16">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to start stacking?
          </h2>
          <p className="mt-3 text-emerald-100">
            Join players already tracking their sessions with Stacker.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-semibold text-emerald-700 shadow transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
            aria-label="Download Stacker on the App Store"
            tabIndex={0}
          >
            Get Stacker — It&apos;s Free
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Stackflow Inc.</p>
          <nav className="flex gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="transition hover:text-emerald-400"
              tabIndex={0}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-emerald-400"
              tabIndex={0}
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="transition hover:text-emerald-400"
              tabIndex={0}
            >
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
