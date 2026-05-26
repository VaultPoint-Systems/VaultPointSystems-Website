export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[15px] font-medium tracking-tight">VaultPoint Systems</span>
          </a>
          <nav className="flex items-center gap-7 text-sm text-[var(--color-ink-dim)]">
            <a href="#service" className="hover:text-[var(--color-ink)] transition-colors">Service</a>
            <a href="mailto:vaultpointsystems@outlook.com" className="hover:text-[var(--color-ink)] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <h1 className="text-[40px] sm:text-[56px] leading-[1.05] tracking-[-0.025em] font-medium max-w-3xl">
            Cybersecurity for startups and small businesses.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[var(--color-ink-dim)]">
            VaultPoint Systems builds accessible security tooling for the
            businesses traditionally priced out of it.
          </p>
          <div className="mt-10 flex items-center gap-6 text-sm">
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="inline-flex items-center bg-[var(--color-ink)] text-[var(--color-bg)] px-4 h-10 font-medium hover:bg-white transition-colors"
            >
              Contact us
            </a>
            <a href="#service" className="text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors">
              What we&rsquo;re building &rarr;
            </a>
          </div>
        </div>
      </section>

      <section id="service" className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-mute)] mb-10">
            What we&rsquo;re building
          </h2>
          <div className="grid sm:grid-cols-[1fr_2fr] gap-8 sm:gap-16">
            <div>
              <h3 className="text-2xl font-medium tracking-tight">
                AI Security Audit
              </h3>
              <p className="mt-2 text-sm text-[var(--color-ink-mute)] font-mono">In development</p>
            </div>
            <div>
              <p className="text-[17px] leading-[1.65] text-[var(--color-ink-dim)] max-w-xl">
                An affordable, self-serve security audit purpose-built for
                SMBs and startups. More details soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-mute)] mb-10">
            Contact
          </h2>
          <div className="grid sm:grid-cols-[1fr_2fr] gap-8 sm:gap-16">
            <p className="text-[var(--color-ink-dim)]">Questions, concerns, or curious?</p>
            <div>
              <a
                href="mailto:vaultpointsystems@outlook.com"
                className="font-mono text-[17px] sm:text-xl text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all"
              >
                vaultpointsystems@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between text-xs text-[var(--color-ink-mute)]">
          <span>&copy; {new Date().getFullYear()} VaultPoint Systems</span>
          <span className="font-mono">vaultpoint.systems</span>
        </div>
      </footer>
    </main>
  );
}

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 12 L12 22 L22 12 L12 2 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
