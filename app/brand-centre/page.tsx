import type { Metadata } from "next"
import { Palette, Type, Image as ImageIcon, FileText, PenTool, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ResourceCard } from "@/components/resource-card"
import { resources } from "@/lib/data"

export const metadata: Metadata = {
  title: "Brand Centre — Nexus Hub",
  description: "Brand guidelines, logos, templates, typography, and color palette.",
}

const brandResources = resources.filter((r) => r.category === "Brand Centre")

const palette = [
  { name: "Primary Teal", hex: "#0F766E", token: "--primary", className: "bg-primary" },
  { name: "Ink", hex: "#1E293B", token: "--foreground", className: "bg-foreground" },
  { name: "Signal Amber", hex: "#E8A13A", token: "--accent", className: "bg-accent" },
  { name: "Mist", hex: "#F1F5F4", token: "--secondary", className: "bg-secondary" },
  { name: "Surface", hex: "#FFFFFF", token: "--card", className: "bg-card border border-border" },
]

const kits = [
  { label: "Logo Downloads", icon: ImageIcon, count: 12 },
  { label: "PowerPoint Templates", icon: FileText, count: 8 },
  { label: "Email Signatures", icon: Mail, count: 4 },
  { label: "Icon Library", icon: PenTool, count: 320 },
]

export default function BrandCentrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Brand Centre"
          title="Everything you need to represent the brand"
          description="Access approved logos, templates, colors, and guidelines. All assets are production-ready and kept up to date by the Corporate Communications team."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Kits */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kits.map((kit) => (
              <div key={kit.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <kit.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{kit.label}</p>
                  <p className="text-xs text-muted-foreground">{kit.count} items</p>
                </div>
              </div>
            ))}
          </div>

          {/* Color palette */}
          <section className="mt-14">
            <div className="flex items-center gap-2">
              <Palette className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Color palette</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">The core colors that define our visual identity.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {palette.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className={`h-24 w-full ${color.className}`} />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-foreground">{color.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mt-14">
            <div className="flex items-center gap-2">
              <Type className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Typography</h2>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Display · Space Grotesk</span>
                <p className="mt-3 font-display text-4xl font-bold text-foreground">Aa Bb Cc</p>
                <p className="mt-3 font-display text-lg text-foreground">Headlines, titles, and key statements.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Body · Inter</span>
                <p className="mt-3 text-4xl font-semibold text-foreground">Aa Bb Cc</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Body copy, descriptions, and long-form content set for clarity and comfortable reading.
                </p>
              </div>
            </div>
          </section>

          {/* Downloadable assets */}
          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Brand assets & templates</h2>
            <p className="mt-2 text-sm text-muted-foreground">{brandResources.length} approved files ready to download.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brandResources.map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
