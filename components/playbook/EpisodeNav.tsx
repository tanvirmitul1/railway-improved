"use client"

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <button
        onClick={onPrev}
        disabled={isFirst}
        style={{
          padding: "0.45rem 1rem",
          background: isFirst
            ? "rgba(255,255,255,0.03)"
            : "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: isFirst ? "#374151" : "#94a3b8",
          borderRadius: 8,
          cursor: isFirst ? "not-allowed" : "pointer",
          fontSize: "0.75rem",
        }}
      >
        ← আগেরটা
      </button>

      <span
        style={{ color: "#475569", fontSize: "0.75rem", alignSelf: "center" }}
      >
        {selected + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={isLast}
        style={{
          padding: "0.45rem 1rem",
          background: isLast ? "rgba(255,255,255,0.03)" : "#f42a41",
          border: "none",
          color: isLast ? "#374151" : "#fff",
          borderRadius: 8,
          cursor: isLast ? "not-allowed" : "pointer",
          fontSize: "0.75rem",
          fontWeight: 700,
        }}
      >
        পরেরটা →
      </button>
    </div>
  )
}
