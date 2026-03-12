"use client"

import type { Episode } from "@/types/playbook"
import { useIsMobile } from "@/hooks/useIsMobile"
import { cn } from "@/lib/utils"

interface EpisodeSidebarProps {
  episodes: Episode[]
  selected: number
  onSelect: (index: number) => void
}

export function EpisodeSidebar({ episodes, selected, onSelect }: EpisodeSidebarProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="mb-[0.6rem] text-[0.62rem] font-bold tracking-[2px] text-[#f42a41] dark:text-red-500">
          📋 এপিসোড
        </div>
        {/* Horizontal scroll strip */}
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {episodes.map((ep, i) => (
            <button
              key={ep.id}
              onClick={() => onSelect(i)}
              className={cn(
                "w-[120px] shrink-0 cursor-pointer rounded-lg px-[0.65rem] py-[0.6rem] text-left text-[0.68rem] transition-all duration-200",
                selected === i
                  ? "border-none bg-gradient-to-r from-[#f42a41] to-[#c0392b] text-white"
                  : "border border-border bg-card/40 text-muted-foreground hover:bg-card/60"
              )}
            >
              <div className="font-extrabold">
                {ep.emoji} এপি {i + 1}
              </div>
              <div className="mt-0.5 text-[0.58rem] leading-[1.3] opacity-80">
                {ep.target.split(" ")[0]}
              </div>
              <div className="mt-[3px] text-[0.6rem]">{ep.viralPotential}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-[210px] shrink-0">
      <div className="mb-3 text-[0.62rem] font-bold tracking-[2px] text-[#f42a41] dark:text-red-500">
        📋 এপিসোড তালিকা
      </div>

      {episodes.map((ep, i) => (
        <button
          key={ep.id}
          onClick={() => onSelect(i)}
          className={cn(
            "mb-[0.4rem] w-full cursor-pointer rounded-lg px-[0.75rem] py-[0.65rem] text-left text-[0.7rem] transition-all duration-200",
            selected === i
              ? "border-none bg-gradient-to-r from-[#f42a41] to-[#c0392b] text-white"
              : "border border-border bg-card/40 text-muted-foreground hover:bg-card/60"
          )}
        >
          <div className="font-extrabold">
            {ep.emoji} এপি {i + 1}
          </div>
          <div className="mt-[3px] text-[0.62rem] leading-[1.4]">
            {ep.target}
          </div>
          <div className="mt-1">{ep.viralPotential}</div>
        </button>
      ))}
    </div>
  )
}
