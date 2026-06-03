const ROWS = [
  { n: "01", label: "Identity & access controls", status: "Pass", tone: "ok" as const },
  { n: "02", label: "Data handling & retention", status: "Review", tone: "warn" as const },
  { n: "03", label: "Cloud configuration", status: "Pass", tone: "ok" as const },
  { n: "04", label: "Vendor & third-party risk", status: "Pass", tone: "ok" as const },
  { n: "05", label: "Endpoint posture", status: "Review", tone: "warn" as const },
  { n: "06", label: "Incident readiness", status: "Pass", tone: "ok" as const },
];

export function RiskGuardReport() {
  return (
    <div className="border border-[var(--color-slate-line)] bg-[var(--color-slate)] text-[var(--color-slate-ink)] rounded-md overflow-hidden shadow-[0_24px_60px_-24px_rgba(13,17,23,0.6)]">
      {/* Window chrome */}
      <div className="border-b border-[var(--color-slate-line)] px-5 py-2.5 flex items-center justify-between bg-[var(--color-slate-2)]">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-slate-line)]" />
          <span className="doc-label-dark">RiskGuard report</span>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-slate-mute)]">RG-AUD / 2026</span>
      </div>

      <div className="grid grid-cols-3 border-b border-[var(--color-slate-line)]">
        <Cell label="Issued to" value="ACME Co." />
        <Cell label="Scope" value="Full stack" />
        <Cell label="Date" value="2026.05.26" last />
      </div>

      {/* Score */}
      <div className="px-6 py-6">
        <div className="flex items-end gap-6">
          <div>
            <p className="doc-label-dark mb-2">Overall posture</p>
            <p className="font-mono text-[48px] sm:text-[58px] leading-none font-medium tracking-tight">
              78<span className="text-[var(--color-slate-mute)] text-2xl">/100</span>
            </p>
          </div>
          <div className="flex-1 pb-2">
            <div className="h-1.5 bg-[var(--color-slate-2)] rounded-full overflow-hidden">
              <div className="score-bar" />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[var(--color-slate-mute)]">
              <span>0</span><span>50</span><span>100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Findings */}
      <div className="border-t border-[var(--color-slate-line)]">
        <div className="px-6 py-2 flex items-center justify-between border-b border-[var(--color-slate-line)] bg-[var(--color-slate-2)]">
          <span className="doc-label-dark">Findings</span>
          <span className="doc-label-dark">Status</span>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.n}
            className="px-6 py-3 flex items-center justify-between border-b border-[var(--color-slate-line)] last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-[var(--color-slate-mute)] w-6">{r.n}</span>
              <span className="text-sm text-[var(--color-slate-ink)]">{r.label}</span>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px]">
              <span className={`h-1.5 w-1.5 rounded-full ${r.tone === "ok" ? "bg-[var(--color-signal)]" : "bg-[var(--color-signal-amber)]"}`} />
              <span className={r.tone === "ok" ? "tag-ok-dark" : "tag-warn-dark"}>{r.status}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 flex items-center justify-between bg-[var(--color-slate-2)] border-t border-[var(--color-slate-line)]">
        <span className="doc-label-dark">Authorized &middot; VaultPoint Systems</span>
        <span className="font-mono text-[11px] text-[var(--color-slate-mute)]">preview</span>
      </div>
    </div>
  );
}

function Cell({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`px-5 py-3 ${last ? "" : "border-r border-[var(--color-slate-line)]"}`}>
      <p className="doc-label-dark mb-1">{label}</p>
      <p className="font-mono text-[13px] text-[var(--color-slate-ink)]">{value}</p>
    </div>
  );
}
