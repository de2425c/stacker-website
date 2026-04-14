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
    <div className="flex min-h-screen flex-col bg-[#0F1114]">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md text-center">
          <Image
            src="/app-icon.png"
            alt="Stacker"
            width={72}
            height={72}
            className="mx-auto mb-6 rounded-2xl"
            priority
          />
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-[#F0F2F5]">
            Stacker Support
          </h1>
          <p className="mb-12 text-[#9BA3B0]">Poker session tracking app</p>

          <div className="rounded-2xl bg-[#1A1D24] p-8 ring-1 ring-white/5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#5C6370]">
              Contact Us
            </p>
            <a
              href="mailto:support@stackerpokertracker.com"
              className="text-lg font-semibold text-brand transition-colors hover:text-brand-hover"
              tabIndex={0}
            >
              support@stackerpokertracker.com
            </a>
            <p className="mt-4 text-sm text-[#5C6370]">We typically respond within 24 hours</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#5C6370]">&copy; {new Date().getFullYear()} Stackflow Inc.</p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#5C6370] transition-colors hover:text-brand"
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
