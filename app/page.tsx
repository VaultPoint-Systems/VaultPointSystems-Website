export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundFX />

      <header className="w-full relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-white transition-colors">
              VaultPoint Systems
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-sm text-[var(--color-ink-dim)]">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href="mailto:vaultpointsystems@outlook.com"
            className="sm:hidden text-sm text-[var(--color-ink-dim)] hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Cybersecurity built
            <br className="hidden sm:block" />
            <span className="text-[var(--color-ink-dim)]"> for modern businesses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[var(--color-ink-dim)] text-base sm:text-lg leading-relaxed">
            VaultPoint Systems delivers accessible, scalable security for
            startups and small businesses &mdash; without the enterprise price tag.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3a66e6] transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-white/[0.04] hover:border-white/20 transition-colors"
            >
              See services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">Services</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we offer</h2>
            </div>
          </div>

          <div className="max-w-xl">
            <ServiceCard
              title="AI Security Audit"
              description="An affordable, self-serve security audit for SMBs and startups. Coming soon."
              icon={<IconShield />}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
              Have a security concern, or just curious?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-ink-dim)]">
              Reach out directly &mdash; we read every message.
            </p>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3a66e6] transition-colors"
            >
              <IconMail />
              vaultpointsystems@outlook.com
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-7 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between text-sm text-[var(--color-ink-dim)]">
          <div className="flex items-center gap-2">
            <Logo small />
            <span>&copy; {new Date().getFullYear()} VaultPoint Systems</span>
          </div>
          <a
            href="mailto:vaultpointsystems@outlook.com"
            className="hover:text-white transition-colors"
          >
            vaultpointsystems@outlook.com
          </a>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  tag,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/20">
          {icon}
        </div>
        {tag && (
          <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-2 py-0.5">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">{description}</p>
    </div>
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
            "radial-gradient(1200px 600px at 70% -10%, rgba(79,124,255,0.20), transparent 60%), radial-gradient(800px 500px at 10% 110%, rgba(79,124,255,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 80%)",
        }}
      />
    </>
  );
}

function Logo({ small }: { small?: boolean }) {
  const size = small ? 18 : 28;
  return (
    <svg
      width={size}
      height={size}
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

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
