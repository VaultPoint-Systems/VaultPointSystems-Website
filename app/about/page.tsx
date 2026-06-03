import type { Metadata } from "next";
import { Container, ButtonPrimary } from "../components/ui";

export const metadata: Metadata = {
  title: "About — VaultPoint Systems",
  description:
    "VaultPoint Systems builds accessible security tooling for the startups and small businesses the industry tends to overlook.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Priced for the underserved",
    body: "Security shouldn't be a luxury good. We build for the budgets startups and small businesses actually have.",
  },
  {
    n: "02",
    title: "Legible by design",
    body: "A report you can't understand is a report you can't act on. Plain language, ranked priorities, no jargon walls.",
  },
  {
    n: "03",
    title: "Self-serve first",
    body: "You shouldn't need to hire a consultant to learn where you stand. Our tools put that in your own hands.",
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
            The businesses most exposed to cyber risk are the ones least served
            by the security industry. We exist to close that gap, with tooling
            priced and shaped for the teams that{" "}
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
                Enterprise security is a mature, well-funded industry. The tools
                are powerful, the consultants are excellent, and almost none of
                it is built for a ten-person company.
              </p>
              <p>
                So the teams with the least margin for a breach end up with the
                least support: priced out of real tooling, talked past by
                jargon, and left to guess at what matters. That&rsquo;s the gap
                VaultPoint Systems was founded to close.
              </p>
              <p className="text-[var(--color-ink)]">
                We&rsquo;re starting with{" "}
                <a href="/products/riskguard" className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors">RiskGuard</a>,
                a self-serve security audit, and building outward from there.
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
