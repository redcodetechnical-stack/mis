import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { SearchClient } from "@/components/search/search-client"

export const metadata = {
  title: "Search & Discovery | Comms & Marketing Hub",
  description: "Search across brand assets, campaigns, policies, and corporate communications.",
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="Search & Discovery"
          title="Find anything, fast"
          description="Search across every asset, campaign, policy, and communication. Filter by category, business unit, file type, and tags."
        />
        <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 text-muted-foreground">Loading search…</div>}>
          <SearchClient />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
