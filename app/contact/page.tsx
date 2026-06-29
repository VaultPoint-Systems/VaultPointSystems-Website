import type { Metadata } from "next";
import { Container } from "../components/ui";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - VaultPoint Systems",
  description: "Questions, concerns, or just curious? Send VaultPoint Systems a note.",
};

const CONTACT_EMAIL = "contact@vaultpoint.systems";

export default function ContactPage() {
  return (
    <main>
      <section>
        <Container className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Contact</p>
              <h1 className="font-display text-[40px] sm:text-[52px] font-medium tracking-tight leading-[1.05]">
                Questions, concerns,
                <br />or just curious?
              </h1>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--color-ink-dim)] max-w-sm">
                Send us a note about your team, your stack, Zetadeck, or
                RiskGuard early access. We read every message.
              </p>
              <div className="mt-8 border-t border-[var(--color-rule)] pt-5">
                <p className="text-[13px] text-[var(--color-ink-mute)]">Prefer email?</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-[14px] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
