import Link from "next/link";
import { Mark } from "./brand";

const SITE_DOMAIN = "vaultpoint.systems";


export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-ink)] bg-[var(--color-bg-2)]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Mark />
              <span className="text-[16px] font-semibold tracking-tight">VaultPoint Systems</span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[var(--color-ink-dim)]">
              Clear, self-maintaining software for startups and small businesses
              running without extra operational staff.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { label: "Command Center", href: "https://c2.vaultpoint.systems" },
              { label: "RiskGuard", href: "/products/riskguard" },
              { label: "Security risk data", href: "/risk-to-you" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between">
          <span className="text-[13px] text-[var(--color-ink-mute)]">
            &copy; {new Date().getFullYear()} VaultPoint Systems LLC
          </span>
          <span className="text-[13px] text-[var(--color-ink-mute)]">{SITE_DOMAIN}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-[15px]">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[14px] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
