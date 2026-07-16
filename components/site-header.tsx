"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Hexagon, Megaphone, Rocket, Palette, Mail, CalendarDays, ShieldCheck } from "lucide-react"
import { primaryNavItems, secondaryNavItems } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const tiles = [
  { label: "Announcements", href: "/announcements", icon: Megaphone, desc: "Latest updates" },
  { label: "Campaigns", href: "/campaigns", icon: Rocket, desc: "Live now" },
  { label: "Brand Centre", href: "/brand-centre", icon: Palette, desc: "Logos & templates" },
  { label: "Communications", href: "/communications", icon: Mail, desc: "Newsletters" },
  { label: "Events", href: "/events", icon: CalendarDays, desc: "Calendar & kits" },
  { label: "Policies", href: "/policies", icon: ShieldCheck, desc: "Guidelines" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="w-full bg-background pt-4 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Grid of Navigation Tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 w-full pb-8">
            {tiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group flex w-full flex-col items-center text-center gap-4 rounded-[2rem] border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-secondary/60 text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <tile.icon className="size-6" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-foreground leading-tight">{tile.label}</span>
                  <span className="block text-xs font-medium text-muted-foreground mt-2">{tile.desc}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-6 py-3 text-sm font-bold backdrop-blur-md transition-all hover:bg-secondary hover:text-foreground shadow-sm"
            >
              <Menu className="size-5" />
              <span className="inline-block">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu containing old header content */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-background/80 backdrop-blur-sm transition-all">
          <div className="w-full max-w-md h-full bg-card border-l border-border shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
                  <Hexagon className="size-5" strokeWidth={2.5} />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">Nexus Hub</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 overflow-y-auto pb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 mt-4 px-2">Main Menu</div>
              {primaryNavItems.map((item) => {
                const active = pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-sm font-bold transition-all",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 mt-6 px-2">More Options</div>
              {secondaryNavItems.map((item) => {
                const active = pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-sm font-bold transition-all",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-border/60">
              <Button nativeButton={false} className="w-full rounded-xl py-6 text-base shadow-sm hover:shadow-md transition-shadow" onClick={() => setOpen(false)} render={<Link href="/search" />}>
                Browse all resources
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
