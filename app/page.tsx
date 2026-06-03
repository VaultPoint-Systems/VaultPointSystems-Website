import Link from "next/link";
import { Container, ButtonPrimary, ButtonGhost } from "./components/ui";
import { RiskGuardReport } from "./components/RiskGuardReport";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[46px] sm:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.015em] font-medium">
                Security compliance
                without the{" "}
                <em className="italic text-[var(--color-accent)]">enterprise friction</em>.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] leading-[1.7] text-[var(--color-ink-dim)] border-t border-[var(--color-rule)] pt-4">
                VaultPoint Systems builds accessible security tooling for
                startups and small businesses, without enterprise pricing
                or enterprise complexity.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonPrimary href="/contact">Get a free assessment &rarr;</ButtonPrimary>
                <ButtonGhost href="/products/riskguard">Explore RiskGuard</ButtonGhost>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product teaser, anchored by the dark report panel */}
      <section id="product" className="border-b border-[var(--color-rule)] bg-[var(--color-bg-2)]">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Our first product</p>
              <h2 className="font-display text-3xl sm:text-[40px] font-medium tracking-tight leading-[1.12]">
                Meet <span className="text-[var(--color-accent)]">RiskGuard</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--color-ink-dim)] max-w-md">
                RiskGuard checks your business against CIS IG1 and gives you a
                clear list of what to fix. No consultant, no months of waiting.
              </p>
              <p className="mt-4 text-[14px] text-[var(--color-ink-mute)]">
                Starting with CIS IG1 essential cyber hygiene, with more to come.
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
            The businesses most exposed to cyber risk are the ones least served
            by the security industry. VaultPoint Systems builds the tooling to
            close that gap, priced and shaped for the teams that need it.
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
