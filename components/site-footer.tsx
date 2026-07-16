import Link from "next/link"
import { Hexagon } from "lucide-react"
import { navItems } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Hexagon className="size-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-foreground">Nexus Hub</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The single source of truth for corporate communications and marketing content across the group.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/search" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Advanced Search
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Need help?</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Can&apos;t find what you need? Reach the Corporate Communications team for support with assets and approvals.
            </p>
            <a
              href="mailto:comms@nexusgroup.example"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              comms@nexusgroup.example
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Nexus Group. For internal use only.</p>
          <div className="flex gap-5">
            <Link href="/policies" className="hover:text-foreground">Policies</Link>
            <Link href="/policies" className="hover:text-foreground">Brand Usage</Link>
            <Link href="/policies" className="hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
