import type { Metadata } from "next"
import { Hexagon, Target, Users, Search, Zap, Shield, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { navItems } from "@/lib/data"

export const metadata: Metadata = {
  title: "About the Hub — Nexus Hub",
  description: "Learn about the Nexus Hub — what it is, who it's for, and how to make the most of it.",
}

const principles = [
  { icon: Target, title: "Single source of truth", desc: "One destination for every approved brand asset, campaign, announcement, and policy." },
  { icon: Search, title: "Search first", desc: "Powerful search with filters makes finding anything fast — no more email chains." },
  { icon: Zap, title: "Always current", desc: "Content is reviewed, versioned, and kept up to date by the Communications team." },
  { icon: Shield, title: "Brand compliant", desc: "Every asset on the hub is approved and ready to use without additional sign-off." },
  { icon: Users, title: "For everyone", desc: "Accessible to all employees, from new joiners to senior leadership across every region." },
  { icon: BookOpen, title: "Knowledge-rich", desc: "Not just a file store — a living knowledge centre with guides, FAQs, and training." },
]

const howToSteps = [
  { step: "01", title: "Search or browse", desc: "Use the search bar at the top of any page or browse by category from the navigation." },
  { step: "02", title: "Filter your results", desc: "Narrow down by business unit, file type, year, or keyword tags." },
  { step: "03", title: "Preview & download", desc: "Preview PDFs and images before downloading. Click download to get the file." },
  { step: "04", title: "Share or bookmark", desc: "Copy a link to share with colleagues, or bookmark for quick access later." },
  { step: "05", title: "Request what's missing", desc: "Can't find something? Submit a request through the Contact Us page." },
]

const audiences = [
  { group: "All Employees", desc: "Access announcements, news, and approved collateral relevant to your work." },
  { group: "Marketing Teams", desc: "Find campaign toolkits, brand assets, and approved messaging for your activities." },
  { group: "Sales Teams", desc: "Download product sheets, case studies, and presentation templates on demand." },
  { group: "HR & People", desc: "Access town hall recordings, employee stories, and internal communication templates." },
  { group: "Leadership", desc: "View analytics dashboards and see what content is resonating across the group." },
  { group: "New Joiners", desc: "Start here — the hub is your guide to how we communicate and brand ourselves." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="About the Hub"
          title="Your one stop for everything comms & marketing"
          description="The Nexus Hub is the group's single source of truth for all corporate communications and marketing content."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Mission statement */}
          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Hexagon className="size-5" strokeWidth={2.2} />
              </span>
              <h2 className="font-display text-xl font-bold">Our mission</h2>
            </div>
            <p className="mt-5 font-display text-lg font-medium leading-relaxed text-primary-foreground/90 max-w-3xl">
              To make every piece of approved corporate communications and marketing content instantly accessible to every employee in the Nexus Group — reducing friction, improving consistency, and amplifying the impact of our collective story.
            </p>
          </div>

          {/* Core principles */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">What makes the Hub different</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to use */}
          <section className="mt-16">
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-foreground">How to use the Hub</h2>
            <div className="relative">
              <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-border hidden sm:block" />
              <div className="space-y-6">
                {howToSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-5">
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-sm font-bold text-primary">
                      {s.step}
                    </span>
                    <div className="flex-1 rounded-xl border border-border bg-card p-5">
                      <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who is it for */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">Who is the Hub for?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.group} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">{a.group}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation overview */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">What&apos;s in the Hub</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {navItems.filter(n => n.href !== "/about" && n.href !== "/contact").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h2 className="font-display text-xl font-bold text-foreground">Questions about the Hub?</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              The Corporate Communications team manages the Hub and is happy to help with any questions, feedback, or content requests.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Contact us
              </Link>
              <Link href="/knowledge-centre" className="rounded-lg border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                Browse guides
              </Link>
            </div>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
