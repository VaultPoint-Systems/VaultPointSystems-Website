export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TickerBar />

      <header className="border-b border-[var(--color-ink)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[16px] font-semibold tracking-tight">VaultPoint Systems</span>
          </a>
          <nav className="flex items-center gap-7 text-sm">
            <a href="#product" className="text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors">Product</a>
            <a href="#about" className="text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors">About</a>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="inline-flex items-center h-9 px-4 bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-accent)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <Section index="§01" label="Introduction" first>
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <div className="lg:col-span-9">
            <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.96] tracking-[-0.028em] font-semibold">
              Cybersecurity<br />
              built for <span className="text-[var(--color-accent)]">small businesses</span>.
            </h1>
          </div>
          <div className="lg:col-span-3 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-[var(--color-ink-dim)] border-t border-[var(--color-ink)] pt-4">
              VaultPoint Systems builds accessible security tooling for
              startups and small businesses, without enterprise
              pricing or enterprise complexity.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href="mailto:vaultpointsystems@outlook.com"
                className="inline-flex items-center h-11 px-5 bg-[var(--color-accent)] text-white font-semibold text-[14px] tracking-tight hover:bg-[var(--color-accent-deep)] transition-colors"
              >
                Get in touch &rarr;
              </a>
              <a
                href="#product"
                className="text-[13px] text-[var(--color-ink-dim)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:text-[var(--color-ink)] hover:decoration-[var(--color-ink)] transition-colors"
              >
                See what we&rsquo;re building
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section index="§02" label="Product">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12">
          <div className="lg:col-span-5">
            <p className="chapter mb-3">Item No. 001</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mb-5">
              A security audit you can <em className="text-[var(--color-accent)] not-italic">actually</em> run yourself.
            </h2>
            <p className="text-[16px] leading-[1.65] text-[var(--color-ink-dim)] max-w-md">
              Our first product: an affordable, self-serve security audit
              purpose-built for SMBs and startups. We&rsquo;ll share more as
              we get closer to launch.
            </p>

            <div className="mt-8 border-t border-[var(--color-rule)]">
              <SpecRow term="Status" value="In development" />
              <SpecRow term="Audience" value="Startups, SMBs" />
              <SpecRow term="Model" value="Self-serve, AI-assisted" />
              <SpecRow term="Launching" value="2026" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <AuditPreview />
          </div>
        </div>
      </Section>

      <Section index="§03" label="About">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-12">
            <p className="text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-tight font-medium max-w-4xl">
              The businesses most exposed to cyber risk are the ones
              least served by the security industry. We exist to close
              that gap, with tooling priced and shaped for the
              teams that actually need it.
            </p>
          </div>
        </div>
      </Section>

      <Section index="§04" label="Contact" last>
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Questions, concerns,<br />or just curious?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[var(--color-ink-dim)] mb-4">Reach us directly.</p>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="font-mono text-lg sm:text-xl text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all"
            >
              vaultpointsystems@outlook.com
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t-2 border-[var(--color-ink)] bg-[var(--color-bg-2)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Mark small />
            <span className="text-[14px] font-semibold tracking-tight">VaultPoint Systems</span>
          </div>
          <span className="ticker">&copy; {new Date().getFullYear()} &middot; vaultpoint.systems</span>
        </div>
      </footer>
    </main>
  );
}

function TickerBar() {
  return (
    <div className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 h-8 flex items-center justify-between ticker">
        <span>VPS · 001</span>
        <span className="hidden sm:inline">Cybersecurity for everyone else</span>
        <span>Est. 2026</span>
      </div>
    </div>
  );
}

function Section({
  index,
  label,
  children,
  first,
  last,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <section className={last ? "" : "border-b border-[var(--color-rule)]"}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-24">
        <div className={`flex items-baseline justify-between mb-10 ${first ? "" : ""}`}>
          <p className="ticker">
            <span className="text-[var(--color-accent)]">{index}</span>
            <span className="mx-2 text-[var(--color-rule-strong)]">/</span>
            <span>{label}</span>
          </p>
          <span className="hidden sm:block ticker">vaultpoint.systems</span>
        </div>
        <div className="rule-thick mb-12" />
        {children}
      </div>
    </section>
  );
}

