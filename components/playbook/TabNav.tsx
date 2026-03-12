"use client"

import type { TabKey } from "@/types/playbook"
import { cn } from "@/lib/utils"

const TABS: { key: TabKey; label: string }[] = [
  { key: "roast", label: "🔥 রোস্ট পয়েন্ট" },
  { key: "redesign", label: "✨ রিডিজাইন" },
  { key: "script", label: "📝 স্ক্রিপ্ট" },
  { key: "tips", label: "💡 কন্টেন্ট টিপস" },
]

interface TabNavProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-[0.4rem]">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onTabChange(t.key)}
          className={cn(
            "cursor-pointer rounded-full px-[0.85rem] py-[0.4rem] text-[0.7rem] font-bold transition-all duration-200",
            activeTab === t.key
              ? "bg-[#f42a41] text-white"
              : "bg-white/5 text-slate-500 hover:bg-white/10 dark:bg-card/50 dark:text-slate-400 dark:hover:bg-card/80"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
