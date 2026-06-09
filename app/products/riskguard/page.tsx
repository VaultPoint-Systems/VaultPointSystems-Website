import type { Metadata } from "next";
import { Container, ButtonPrimary } from "../../components/ui";
import { RiskGuardReport } from "../../components/RiskGuardReport";

export const metadata: Metadata = {
  title: "RiskGuard — VaultPoint Systems",
  description:
    "RiskGuard checks your business against industry security standards and gives you a clear list of what to fix. Self-serve, AI-assisted, built for teams without a security person.",
};

const STEPS = [
  {
    n: "1",
    title: "Start with Security Baselines",
    body: "RiskGuard measures you against industry standards, the essential security baselines.",
  },
  {
    n: "2",
    title: "Upload what you have",
    body: "Add your existing policies and docs. RiskGuard reads them and skips questions already covered.",
  },
  {
    n: "3",
    title: "Answer the rest",
    body: "Work through what's left. A built-in AI explains anything unclear and checks answers along the way.",
  },
  {
    n: "4",
    title: "See where you stand",
    body: "A scored dashboard shows what passes, what needs work, and what to fix first.",
  },
  {
    n: "5",
    title: "Export when ready",
    body: "Send your profile to a certified auditor for official sign-off, without redoing the work.",
  },
];

const SCENARIOS = [
  "The accounting firm whose clients have started asking how their tax records are stored.",
  "The dental office that wouldn't survive a patient data leak.",
  "The five-person startup that just got its first security questionnaire from a big customer.",
];

export default function RiskGuardPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-[13px] font-medium text-[var(--color-ink-mute)]">
                RiskGuard &middot; in development, launching 2026
              </p>
              <h1 className="mt-5 font-display text-[44px] sm:text-[56px] leading-[1.03] tracking-[-0.015em] font-medium">
                Prove your security.{" "}
                <span className="text-[var(--color-accent)]">Skip the consultant</span>.
              </h1>
              <p className="mt-6 text-[17px] leading-[1.7] text-[var(--color-ink-dim)] max-w-md">
                RiskGuard runs the readiness assessment a consultant would,
                guided by AI and priced for a small business. Scored report and a
                fix list in days.
              </p>
              <div className="mt-8">
                <ButtonPrimary href="/contact">Request early access &rarr;</ButtonPrimary>
              </div>
            </div>
            <div className="lg:col-span-7">
              <RiskGuardReport />
            </div>
          </div>
        </Container>
      </section>

      {/* The problem */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
              Most security tools assume you already have a security team.
            </p>
            <p className="mt-7 text-[17px] leading-[1.75] text-[var(--color-ink-dim)] max-w-2xl">
              Accounting firms, dental offices, small software companies. They
              hold data people care about, with no one on staff to guard it. The
              usual path is an expensive consultant and a long wait for a PDF.
            </p>
          </div>
        </Container>
      </section>

      {/* Value / UVP */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-xl">
            The same assessment, a fraction of the cost and time.
          </h2>
          <div className="mt-12 grid gap-px bg-[var(--color-rule)] border border-[var(--color-rule)] sm:grid-cols-3">
            {[
              { k: "Fraction of the cost", v: "A consultant readiness assessment runs thousands of dollars. RiskGuard is self-serve, at small-business pricing." },
              { k: "Days, not weeks", v: "No scheduling, no site visits. Upload your docs, answer the questions, get your report." },
              { k: "No security expert needed", v: "The built-in AI explains every question and reviews your answers as you go." },
            ].map((c) => (
              <div key={c.k} className="bg-[var(--color-bg)] p-6">
                <h3 className="text-[17px] font-semibold tracking-tight">{c.k}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-ink-dim)]">{c.v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-12 max-w-3xl">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 py-7 border-t border-[var(--color-rule)] last:border-b last:border-[var(--color-rule)]"
              >
                <span className="font-display text-[32px] sm:text-[40px] leading-none text-[var(--color-accent)] w-10">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[19px] font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-[1.65] text-[var(--color-ink-dim)] max-w-xl">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-[15px] leading-[1.7] text-[var(--color-ink-mute)]">
            RiskGuard gets you audit-ready and shows you where you stand. Official
            certification comes from the auditor your profile exports to.
          </p>
        </Container>
      </section>

      {/* What Security Standards Are */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[44px] sm:text-[56px] leading-none">Security Baselines</h2>
              <p className="mt-3 text-[14px] text-[var(--color-ink-mute)]">Essential cyber hygiene</p>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[17px] leading-[1.75] text-[var(--color-ink-dim)] max-w-2xl lg:pt-2">
              <p>
                Industry security standards define the foundational controls every business should have: multi-factor login, real backups, and careful control over who has admin access. These are the essentials that block the most common attacks on small businesses.
              </p>
              <p>
                These standards are widely recognized and reachable without a security team. RiskGuard turns them into questions about your own setup, then flags the gaps and helps you fix them.
              </p>
              <p className="text-[var(--color-ink-mute)]">
                RiskGuard starts with industry-standard baselines and grows as your security maturity grows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-display text-[26px] sm:text-[34px] leading-[1.25] tracking-[-0.01em]">
              Built for businesses that hold data worth protecting and never hired
              anyone to protect it.
            </p>
            <ul className="mt-9 space-y-4 text-[17px] leading-[1.6] text-[var(--color-ink-dim)]">
              {SCENARIOS.map((s) => (
                <li key={s} className="flex gap-3.5">
                  <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-9 text-[16px] leading-[1.7] text-[var(--color-ink-mute)] max-w-2xl">
              Different industries, one problem: real responsibility for security,
              no one whose job it is.
            </p>
          </div>
        </Container>
      </section>

      {/* Continuous readiness */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-display text-[26px] sm:text-[34px] leading-[1.25] tracking-[-0.01em]">
              Compliance doesn&rsquo;t stop after the first report.
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-[var(--color-ink-dim)] max-w-2xl">
              Your setup changes every time you hire someone or add a device. A
              subscription keeps the dashboard current and the AI on call for
              questions as they come up.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-slate)] text-[var(--color-slate-ink)]">
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-[44px] font-medium tracking-tight leading-[1.05]">
                Want in early?
              </h2>
              <p className="mt-4 text-[var(--color-slate-dim)] max-w-md">
                RiskGuard launches in 2026. Request early access to get in before
                then.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="/contact"
                className="inline-flex items-center h-11 px-5 bg-white text-[var(--color-slate)] font-semibold text-[14px] tracking-tight hover:bg-[var(--color-signal)] transition-colors"
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
