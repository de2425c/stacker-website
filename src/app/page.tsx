import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-18 h-18 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg">
          S
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Stacker
        </h1>
        <p className="text-slate-500 mb-8">Poker session tracking app</p>
        <div className="flex gap-4 justify-center text-sm">
          <Link href="/privacy" className="text-emerald-600 hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="text-emerald-600 hover:underline">
            Terms
          </Link>
          <Link href="/support" className="text-emerald-600 hover:underline">
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}
