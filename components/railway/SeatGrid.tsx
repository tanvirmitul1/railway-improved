"use client"

import type { SeatRow } from "@/types/railway"
import { SEAT_LEGEND } from "@/constants/railway"

interface SeatGridProps {
  seats: SeatRow[]
  selectedSeat: string | null
  onSeatSelect: (id: string | null) => void
}

export function SeatGrid({ seats, selectedSeat, onSeatSelect }: SeatGridProps) {
  return (
    <div>
      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        {SEAT_LEGEND.map((l) => (
          <div
            key={l.label}
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
                background: `${l.color}33`,
                border: `2px solid ${l.border}`,
              }}
            />
            <span style={{ fontSize: "0.65rem", color: "#94a3b8" }}>
              {l.label}
            </span>
          </div>
        ))}
      </div>

      {/* Grid container */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: "1.5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem", fontSize: "2rem" }}>
          🚂
        </div>

        {/* Column headers */}
        <div
          style={{
            display: "flex",
            gap: "0.3rem",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          {["A", "B", "", "C", "D"].map((h, i) => (
            <div
              key={i}
              style={{
                width: h ? 40 : 20,
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          {seats.map((row, ri) => (
            <div
              key={ri}
              style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "#374151",
                  width: 16,
                  textAlign: "right",
                  marginRight: 2,
                }}
              >
                {ri + 1}
              </span>
              {row.map((seat, si) => {
                const isSelected = selectedSeat === seat.id
                const bg = isSelected
                  ? "#1d4ed8"
                  : seat.status === "available"
                    ? "rgba(0,106,78,0.25)"
                    : seat.status === "broker"
                      ? "rgba(245,158,11,0.2)"
                      : "rgba(244,42,65,0.15)"
                const border = isSelected
                  ? "2px solid #3b82f6"
                  : seat.status === "available"
                    ? "1.5px solid rgba(0,106,78,0.5)"
                    : seat.status === "broker"
                      ? "1.5px solid rgba(245,158,11,0.4)"
                      : "1.5px solid rgba(244,42,65,0.3)"
                const textColor = isSelected
                  ? "#fff"
                  : seat.status === "available"
                    ? "#86efac"
                    : seat.status === "broker"
                      ? "#fbbf24"
                      : "#f87171"

                return (
                  <>
                    {si === 2 && <div key="aisle" style={{ width: 20 }} />}
                    <button
                      key={seat.id}
                      disabled={seat.status !== "available"}
                      onClick={() =>
                        onSeatSelect(isSelected ? null : seat.id)
                      }
                      title={
                        seat.status === "broker"
                          ? "সন্দেহজনক বুকিং — ডিটেক্টর কাজ করছে"
                          : seat.id
                      }
                      style={{
                        width: 40,
                        height: 36,
                        borderRadius: 6,
                        border,
                        background: bg,
                        cursor:
                          seat.status === "available" ? "pointer" : "not-allowed",
                        fontSize: "0.55rem",
                        color: textColor,
                        fontWeight: 700,
                        transition: "all 0.15s",
                      }}
                    >
                      {seat.status === "broker" ? "🕵️" : seat.id}
                    </button>
                  </>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
