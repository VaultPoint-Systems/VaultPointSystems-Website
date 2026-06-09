import type { Metadata } from "next";
import { Container, ButtonPrimary } from "../components/ui";

export const metadata: Metadata = {
  title: "Risk to You — VaultPoint Systems",
  description:
    "The threat landscape for small businesses in 2026. Current statistics on cyber attacks, financial impact, and preparedness gaps.",
};

const STAT_SECTIONS = [
  {
    title: "Attack Frequency & Scale",
    stats: [
      {
        metric: "43%",
        label: "of all cyberattacks target small businesses",
        source: "Verizon Data Breach Investigations Report 2025",
        sourceUrl: "https://www.verizon.com/business/resources/reports/dbir/",
      },
      {
        metric: "Every 7 seconds",
        label: "An automated attack targets a small business in the U.S.",
        source: "Spacelift Small Business Cybersecurity Statistics 2026",
        sourceUrl: "https://spacelift.io/blog/small-business-cybersecurity-statistics",
      },
      {
        metric: "49%",
        label: "of small businesses were attacked in the past year",
        source: "IBM Cost of a Data Breach Report 2024-2025",
        sourceUrl: "https://www.ibm.com/reports/data-breach",
      },
      {
        metric: "4x more",
        label: "confirmed breaches at SMBs vs. large organizations",
        source: "IBM Cost of a Data Breach Report 2024-2025",
        sourceUrl: "https://www.ibm.com/reports/data-breach",
      },
    ],
  },
  {
    title: "Financial Impact",
    stats: [
      {
        metric: "$254,445",
        label: "Average cost of a small business data breach",
        source: "IBM Cost of a Data Breach Report 2024-2025",
        sourceUrl: "https://www.ibm.com/reports/data-breach",
      },
      {
        metric: "$1.53M",
        label: "Average total recovery cost from ransomware incidents",
        source: "Sophos State of Ransomware 2025",
        sourceUrl: "https://www.sophos.com/en-us/content/state-of-ransomware",
      },
      {
        metric: "50-60x",
        label: "Prevention costs less than recovery",
        source: "CrowdStrike State of SMB Cybersecurity Survey 2025",
        sourceUrl: "https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/",
      },
      {
        metric: "60%",
        label: "of attacked businesses close permanently within 6 months",
        source: "FBI Internet Crime Complaint Center 2025 Report",
        sourceUrl: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf",
      },
    ],
  },
  {
    title: "Most Common Attack Vectors",
    stats: [
      {
        metric: "33.8%",
        label: "of SMB breaches start with phishing",
        source: "Verizon Data Breach Investigations Report 2025",
        sourceUrl: "https://www.verizon.com/business/resources/reports/dbir/",
      },
      {
        metric: "88%",
        label: "of SMB breaches include ransomware (vs. 39% for large orgs)",
        source: "Sophos State of Ransomware 2025",
        sourceUrl: "https://www.sophos.com/en-us/content/state-of-ransomware",
      },
      {
        metric: "$2.77B",
        label: "annual losses from business email compromise attacks",
        source: "FBI Internet Crime Complaint Center 2025 Report",
        sourceUrl: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf",
      },
      {
        metric: "350% higher",
        label: "social engineering attacks against SMBs vs. large businesses",
        source: "Microsoft Small and Medium Business Cybersecurity Report 2025",
        sourceUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/SMBCybersecurity-Report-Final.pdf",
      },
    ],
  },
  {
    title: "Preparedness Gaps",
    stats: [
      {
        metric: "22%",
        label: "of small businesses are adequately prepared for attacks",
        source: "CrowdStrike State of SMB Cybersecurity Survey 2025",
        sourceUrl: "https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/",
      },
      {
        metric: "34%",
        label: "use multi-factor authentication (blocks 99.9% of attacks)",
        source: "Microsoft Small and Medium Business Cybersecurity Report 2025",
        sourceUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/SMBCybersecurity-Report-Final.pdf",
      },
      {
        metric: "40%",
        label: "have formal cybersecurity training programs",
        source: "CrowdStrike State of SMB Cybersecurity Survey 2025",
        sourceUrl: "https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/",
      },
      {
        metric: "34%",
        label: "have a formal incident response plan",
        source: "Microsoft Small and Medium Business Cybersecurity Report 2025",
        sourceUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/SMBCybersecurity-Report-Final.pdf",
      },
    ],
  },
  {
    title: "AI-Powered Threats",
    stats: [
      {
        metric: "340%",
        label: "increase in AI-powered attacks in 2025",
        source: "CrowdStrike State of SMB Cybersecurity Survey 2025",
        sourceUrl: "https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/",
      },
      {
        metric: "54-78%",
        label: "open rate for AI-generated phishing vs. 12% for traditional",
        source: "StationX Small Business Cybersecurity Statistics 2026",
        sourceUrl: "https://app.stationx.net/articles/small-business-cybersecurity-statistics",
      },
      {
        metric: "95% cheaper",
        label: "to execute AI-generated phishing attacks",
        source: "StationX Small Business Cybersecurity Statistics 2026",
        sourceUrl: "https://app.stationx.net/articles/small-business-cybersecurity-statistics",
      },
      {
        metric: "11%",
        label: "of small businesses deployed AI-powered security defenses",
        source: "CrowdStrike State of SMB Cybersecurity Survey 2025",
        sourceUrl: "https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/",
      },
    ],
  },
  {
    title: "Insurance & Response",
    stats: [
      {
        metric: "17%",
        label: "of U.S. small businesses have cyber insurance",
        source: "IBM Cost of a Data Breach Report 2024-2025",
        sourceUrl: "https://www.ibm.com/reports/data-breach",
      },
      {
        metric: "64%",
        label: "of small businesses unfamiliar with cyber insurance",
        source: "Microsoft Small and Medium Business Cybersecurity Report 2025",
        sourceUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/SMBCybersecurity-Report-Final.pdf",
      },
      {
        metric: "50% longer",
        label: "recovery time without an incident response plan",
        source: "IBM Cost of a Data Breach Report 2024-2025",
        sourceUrl: "https://www.ibm.com/reports/data-breach",
      },
      {
        metric: "89%",
        label: "survival rate with managed security services vs. 35% without",
        source: "Sophos State of Ransomware 2025",
        sourceUrl: "https://www.sophos.com/en-us/content/state-of-ransomware",
      },
    ],
  },
];

