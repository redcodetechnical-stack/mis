import { Download, FileText, FileType2, ImageIcon, Play, Archive, Sheet } from "lucide-react"
import type { FileType, Resource } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

const fileIcon: Record<FileType, typeof FileText> = {
  PDF: FileText,
  PPT: FileType2,
  DOC: FileText,
  XLS: Sheet,
  Image: ImageIcon,
  Video: Play,
  ZIP: Archive,
}

const fileTint: Record<FileType, string> = {
  PDF: "bg-red-500/10 text-red-600",
  PPT: "bg-orange-500/10 text-orange-600",
  DOC: "bg-blue-500/10 text-blue-600",
  XLS: "bg-emerald-500/10 text-emerald-600",
  Image: "bg-violet-500/10 text-violet-600",
  Video: "bg-pink-500/10 text-pink-600",
  ZIP: "bg-amber-500/10 text-amber-600",
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = fileIcon[resource.fileType]
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start justify-between gap-3">
        <span className={`flex size-11 items-center justify-center rounded-lg ${fileTint[resource.fileType]}`}>
          <Icon className="size-5" />
        </span>
        <Badge variant="outline" className="text-[11px] font-medium">
          {resource.fileType} · {resource.size}
        </Badge>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground text-balance">
        {resource.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {resource.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">
          {resource.downloads.toLocaleString()} downloads · {resource.updated}
        </span>
        <button
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          aria-label={`Download ${resource.title}`}
        >
          <Download className="size-3.5" />
          Download
        </button>
      </div>
    </article>
  )
}
