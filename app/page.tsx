export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundFX />

      <header className="w-full relative z-10 border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Mark />
            <span className="font-display text-[18px] tracking-tight text-[var(--color-ink)] leading-none">
              VaultPoint <span className="italic text-[var(--color-accent)]">Systems</span>
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#service" className="label hover:text-[var(--color-ink)] transition-colors">Service</a>
            <a href="#contact" className="label hover:text-[var(--color-ink)] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="label mb-8 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[var(--color-accent)]" />
              VaultPoint Systems
            </p>
            <h1 className="font-display text-[44px] sm:text-[64px] md:text-[84px] leading-[0.95] tracking-[-0.02em] text-[var(--color-ink)]">
              Cybersecurity,
              <br />
              <span className="italic text-[var(--color-accent)]">re&shy;framed</span>
              <br />
              for everyone else.
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-[var(--color-ink-dim)] text-base sm:text-lg leading-relaxed max-w-sm">
              Enterprise-grade security has always priced out the businesses
              that need it most. We&rsquo;re changing that &mdash; starting with
              startups and small teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[#1a1206] hover:bg-[var(--color-ink)] transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#service"
                className="inline-flex items-center justify-center border hairline px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                Our work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="relative z-10 border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="label mb-4">01 &mdash; Service</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              What we&rsquo;re <span className="italic text-[var(--color-accent)]">building</span>.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="border-t hairline pt-8">
              <div className="flex items-baseline justify-between gap-6 flex-wrap">
                <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                  AI Security Audit
                </h3>
                <p className="label">Coming soon</p>
              </div>
              <p className="mt-4 text-[var(--color-ink-dim)] leading-relaxed max-w-2xl">
                An affordable, self-serve security audit purpose-built for SMBs
                and startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="label mb-4">02 &mdash; Contact</p>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight leading-[1.0]">
              Have a question, concern, or just curious&thinsp;
              <span className="italic text-[var(--color-accent)]">?</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[var(--color-ink-dim)] mb-6">Write to us directly.</p>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="font-mono text-sm sm:text-base text-[var(--color-ink)] border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors break-all"
            >
              vaultpointsystems@outlook.com
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <Mark small />
            <span className="label">&copy; {new Date().getFullYear()} VaultPoint Systems</span>
          </div>
          <span className="label">vaultpoint.systems</span>
        </div>
      </footer>
    </main>
  );
}

function BackgroundFX() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 85% 0%, rgba(212,168,90,0.10), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(212,168,90,0.05), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(241,237,226,0.025) 0 1px, transparent 1px 96px)",
        }}
      />
    </>
  );
}

function Mark({ small }: { small?: boolean }) {
  const size = small ? 22 : 28;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="35" height="35" stroke="var(--color-accent)" strokeWidth="1.3" />
      <path
        d="M11 14 L20 26 L29 14"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <circle cx="20" cy="20" r="1.6" fill="var(--color-accent)" />
    </svg>
  );
}
