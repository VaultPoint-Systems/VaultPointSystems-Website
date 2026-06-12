import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function ButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 bg-[var(--color-accent)] text-white font-semibold text-[14px] tracking-tight hover:bg-[var(--color-accent-deep)] transition-colors"
    >
      {children}
    </Link>
  );
}

export function ButtonGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 border border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-[14px] tracking-tight hover:bg-[var(--color-ink)] hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[13px] text-[var(--color-ink-dim)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:text-[var(--color-ink)] hover:decoration-[var(--color-ink)] transition-colors"
    >
      {children}
    </Link>
  );
}
