import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Stacker, the poker session tracking app.",
  alternates: { canonical: "https://stackpokertracker.com/support" },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 max-w-md mx-auto px-6 py-16 text-center">
        <Image
          src="/app-icon.png"
          alt="Stacker"
          width={72}
          height={72}
          className="mx-auto mb-6 rounded-2xl"
          priority
        />
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
          Stacker Support
        </h1>
        <p className="text-slate-500 mb-12">Poker session tracking app</p>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Contact Us
          </p>
          <a
            href="mailto:support@stackerpokertracker.com"
            className="text-lg font-semibold text-emerald-500 hover:underline"
          >
            support@stackerpokertracker.com
          </a>
          <p className="mt-4 text-sm text-slate-400">
            We typically respond within 24 hours
          </p>
        </div>
      </div>

      <footer className="text-center py-8 px-6 text-slate-400 text-xs">
        &copy; 2025 Stackflow Inc. |{" "}
        <Link href="/privacy" className="text-slate-500 hover:text-emerald-500">
          Privacy
        </Link>
        <span className="mx-1">·</span>
        <Link href="/terms" className="text-slate-500 hover:text-emerald-500">
          Terms
        </Link>
      </footer>
    </main>
  );
}
