import Image from "next/image";
import { StackerLogo } from "@/components/stacker-logo";

const APP_STORE_URL = "#";
const APP_STORE_BADGE_URL = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

const FEATURES = [
  {
    title: "Session Tracking",
    description:
      "Log every detail — buy-ins, cash-outs, stakes, locations, duration, game type, and notes. Cash games and tournaments, live and online.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Deep Analytics",
    description:
      "Hourly rate, ROI, win rate, BB/hr, ITM ratio, standard deviation, and more. See your most profitable stakes, locations, and buy-in ranges.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Bankroll Management",
    description:
      "Track your total bankroll with deposits, withdrawals, and session-linked adjustments. Multi-currency support built in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Charts & Graphs",
    description:
      "Line charts, scatter plots, bar charts, contribution heatmaps, and session calendars. Filter by date range, game type, or stakes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Social & Leaderboards",
    description:
      "Add friends, follow their activity feed, see who's online, and compete on leaderboards. Share your results and climb the rankings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Hand Tracking",
    description:
      "Record individual hands during sessions. Track your decision-making patterns and review key spots after the game.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { label: "Analytics Metrics", value: "17+" },
  { label: "Chart Types", value: "6" },
  { label: "Currencies", value: "Multi" },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Stacker",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  description:
    "Track poker sessions, analyze 17+ performance metrics, manage your bankroll, and compete with friends.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Stackflow Inc.",
    url: "https://stackpokertracker.com",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F1114]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,106,51,0.15) 0%, transparent 60%), linear-gradient(180deg, #1A1D24 0%, #0F1114 100%)",
        }}
      >

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
          {/* Logo */}
          <div className="mb-10 animate-fade-in-up">
            <div className="mx-auto w-fit rounded-3xl bg-[#1A1D24] p-1 ring-1 ring-white/5">
              <Image
                src="/app-icon.png"
                alt="Stacker"
                width={80}
                height={80}
                className="rounded-[20px]"
                priority
              />
            </div>
          </div>

          <h1
            className="mb-5 animate-fade-in-up text-4xl font-bold tracking-tight text-[#F0F2F5] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Track. Analyze.
            <br />
            <span className="text-brand">Stack.</span>
          </h1>

          <p
            className="mb-10 max-w-md animate-fade-in-up text-lg leading-relaxed text-[#9BA3B0]"
            style={{ animationDelay: "0.2s" }}
          >
            The poker session tracker for serious players. Log every session, dive into 17+ analytics metrics, manage your bankroll, and compete with friends.
          </p>

          <div
            className="mb-14 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 active:scale-95"
              aria-label="Download Stacker on the App Store"
              tabIndex={0}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={APP_STORE_BADGE_URL} alt="Download on the App Store" className="h-14" />
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex animate-fade-in-up items-center gap-8 sm:gap-12"
            style={{ animationDelay: "0.4s" }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <p className="text-2xl font-bold tabular-nums text-brand sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-[#5C6370]">{stat.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="h-8 w-px bg-white/8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-[#0F1114] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#F0F2F5] sm:text-3xl">
              Built for the grind
            </h2>
            <p className="mx-auto max-w-lg text-[#9BA3B0]">
              From casual home games to high-stakes cash games and tournament series — Stacker covers every angle of your poker career.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-[#1A1D24] p-6 ring-1 ring-white/5 transition-all hover:ring-brand/20"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#F0F2F5]">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#5C6370]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics highlight */}
      <section className="border-t border-white/5 bg-[#1A1D24] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">Analytics</p>
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#F0F2F5] sm:text-3xl">
              Every number that matters
            </h2>
            <p className="mx-auto mb-14 max-w-lg text-[#9BA3B0]">
              Stacker calculates 17+ performance metrics automatically from your sessions. No spreadsheets needed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Hourly Rate",
              "ROI",
              "Win Rate",
              "BB/hr",
              "ITM Ratio",
              "Std. Deviation",
              "Best Stake",
              "Best Location",
              "Best Buy-in Range",
              "Biggest Win",
              "Biggest Loss",
              "Avg Buy-in",
              "Avg Duration",
              "Total Profit",
              "Total Hours",
              "Bankroll Trend",
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-xl bg-[#252A33] px-4 py-3 text-center ring-1 ring-white/5"
              >
                <p className="text-sm font-medium text-[#9BA3B0]">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#0F1114] py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <StackerLogo size={44} className="mb-6" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#F0F2F5] sm:text-3xl">
            Ready to stack?
          </h2>
          <p className="mb-8 text-[#9BA3B0]">
            Download Stacker and start tracking your poker sessions today.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label="Download Stacker on the App Store"
            tabIndex={0}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={APP_STORE_BADGE_URL} alt="Download on the App Store" className="h-14" />
          </a>
        </div>
      </section>

      {/* Footer - dark themed */}
      <footer className="border-t border-white/5 bg-[#0F1114] py-8 px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#5C6370]">&copy; {new Date().getFullYear()} Stackflow Inc.</p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {["Support", "Privacy", "Terms"].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-xs font-medium text-[#5C6370] transition-colors hover:text-brand"
                tabIndex={0}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
