"use client"

import type { Train, SeatClassKey } from "@/types/railway"
import { SEAT_CLASSES } from "@/constants/railway"

interface TrainCardProps {
  train: Train
  onSelect: (train: Train, cls: SeatClassKey) => void
}

export function TrainCard({ train, onSelect }: TrainCardProps) {
  const statusColor =
    train.status === "চলছে"
      ? { bg: "rgba(234,179,8,0.2)", text: "#fbbf24" }
      : train.status === "সময়মতো"
        ? { bg: "rgba(34,197,94,0.2)", text: "#86efac" }
        : { bg: "rgba(99,102,241,0.2)", text: "#a5b4fc" }

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,106,78,0.08))",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Train header */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ fontSize: "1.5rem" }}>🚂</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>
              {train.name}
            </div>
            <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
              #{train.number} • {train.type}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "1.05rem",
              fontWeight: 900,
            }}
          >
            <span>{train.depart}</span>
            <span style={{ fontSize: "0.65rem", color: "#64748b" }}>
              ──{train.duration}──▶
            </span>
            <span>{train.arrive}</span>
          </div>
          <span
            style={{
              fontSize: "0.6rem",
              padding: "2px 8px",
              borderRadius: 20,
              fontWeight: 700,
              background: statusColor.bg,
              color: statusColor.text,
            }}
          >
            {train.status}
          </span>
        </div>
      </div>

      {/* Seat class buttons */}
      <div
        style={{
          padding: "0.85rem 1.25rem",
          display: "flex",
          gap: "0.6rem",
          flexWrap: "wrap",
        }}
      >
        {SEAT_CLASSES.map((cls) => {
          const avail = train.seats[cls.key]
          const p = train.price[cls.key]
          const isFull = avail === 0

          const availBg = isFull
            ? "rgba(244,42,65,0.15)"
            : avail <= 3
              ? "rgba(234,179,8,0.2)"
              : "rgba(34,197,94,0.15)"
          const availText = isFull
            ? "#f87171"
            : avail <= 3
              ? "#fbbf24"
              : "#86efac"
          const availLabel = isFull
            ? "নেই 💀"
            : avail <= 3
              ? `শেষ ${avail}টি! 🔥`
              : `${avail}টি আছে`

          return (
            <button
              key={cls.key}
              disabled={isFull}
              onClick={() => onSelect(train, cls.key)}
              style={{
                flex: "1 1 140px",
                padding: "0.65rem 0.75rem",
                borderRadius: 10,
                cursor: isFull ? "not-allowed" : "pointer",
                background: isFull
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,106,78,0.15)",
                border: isFull
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,106,78,0.35)",
                opacity: isFull ? 0.45 : 1,
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.2rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: isFull ? "#475569" : "#fff",
                  }}
                >
                  {cls.emoji} {cls.label}
                </span>
                <span
                  style={{
                    fontSize: "0.58rem",
                    padding: "1px 6px",
                    borderRadius: 10,
                    fontWeight: 700,
                    background: availBg,
                    color: availText,
                  }}
                >
                  {availLabel}
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  color: isFull ? "#374151" : "#86efac",
                }}
              >
                ৳{p}
              </div>
              <div
                style={{ fontSize: "0.58rem", color: "#475569", marginTop: 2 }}
              >
                {cls.funny}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
