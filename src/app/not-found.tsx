import Link from "next/link";
import { StackerLogo } from "@/components/stacker-logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F1114]">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="max-w-md text-center">
          <div className="mb-6 animate-fade-in-up">
            <StackerLogo size={48} className="mx-auto" />
          </div>

          <h1
            className="mb-2 animate-fade-in-up text-3xl font-bold tracking-tight text-[#F0F2F5] sm:text-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            Page Not Found
          </h1>

          <p
            className="mb-10 animate-fade-in-up text-lg text-[#9BA3B0]"
            style={{ animationDelay: "0.15s" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/"
              className="inline-block rounded-xl bg-brand px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
              tabIndex={0}
              aria-label="Go back to homepage"
            >
              Go to Stacker
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6">
        <nav className="flex items-center justify-center gap-6" aria-label="Footer navigation">
          {["Support", "Privacy", "Terms"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-xs font-medium text-[#5C6370] transition-colors hover:text-brand"
              tabIndex={0}
            >
              {label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
