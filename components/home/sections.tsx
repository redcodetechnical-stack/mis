import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Megaphone,
  Palette,
  Rocket,
  Mail,
  CalendarDays,
  ShieldCheck,
  Play,
  Download,
  Quote,
  Clock,
  MapPin,
  TrendingUp,
  Flame,
} from "lucide-react"
import {
  featuredCampaign,
  leadershipMessage,
  news,
  events,
  featuredVideos,
  quickDownloads,
  trendingResources,
} from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { EventCard } from "./event-card"

const tiles = [
  { label: "Announcements", href: "/announcements", icon: Megaphone, desc: "Latest updates" },
  { label: "Campaigns", href: "/campaigns", icon: Rocket, desc: "Live now" },
  { label: "Brand Centre", href: "/brand-centre", icon: Palette, desc: "Logos & templates" },
  { label: "Communications", href: "/communications", icon: Mail, desc: "Newsletters" },
  { label: "Events", href: "/events", icon: CalendarDays, desc: "Calendar & kits" },
  { label: "Policies", href: "/policies", icon: ShieldCheck, desc: "Guidelines" },
]

function SectionHeading({
  title,
  href,
  linkLabel = "View all",
}: {
  title: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          {linkLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  )
}

export function QuickNav() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading title="Quick navigation" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <tile.icon className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{tile.label}</span>
              <span className="block text-xs text-muted-foreground">{tile.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function FeaturedRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <Link
          href={featuredCampaign.href}
          className="group relative col-span-1 flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl border border-border lg:col-span-2"
        >
          <Image
            src={featuredCampaign.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="relative p-7 text-background">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {featuredCampaign.kicker}
            </span>
            <h3 className="mt-4 max-w-xl font-display text-2xl font-bold text-balance sm:text-3xl">
              {featuredCampaign.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-background/85">{featuredCampaign.description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              Explore campaign
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>

        <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 to-chart-1/5 p-8 relative">
           <div className="absolute right-0 top-0 -mr-16 -mt-16 size-64 rounded-full bg-primary/10 blur-3xl" />
           <div className="relative flex-1 overflow-y-auto pr-4 scrollbar-thin">
            <Quote className="size-10 text-primary/40 mb-6" />
            <p className="font-display text-xl font-medium leading-relaxed text-foreground text-pretty">
              "{leadershipMessage.quote}"
            </p>
           </div>
           <div className="relative mt-8 flex shrink-0 items-center gap-4 border-t border-border/50 pt-6">
             <Image
               src={leadershipMessage.image || "/placeholder.svg"}
               alt={leadershipMessage.name}
               width={56}
               height={56}
               className="size-14 rounded-full object-cover ring-2 ring-background"
             />
             <div>
               <p className="text-base font-bold text-foreground">{leadershipMessage.name}</p>
               <p className="text-sm text-muted-foreground">{leadershipMessage.role}</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export function LatestNews() {
  const [lead, ...rest] = news
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading title="Latest news" href="/announcements" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Link
          href="/announcements"
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={lead.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs">
              <Badge>{lead.tag}</Badge>
              <span className="text-muted-foreground">{lead.date} · {lead.readTime}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground text-balance">
              {lead.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lead.excerpt}</p>
          </div>
        </Link>

        <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {rest.map((item) => (
            <Link
              key={item.id}
              href="/announcements"
              className="group flex flex-col gap-1.5 p-5 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary">{item.tag}</Badge>
                <span className="text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrendingSection() {
  const topItem = trendingResources[0]
  const restItems = trendingResources.slice(1, 5)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
            <Flame className="size-5" />
            <span>Hot right now</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trending Assets
          </h2>
        </div>
        <Link
          href="/search"
          className="hidden sm:flex group h-10 items-center justify-center gap-2 rounded-full border border-border/60 bg-card px-5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
        >
          Explore all
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Number 1 Trending - Featured Left */}
        <Link
          href="/search"
          className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border/50 bg-card lg:col-span-2 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 min-h-[400px] p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-100" />
          
          <div className="relative z-10 flex items-start justify-between">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-display text-2xl font-bold shadow-lg">
              #1
            </span>
            <span className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-md border border-border/50">
              <TrendingUp className="size-4" />
              {topItem.downloads.toLocaleString()} downloads
            </span>
          </div>
          
          <div className="relative z-10 mt-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="bg-background/80 px-3 py-1 text-sm border-primary/20 text-primary">
                {topItem.fileType}
              </Badge>
              <span className="text-sm text-muted-foreground font-medium">{topItem.category}</span>
            </div>
            <h3 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl transition-colors group-hover:text-primary mb-4 max-w-2xl">
              {topItem.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl line-clamp-2">
              {topItem.description}
            </p>
          </div>
        </Link>

        {/* List of remaining trending - Right side */}
        <div className="flex flex-col gap-4">
          {restItems.map((res, i) => (
            <Link
              key={res.id}
              href="/search"
              className="group flex flex-1 items-center gap-5 rounded-2xl border border-border/40 bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary/50 font-display text-lg font-bold text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                #{i + 2}
              </div>
              
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-medium text-muted-foreground">{res.fileType}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    <TrendingUp className="size-3" />
                    {res.downloads.toLocaleString()}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary truncate">
                  {res.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Link
        href="/search"
        className="mt-8 sm:hidden flex w-full h-12 items-center justify-center gap-2 rounded-full border border-border/60 bg-card px-6 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
      >
        Explore all trends
        <ArrowRight className="size-4" />
      </Link>
    </section>
  )
}

export function QuickDownloadsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title="Quick downloads" href="/brand-centre" linkLabel="Brand Centre" />
      
      <div className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm">
        <div className="flex flex-col divide-y divide-border/40">
          {quickDownloads.map((res) => (
            <div
              key={res.id}
              className="group flex items-center justify-between p-4 sm:p-6 transition-colors hover:bg-secondary/20"
            >
              <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Download className="size-5" />
                </span>
                
                <div className="flex flex-col gap-1 min-w-0 flex-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 sm:max-w-[40%]">
                    <p className="truncate text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {res.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground truncate">
                      Last updated: {res.updated}
                    </p>
                  </div>
                  
                  <div className="mt-2 flex items-center gap-4 sm:mt-0 sm:flex-1 sm:justify-end sm:pr-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 w-28 shrink-0">
                      <Badge variant="outline" className="bg-background">{res.fileType}</Badge>
                      <span className="truncate">{res.size}</span>
                    </div>
                    
                    <span className="hidden sm:inline-block w-24 truncate font-medium">
                      {res.business}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                className="ml-4 shrink-0 rounded-full border border-border bg-background p-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-sm group-hover:scale-105 group-hover:border-primary/30"
                aria-label={`Download ${res.title}`}
              >
                <Download className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UpcomingEvents() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading title="Upcoming events" href="/events" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((evt) => (
          <EventCard key={evt.id} evt={evt} />
        ))}
      </div>
    </section>
  )
}

export function FeaturedVideos() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <SectionHeading title="Featured videos" href="/communications" />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredVideos.map((vid) => (
          <Link
            key={vid.id}
            href="/communications"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={vid.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/10" />
              <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
              <span className="absolute bottom-3 right-3 rounded bg-foreground/80 px-1.5 py-0.5 text-xs font-medium text-background">
                {vid.duration}
              </span>
            </div>
            <div className="p-5">
              <Badge variant="secondary">{vid.category}</Badge>
              <h3 className="mt-2.5 font-display text-base font-semibold leading-snug text-foreground text-balance">
                {vid.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
