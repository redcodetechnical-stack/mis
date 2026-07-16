import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, MessageSquareQuote, CheckCircle2, Download, Play, Share2, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { featuredCampaign, featuredVideos } from "@/lib/data"

export const metadata: Metadata = {
  title: "Marketing Campaigns — Nexus Hub",
  description: "Live and upcoming marketing campaigns, assets, toolkits, and timelines.",
}

const objectives = [
  "Position the group as a leader in sustainable innovation",
  "Drive employee awareness and participation across all units",
  "Generate qualified engagement across owned and earned channels",
  "Establish a consistent narrative for external communications",
]

const keyMessages = [
  "Clean energy is at the core of everything we build.",
  "Responsible growth means measurable, transparent impact.",
  "Innovation is human-centric — technology in service of people.",
]

const timeline = [
  { phase: "Teaser", date: "Jul 15 – Jul 24", status: "done" },
  { phase: "Launch", date: "Aug 5", status: "active" },
  { phase: "Amplification", date: "Aug 6 – Sep 15", status: "upcoming" },
  { phase: "Wrap & Report", date: "Sep 20", status: "upcoming" },
]

const toolkit = [
  { label: "Social Media Kit", type: "ZIP · 88 MB" },
  { label: "Key Messaging Doc", type: "DOC · 1.2 MB" },
  { label: "Campaign Deck", type: "PPT · 24 MB" },
  { label: "Banner Pack", type: "ZIP · 42 MB" },
]

const faqs = [
  {
    q: "Who can use these campaign assets?",
    a: "All employees and business units can download and use approved assets. External agencies require sign-off from Corporate Communications.",
  },
  {
    q: "Can I customize the assets for my region?",
    a: "Yes — editable templates are included. Please keep logo, color, and messaging within the brand guidelines available in the Brand Centre.",
  },
  {
    q: "How do I get approval for a new asset?",
    a: "Submit your request through the approval workflow outlined in the Policies section. Most requests are reviewed within two business days.",
  },
]

const otherCampaigns = [
  { title: "Future of Work", status: "Upcoming", business: "Group", color: "bg-chart-4" },
  { title: "Consumer Product Launch", status: "Live", business: "Consumer", color: "bg-chart-2" },
  { title: "Industrial Safety First", status: "Live", business: "Industrial", color: "bg-primary" },
  { title: "Healthcare Access", status: "Upcoming", business: "Healthcare", color: "bg-chart-5" },
]

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Marketing Campaigns"
          title="Campaigns that move as one"
          description="Everything you need to bring our campaigns to life — overviews, objectives, creative assets, toolkits, and timelines."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Featured campaign hero */}
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[21/9] w-full">
              <Image src={featuredCampaign.image || "/placeholder.svg"} alt="" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 text-background">
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {featuredCampaign.kicker}
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                {featuredCampaign.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-background/85">{featuredCampaign.description}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Objectives */}
              <section>
                <div className="flex items-center gap-2">
                  <Target className="size-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Objectives</h3>
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {objectives.map((obj) => (
                    <li key={obj} className="flex gap-2.5 rounded-xl border border-border bg-card p-4">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-foreground">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Key messages */}
              <section className="mt-10">
                <div className="flex items-center gap-2">
                  <MessageSquareQuote className="size-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Key messages</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {keyMessages.map((msg, i) => (
                    <div key={msg} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                      <span className="font-display text-2xl font-bold text-primary/30">0{i + 1}</span>
                      <p className="font-display text-lg font-medium leading-snug text-foreground text-pretty">{msg}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Videos */}
              <section className="mt-10">
                <h3 className="font-display text-xl font-bold text-foreground">Campaign videos</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {featuredVideos.slice(0, 2).map((vid) => (
                    <div key={vid.id} className="group overflow-hidden rounded-xl border border-border bg-card">
                      <div className="relative aspect-video">
                        <Image src={vid.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                          <span className="flex size-12 items-center justify-center rounded-full bg-background/90 text-primary">
                            <Play className="size-5 translate-x-0.5" fill="currentColor" />
                          </span>
                        </div>
                      </div>
                      <p className="p-4 text-sm font-semibold text-foreground">{vid.title}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="mt-10">
                <h3 className="font-display text-xl font-bold text-foreground">Frequently asked questions</h3>
                <Accordion className="mt-4 rounded-xl border border-border bg-card px-5">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.q} value={faq.q}>
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-foreground">Social media toolkit</h3>
                <p className="mt-1 text-xs text-muted-foreground">Download approved campaign assets.</p>
                <ul className="mt-4 space-y-2">
                  {toolkit.map((item) => (
                    <li key={item.label}>
                      <button className="flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:border-primary/40 hover:bg-secondary/50">
                        <Download className="size-4 shrink-0 text-primary" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-foreground">{item.label}</span>
                          <span className="block text-xs text-muted-foreground">{item.type}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/70">
                  <Share2 className="size-4" />
                  Share campaign
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-foreground">Campaign timeline</h3>
                <ol className="mt-4 space-y-4">
                  {timeline.map((step) => (
                    <li key={step.phase} className="flex gap-3">
                      <span
                        className={`mt-1 size-3 shrink-0 rounded-full ${
                          step.status === "done"
                            ? "bg-primary"
                            : step.status === "active"
                              ? "bg-accent ring-4 ring-accent/25"
                              : "bg-border"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.phase}</p>
                        <p className="text-xs text-muted-foreground">{step.date}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>

          {/* Other campaigns */}
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">More campaigns</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherCampaigns.map((c) => (
                <Link
                  key={c.title}
                  href="/campaigns"
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <span className={`size-9 rounded-lg ${c.color}`} />
                    <Badge variant={c.status === "Live" ? "default" : "secondary"}>{c.status}</Badge>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs text-muted-foreground">{c.business}</p>
                    <h3 className="mt-1 flex items-center gap-1 font-display text-base font-semibold text-foreground">
                      {c.title}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