function SpecRow({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-[var(--color-rule)] py-3">
      <span className="ticker">{term}</span>
      <span className="font-mono text-[13px] text-[var(--color-ink)]">{value}</span>
    </div>
  );
}

function AuditPreview() {
  const rows = [
    { n: "01", label: "Identity & access controls", status: "Pass", tone: "ok" as const },
    { n: "02", label: "Data handling & retention", status: "Review", tone: "warn" as const },
    { n: "03", label: "Cloud configuration", status: "Pass", tone: "ok" as const },
    { n: "04", label: "Vendor & third-party risk", status: "Pass", tone: "ok" as const },
    { n: "05", label: "Endpoint posture", status: "Review", tone: "warn" as const },
    { n: "06", label: "Incident readiness", status: "Pass", tone: "ok" as const },
  ];

  return (
    <div className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)]">
      <div className="border-b-2 border-[var(--color-ink)] px-5 py-2.5 flex items-center justify-between bg-[var(--color-surface)]">
        <span className="ticker">Audit report &middot; Specimen</span>
        <span className="font-mono text-[11px] text-[var(--color-ink-mute)]">VPS-AUD / 2026</span>
      </div>

      <div className="grid grid-cols-3 border-b border-[var(--color-rule)]">
        <FormCell label="Issued to" value="ACME Co." />
        <FormCell label="Scope" value="Full stack" />
        <FormCell label="Date" value="2026 · 05 · 26" last />
      </div>

      <div className="px-6 py-6">
        <div className="flex items-end gap-6">
          <div>
            <p className="ticker mb-2">Overall posture</p>
            <p className="text-[48px] sm:text-[60px] leading-none font-semibold tracking-tight">
              78<span className="text-[var(--color-ink-mute)] text-2xl">/100</span>
            </p>
          </div>
          <div className="flex-1 pb-2">
            <div className="h-1.5 bg-[var(--color-bg-2)]">
              <div className="score-bar" />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[var(--color-ink-mute)]">
              <span>0</span><span>50</span><span>100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[var(--color-ink)]">
        <div className="px-6 py-2 flex items-center justify-between border-b border-[var(--color-rule)] bg-[var(--color-surface)]">
          <span className="ticker">Findings</span>
          <span className="ticker">Status</span>
        </div>
        {rows.map((r) => (
          <div key={r.n} className="px-6 py-3 flex items-center justify-between border-b border-[var(--color-rule)] last:border-b-0">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-[var(--color-ink-mute)] w-6">{r.n}</span>
              <span className="text-sm text-[var(--color-ink)]">{r.label}</span>
            </div>
            <span className={`font-mono text-[11px] px-2 py-0.5 ${r.tone === "ok" ? "tag-ok" : "tag-warn"}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-[var(--color-ink)] px-6 py-3 flex items-center justify-between bg-[var(--color-surface)]">
        <span className="ticker">Authorized &middot; VaultPoint Systems</span>
        <span className="font-mono text-[11px] text-[var(--color-ink-mute)]">preview</span>
      </div>
    </div>
  );
}

function Mark({ small }: { small?: boolean }) {
  const s = small ? 22 : 28;
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      {/* vault */}
      <rect x="3" y="3" width="34" height="34" stroke="currentColor" strokeWidth="1.6" />
      {/* corner registration ticks */}
      <path d="M3 8 L7 8 M3 32 L7 32 M33 8 L37 8 M33 32 L37 32" stroke="currentColor" strokeWidth="1.2" />
      {/* V */}
      <path
        d="M10 12 L20 27 L30 12"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* point (filled diamond at apex of V) */}
      <rect
        x="18"
        y="25"
        width="4"
        height="4"
        transform="rotate(45 20 27)"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

function FormCell({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`px-5 py-3 ${last ? "" : "border-r border-[var(--color-rule)]"}`}>
      <p className="ticker mb-1">{label}</p>
      <p className="font-mono text-[13px] text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
