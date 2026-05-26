export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-rule)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[15px] font-semibold tracking-tight">VaultPoint Systems</span>
          </a>
          <nav className="flex items-center gap-7 text-sm text-[var(--color-ink-dim)]">
            <a href="#product" className="hover:text-[var(--color-ink)] transition-colors">Product</a>
            <a href="#about" className="hover:text-[var(--color-ink)] transition-colors">About</a>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="inline-flex items-center h-9 px-3.5 bg-[#0c0d10] text-white rounded-md font-medium hover:bg-[var(--color-accent)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] mb-5">
              Security, made approachable
            </p>
            <h1 className="text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.025em] font-semibold">
              Cybersecurity for the businesses traditionally priced out of it.
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-[var(--color-ink-dim)] max-w-xl">
              VaultPoint Systems builds accessible security tooling for startups
              and small businesses &mdash; without enterprise pricing or
              enterprise complexity.
            </p>
            <div className="mt-9 flex items-center gap-3 flex-wrap">
              <a
                href="mailto:vaultpointsystems@outlook.com"
                className="inline-flex items-center h-11 px-5 bg-[var(--color-accent)] text-white rounded-md font-medium text-[15px] hover:bg-[#0a4536] transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#product"
                className="inline-flex items-center h-11 px-5 rounded-md font-medium text-[15px] text-[var(--color-ink)] border border-[var(--color-rule)] bg-white hover:border-[var(--color-ink)] transition-colors"
              >
                See what we&rsquo;re building
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <AuditPreview />
          </div>
        </div>
      </section>

      <section id="product" className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-mute)] mb-4">
                Product
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
                Our first product: a security audit you can actually run yourself.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-8 sm:p-10">
                <div className="flex items-baseline justify-between gap-6 flex-wrap mb-4">
                  <h3 className="text-2xl font-semibold tracking-tight">AI Security Audit</h3>
                  <span className="font-mono text-xs text-[var(--color-ink-mute)]">In development</span>
                </div>
                <p className="text-[17px] leading-[1.65] text-[var(--color-ink-dim)] max-w-2xl">
                  An affordable, self-serve security audit purpose-built for
                  SMBs and startups. We&rsquo;ll share more details as we get
                  closer to launch.
                </p>
                <div className="mt-8 grid sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--color-rule)]">
                  <Highlight title="Self-serve" body="Run it yourself. No long sales process, no enterprise consultant." />
                  <Highlight title="Right-priced" body="Built to be affordable for early-stage and small teams." />
                  <Highlight title="Actionable" body="Findings come with a prioritized plan, not a 200-page PDF." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-mute)] mb-4">
              About
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl sm:text-3xl leading-[1.3] tracking-tight font-medium text-[var(--color-ink)] max-w-3xl">
              VaultPoint Systems is an early-stage technology company. We
              think the businesses most exposed to cyber risk are the ones
              least served by today&rsquo;s security industry &mdash; and
              we&rsquo;re here to fix that.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-mute)] mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
              Questions, concerns, or just curious?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--color-ink-dim)] mb-4">Write to us directly.</p>
            <a
              href="mailto:vaultpointsystems@outlook.com"
              className="font-mono text-lg sm:text-xl text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all"
            >
              vaultpointsystems@outlook.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between text-sm">
          <div className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[var(--color-ink-dim)]">&copy; {new Date().getFullYear()} VaultPoint Systems</span>
          </div>
          <span className="font-mono text-xs text-[var(--color-ink-mute)]">vaultpoint.systems</span>
        </div>
      </footer>
    </main>
  );
}

function Highlight({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-tight mb-1.5">{title}</h4>
      <p className="text-sm leading-[1.55] text-[var(--color-ink-dim)]">{body}</p>
    </div>
  );
}

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--color-accent)" />
      <path d="M7 12 L10.5 15.5 L17 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function AuditPreview() {
  const rows = [
    { label: "Identity & access", status: "Pass", tone: "ok" as const },
    { label: "Data handling", status: "Review", tone: "warn" as const },
    { label: "Cloud configuration", status: "Pass", tone: "ok" as const },
    { label: "Vendor & 3rd party", status: "Pass", tone: "ok" as const },
    { label: "Endpoint posture", status: "Review", tone: "warn" as const },
    { label: "Incident readiness", status: "Pass", tone: "ok" as const },
  ];

  return (
    <div className="relative">
      <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] shadow-[0_8px_30px_-12px_rgba(12,13,16,0.12)] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-rule)] bg-[#fbfaf7]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e0d8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e0d8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e0d8]" />
          </div>
          <span className="font-mono text-[11px] text-[var(--color-ink-mute)]">vaultpoint.systems / audit</span>
          <span className="w-12" />
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-baseline justify-between mb-1">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-mute)]">Audit summary</p>
            <span className="font-mono text-[11px] text-[var(--color-ink-mute)]">Concept preview</span>
          </div>

          <div className="mt-4 flex items-end gap-6">
            <div>
              <p className="text-[44px] sm:text-[52px] leading-none font-semibold tracking-tight text-[var(--color-ink)]">
                78<span className="text-[var(--color-ink-mute)] text-2xl">/100</span>
              </p>
              <p className="mt-1.5 text-xs text-[var(--color-ink-dim)]">Overall posture &middot; Good</p>
            </div>
            <div className="flex-1">
              <div className="h-2 rounded-full bg-[#eeece4] overflow-hidden">
                <div className="score-bar" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-[var(--color-ink-mute)]">
                <span>0</span><span>50</span><span>100</span>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-[var(--color-rule)]">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between py-3 border-b border-[var(--color-rule)] last:border-b-0">
                <div className="flex items-center gap-3">
                  <span className={`h-1.5 w-1.5 rounded-full ${r.tone === "ok" ? "dot-ok" : "dot-warn"}`} />
                  <span className="text-sm text-[var(--color-ink)]">{r.label}</span>
                </div>
                <span className={`font-mono text-[11px] px-2 py-0.5 rounded ${r.tone === "ok" ? "tag-ok" : "tag-warn"}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
