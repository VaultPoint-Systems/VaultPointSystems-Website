import type { Metadata } from "next";
import Link from "next/link";
import { Container, ButtonPrimary } from "../../components/ui";

export const metadata: Metadata = {
  title: "Command Center - VaultPoint Systems",
  description:
    "Command Center is a project and internal management workspace for small startups and businesses that need clarity without another maintenance-heavy tool.",
};

const FLOWS = [
  {
    title: "Context gathers itself",
    body: "Roadmap notes, workspace decisions, GitHub PRs, and business activity roll into one place instead of living in disconnected tabs.",
  },
  {
    title: "Status derives itself",
    body: "Work moves when the underlying signal changes. A merged PR, completed task, or categorized transaction can update the story automatically.",
  },
  {
    title: "Priorities surface first",
    body: "The workspace tells a founder or owner what needs a decision, what is blocked, and what can wait.",
  },
];

const AUDIENCES = [
  "A dental-practice owner who needs the week in one clear view.",
  "A 4-person accounting firm tracking client work without hiring ops.",
  "A two-founder startup trying to keep roadmap, money, and delivery aligned.",
];

export default function CommandCenterPage() {
  return (
    <main>
      <section className="border-b border-[var(--color-slate-line)] bg-[var(--color-slate)] text-[var(--color-slate-ink)]">
        <Container className="py-16 lg:py-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-slate-line)] pb-4">
            <p className="doc-label-dark">Product / Command Center</p>
            <p className="font-mono text-[11px] text-[var(--color-slate-mute)]">workspace operating layer</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[13px] font-medium text-[var(--color-slate-dim)]">
                Command Center &middot; in development
              </p>
              <h1 className="mt-5 font-display text-[44px] sm:text-[56px] leading-[1.03] tracking-[-0.015em] font-medium">
                The workspace that{" "}
                <span className="text-[var(--color-accent)]">keeps itself</span>.
              </h1>
              <p className="mt-6 text-[17px] leading-[1.7] text-[var(--color-slate-dim)] max-w-xl">
                Command Center is a project and internal management tool for
                small startups and owner-led businesses. It is built for teams
                that need clarity, not another system to maintain.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonPrimary href="/contact">Request early access &rarr;</ButtonPrimary>
                <Link
                  href="/products/riskguard"
                  className="inline-flex min-h-11 items-center justify-center border border-[var(--color-slate-dim)] px-5 py-2.5 text-[14px] font-semibold tracking-tight text-[var(--color-slate-ink)] hover:bg-white hover:text-[var(--color-slate)] transition-colors"
                >
                  Explore RiskGuard
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="border border-[var(--color-slate-line)] bg-[var(--color-slate-2)] p-5 sm:p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                <p className="eyebrow-dark mb-5">Morning brief</p>
                <div className="space-y-5">
                  {[
                    ["Decision needed", "Pricing page copy is blocking launch readiness."],
                    ["Moved automatically", "Authentication cleanup completed after PR #142 merged."],
                    ["Finance signal", "Three software charges categorized under product tooling."],
                  ].map(([label, body]) => (
                    <div key={body} className="border-t border-[var(--color-slate-line)] pt-4">
                      <p className="doc-label-dark mb-1">{label}</p>
                      <p className="text-[16px] leading-relaxed text-[var(--color-slate-ink)]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
              The problem with most management tools is not missing features.
              It is upkeep.
            </p>
            <p className="mt-7 text-[17px] leading-[1.75] text-[var(--color-ink-dim)] max-w-2xl">
              The usual project and workspace tools can become a second job:
              feeding statuses, filing updates, linking work by hand, then
              getting back exactly what you put in. Command Center starts from
              the opposite premise.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-xl">
            A workspace organized around signal, not ceremony.
          </h2>
          <div className="mt-12 grid gap-px bg-[var(--color-rule)] border border-[var(--color-rule)] md:grid-cols-3">
            {FLOWS.map((flow) => (
              <div key={flow.title} className="bg-[var(--color-bg)] p-6">
                <h3 className="text-[17px] font-semibold tracking-tight">{flow.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[var(--color-ink-dim)]">{flow.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8">
            <div className="lg:col-span-4">
              <p className="eyebrow">Who it is for</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4 text-[17px] leading-[1.6] text-[var(--color-ink-dim)] max-w-2xl">
                {AUDIENCES.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-9 text-[16px] leading-[1.7] text-[var(--color-ink-mute)] max-w-2xl">
                These teams do not need enterprise project management. They need a
                calm internal operating layer that notices, connects, and
                summarizes the work already happening.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-slate)] text-[var(--color-slate-ink)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-[44px] font-medium tracking-tight leading-[1.05]">
                Building for teams that cannot afford tool sprawl.
              </h2>
              <p className="mt-4 text-[var(--color-slate-dim)] max-w-md">
                Command Center is in development. Tell us how your team runs today.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 bg-white text-[var(--color-slate)] font-semibold text-[14px] tracking-tight hover:bg-[var(--color-signal)] transition-colors"
              >
                Request early access &rarr;
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
