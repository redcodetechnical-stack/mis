"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search, TrendingUp, Megaphone, Rocket, Palette, Mail, CalendarDays, ShieldCheck } from "lucide-react"
import { stats } from "@/lib/data"
import Link from "next/link"

const tiles = [
  { label: "Announcements", href: "/announcements", icon: Megaphone, desc: "Latest updates" },
  { label: "Campaigns", href: "/campaigns", icon: Rocket, desc: "Live now" },
  { label: "Brand Centre", href: "/brand-centre", icon: Palette, desc: "Logos & templates" },
  { label: "Communications", href: "/communications", icon: Mail, desc: "Newsletters" },
  { label: "Events", href: "/events", icon: CalendarDays, desc: "Calendar & kits" },
  { label: "Policies", href: "/policies", icon: ShieldCheck, desc: "Guidelines" },
]

const suggestions = ["Brand guidelines", "PowerPoint template", "Logo pack", "Sustainability campaign", "Newsletter"]

export function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    router.push(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search")
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8 lg:pt-8 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Find every asset, campaign, and update in one place
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Search approved brand assets, download the latest collateral, and stay on top of announcements across
            every business unit.
          </p>

          <form onSubmit={submit} className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search assets, campaigns, policies, presentations…"
                aria-label="Search the hub"
                className="h-14 w-full rounded-xl border border-input bg-background pl-12 pr-32 text-base shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/15"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 h-10 -translate-y-1/2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="size-4" />
            <span className="mr-1">Popular:</span>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => router.push(`/search?q=${encodeURIComponent(s)}`)}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
