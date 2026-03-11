"use client"

import type { SeatRow } from "@/types/railway"
import { SEAT_LEGEND } from "@/constants/railway"
import { useIsMobile } from "@/hooks/useIsMobile"

interface SeatGridProps {
  seats: SeatRow[]
  selectedSeat: string | null
  onSeatSelect: (id: string | null) => void
  onBrokerSeatClick?: (id: string) => void
}

export function SeatGrid({ seats, selectedSeat, onSeatSelect, onBrokerSeatClick }: SeatGridProps) {
  const isMobile = useIsMobile()

  return (
    <div>
      {/* Legend */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
        {SEAT_LEGEND.map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                background: `${l.color}33`,
                border: `2px solid ${l.border}`,
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Grid container — scrollable on very small screens */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: isMobile ? "1rem 0.75rem" : "1.5rem",
            minWidth: 220,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1rem", fontSize: "1.75rem" }}>
            🚂
          </div>

          {/* Column headers */}
          <div style={{ display: "flex", gap: "0.3rem", justifyContent: "center", marginBottom: "0.5rem" }}>
            {["A", "B", "", "C", "D"].map((h, i) => (
              <div
                key={i}
                style={{
                  width: h ? 38 : 18,
                  textAlign: "center",
                  fontSize: "0.65rem",
                  color: "#475569",
                  fontWeight: 700,
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", alignItems: "center" }}>
            {seats.map((row, ri) => (
              <div key={ri} style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "#374151",
                    width: 14,
                    textAlign: "right",
                    marginRight: 2,
                  }}
                >
                  {ri + 1}
                </span>
                {row.map((seat, si) => {
                  const isSelected = selectedSeat === seat.id
                  const isBroker = seat.status === "broker"
                  const bg = isSelected
                    ? "#1d4ed8"
                    : isBroker
                      ? "rgba(245,158,11,0.2)"
                      : seat.status === "available"
                        ? "rgba(0,106,78,0.25)"
                        : "rgba(244,42,65,0.15)"
                  const border = isSelected
                    ? "2px solid #3b82f6"
                    : isBroker
                      ? "1.5px solid rgba(245,158,11,0.6)"
                      : seat.status === "available"
                        ? "1.5px solid rgba(0,106,78,0.5)"
                        : "1.5px solid rgba(244,42,65,0.3)"
                  const textColor = isSelected
                    ? "#fff"
                    : isBroker
                      ? "#fbbf24"
                      : seat.status === "available"
                        ? "#86efac"
                        : "#f87171"

                  return (
                    <>
                      {si === 2 && <div key="aisle" style={{ width: 18 }} />}
                      <button
                        key={seat.id}
                        disabled={seat.status === "taken"}
                        onClick={() => {
                          if (isBroker) {
                            onBrokerSeatClick?.(seat.id)
                          } else {
                            onSeatSelect(isSelected ? null : seat.id)
                          }
                        }}
                        title={
                          isBroker
                            ? "দালালের আসন — ক্লিক করে বিস্তারিত দেখুন"
                            : seat.id
                        }
                        style={{
                          width: 38,
                          height: 34,
                          borderRadius: 6,
                          border,
                          background: bg,
                          cursor: seat.status === "taken" ? "not-allowed" : "pointer",
                          fontSize: "0.5rem",
                          color: textColor,
                          fontWeight: 700,
                          transition: "all 0.15s",
                          animation: isBroker ? "pulse 2s infinite" : "none",
                        }}
                      >
                        {isBroker ? "🕵️" : seat.id}
                      </button>
                    </>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
