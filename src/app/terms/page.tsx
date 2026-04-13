import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Stacker terms of service.",
  alternates: { canonical: "https://stackpokertracker.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:py-12">
      <article className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
          Terms of Service
        </h1>
        <p className="text-center text-slate-500 text-sm mb-8">
          Last updated: March 2025
        </p>

        <p className="mb-4 text-slate-700 leading-relaxed">
          By using Stacker (&quot;the App&quot;), provided by Stackflow Inc.,
          you agree to these terms.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1. Use of the App
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Stacker is a poker session tracking tool. You must be at least 17
          years old to use it. You&apos;re responsible for keeping your account
          secure.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          2. Your Data
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          You own your session data. We store it to provide the service. See our{" "}
          <Link
            href="/privacy"
            className="text-emerald-500 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          3. Acceptable Use
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Don&apos;t misuse the service. Don&apos;t attempt to access other
          users&apos; data or disrupt the app.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          4. No Warranty
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          The app is provided &quot;as is&quot; without warranties. We&apos;re
          not liable for any losses related to your use of the app.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          5. Changes
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          We may update these terms. Continued use means you accept the changes.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          6. Contact
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Questions? Email{" "}
          <a
            href="mailto:support@stackerpokertracker.com"
            className="text-emerald-500 hover:underline"
          >
            support@stackerpokertracker.com
          </a>
        </p>

        <div className="text-center mt-8 pt-6 border-t border-slate-200 text-sm">
          <Link
            href="/support"
            className="text-emerald-500 hover:underline font-medium"
          >
            Support
          </Link>
          <span className="mx-2 text-slate-300">·</span>
          <Link
            href="/privacy"
            className="text-emerald-500 hover:underline font-medium"
          >
            Privacy
          </Link>
        </div>
      </article>
    </main>
  );
}
