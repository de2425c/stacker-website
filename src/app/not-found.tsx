import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-6 py-8">
      <div className="max-w-[600px] text-center">
        <p className="mb-4 text-5xl" aria-hidden>
          ♠️
        </p>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem]">
          Page Not Found
        </h1>

        <p className="mb-10 text-lg text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-600"
          tabIndex={0}
          aria-label="Go back to homepage"
        >
          Go to Stacker
        </Link>

        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
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
