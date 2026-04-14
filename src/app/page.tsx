import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/stacker";
const APP_STORE_BADGE_URL =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-6 py-8">
      <div className="max-w-[600px] text-center">
        <p className="mb-4 text-5xl" aria-hidden>
          ♠️
        </p>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem]">
          Stacker
        </h1>

        <p className="mb-8 text-xl text-slate-500">
          Track your poker sessions
        </p>

        <p className="mb-10 leading-7 text-slate-600">
          Log your buy-ins, cash-outs, and notes. Analyze your performance
          across stakes and locations. Improve your game with insights powered
          by data.
        </p>

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
