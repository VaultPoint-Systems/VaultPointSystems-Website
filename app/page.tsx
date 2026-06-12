import Link from "next/link";
import { Container, ButtonPrimary, ButtonGhost } from "./components/ui";
import { RiskGuardReport } from "./components/RiskGuardReport";

const COMMAND_ITEMS = [
  ["Inbox", "Client renewal moved to this week"],
  ["Roadmap", "Billing portal waiting on copy"],
  ["Finance", "3 expenses categorized automatically"],
  ["GitHub", "PR merged; task marked complete"],
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[46px] sm:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.015em] font-medium">
                Software that keeps the{" "}
                <em className="italic text-[var(--color-accent)]">business in view</em>.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] leading-[1.7] text-[var(--color-ink-dim)] border-t border-[var(--color-rule)] pt-4">
                VaultPoint Systems builds clear, self-maintaining tools for
                startups and small businesses. Less admin work, fewer blank
                pages, and software that tells you what matters.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonPrimary href="/products/command-center">Explore Command Center &rarr;</ButtonPrimary>
                <ButtonGhost href="/products/riskguard">View RiskGuard</ButtonGhost>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product teaser */}
      <section id="product" className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Our first product</p>
              <h2 className="font-display text-3xl sm:text-[40px] font-medium tracking-tight leading-[1.12]">
                Meet <span className="text-[var(--color-accent)]">Command Center</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--color-ink-dim)] max-w-md">
                A project and internal management workspace for small teams that
                do not have an ops person. It keeps context, derives status, and
                points out what needs attention without becoming a second job.
              </p>
              <p className="mt-4 text-[14px] text-[var(--color-ink-mute)]">
                Built around clarity, simplicity, and connected work across the whole suite.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ButtonPrimary href="/products/command-center">See the product &rarr;</ButtonPrimary>
              </div>
            </div>
            <div className="lg:col-span-7">
              <CommandCenterPreview />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Security in the suite</p>
              <h2 className="font-display text-3xl sm:text-[40px] font-medium tracking-tight leading-[1.12]">
                Meet <span className="text-[var(--color-accent)]">RiskGuard</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--color-ink-dim)] max-w-md">
                RiskGuard checks your business against industry security standards
                and gives you a clear list of what to fix. No consultant, no
                months of waiting.
              </p>
              <p className="mt-4 text-[14px] text-[var(--color-ink-mute)]">
                The same thesis applied to security: less ceremony, more signal.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ButtonPrimary href="/products/riskguard">See how it works &rarr;</ButtonPrimary>
              </div>
            </div>
            <div className="lg:col-span-7">
              <RiskGuardReport />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission teaser, links to About */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <p className="font-display text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-[-0.01em] max-w-4xl">
            Small teams are asked to run like mature companies without the staff
            or time mature companies have. VaultPoint Systems builds the tooling
            layer that gives them clarity without adding maintenance.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-[15px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-deep)] transition-colors"
            >
              More about VaultPoint &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--color-slate)] text-[var(--color-slate-ink)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-[44px] font-medium tracking-tight leading-[1.05]">
                Questions, concerns, or just curious?
              </h2>
              <p className="mt-4 text-[var(--color-slate-dim)] max-w-md">
                Send us a note. We read every message.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center h-11 px-5 bg-white text-[var(--color-slate)] font-semibold text-[14px] tracking-tight hover:bg-[var(--color-signal)] transition-colors"
              >
                Get in touch &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function CommandCenterPreview() {
  return (
    <div className="border border-[var(--color-slate-line)] bg-[var(--color-slate)] text-[var(--color-slate-ink)] rounded-md overflow-hidden shadow-[0_24px_60px_-24px_rgba(13,17,23,0.6)]">
      <div className="border-b border-[var(--color-slate-line)] px-4 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 bg-[var(--color-slate-2)]">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
          <span className="doc-label-dark">Command Center</span>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-slate-mute)]">workspace / live</span>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-slate-line)] p-4 sm:p-5">
          <p className="doc-label-dark mb-4">Today</p>
          <div className="space-y-3">
            {COMMAND_ITEMS.map(([label, body]) => (
              <div key={body} className="border border-[var(--color-slate-line)] bg-[var(--color-slate-2)] p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-slate-mute)]">{label}</p>
                <p className="mt-1 text-[14px] leading-snug">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <p className="doc-label-dark mb-4">System brief</p>
          <div className="space-y-4">
            <div>
              <p className="font-display text-[28px] sm:text-[34px] leading-none text-white">4 priorities</p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-slate-dim)]">
                Command Center connected roadmap changes, GitHub activity, and recent
                payments, then promoted only the work that needs a decision.
              </p>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--color-slate-2)] overflow-hidden">
              <div className="h-full w-[68%] bg-[var(--color-signal)]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <MiniStat label="Manual updates avoided" value="12" />
              <MiniStat label="Open decisions" value="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--color-slate-line)] p-3">
      <p className="font-mono text-[24px] leading-none text-white">{value}</p>
      <p className="mt-1 text-[12px] leading-snug text-[var(--color-slate-dim)]">{label}</p>
    </div>
  );
}
