import type { Metadata } from "next";
import Image from "next/image";
import { StackerLogo } from "@/components/stacker-logo";
import { Footer } from "@/components/footer";

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

const APP_STORE_URL = "#";
const APP_STORE_BADGE_URL = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function InvitePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F1114]">
      {/* Hero */}
      <main
        className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,106,51,0.15) 0%, transparent 60%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative w-full max-w-sm text-center">
          {/* App icon */}
          <div
            className="mx-auto mb-8 w-fit animate-fade-in-up rounded-3xl bg-[#1A1D24] p-1 shadow-2xl shadow-black/30 ring-1 ring-white/5"
          >
            <Image
              src="/app-icon.png"
              alt="Stacker"
              width={88}
              height={88}
              className="rounded-[20px]"
              priority
            />
          </div>

          <h1
            className="mb-3 animate-fade-in-up text-3xl font-bold tracking-tight text-[#F0F2F5] sm:text-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            You&apos;re Invited to
            <br />
            <span className="text-brand">Stacker</span>
          </h1>

          <p
            className="mb-10 animate-fade-in-up text-base text-[#9BA3B0]"
            style={{ animationDelay: "0.15s" }}
          >
            The poker session tracker for serious players
          </p>

          {/* Feature pills */}
          <div
            className="mb-10 flex animate-fade-in-up flex-col gap-3"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              {
                label: "Track sessions & stats",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-brand">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l3-1.5m0 0l-3-1.5M12 9.75L9 11.25" />
                  </svg>
                ),
              },
              {
                label: "Performance analytics",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-brand">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                label: "Compete with friends",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-brand">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-[#1A1D24] px-4 py-3 ring-1 ring-white/5"
              >
                {item.icon}
                <span className="text-sm font-medium text-[#9BA3B0]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Download */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
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
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-6">
        <nav className="flex items-center justify-center gap-6" aria-label="Footer navigation">
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
      </footer>
    </div>
  );
}