export default function RiskToYouPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 lg:py-28">
          <p className="eyebrow mb-8">Risk to You</p>
          <p className="font-display text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.22] tracking-[-0.01em] max-w-4xl">
            The threat landscape for small businesses is{" "}
            <em className="italic text-[var(--color-accent)]">accelerating</em>.
            Here's what the data shows.
          </p>
          <p className="mt-6 text-[17px] leading-[1.7] text-[var(--color-ink-dim)] max-w-2xl">
            Small businesses are targeted in 43% of all cyberattacks, yet only 22% are adequately prepared. 
            Below, we've compiled the latest data on cyber threats, financial impact, and preparedness gaps 
            facing organizations like yours.
          </p>
        </Container>
      </section>

      {/* Statistics Sections */}
      {STAT_SECTIONS.map((section, sectionIdx) => (
        <section
          key={section.title}
          className={`border-b border-[var(--color-rule)] ${
            sectionIdx % 2 === 1 ? "bg-[var(--color-bg-2)]" : ""
          }`}
        >
          <Container className="py-16 lg:py-20">
            <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-tight mb-12">
              {section.title}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {section.stats.map((stat, idx) => (
                <a
                  key={idx}
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-3 group hover:opacity-75 transition-opacity"
                >
                  <div className="space-y-1">
                    <p className="font-display text-[32px] sm:text-[36px] font-semibold text-[var(--color-accent)] leading-none group-hover:underline underline-offset-4">
                      {stat.metric}
                    </p>
                    <p className="text-[16px] leading-[1.6] text-[var(--color-ink)]">
                      {stat.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* CTA Section */}
      <section>
        <Container className="py-20 lg:py-24">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-[40px] font-medium tracking-tight leading-[1.1] max-w-2xl mb-6">
                What this means for your business.
              </h2>
              <p className="text-[17px] leading-[1.7] text-[var(--color-ink-dim)] max-w-2xl">
                The data is clear: cyber threats are getting worse, faster, and smarter. 
                But the good news is that many attacks are preventable with the right tools and preparation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/products/riskguard">
                Start your audit →
              </ButtonPrimary>
              <ButtonPrimary href="/contact">
                Talk to our team →
              </ButtonPrimary>
            </div>
          </div>
        </Container>
      </section>

      {/* Sources Section */}
      <section className="bg-[var(--color-bg-2)] border-t border-[var(--color-rule)]">
        <Container className="py-16 lg:py-20">
          <h3 className="text-[20px] font-semibold tracking-tight mb-8">
            Data Sources
          </h3>
          <div className="space-y-3">
            <p className="text-[14px] text-[var(--color-ink-dim)]">
              This report draws from the latest cybersecurity research from 2025-2026, including:
            </p>
            <ul className="space-y-2 text-[14px] text-[var(--color-ink-dim)]">
              <li>
                <a
                  href="https://www.ibm.com/reports/data-breach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>IBM Cost of a Data Breach Report 2024-2025</strong>
                </a>
                {" — Annual financial impact analysis"}
              </li>
              <li>
                <a
                  href="https://www.verizon.com/business/resources/reports/dbir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>Verizon Data Breach Investigations Report 2025</strong>
                </a>
                {" — Attack vectors and incident patterns"}
              </li>
              <li>
                <a
                  href="https://www.sophos.com/en-us/content/state-of-ransomware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>Sophos State of Ransomware 2025</strong>
                </a>
                {" — Ransomware trends and recovery data"}
              </li>
              <li>
                <a
                  href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>FBI Internet Crime Complaint Center 2025 Report</strong>
                </a>
                {" — Reported cybercrimes and losses"}
              </li>
              <li>
                <a
                  href="https://spacelift.io/blog/small-business-cybersecurity-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>Spacelift Small Business Cybersecurity Statistics 2026</strong>
                </a>
                {" — Attack trend analysis and preparedness data"}
              </li>
              <li>
                <a
                  href="https://www.crowdstrike.com/en-us/resources/reports/state-of-smb-cybersecurity-survey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>CrowdStrike State of SMB Cybersecurity Survey 2025</strong>
                </a>
                {" — SMB preparedness and threat analysis"}
              </li>
              <li>
                <a
                  href="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/SMBCybersecurity-Report-Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>Microsoft Small and Medium Business Cybersecurity Report 2025</strong>
                </a>
                {" — Enterprise perspective on SMB security"}
              </li>
              <li>
                <a
                  href="https://app.stationx.net/articles/small-business-cybersecurity-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:decoration-[var(--color-accent)] transition-colors"
                >
                  <strong>StationX Small Business Cybersecurity Statistics 2026</strong>
                </a>
                {" — Attack trend analysis and AI threats"}
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
