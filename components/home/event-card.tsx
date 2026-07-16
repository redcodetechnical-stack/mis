"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, X, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Event } from "@/lib/data" // Wait, I need to make sure Event type is exported, or I'll just use `any` or extract it.

export function EventCard({ evt }: { evt: any }) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Link
        href="/events"
        className="group relative flex flex-col rounded-3xl border border-border/50 bg-background/50 p-6 overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground backdrop-blur-sm border-0">{evt.type}</Badge>
          {evt.registrationOpen && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
              </span>
              Open
            </span>
          )}
        </div>
        
        <h3 className="relative mt-2 font-display text-lg font-bold leading-snug text-foreground text-balance group-hover:text-primary transition-colors">
          {evt.title}
        </h3>
        
        <div className="relative mt-auto pt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 group-hover:text-foreground transition-colors">
            <CalendarDays className="size-4 text-primary/70" />
            {evt.date}
          </span>
          <span className="flex items-center gap-2 group-hover:text-foreground transition-colors">
            <Clock className="size-4 text-primary/70" />
            {evt.time}
          </span>
          <span className="flex items-center gap-2 group-hover:text-foreground transition-colors">
            <MapPin className="size-4 text-primary/70" />
            {evt.location}
          </span>
        </div>
        
        <div className="relative mt-6 pt-5 border-t border-border/40">
          <button
            onClick={(e) => {
              if (evt.registrationOpen) {
                e.preventDefault()
                setShowModal(true)
              }
            }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
          >
            {evt.registrationOpen ? "Register now" : "View Event"}
          </button>
        </div>
      </Link>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-secondary text-muted-foreground transition-colors"
            >
              <X className="size-5" />
            </button>
            
            {!submitted ? (
              <>
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground">Register for Event</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Secure your spot for this upcoming event.</p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                    setTimeout(() => setShowModal(false), 2000)
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <input 
                      required
                      placeholder="John Doe" 
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <input 
                      required
                      type="email"
                      placeholder="john@example.com" 
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-sm font-semibold text-foreground">Department</label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-muted-foreground"
                      >
                        <option value="" disabled selected>Select department</option>
                        <option value="marketing">Marketing</option>
                        <option value="hr">Human Resources</option>
                        <option value="engineering">Engineering</option>
                        <option value="sales">Sales</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 rounded-xl border border-input bg-background py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
                    >
                      Confirm Registration
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in zoom-in-95">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CalendarDays className="size-8" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Registered!</h2>
                <p className="mt-2 text-sm text-muted-foreground">You have successfully secured your spot.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
