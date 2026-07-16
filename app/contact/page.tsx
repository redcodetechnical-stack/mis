import { Mail, MessageSquare, Clock, Phone, Globe, HelpCircle, AlertCircle, FileText, Megaphone, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Contact Us — Nexus Hub",
  description: "Get in touch with the Corporate Communications & Marketing team.",
}

const contactReasons = [
  { icon: FileText, label: "Request an asset or document", id: "asset-request" },
  { icon: Megaphone, label: "Submit a news or announcement", id: "news-submission" },
  { icon: AlertCircle, label: "Report outdated or incorrect content", id: "content-issue" },
  { icon: HelpCircle, label: "General question or feedback", id: "general" },
  { icon: Star, label: "Suggest a hub improvement", id: "feedback" },
  { icon: Globe, label: "Campaign or brand support", id: "campaign" },
]

const team = [
  { name: "Sarah Mitchell", role: "Head of Corporate Communications", email: "sarah.mitchell@nexusgroup.example", region: "Group" },
  { name: "James Adeyemi", role: "Senior Brand Manager", email: "james.adeyemi@nexusgroup.example", region: "Group" },
  { name: "Priya Rajan", role: "Internal Communications Manager", email: "priya.rajan@nexusgroup.example", region: "Asia Pacific" },
  { name: "Tobias Müller", role: "Marketing Content Lead", email: "tobias.muller@nexusgroup.example", region: "Europe" },
  { name: "Fatima Al-Hassan", role: "Events & Comms Coordinator", email: "fatima.alhassan@nexusgroup.example", region: "Middle East & Africa" },
  { name: "Carlos Reyes", role: "Digital Marketing Specialist", email: "carlos.reyes@nexusgroup.example", region: "Americas" },
]

const faqs = [
  { q: "How do I request a custom asset?", a: "Use the contact form below and select 'Request an asset or document'. Please provide as much detail as possible, including dimensions, language, and intended use." },
  { q: "How long does content approval take?", a: "Standard requests are reviewed within 3 business days. Urgent requests can be flagged in the form and may be expedited where capacity allows." },
  { q: "Can I update a document already on the Hub?", a: "Yes. Report the document via 'Report outdated or incorrect content' and our team will work with the relevant owner to update it." },
  { q: "How do I submit an announcement for publication?", a: "Choose 'Submit a news or announcement' and attach your draft. Please follow the editorial guidelines in the Knowledge Centre before submitting." },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Contact Us"
          title="Talk to the Communications team"
          description="Submit a request, report an issue, or share feedback. We're here to help."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* SLA notice */}
          <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Response time</p>
              <p className="text-xs text-muted-foreground mt-0.5">We aim to respond to all enquiries within <strong>2 business days</strong>. For urgent matters, mark your request accordingly and we will prioritise.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-5">

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-xl font-bold text-foreground">Send us a message</h2>
              <form className="mt-6 space-y-5">

                {/* Reason */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">What&apos;s this about?</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {contactReasons.map((r, i) => (
                      <label key={r.id} className="group flex cursor-pointer flex-col gap-2 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                        <input type="radio" name="reason" value={r.id} className="sr-only" defaultChecked={i === 0} />
                        <r.icon className="size-5 text-muted-foreground group-has-[:checked]:text-primary" />
                        <span className="text-xs font-medium text-muted-foreground group-has-[:checked]:text-foreground">{r.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name + Email row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-foreground">Your name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Full name"
                      className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-foreground">Work email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@nexusgroup.example"
                      className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="contact-dept" className="mb-1.5 block text-sm font-semibold text-foreground">Department / business unit</label>
                  <input
                    id="contact-dept"
                    type="text"
                    placeholder="e.g. Consumer Marketing, Technology"
                    className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="contact-priority" className="mb-1.5 block text-sm font-semibold text-foreground">Priority</label>
                  <select
                    id="contact-priority"
                    className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
                  >
                    <option>Standard (within 2 business days)</option>
                    <option>Urgent (within 24 hours)</option>
                    <option>Low (within 5 business days)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Describe your request or question in as much detail as possible…"
                    className="w-full resize-none rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none transition-all focus:border-ring focus:ring-4 focus:ring-ring/15"
                  />
                </div>

                {/* File upload */}
                <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-5 text-center">
                  <FileText className="mx-auto size-8 text-muted-foreground" />
                  <p className="mt-2 text-sm font-medium text-foreground">Attach files (optional)</p>
                  <p className="text-xs text-muted-foreground mt-0.5">PDF, DOCX, PNG, JPG up to 20 MB</p>
                  <button type="button" className="mt-3 rounded-lg border border-border bg-background px-4 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors">
                    Browse files
                  </button>
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="size-4" /> Send message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:col-span-2">

              {/* Direct contacts */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Team contacts</h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
                  {team.map((member, i) => (
                    <div key={member.name} className={`flex items-start gap-3 px-4 py-4 ${i < team.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                        <a href={`mailto:${member.email}`} className="mt-0.5 flex items-center gap-1 text-xs text-primary hover:underline truncate">
                          <Mail className="size-3 shrink-0" />{member.email}
                        </a>
                      </div>
                      <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">{member.region}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other channels */}
              <div>
                <h2 className="font-display text-lg font-bold text-foreground">Other channels</h2>
                <div className="mt-4 space-y-3">
                  {[
                    { icon: Mail, label: "General enquiries", value: "comms@nexusgroup.example" },
                    { icon: Phone, label: "Group comms hotline", value: "+1 800 NEXUS HUB" },
                    { icon: Globe, label: "Intranet portal", value: "intranet.nexusgroup.example" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <c.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm font-semibold text-foreground">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                  <p className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <HelpCircle className="mt-0.5 size-4 shrink-0 text-primary" /> {f.q}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
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
