"use client"

import { cn } from "@/lib/utils"

interface EpisodeNavProps {
  selected: number
  total: number
  isFirst: boolean
  isLast: boolean
  onPrev: () => void
  onNext: () => void
}

export function EpisodeNav({
  selected,
  total,
  isFirst,
  isLast,
  onPrev,
  onNext,
}: EpisodeNavProps) {
  return (
    <div className="mt-4 flex justify-between">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={cn(
          "rounded-lg border px-4 py-[0.45rem] text-[0.75rem] transition-colors",
          isFirst
            ? "cursor-not-allowed border-transparent bg-muted/50 text-muted-foreground/50"
            : "cursor-pointer border-border bg-card/50 text-muted-foreground hover:bg-card/80 hover:text-foreground"
        )}
      >
        ← আগেরটা
      </button>

      <span className="self-center text-[0.75rem] text-muted-foreground hover:text-foreground dark:text-slate-400">
        {selected + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={isLast}
        className={cn(
          "rounded-lg px-4 py-[0.45rem] text-[0.75rem] font-bold transition-colors",
          isLast
            ? "cursor-not-allowed bg-muted/50 text-muted-foreground/50"
            : "cursor-pointer bg-[#f42a41] text-white hover:bg-[#d92236]"
        )}
      >
        পরেরটা →
      </button>
    </div>
  )
}
