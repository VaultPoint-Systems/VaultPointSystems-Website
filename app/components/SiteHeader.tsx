"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mark } from "./brand";

const PRODUCTS = [
  {
    href: "https://c2.vaultpoint.systems",
    name: "Zetadeck",
    blurb: "A self-maintaining workspace for small teams.",
  },
  {
    href: "/products/riskguard",
    name: "RiskGuard",
    blurb: "Self-serve security audit for SMBs and startups.",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on outside click or route change.
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);
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
      <div className="w-full px-6 lg:px-10 min-h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-[16px] font-semibold tracking-tight">VaultPoint Systems</span>
        </Link>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-[var(--color-rule-strong)] text-[var(--color-ink)]"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            {mobileOpen ? (
              <path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-7 text-[15px]">
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
                  {PRODUCTS.map((p, idx) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-3.5 hover:bg-[var(--color-bg-2)] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-[15px] tracking-tight">{p.name}</span>
                        <span className="doc-label">{String(idx + 1).padStart(3, "0")}</span>
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
      {mobileOpen && (
        <nav id="mobile-navigation" className="md:hidden border-t border-[var(--color-rule)] bg-[var(--color-bg)]">
          <div className="w-full px-6 py-4">
            <div className="space-y-1">
              <p className="doc-label mb-2">Products</p>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`block border border-[var(--color-rule)] bg-[var(--color-surface)] px-4 py-3 ${
                    pathname === p.href ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)]"
                  }`}
                >
                  <span className="block font-semibold text-[15px] tracking-tight">{p.name}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug">{p.blurb}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-2 text-[15px]">
              <MobileNavLink href="/about" active={pathname === "/about"}>About</MobileNavLink>
              <Link
                href="/contact"
                className="mt-2 inline-flex min-h-11 items-center justify-center bg-[var(--color-ink)] px-4 py-2.5 text-white font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      )}
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

function MobileNavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`block py-2.5 transition-colors ${active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)]"}`}
    >
      {children}
    </Link>
  );
}
