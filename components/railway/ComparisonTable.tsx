"use client"

import { COMPARISON_ROWS } from "@/constants/railway"
import { useIsMobile } from "@/hooks/useIsMobile"

export function ComparisonTable() {
  const isMobile = useIsMobile()

  return (
    <div
      style={{
        marginTop: "1.25rem",
        background: "rgba(244,42,65,0.05)",
        border: "1px solid rgba(244,42,65,0.15)",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.75rem 1rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "1.1rem" }}>📊</span>
        <div>
          <div style={{ fontSize: "0.72rem", color: "#f42a41", fontWeight: 700 }}>
            আসল railway.gov.bd বনাম এই ডিজাইন
          </div>
          <div style={{ fontSize: "0.6rem", color: "#475569" }}>
            সংখ্যা মিথ্যা বলে না। ডিজাইনও না। 💀
          </div>
        </div>
      </div>

      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "2fr 1.5fr 1.5fr",
          padding: "0.5rem 1rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        <span style={{ color: "#475569" }}>বিষয়</span>
        <span style={{ color: "#f87171", textAlign: "center" }}>আসল সাইট 😬</span>
        <span style={{ color: "#86efac", textAlign: "center" }}>এই ডিজাইন ✅</span>
      </div>

      {/* Rows */}
      {COMPARISON_ROWS.map((row, i) => (
        <div
          key={row.feature}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "2fr 1.5fr 1.5fr",
            padding: "0.55rem 1rem",
            borderBottom:
              i < COMPARISON_ROWS.length - 1
                ? "1px solid rgba(255,255,255,0.04)"
                : "none",
            alignItems: "center",
            background:
              i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
          }}
        >
          <span style={{ fontSize: isMobile ? "0.6rem" : "0.68rem", color: "#94a3b8" }}>
            {row.feature}
          </span>
          <span
            style={{
              fontSize: isMobile ? "0.58rem" : "0.65rem",
              color: "#f87171",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {row.real}
          </span>
          <span
            style={{
              fontSize: isMobile ? "0.58rem" : "0.65rem",
              color: "#86efac",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {row.improved}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div
        style={{
          padding: "0.65rem 1rem",
          borderTop: "1px solid rgba(244,42,65,0.15)",
          fontSize: "0.6rem",
          color: "#475569",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        এই ভিডিওটা শেয়ার করুন — হয়তো কেউ দেখবে যে বদলাতে পারে। 🙏
      </div>
    </div>
  )
}
