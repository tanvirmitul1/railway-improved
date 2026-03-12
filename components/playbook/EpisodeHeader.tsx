"use client"

import type { Episode } from "@/types/playbook"

interface EpisodeHeaderProps {
  episode: Episode
}

export function EpisodeHeader({ episode }: EpisodeHeaderProps) {
  return (
    <div className="mb-4 rounded-[14px] border border-[#f42a41]/30 bg-gradient-to-br from-[#f42a41]/15 to-[#006a4e]/10 p-5 dark:from-[#f42a41]/20 dark:to-[#006a4e]/15">
      <div className="mb-1 text-2xl">
        {episode.emoji}
      </div>
      <h2 className="mb-1 text-[1.05rem] font-black text-foreground">
        {episode.banglaTitle}
      </h2>
      <div className="mb-2 text-[0.78rem] italic text-amber-500 dark:text-amber-400">
        &quot;{episode.tagline}&quot;
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#f42a41] px-2.5 py-0.5 text-[0.6rem] font-bold text-white">
          🎯 {episode.targetAudience}
        </span>
        <span className="rounded-full bg-[#006a4e]/40 px-2.5 py-0.5 text-[0.6rem] text-green-300 dark:bg-green-900/40 dark:text-green-200">
          ⏰ {episode.bestPostingTime}
        </span>
        <span className="rounded-full border border-border bg-card/50 px-2.5 py-0.5 text-[0.6rem] text-muted-foreground">
          📱 {episode.platform}
        </span>
      </div>

      {/* Hook callout */}
      <div className="mt-3 rounded-r-md border-l-[3px] border-amber-500 bg-black/40 px-3 py-2.5 text-[0.78rem] leading-[1.6] text-amber-200 dark:bg-amber-950/30">
        🎣 <strong>হুক:</strong> {episode.hook}
      </div>
    </div>
  )
}
