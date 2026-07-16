import type { Metadata } from "next"
import { TrendingUp, Eye, Download, Users, ArrowUpRight, ArrowDownRight, BarChart2, PieChart, Activity } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Analytics Dashboard — Nexus Hub",
  description: "Hub usage analytics, content performance, and engagement metrics.",
}

const kpis = [
  { label: "Total page views", value: "128,430", change: "+12.4%", up: true, icon: Eye },
  { label: "Unique visitors", value: "18,920", change: "+8.1%", up: true, icon: Users },
  { label: "Asset downloads", value: "6,374", change: "+22.3%", up: true, icon: Download },
  { label: "Avg. session (mins)", value: "4:32", change: "-0.8%", up: false, icon: Activity },
]

const topPages = [
  { page: "Home", views: 24180, change: "+5%" },
  { page: "Brand Centre", views: 18904, change: "+18%" },
  { page: "Announcements", views: 14322, change: "+3%" },
  { page: "Marketing Assets", views: 11085, change: "+27%" },
  { page: "Policies & Guidelines", views: 9021, change: "+9%" },
  { page: "Knowledge Centre", views: 7340, change: "+41%" },
  { page: "Events", views: 6114, change: "+14%" },
  { page: "Communications", views: 5890, change: "+6%" },
]

const topAssets = [
  { name: "Q2 2026 Nexus Pulse Newsletter", type: "PDF", downloads: 1430, category: "Communications" },
  { name: "Corporate Brand Guidelines v4.0", type: "PDF", downloads: 1205, category: "Brand Centre" },
  { name: "Group Presentation Template", type: "PPT", downloads: 980, category: "Marketing Assets" },
  { name: "Sustainability Campaign Toolkit", type: "ZIP", downloads: 870, category: "Campaigns" },
  { name: "Email Signature Templates", type: "ZIP", downloads: 745, category: "Brand Centre" },
  { name: "Consumer Division Brochure", type: "PDF", downloads: 620, category: "Marketing Assets" },
]

const businessUnitTraffic = [
  { unit: "Consumer", pct: 31, color: "bg-primary" },
  { unit: "Industrial", pct: 22, color: "bg-chart-2" },
  { unit: "Healthcare", pct: 18, color: "bg-chart-4" },
  { unit: "Technology", pct: 16, color: "bg-chart-5" },
  { unit: "Group Functions", pct: 13, color: "bg-chart-3" },
]

const recentActivity = [
  { event: "Brand Guidelines downloaded", user: "k.nair@nexus.example", time: "2m ago" },
  { event: "Sustainability Campaign Toolkit downloaded", user: "d.osei@nexus.example", time: "7m ago" },
  { event: "Feedback submitted via Contact Us", user: "m.chen@nexus.example", time: "14m ago" },
  { event: "New user registered", user: "l.santos@nexus.example", time: "29m ago" },
  { event: "Newsletter Q2 2026 downloaded", user: "p.wang@nexus.example", time: "41m ago" },
  { event: "Knowledge Centre article viewed", user: "t.adebayo@nexus.example", time: "55m ago" },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Analytics Dashboard"
          title="Hub performance at a glance"
          description="Track content engagement, asset downloads, and visitor behaviour across the Nexus Hub."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

          {/* Period selector */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge>Live data</Badge>
              <span className="text-sm text-muted-foreground">Reporting period:</span>
              <div className="flex rounded-lg border border-border bg-card text-sm overflow-hidden">
                {["7 days", "30 days", "90 days", "YTD"].map((p, i) => (
                  <button
                    key={p}
                    className={`px-3 py-1.5 font-medium transition-colors ${i === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/40 transition-colors">
              <Download className="size-3.5" /> Export CSV
            </button>
          </div>

          {/* KPI cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <k.icon className="size-5" />
                  </span>
                  <span className={`flex items-center gap-0.5 text-xs font-semibold ${k.up ? "text-green-700" : "text-red-600"}`}>
                    {k.up ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
                    {k.change}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-foreground">{k.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{k.label}</p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid gap-6 lg:grid-cols-3">

            {/* Traffic chart placeholder */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-bold text-foreground">Page views over time</h2>
                <TrendingUp className="size-5 text-primary" />
              </div>
              {/* Simulated bar chart */}
              <div className="flex items-end gap-2 h-48">
                {[42, 55, 38, 70, 65, 80, 90, 72, 85, 95, 88, 100, 78, 92, 86, 94, 102, 96, 108, 98, 115, 104, 120, 110, 128, 118, 122, 116, 126, 128].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer relative group"
                    style={{ height: `${(h / 128) * 100}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block rounded bg-foreground px-1 py-0.5 text-xs text-background whitespace-nowrap">{h}k</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Jun 16</span><span>Jun 30</span><span>Jul 16</span>
              </div>
            </div>

            {/* Business unit split */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-bold text-foreground">Traffic by business unit</h2>
                <PieChart className="size-5 text-primary" />
              </div>
              <div className="space-y-4">
                {businessUnitTraffic.map((b) => (
                  <div key={b.unit}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground">{b.unit}</span>
                      <span className="font-semibold text-foreground">{b.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div className={`h-full rounded-full ${b.color} transition-all`} style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top pages + Top assets */}
          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg font-bold text-foreground">Top pages</h2>
                <BarChart2 className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                {topPages.map((p, i) => (
                  <div key={p.page} className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary/50 ${i === 0 ? "bg-secondary/50" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="w-5 text-xs font-medium text-muted-foreground text-right">{i + 1}</span>
                      <span className="text-sm font-medium text-foreground">{p.page}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{p.views.toLocaleString()}</span>
                      <span className="text-xs font-semibold text-green-700">{p.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg font-bold text-foreground">Top downloaded assets</h2>
                <Download className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                {topAssets.map((a, i) => (
                  <div key={a.name} className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary/50 ${i === 0 ? "bg-secondary/50" : ""}`}>
                    <div className="min-w-0 flex-1 pr-3">
                      <p className="truncate text-sm font-medium text-foreground">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.type} · {a.category}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-foreground">{a.downloads}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg font-bold text-foreground">Recent activity</h2>
              <Activity className="size-5 text-primary" />
            </div>
            <div className="space-y-1">
              {recentActivity.map((a) => (
                <div key={a.event + a.time} className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                    <span className="text-sm text-foreground">{a.event}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 pl-4">
                    <span className="hidden text-xs text-muted-foreground sm:block">{a.user}</span>
                    <span className="text-xs text-muted-foreground">{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
