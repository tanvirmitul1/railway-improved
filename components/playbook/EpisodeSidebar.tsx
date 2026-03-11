"use client"

import type { Episode } from "@/types/playbook"
import { useIsMobile } from "@/hooks/useIsMobile"

interface EpisodeSidebarProps {
  episodes: Episode[]
  selected: number
  onSelect: (index: number) => void
}

export function EpisodeSidebar({ episodes, selected, onSelect }: EpisodeSidebarProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div style={{ width: "100%" }}>
        <div
          style={{
            fontSize: "0.62rem",
            color: "#f42a41",
            letterSpacing: 2,
            fontWeight: 700,
            marginBottom: "0.6rem",
          }}
        >
          📋 এপিসোড
        </div>
        {/* Horizontal scroll strip */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            /* hide scrollbar visually */
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          {episodes.map((ep, i) => (
            <button
              key={ep.id}
              onClick={() => onSelect(i)}
              style={{
                flexShrink: 0,
                width: 120,
                textAlign: "left",
                padding: "0.6rem 0.65rem",
                borderRadius: 8,
                cursor: "pointer",
                background:
                  selected === i
                    ? "linear-gradient(90deg, #f42a41, #c0392b)"
                    : "rgba(255,255,255,0.04)",
                border:
                  selected === i ? "none" : "1px solid rgba(255,255,255,0.08)",
                color: selected === i ? "#fff" : "#94a3b8",
                fontSize: "0.68rem",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontWeight: 800 }}>
                {ep.emoji} এপি {i + 1}
              </div>
              <div style={{ fontSize: "0.58rem", marginTop: 2, lineHeight: 1.3, opacity: 0.8 }}>
                {ep.target.split(" ")[0]}
              </div>
              <div style={{ marginTop: 3, fontSize: "0.6rem" }}>{ep.viralPotential}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: 210, flexShrink: 0 }}>
      <div
        style={{
          fontSize: "0.62rem",
          color: "#f42a41",
          letterSpacing: 2,
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        📋 এপিসোড তালিকা
      </div>

      {episodes.map((ep, i) => (
        <button
          key={ep.id}
          onClick={() => onSelect(i)}
          style={{
            width: "100%",
            textAlign: "left",
            padding: "0.65rem 0.75rem",
            marginBottom: "0.4rem",
            borderRadius: 8,
            cursor: "pointer",
            background:
              selected === i
                ? "linear-gradient(90deg, #f42a41, #c0392b)"
                : "rgba(255,255,255,0.04)",
            border:
              selected === i ? "none" : "1px solid rgba(255,255,255,0.08)",
            color: selected === i ? "#fff" : "#94a3b8",
            fontSize: "0.7rem",
            transition: "all 0.2s",
          }}
        >
          <div style={{ fontWeight: 800 }}>
            {ep.emoji} এপি {i + 1}
          </div>
          <div style={{ fontSize: "0.62rem", marginTop: 3, lineHeight: 1.4 }}>
            {ep.target}
          </div>
          <div style={{ marginTop: 4 }}>{ep.viralPotential}</div>
        </button>
      ))}
    </div>
  )
}
