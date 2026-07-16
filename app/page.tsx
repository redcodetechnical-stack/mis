import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import {
  FeaturedRow,
  TrendingSection,
  QuickDownloadsSection,
  UpcomingEvents,
  FeaturedVideos,
} from "@/components/home/sections"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <SiteHeader />
      <main className="overflow-hidden">
        <Hero />
        <FeaturedRow />
        <TrendingSection />
        <QuickDownloadsSection />
        <UpcomingEvents />
        <FeaturedVideos />
      </main>
      <SiteFooter />
    </div>
  )
}
