"use client"

import type { TabKey } from "@/types/playbook"

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
    <div
      style={{
        display: "flex",
        gap: "0.4rem",
        marginBottom: "1rem",
        flexWrap: "wrap",
      }}
    >
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onTabChange(t.key)}
          style={{
            padding: "0.4rem 0.85rem",
            borderRadius: 20,
            border: "none",
            cursor: "pointer",
            fontSize: "0.7rem",
            fontWeight: 700,
            background: activeTab === t.key ? "#f42a41" : "rgba(255,255,255,0.07)",
            color: activeTab === t.key ? "#fff" : "#64748b",
            transition: "all 0.2s",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
