import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Stacker",
  description: "Join Stacker - the poker session tracking app.",
  openGraph: {
    title: "Join Stacker",
    description: "Your friend invited you to Stacker - the poker session tracking app.",
    images: [{ url: "https://stackpokertracker.com/images/og-invite.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Stacker",
    description: "Your friend invited you to Stacker - the poker session tracking app.",
    images: ["https://stackpokertracker.com/images/og-invite.png"],
  },
};

export default function InvitePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)" }}
    >
      <div className="max-w-sm w-full text-center text-white">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg shadow-black/30 overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 text-4xl font-bold">
          S
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          You&apos;re Invited to Stacker
        </h1>
        <p className="text-base text-white/75 mb-8 leading-relaxed">Join the best poker session tracking app</p>

        <div className="flex flex-col gap-3 mb-8 text-left">
          <div className="flex items-center gap-3 text-sm text-white/85">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span>Track every session with detailed stats</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/85">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span>Analyze your performance over time</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/85">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span>Compare results with friends</span>
          </div>
        </div>

        <a
          href="https://apps.apple.com/us/app/stacker-poker-tracker/id6745683972"
          className="inline-block transition-transform active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          tabIndex={0}
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us"
            alt="Download on the App Store"
            className="h-16 w-auto"
          />
        </a>

        <div className="mt-6 text-xs text-white/40">
          <a href="https://stackpokertracker.com" className="text-white/60 no-underline">
            stackpokertracker.com
          </a>
        </div>
      </div>
    </div>
  );
}
