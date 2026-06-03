"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mark } from "./brand";

const PRODUCTS = [
  {
    href: "/products/riskguard",
    name: "RiskGuard",
    blurb: "Self-serve security audit for SMBs and startups.",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on outside click or route change.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const productsActive = pathname.startsWith("/products");

  return (
    <header className="border-b border-[var(--color-rule)] bg-[var(--color-bg)]/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-[16px] font-semibold tracking-tight">VaultPoint Systems</span>
        </Link>

        <nav className="flex items-center gap-7 text-[15px]">
          <div
            ref={wrapRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex items-center gap-1.5 transition-colors ${
                productsActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
              }`}
            >
              Products
              <svg
                width="11" height="11" viewBox="0 0 12 12" aria-hidden
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 top-full pt-3 w-[300px]">
                <div className="border border-[var(--color-ink)] bg-[var(--color-surface)] shadow-[0_12px_40px_-12px_rgba(24,21,19,0.35)]">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-3.5 hover:bg-[var(--color-bg-2)] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-[15px] tracking-tight">{p.name}</span>
                        <span className="doc-label">001</span>
                      </span>
                      <span className="block mt-0.5 text-[13px] leading-snug text-[var(--color-ink-dim)]">
                        {p.blurb}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>

          <Link
            href="/contact"
            className="inline-flex items-center h-9 px-4 bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-accent)] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`transition-colors ${active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"}`}
    >
      {children}
    </Link>
  );
}
