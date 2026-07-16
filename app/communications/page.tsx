import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Play, Quote, Users, FileText, CalendarDays } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { newsletters, leaderMessages, featuredVideos } from "@/lib/data"

export const metadata: Metadata = {
  title: "Corporate Communications — Nexus Hub",
  description: "Newsletters, leadership messages, internal mailers, and town hall communications.",
}

const mailers = [
  { id: "m-1", subject: "All-staff: H2 2026 priorities and focus areas", from: "CEO Office", date: "Jul 10, 2026", dept: "All Staff" },
  { id: "m-2", subject: "Brand refresh: what's new and how to access assets", from: "Corporate Comms", date: "Jul 9, 2026", dept: "All Staff" },
  { id: "m-3", subject: "New employee recognition programme — nominations open", from: "People & Culture", date: "Jun 20, 2026", dept: "All Staff" },
  { id: "m-4", subject: "IT security reminder: phishing awareness month", from: "IT Security", date: "Jun 15, 2026", dept: "All Staff" },
  { id: "m-5", subject: "Q2 results briefing for managers", from: "Finance", date: "Jun 8, 2026", dept: "Managers" },
  { id: "m-6", subject: "Sustainability campaign: your role in amplification", from: "Marketing", date: "Jun 2, 2026", dept: "Marketing" },
]

const employeeStories = [
  {
    id: "es-1",
    name: "Kavitha Nair",
    role: "Senior Engineer, Technology",
    quote: "The brand toolkit on the hub saved us days of back-and-forth. Everything we needed was in one place.",
    tag: "Employee Spotlight",
  },
  {
    id: "es-2",
    name: "David Osei",
    role: "Regional Sales Manager, Consumer",
    quote: "I use the presentation templates every week. The quality is consistent and clients notice it immediately.",
    tag: "Sales Excellence",
  },
  {
    id: "es-3",
    name: "Meera Krishnan",
    role: "Communications Lead, Healthcare",
    quote: "The newsletter archives are invaluable. New joiners in my team now get onboarded in half the time.",
    tag: "Innovation",
  },
]

export default function CommunicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Corporate Communications"
          title="Stay connected with what matters"
          description="Newsletters, leadership messages, internal mailers, and town hall recordings — all in one place."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { icon: Mail, label: "Newsletters published", value: "32" },
              { icon: Users, label: "Employee reach", value: "50k+" },
              { icon: FileText, label: "Internal mailers", value: "180" },
              { icon: CalendarDays, label: "Town halls held", value: "8" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className="text-lg font-bold text-foreground font-display">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Messages */}
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Leadership messages</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {leaderMessages.map((msg, i) => (
                <article
                  key={msg.id}
                  className={`flex flex-col rounded-2xl border border-border p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`}
                >
                  <Quote className={`size-7 ${i === 0 ? "text-primary-foreground/30" : "text-primary/30"}`} />
                  <p className={`mt-4 font-display text-base font-medium leading-relaxed flex-1 ${i === 0 ? "text-primary-foreground" : "text-foreground"}`}>
                    {msg.excerpt}
                  </p>
                  <div className={`mt-6 flex items-center gap-3 border-t pt-5 ${i === 0 ? "border-primary-foreground/20" : "border-border"}`}>
                    <Image
                      src={msg.image}
                      alt={msg.name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className={`text-sm font-semibold ${i === 0 ? "text-primary-foreground" : "text-foreground"}`}>{msg.name}</p>
                      <p className={`text-xs ${i === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.role}</p>
                    </div>
                    <span className={`ml-auto text-xs ${i === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletters */}
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Newsletter archive</h2>
              <span className="text-sm text-muted-foreground">{newsletters.length} editions</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {newsletters.map((nl) => (
                <div
                  key={nl.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  {nl.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={nl.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  {!nl.image && (
                    <div className="flex aspect-[4/3] items-center justify-center bg-primary/10">
                      <Mail className="size-10 text-primary/40" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant="secondary" className="self-start">{nl.issue}</Badge>
                    <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">{nl.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">{nl.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{nl.date}</span>
                      <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Mailers */}
          <section className="mt-16">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Recent internal mailers</h2>
              <p className="mt-1 text-sm text-muted-foreground">All-staff and departmental communications sent in 2026.</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {mailers.map((m, i) => (
                <div
                  key={m.id}
                  className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/50 ${i < mailers.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{m.subject}</p>
                    <p className="text-xs text-muted-foreground">From: {m.from}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <Badge variant="secondary">{m.dept}</Badge>
                    <p className="mt-1 text-xs text-muted-foreground">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Town Hall Videos */}
          <section className="mt-16">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Town hall & video archive</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredVideos.map((vid) => (
                <div
                  key={vid.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={vid.image || "/placeholder.svg"} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/10" />
                    <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                      <Play className="size-6 translate-x-0.5" fill="currentColor" />
                    </span>
                    <span className="absolute bottom-3 right-3 rounded bg-foreground/80 px-1.5 py-0.5 text-xs font-medium text-background">{vid.duration}</span>
                  </div>
                  <div className="p-5">
                    <Badge variant="secondary">{vid.category}</Badge>
                    <h3 className="mt-2.5 font-display text-base font-semibold leading-snug text-foreground">{vid.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Employee Stories */}
          <section className="mt-16">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Employee stories</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {employeeStories.map((s) => (
                <div key={s.id} className="rounded-xl border border-border bg-card p-6">
                  <Quote className="size-6 text-primary/30" />
                  <p className="mt-3 text-sm leading-relaxed text-foreground italic">&ldquo;{s.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {s.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
