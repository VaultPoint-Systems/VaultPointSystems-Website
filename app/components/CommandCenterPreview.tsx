"use client";

import { Activity, ShieldCheck, Zap, ChevronRight, BarChart3, Users, LockKeyhole, FileText, Crosshair, BookOpen, DollarSign, TrendingUp, CircleDot } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CommandCenterPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setScale(width / 1152);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden rounded-xl shadow-2xl border border-[var(--color-slate-line)]">
      <div style={{ paddingTop: `${(600 / 1152) * 100}%` }} />
      <div 
        className="absolute top-0 left-0 w-[1152px] h-[600px] origin-top-left bg-background flex"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Sidebar — exact replica of AppShell */}
        <div className="w-52 border-r border-border bg-card p-4 flex flex-col gap-1 hidden sm:flex">
          <div className="flex items-center gap-2 mb-6 px-2">
            <img src="/zetadeck-black.svg" alt="" className="h-4 w-auto" />
            <span className="font-mono text-sm font-bold text-foreground tracking-tight">ZETADECK</span>
          </div>
          
          <div className="space-y-0.5">
            <div className="flex items-center gap-2.5 px-2 py-1.5 bg-primary/10 text-primary text-xs font-medium">
              <Activity className="h-4 w-4" />
              Command Center
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <Crosshair className="h-4 w-4" />
              Task Engine
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <BookOpen className="h-4 w-4" />
              Documents
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <Users className="h-4 w-4" />
              Customers
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <Zap className="h-4 w-4" />
              AI Chat
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <DollarSign className="h-4 w-4" />
              Finance
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <TrendingUp className="h-4 w-4" />
              Vesting
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <LockKeyhole className="h-4 w-4" />
              Vault
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-muted-foreground text-xs font-medium">
              <ShieldCheck className="h-4 w-4" />
              Security
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-2 px-2">
              <div className="h-6 w-6 bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">JD</div>
              <div>
                <div className="text-xs font-medium text-foreground">Jane Doe</div>
                <div className="text-[10px] text-muted-foreground">admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content — replica of actual dashboard */}
        <div className="flex-1 bg-background p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between border-b border-border pb-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Command Center</h2>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Saturday, June 14, 2026 · operator: <span className="text-foreground">Jane Doe</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="btn btn-primary text-xs py-1 px-3">Open Board →</span>
            </div>
          </div>

          {/* Vitals Row */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mb-4">
            <div className="border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Cash Position</div>
              <div className="text-lg font-bold text-foreground tabular-nums">$1,247,832</div>
              <div className="text-[11px] text-muted-foreground mt-1">synced 2 hours ago</div>
            </div>
            <div className="border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Monthly Burn</div>
              <div className="text-lg font-bold text-foreground tabular-nums">$89,400</div>
              <div className="text-[11px] text-muted-foreground mt-1">trailing 90-day average</div>
            </div>
            <div className="border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Runway</div>
              <div className="text-lg font-bold text-foreground tabular-nums">14.0 mo</div>
              <div className="text-[11px] text-muted-foreground mt-1">cash ÷ burn</div>
            </div>
            <div className="border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Equity Vested</div>
              <div className="text-lg font-bold text-foreground tabular-nums">37.5%</div>
              <div className="text-[11px] text-muted-foreground mt-1">18/48 months</div>
              <div className="mt-2 h-1.5 w-full bg-muted overflow-hidden">
                <div className="h-full bg-primary/40" style={{ width: "37.5%" }} />
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Left 2/3 */}
            <div className="space-y-4 lg:col-span-2">
              {/* Action Items */}
              <div className="border border-border bg-card">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Action Items</span>
                  <span className="text-[11px] text-muted-foreground">5 total</span>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-background text-[10px] font-mono tracking-wider text-muted-foreground uppercase border-b border-border">
                    <tr>
                      <th className="px-4 py-2 font-medium">Task</th>
                      <th className="px-4 py-2 font-medium">Status</th>
                      <th className="px-4 py-2 font-medium text-right">Due</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 bg-red-500" />
                          <span className="text-xs font-medium text-foreground">Fix OAuth token refresh loop</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5"><span className="text-[10px] font-mono px-1.5 py-0.5 bg-red-500/10 text-red-400 uppercase">blocked</span></td>
                      <td className="px-4 py-2.5 text-right font-mono text-[11px] text-red-400">due Jun 15</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5"><span className="text-xs font-medium text-foreground">SOC2 evidence collection sprint</span></td>
                      <td className="px-4 py-2.5"><span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-500/10 text-blue-400 uppercase">in progress</span></td>
                      <td className="px-4 py-2.5 text-right font-mono text-[11px] text-muted-foreground">due Jun 20</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5"><span className="text-xs font-medium text-foreground">Finalize Series A deck revisions</span></td>
                      <td className="px-4 py-2.5"><span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-500/10 text-blue-400 uppercase">in progress</span></td>
                      <td className="px-4 py-2.5 text-right font-mono text-[11px] text-muted-foreground">due Jun 22</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5"><span className="text-xs font-medium text-foreground">Quarterly board report draft</span></td>
                      <td className="px-4 py-2.5"><span className="text-[10px] font-mono px-1.5 py-0.5 bg-amber-500/10 text-amber-400 uppercase">todo</span></td>
                      <td className="px-4 py-2.5 text-right font-mono text-[11px] text-muted-foreground">due Jun 30</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Recent Activity */}
              <div className="border border-border bg-card">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Recent Activity</span>
                  <span className="text-[11px] text-muted-foreground">audit log →</span>
                </div>
                <ul className="divide-y divide-border">
                  {[
                    { actor: "Jane Doe", action: "updated", target: "SOC2 evidence collection sprint", time: "12 min ago" },
                    { actor: "Mike Chen", action: "created", target: "Q2 Financial Summary", time: "1 hour ago" },
                    { actor: "System", action: "synced", target: "Mercury bank transactions", time: "2 hours ago" },
                    { actor: "Sarah Lin", action: "closed", target: "Onboard Acme Corp", time: "3 hours ago" },
                  ].map((entry, i) => (
                    <li key={i} className="px-4 py-2.5">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{entry.actor}</span>{" "}
                        <span className="font-mono text-muted-foreground">{entry.action}</span>
                      </div>
                      <div className="mt-0.5 flex items-center justify-between gap-2">
                        <span className="truncate text-[12px] text-muted-foreground">{entry.target}</span>
                        <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{entry.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 1/3 */}
            <div className="space-y-4">
              {/* Clarity Score */}
              <div className="border border-border bg-card p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">Clarity Score</div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl font-bold text-emerald-500">87</div>
                  <div className="text-[11px] text-muted-foreground">/ 100</div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Tasks", score: 92, color: "bg-emerald-500" },
                    { label: "Finance", score: 85, color: "bg-blue-500" },
                    { label: "Pipeline", score: 78, color: "bg-amber-500" },
                    { label: "Docs", score: 94, color: "bg-emerald-500" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground w-14">{item.label}</span>
                      <div className="flex-1 h-1.5 bg-muted overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.score}%` }} />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground w-6 text-right">{item.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nudges */}
              <div className="border border-border bg-card">
                <div className="px-4 py-2.5 border-b border-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Nudges</span>
                </div>
                <ul className="divide-y divide-border">
                  {[
                    { icon: "⚠️", text: "3 transactions uncategorized" },
                    { icon: "📋", text: "Board report overdue by 2 days" },
                    { icon: "🔒", text: "Vault audit log review pending" },
                  ].map((nudge, i) => (
                    <li key={i} className="px-4 py-2.5 text-xs text-muted-foreground flex items-start gap-2">
                      <span>{nudge.icon}</span>
                      <span>{nudge.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pinned Docs */}
              <div className="border border-border bg-card">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Pinned Docs</span>
                  <span className="text-[11px] text-muted-foreground">all docs →</span>
                </div>
                <ul className="divide-y divide-border">
                  {[
                    { title: "Operating Agreement v3", time: "2d ago" },
                    { title: "Security Incident Response Plan", time: "5d ago" },
                    { title: "Q2 OKRs", time: "1w ago" },
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-xs font-medium text-foreground">{doc.title}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{doc.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
