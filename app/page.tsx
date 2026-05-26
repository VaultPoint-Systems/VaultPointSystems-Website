export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 70% -10%, rgba(79,124,255,0.18), transparent 60%), radial-gradient(800px 500px at 10% 110%, rgba(79,124,255,0.10), transparent 60%)",
        }}
      />

      <header className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-white transition-colors">
              VaultPoint Systems
            </span>
          </a>
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink-dim)]">
            vaultpoint.systems
          </span>
        </div>
      </header>

      <section className="flex-1 flex items-center">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 w-full">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink-dim)] mb-6">
            Coming soon
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Cybersecurity built
            <br className="hidden sm:block" />
            <span className="text-[var(--color-ink-dim)]"> for modern businesses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[var(--color-ink-dim)] text-base sm:text-lg leading-relaxed">
            VaultPoint Systems delivers accessible, scalable security for
            startups and small businesses. We&rsquo;re launching soon.
          </p>
        </div>
      </section>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between text-sm text-[var(--color-ink-dim)]">
          <span>&copy; {new Date().getFullYear()} VaultPoint Systems. All rights reserved.</span>
          <span>Made with care.</span>
        </div>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 2.5 28 8v9.5c0 7.2-5.1 11.4-12 13-6.9-1.6-12-5.8-12-13V8l12-5.5Z"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16.2 14.8 19.5 21 13.2"
        stroke="var(--color-accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
