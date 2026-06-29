import type { Metadata } from "next";
import { Container, ButtonPrimary } from "../components/ui";

export const metadata: Metadata = {
  title: "About - VaultPoint Systems",
  description:
    "VaultPoint Systems builds clear operational software for startups and small businesses.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Built for small teams",
    body: "The best software should not assume you have an operations department. We build for the budgets and workflows small teams actually have.",
  },
  {
    n: "02",
    title: "Legible by design",
    body: "A tool you cannot understand becomes work of its own. Plain language, ranked priorities, no jargon walls.",
  },
  {
    n: "03",
    title: "Signal over upkeep",
    body: "Software should connect context, derive status, and surface what matters instead of asking you to maintain another database.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Mission */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <p className="eyebrow mb-8">About VaultPoint Systems</p>
          <p className="font-display text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.22] tracking-[-0.01em] max-w-4xl">
            Small teams are expected to operate with the discipline of much
            larger companies, without the staff, time, or systems those companies
            have. We build software shaped for the teams that{" "}
            <em className="italic text-[var(--color-accent)]">actually need it</em>.
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8">
            <div className="lg:col-span-4">
              <p className="eyebrow">The gap we saw</p>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[17px] leading-[1.7] text-[var(--color-ink-dim)] max-w-2xl">
              <p>
                Enterprise software is mature, but much of it is not suitable
                for small businesses. The tools are powerful, expensive, and
                often assume someone on the team exists just to keep them tidy.
              </p>
              <p>
                So the teams with the least margin for wasted time end up with
                the heaviest systems: blank pages, manual status rituals, and
                dashboards that only know what someone remembered to enter.
                That&rsquo;s the gap VaultPoint Systems was founded to close.
              </p>
              <p className="text-[var(--color-ink)]">
                We&rsquo;re building{" "}
                <a href="https://zetadeck.com" className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors">Zetadeck</a>
                {" "}for internal operations and{" "}
                <a href="/products/riskguard" className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors">RiskGuard</a>,
                a self-serve security audit, as one suite for clarity and control.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-24">
          <p className="eyebrow mb-10">What we believe</p>
          <div className="grid gap-10 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.n}>
                <span className="font-mono text-[12px] text-[var(--color-ink-mute)]">{p.n}</span>
                <h3 className="mt-2 text-[18px] font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[var(--color-ink-dim)]">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-[40px] font-medium tracking-tight leading-[1.1] max-w-xl">
              Building something we wish existed.
            </h2>
            <ButtonPrimary href="/contact">Get in touch &rarr;</ButtonPrimary>
          </div>
        </Container>
      </section>
    </main>
  );
}
