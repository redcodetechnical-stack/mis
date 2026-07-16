import type { Metadata } from "next"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, Download, ExternalLink, Camera, Package } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { events } from "@/lib/data"
import { RegisterButton } from "@/components/register-button"

export const metadata: Metadata = {
  title: "Events — Nexus Hub",
  description: "Upcoming events, event calendar, galleries, registration links, and event kits.",
}

const months = ["Jul 2026", "Aug 2026", "Sep 2026"]

const eventKits = [
  { label: "Town Hall Event Kit", type: "ZIP · 45 MB", icon: Package },
  { label: "Conference Branding Pack", type: "ZIP · 88 MB", icon: Package },
  { label: "Webinar Slide Template", type: "PPT · 12 MB", icon: Download },
  { label: "Event Photography Brief", type: "DOC · 1.4 MB", icon: Download },
  { label: "Social Media Event Kit", type: "ZIP · 34 MB", icon: Package },
  { label: "Name Badge Template", type: "PDF · 2.1 MB", icon: Download },
]

const galleries = [
  { title: "Q1 Leadership Summit", date: "Mar 2026", photos: 48, image: "/event-townhall.png" },
  { title: "Brand Refresh Launch", date: "Jul 2026", photos: 32, image: "/news-innovation.png" },
  { title: "Global Women in Tech Day", date: "May 2026", photos: 64, image: "/video-brandfilm.png" },
]

const typeColors: Record<string, string> = {
  "Town Hall": "bg-primary/10 text-primary",
  "Webinar": "bg-chart-2/10 text-chart-2",
  "Workshop": "bg-accent/20 text-accent-foreground",
  "Launch": "bg-chart-3/10 text-chart-3",
  "Conference": "bg-chart-4/10 text-chart-4",
}

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.registrationOpen)
  const closedEvents = events.filter((e) => !e.registrationOpen)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Events"
          title="Where ideas come together"
          description="Upcoming events, registration links, presentation downloads, event kits, and photo galleries."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Quick calendar strip */}
          <div className="grid grid-cols-3 gap-3">
            {months.map((m) => {
              const count = events.filter((e) => e.date.includes(m.split(" ")[0])).length
              return (
                <div key={m} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-display text-lg font-bold text-foreground">{m}</p>
                  <p className="text-xs text-muted-foreground mt-1">{count > 0 ? `${count} event${count !== 1 ? "s" : ""}` : "Check back soon"}</p>
                </div>
              )
            })}
          </div>

          {/* Featured upcoming event */}
          <section className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Upcoming events</h2>
              <span className="text-sm font-medium text-primary">{upcomingEvents.length} open for registration</span>
            </div>

            {/* Lead event */}
            {events[0] && (
              <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image src={events[0].image || "/event-townhall.png"} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="flex items-center gap-2">
                    <Badge>{events[0].type}</Badge>
                    {events[0].registrationOpen && (
                      <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700">Registration open</span>
                    )}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">{events[0].title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{events[0].description}</p>
                  <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" />{events[0].date}</span>
                    <span className="flex items-center gap-2"><Clock className="size-4 text-primary" />{events[0].time}</span>
                    <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{events[0].location}</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <RegisterButton className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                      Register now
                    </RegisterButton>
                    <button className="flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                      <Download className="size-4" /> Event kit
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Events grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {events.slice(1).map((evt) => (
                <div
                  key={evt.id}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeColors[evt.type] ?? "bg-secondary text-secondary-foreground"}`}>
                      {evt.type}
                    </span>
                    {evt.registrationOpen ? (
                      <span className="text-xs font-medium text-green-700">Open</span>
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground">Closed</span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">{evt.title}</h3>
                  {evt.description && <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">{evt.description}</p>}
                  <div className="mt-4 flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />{evt.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{evt.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="size-3.5" />{evt.location}</span>
                  </div>
                  {evt.registrationOpen && (
                    <RegisterButton className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-secondary py-2 text-xs font-semibold text-secondary-foreground hover:bg-secondary/70 transition-colors">
                      <ExternalLink className="size-3.5" /> Register
                    </RegisterButton>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Event Kits */}
          <section className="mt-16">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Event kits & templates</h2>
              <p className="mt-1 text-sm text-muted-foreground">Download approved event collateral for your next event.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventKits.map((kit) => (
                <div key={kit.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <kit.icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{kit.label}</p>
                    <p className="text-xs text-muted-foreground">{kit.type}</p>
                  </div>
                  <button className="rounded-md p-2 text-primary transition-colors hover:bg-primary/10" aria-label={`Download ${kit.label}`}>
                    <Download className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Event Galleries */}
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Event galleries</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {galleries.map((g) => (
                <div key={g.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={g.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground">
                        <Camera className="size-4" /> View {g.photos} photos
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-foreground">{g.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{g.date} · {g.photos} photos</p>
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
