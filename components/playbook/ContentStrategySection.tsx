"use client"

import type { ContentStrategy } from "@/types/playbook"

interface ContentStrategySectionProps {
  strategies: ContentStrategy[]
}

export function ContentStrategySection({
  strategies,
}: ContentStrategySectionProps) {
  return (
    <div className="mx-auto max-w-[950px] px-3 pb-8 md:px-6 md:pb-10">
      <div className="border-t border-border pt-6">
        <div className="mb-4 text-[0.62rem] font-bold uppercase tracking-[2px] text-[#f42a41] dark:text-red-500">
          🚀 সিরিজ কৌশল — কীভাবে বড় হবেন
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {strategies.map((s, i) => (
            <div
              key={i}
              className="rounded-[10px] border border-border bg-card/40 p-[0.85rem]"
            >
              <div className="mb-[0.3rem] text-[1.3rem]">
                {s.icon}
              </div>
              <div className="mb-[0.25rem] text-[0.75rem] font-bold text-foreground">
                {s.title}
              </div>
              <div className="text-[0.7rem] leading-[1.5] text-muted-foreground">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
