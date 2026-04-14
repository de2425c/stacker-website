import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-brand-dark/10 py-8 px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-xs text-brand-muted">&copy; {new Date().getFullYear()} Stackflow Inc.</p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <Link
            href="/support"
            className="text-xs font-medium text-brand-muted transition-colors hover:text-brand"
            tabIndex={0}
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-xs font-medium text-brand-muted transition-colors hover:text-brand"
            tabIndex={0}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs font-medium text-brand-muted transition-colors hover:text-brand"
            tabIndex={0}
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
};
