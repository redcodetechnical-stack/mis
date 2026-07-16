"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import {
  resources,
  categories,
  businessUnits,
  fileTypes,
  type Category,
  type BusinessUnit,
  type FileType,
} from "@/lib/data"
import { ResourceCard } from "@/components/resource-card"

const years = [2026, 2025]
const sorts = [
  { value: "relevance", label: "Most relevant" },
  { value: "downloads", label: "Most downloaded" },
  { value: "recent", label: "Recently updated" },
] as const

type SortKey = (typeof sorts)[number]["value"]

function FilterGroup<T extends string | number>({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string
  options: T[]
  selected: T[]
  onToggle: (value: T) => void
}) {
  return (
    <div className="border-b border-border py-4 last:border-0">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt)
          return (
            <label key={String(opt)} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                checked={active}
                onChange={() => onToggle(opt)}
                className="size-4 rounded border-input accent-primary"
              />
              <span className={active ? "font-medium text-foreground" : "text-muted-foreground"}>{opt}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export function SearchClient() {
  const params = useSearchParams()
  const initialQuery = params.get("q") ?? ""

  const [query, setQuery] = useState(initialQuery)
  const [cats, setCats] = useState<Category[]>([])
  const [units, setUnits] = useState<BusinessUnit[]>([])
  const [types, setTypes] = useState<FileType[]>([])
  const [yrs, setYrs] = useState<number[]>([])
  const [sort, setSort] = useState<SortKey>("relevance")
  const [showFilters, setShowFilters] = useState(false)

  function toggle<T>(setter: React.Dispatch<React.SetStateAction<T[]>>, value: T) {
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const activeFilterCount = cats.length + units.length + types.length + yrs.length

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = resources.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
      const matchesCat = cats.length === 0 || cats.includes(r.category)
      const matchesUnit = units.length === 0 || units.includes(r.business)
      const matchesType = types.length === 0 || types.includes(r.fileType)
      const matchesYear = yrs.length === 0 || yrs.includes(r.year)
      return matchesQuery && matchesCat && matchesUnit && matchesType && matchesYear
    })

    if (sort === "downloads") list = list.slice().sort((a, b) => b.downloads - a.downloads)
    if (sort === "recent")
      list = list.slice().sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    return list
  }, [query, cats, units, types, yrs, sort])

  function clearAll() {
    setCats([])
    setUnits([])
    setTypes([])
    setYrs([])
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Search bar */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search assets, campaigns, policies…"
          aria-label="Search"
          autoFocus
          className="h-14 w-full rounded-xl border border-input bg-card pl-12 pr-4 text-base shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/15"
        />
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                <SlidersHorizontal className="size-4" />
                Filters
              </h2>
              {activeFilterCount > 0 && (
                <button onClick={clearAll} className="text-xs font-medium text-primary hover:underline">
                  Clear
                </button>
              )}
            </div>
            <FilterGroup title="Category" options={categories} selected={cats} onToggle={(v) => toggle(setCats, v)} />
            <FilterGroup title="Business" options={businessUnits} selected={units} onToggle={(v) => toggle(setUnits, v)} />
            <FilterGroup title="File type" options={fileTypes} selected={types} onToggle={(v) => toggle(setTypes, v)} />
            <FilterGroup title="Year" options={years} selected={yrs} onToggle={(v) => toggle(setYrs, v)} />
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{results.length}</span> result
              {results.length === 1 ? "" : "s"}
              {query.trim() && (
                <>
                  {" "}for <span className="font-semibold text-foreground">&ldquo;{query.trim()}&rdquo;</span>
                </>
              )}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground lg:hidden"
              >
                <SlidersHorizontal className="size-4" />
                Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
              </button>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="rounded-lg border border-input bg-card px-3 py-2 text-sm font-medium text-foreground outline-none focus:border-ring"
                >
                  {sorts.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {[...cats, ...units, ...types, ...yrs.map(String)].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          {results.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <X className="size-6" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-foreground">No results found</p>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Try adjusting your search terms or clearing some filters to see more content.
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAll}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
