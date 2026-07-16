import type { Metadata } from "next"
import { Download, Filter, BookOpen, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ResourceCard } from "@/components/resource-card"
import { Badge } from "@/components/ui/badge"
import { resources, businessUnits } from "@/lib/data"

export const metadata: Metadata = {
  title: "Marketing Assets — Nexus Hub",
  description: "Brochures, catalogues, presentations, product sheets, case studies, and success stories.",
}

const marketingResources = resources.filter((r) =>
  r.category === "Marketing Assets" || r.category === "Campaigns"
)

const assetTypes = [
  { label: "Brochures", count: 8, desc: "Print & digital" },
  { label: "Presentations", count: 14, desc: "PPT & PDF decks" },
  { label: "Case Studies", count: 11, desc: "Success stories" },
  { label: "Product Sheets", count: 22, desc: "Feature datasheets" },
  { label: "Catalogues", count: 4, desc: "Full product range" },
  { label: "Campaign Toolkits", count: 7, desc: "Social & digital" },
]

const featuredCollections = [
  {
    id: "col-1",
    title: "Consumer Division Pack",
    count: 12,
    color: "from-chart-2/20 to-chart-2/5",
    border: "border-chart-2/30",
    business: "Consumer",
  },
  {
    id: "col-2",
    title: "Industrial Automation Suite",
    count: 8,
    color: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    business: "Industrial",
  },
  {
    id: "col-3",
    title: "Healthcare Comms Bundle",
    count: 9,
    color: "from-chart-4/20 to-chart-4/5",
    border: "border-chart-4/30",
    business: "Healthcare",
  },
  {
    id: "col-4",
    title: "Technology Division Kit",
    count: 11,
    color: "from-chart-5/20 to-chart-5/5",
    border: "border-chart-5/30",
    business: "Technology",
  },
]

export default function MarketingAssetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Marketing Assets"
          title="Collateral that converts"
          description="Production-ready brochures, presentations, case studies, and product sheets across all business units."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Asset type overview */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {assetTypes.map((t) => (
              <button
                key={t.label}
                className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{t.label}</p>
                <div>
                  <p className="font-display text-xl font-bold text-foreground">{t.count}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Featured collections */}
          <section className="mt-14">
            <div className="mb-6 flex items-center gap-2">
              <Star className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Featured collections</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCollections.map((col) => (
                <div
                  key={col.id}
                  className={`flex flex-col gap-4 rounded-xl border bg-gradient-to-br p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 cursor-pointer ${col.border} ${col.color}`}
                >
                  <BookOpen className="size-8 text-foreground/40" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{col.business}</p>
                    <h3 className="font-display text-base font-semibold text-foreground">{col.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{col.count} assets</p>
                  </div>
                  <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-background/80 py-2 text-xs font-semibold text-foreground hover:bg-background transition-colors">
                    <Download className="size-3.5" /> Download all
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Filter + asset grid */}
          <section className="mt-14">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">All marketing assets</h2>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/40 transition-colors">
                  <Filter className="size-3.5" /> Filter
                </button>
                {businessUnits.slice(0, 4).map((b) => (
                  <button key={b} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Case studies highlight */}
            <div className="mb-6 flex items-center gap-2">
              <Badge>Case Studies</Badge>
              <span className="text-sm text-muted-foreground">Real-world impact stories from our customers</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {marketingResources.map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>

            {/* All group resources */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resources.filter(r => r.category === "Brand Centre").slice(0, 3).map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>
          </section>

          {/* Request custom asset */}
          <section className="mt-16 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-primary/10 p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Need a custom asset?</h2>
                <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                  Can&apos;t find what you need? Submit a request and the Marketing team will create a custom asset tailored to your requirements.
                </p>
              </div>
              <button className="shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Request an asset
              </button>
            </div>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
