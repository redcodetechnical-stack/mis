import type { Metadata } from "next"
import Image from "next/image"
import { Megaphone, TrendingUp, Sparkles, Building2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { news } from "@/lib/data"

export const metadata: Metadata = {
  title: "Corporate Announcements — Nexus Hub",
  description: "Organizational announcements, business updates, and strategic news.",
}

const categories = [
  { label: "Organizational", icon: Building2, count: 24 },
  { label: "Business Updates", icon: TrendingUp, count: 18 },
  { label: "New Initiatives", icon: Sparkles, count: 11 },
  { label: "Strategic", icon: Megaphone, count: 9 },
]

// Build a fuller announcements list from the news data plus extras
const announcements = [
  ...news,
  {
    id: "news-5",
    title: "Group crosses 50,000 employees across 14 countries",
    excerpt: "A milestone reflecting sustained growth and successful integration of recent acquisitions.",
    category: "Announcements" as const,
    date: "Jun 28, 2026",
    readTime: "3 min read",
    tag: "Business Update",
  },
  {
    id: "news-6",
    title: "New employee recognition program launches group-wide",
    excerpt: "Celebrating the people behind our progress with quarterly awards and peer nominations.",
    category: "Announcements" as const,
    date: "Jun 20, 2026",
    readTime: "2 min read",
    tag: "New Initiative",
  },
]

export default function AnnouncementsPage() {
  const [lead, ...rest] = announcements
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Corporate Announcements"
          title="Stay informed on what matters"
          description="Organizational announcements, business updates, leadership messages, and strategic news — all in one feed."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{cat.label}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} posts</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lead story */}
          <article className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image src={lead.image || "/news-innovation.png"} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-2 text-xs">
                <Badge>{lead.tag}</Badge>
                <span className="text-muted-foreground">{lead.date} · {lead.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground text-balance sm:text-3xl">
                {lead.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{lead.excerpt}</p>
              <button className="mt-6 w-fit rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Read full announcement
              </button>
            </div>
          </article>

          {/* List */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-2 text-xs">
                  <Badge variant="secondary">{item.tag}</Badge>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <span className="mt-4 text-xs font-medium text-muted-foreground">{item.readTime}</span>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
