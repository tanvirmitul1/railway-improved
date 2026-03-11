"use client"

import type { Episode } from "@/types/playbook"

interface EpisodeHeaderProps {
  episode: Episode
}

export function EpisodeHeader({ episode }: EpisodeHeaderProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(244,42,65,0.15), rgba(0,106,78,0.1))",
        border: "1px solid rgba(244,42,65,0.3)",
        borderRadius: 14,
        padding: "1.25rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>
        {episode.emoji}
      </div>
      <h2
        style={{
          margin: "0 0 0.3rem",
          fontSize: "1.05rem",
          color: "#fff",
          fontWeight: 900,
        }}
      >
        {episode.banglaTitle}
      </h2>
      <div
        style={{
          fontSize: "0.78rem",
          color: "#fbbf24",
          fontStyle: "italic",
          marginBottom: "0.5rem",
        }}
      >
        "{episode.tagline}"
      </div>

      {/* Badges */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <span
          style={{
            background: "#f42a41",
            color: "#fff",
            fontSize: "0.6rem",
            padding: "2px 10px",
            borderRadius: 20,
            fontWeight: 700,
          }}
        >
          🎯 {episode.targetAudience}
        </span>
        <span
          style={{
            background: "rgba(0,106,78,0.4)",
            color: "#86efac",
            fontSize: "0.6rem",
            padding: "2px 10px",
            borderRadius: 20,
          }}
        >
          ⏰ {episode.bestPostingTime}
        </span>
        <span
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#94a3b8",
            fontSize: "0.6rem",
            padding: "2px 10px",
            borderRadius: 20,
          }}
        >
          📱 {episode.platform}
        </span>
      </div>

      {/* Hook callout */}
      <div
        style={{
          marginTop: "0.75rem",
          background: "rgba(0,0,0,0.4)",
          borderLeft: "3px solid #fbbf24",
          padding: "0.6rem 0.75rem",
          borderRadius: "0 6px 6px 0",
          fontSize: "0.78rem",
          color: "#fde68a",
          lineHeight: 1.6,
        }}
      >
        🎣 <strong>হুক:</strong> {episode.hook}
      </div>
    </div>
  )
}
