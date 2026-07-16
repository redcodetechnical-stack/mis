import type { Metadata } from "next"
import { BookOpen, Search, TrendingUp, Eye, Clock, ChevronRight, Lightbulb, GraduationCap, ListChecks, HelpCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { knowledgeArticles } from "@/lib/data"

export const metadata: Metadata = {
  title: "Knowledge Centre — Nexus Hub",
  description: "How-to guides, best practices, process documentation, FAQs, and training materials.",
}

const categoryConfig: Record<string, { icon: typeof BookOpen; color: string }> = {
  "How-to Guide": { icon: GraduationCap, color: "bg-primary/10 text-primary" },
  "Best Practice": { icon: Lightbulb, color: "bg-accent/20 text-accent-foreground" },
  "FAQ": { icon: HelpCircle, color: "bg-chart-2/10 text-chart-2" },
  "Process": { icon: ListChecks, color: "bg-chart-4/10 text-chart-4" },
  "Training": { icon: GraduationCap, color: "bg-green-500/10 text-green-700" },
}

const collections = [
  { title: "Getting Started on the Hub", articles: 5, color: "from-primary/20 to-primary/5", border: "border-primary/30" },
  { title: "Brand & Communications", articles: 8, color: "from-chart-2/20 to-chart-2/5", border: "border-chart-2/30" },
  { title: "Content Approval Processes", articles: 4, color: "from-accent/20 to-accent/5", border: "border-accent/30" },
  { title: "Events & Town Halls", articles: 6, color: "from-chart-4/20 to-chart-4/5", border: "border-chart-4/30" },
]

const popularSearches = ["brand assets", "approval workflow", "email signature", "social media", "town hall", "PowerPoint template"]

export default function KnowledgeCentrePage() {
  const featured = knowledgeArticles[0]
  const rest = knowledgeArticles.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Knowledge Centre"
          title="Learn, discover, and do more"
          description="How-to guides, best practices, processes, FAQs, and training materials — everything you need to get the most from the hub."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Search bar */}
          <div className="relative mx-auto max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search guides, FAQs, and training articles…"
              className="h-12 w-full rounded-xl border border-input bg-card pl-12 pr-4 text-sm shadow-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><TrendingUp className="size-3" /> Popular:</span>
            {popularSearches.map((s) => (
              <button key={s} className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">{s}</button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Articles & guides", value: String(knowledgeArticles.length + 28) },
              { label: "Categories", value: "5" },
              { label: "Total reads", value: "42k+" },
              { label: "Collections", value: String(collections.length) },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Featured article */}
          {featured && (
            <section className="mt-14">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="size-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Most read this week</span>
              </div>
              <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:flex-row sm:items-start sm:gap-6 cursor-pointer">
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${categoryConfig[featured.category]?.color ?? "bg-primary/10 text-primary"}`}>
                  {(() => {
                    const Ic = categoryConfig[featured.category]?.icon ?? BookOpen
                    return <Ic className="size-7" />
                  })()}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{featured.category}</Badge>
                    <span className="text-xs text-muted-foreground">{featured.department}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Eye className="size-3.5" />{featured.views.toLocaleString()} views</span>
                    <span className="flex items-center gap-1"><Clock className="size-3.5" />{featured.readTime}</span>
                    <span>By {featured.author}</span>
                  </div>
                </div>
                <ChevronRight className="hidden sm:block size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
            </section>
          )}

          {/* Collections */}
          <section className="mt-14">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">Featured collections</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {collections.map((col) => (
                <button
                  key={col.title}
                  className={`group flex flex-col gap-4 rounded-xl border bg-gradient-to-br p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 ${col.border} ${col.color}`}
                >
                  <BookOpen className="size-8 text-foreground/40" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{col.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{col.articles} articles</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    Browse collection <ChevronRight className="size-3.5" />
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Article grid */}
          <section className="mt-14">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">All articles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((article) => {
                const cfg = categoryConfig[article.category] ?? { icon: BookOpen, color: "bg-primary/10 text-primary" }
                const Icon = cfg.icon
                return (
                  <div
                    key={article.id}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 cursor-pointer"
                  >
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${cfg.color}`}>
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.department}</span>
                      </div>
                      <h3 className="mt-2 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{article.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Eye className="size-3.5" />{article.views.toLocaleString()}</span>
                        <span className="flex items-center gap-1"><Clock className="size-3.5" />{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Submit request */}
          <section className="mt-16 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center">
            <GraduationCap className="mx-auto size-10 text-primary" />
            <h2 className="mt-4 font-display text-xl font-bold text-foreground">Can't find what you're looking for?</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              Request a new guide or article and our Communications team will create one for you.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Request an article
            </button>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
