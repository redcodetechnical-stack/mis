import type { Metadata } from "next"
import { ShieldCheck, Download, Clock, AlertCircle, CheckCircle2, FileText, Users, Globe, Calendar } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { policies } from "@/lib/data"

export const metadata: Metadata = {
  title: "Policies & Guidelines — Nexus Hub",
  description: "Communication policy, brand usage, social media guidelines, and approval processes.",
}

const categoryIcons: Record<string, typeof ShieldCheck> = {
  Communication: Globe,
  Brand: FileText,
  "Social Media": Users,
  Event: Calendar,
  Approval: CheckCircle2,
  Templates: FileText,
}

const categoryColors: Record<string, string> = {
  Communication: "bg-primary/10 text-primary",
  Brand: "bg-chart-2/10 text-chart-2",
  "Social Media": "bg-accent/20 text-accent-foreground",
  Event: "bg-chart-4/10 text-chart-4",
  Approval: "bg-green-500/10 text-green-700",
  Templates: "bg-chart-5/10 text-chart-5",
}

const approvalSteps = [
  { step: "01", title: "Draft content", desc: "Prepare your content following brand and tone guidelines." },
  { step: "02", title: "Self-review", desc: "Check against the relevant policy before submitting." },
  { step: "03", title: "Submit for review", desc: "Use the request form to send to the Communications team." },
  { step: "04", title: "Feedback & revision", desc: "Respond to any feedback within 2 business days." },
  { step: "05", title: "Final approval", desc: "Receive written sign-off before publishing or distributing." },
]

const socialDos = [
  "Identify yourself as an employee when discussing company matters",
  "Share approved content from the official channels",
  "Be respectful and professional in all interactions",
  "Use the approved hashtags for company campaigns",
]

const socialDonts = [
  "Share confidential or financial information",
  "Make statements on behalf of the company without prior approval",
  "Engage negatively with competitors or critics",
  "Publish unverified claims about products or services",
]

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Policies & Guidelines"
          title="Know the rules, protect the brand"
          description="All communication policies, brand usage guidelines, approval workflows, and document templates in one place."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Important notice */}
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Policies last updated Jul 1, 2026</p>
              <p className="text-xs text-amber-700 mt-0.5">Please review all policies to ensure compliance with the latest brand and communication standards. Contact the Communications team for clarification.</p>
            </div>
          </div>

          {/* Policy documents */}
          <section className="mt-12">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Policy documents</h2>
              <p className="mt-1 text-sm text-muted-foreground">{policies.length} active policies and guidelines</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {policies.map((pol) => {
                const Icon = categoryIcons[pol.category] ?? ShieldCheck
                const colorClass = categoryColors[pol.category] ?? "bg-primary/10 text-primary"
                return (
                  <div
                    key={pol.id}
                    className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colorClass}`}>
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-base font-semibold text-foreground">{pol.title}</h3>
                          <Badge variant="secondary">{pol.version}</Badge>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pol.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="size-3.5" /> Updated {pol.updated}</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="size-3.5" /> Effective {pol.effective}</span>
                        <span>{pol.downloads.toLocaleString()} downloads</span>
                      </div>
                      <button className="flex shrink-0 items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Download className="size-3.5" /> PDF · {pol.fileSize}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Approval workflow */}
          <section className="mt-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Content approval workflow</h2>
              <p className="mt-1 text-sm text-muted-foreground">Follow these steps before publishing any content externally.</p>
            </div>
            <div className="relative">
              {/* connector line */}
              <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-border hidden sm:block" />
              <div className="space-y-6">
                {approvalSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-5">
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background font-display text-sm font-bold text-primary">
                      {s.step}
                    </span>
                    <div className="flex-1 rounded-xl border border-border bg-card p-5">
                      <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social media dos and don'ts */}
          <section className="mt-16">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Social media quick guide</h2>
              <p className="mt-1 text-sm text-muted-foreground">A summary of the social media policy for all employees. <a href="#" className="text-primary hover:underline">Download full policy →</a></p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-green-800">
                  <CheckCircle2 className="size-5" /> Do
                </h3>
                <ul className="mt-4 space-y-3">
                  {socialDos.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-green-800">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-red-800">
                  <AlertCircle className="size-5" /> Don&apos;t
                </h3>
                <ul className="mt-4 space-y-3">
                  {socialDonts.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-red-800">
                      <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Need help */}
          <section className="mt-16 rounded-2xl border border-border bg-primary/5 p-8 text-center">
            <ShieldCheck className="mx-auto size-10 text-primary" />
            <h2 className="mt-4 font-display text-xl font-bold text-foreground">Need a policy clarification?</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              The Corporate Communications team is here to help you navigate any policy questions, approval requests, or brand usage queries.
            </p>
            <a
              href="mailto:comms@nexusgroup.example"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact the team
            </a>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
