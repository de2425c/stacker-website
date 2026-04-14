import type { Metadata } from "next";
import Link from "next/link";

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

const APP_STORE_URL = "https://apps.apple.com/us/app/stacker-poker-tracker/id6745683972";
const APP_STORE_BADGE_URL =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function InvitePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-6 py-8">
      <div className="max-w-[600px] text-center">
        <p className="mb-4 text-5xl" aria-hidden>
          ♠️
        </p>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem]">
          You&apos;re Invited to Stacker
        </h1>

        <p className="mb-8 text-xl text-slate-500">
          Join the best poker session tracking app
        </p>

        <div className="mb-10 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              📊
            </span>
            <span className="leading-relaxed">Track every session with detailed stats</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              📈
            </span>
            <span className="leading-relaxed">Analyze your performance over time</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              👥
            </span>
            <span className="leading-relaxed">Compare results with friends</span>
          </div>
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 inline-block"
          aria-label="Download Stacker on the App Store"
          tabIndex={0}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={APP_STORE_BADGE_URL}
            alt="Download on the App Store"
            className="h-[54px]"
          />
        </a>

        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          <Link
            href="/support"
            className="text-sm font-medium text-emerald-500 hover:underline"
            tabIndex={0}
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-emerald-500 hover:underline"
            tabIndex={0}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-emerald-500 hover:underline"
            tabIndex={0}
          >
            Terms
          </Link>
        </nav>
      </div>
    </main>
  );
}
