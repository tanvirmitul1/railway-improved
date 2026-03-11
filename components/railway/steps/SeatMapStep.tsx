"use client"

import type { Train, SeatClassKey, SeatRow } from "@/types/railway"
import { getSeatClassLabel } from "@/lib/railway"
import { btnBack, btnPrimary } from "@/lib/styles"
import { SeatGrid } from "../SeatGrid"

interface SeatMapStepProps {
  selectedTrain: Train
  selectedClass: SeatClassKey
  seats: SeatRow[]
  selectedSeat: string | null
  price: number
  onSeatSelect: (id: string | null) => void
  onBack: () => void
  onNext: () => void
}

export function SeatMapStep({
  selectedTrain,
  selectedClass,
  seats,
  selectedSeat,
  price,
  onSeatSelect,
  onBack,
  onNext,
}: SeatMapStepProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 900 }}>
            আসন বেছে নিন 💺
          </h2>
          <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
            {selectedTrain.name} • {getSeatClassLabel(selectedClass)}
          </div>
        </div>
        <button onClick={onBack} style={btnBack}>
          ← ফিরুন
        </button>
      </div>

      <SeatGrid
        seats={seats}
        selectedSeat={selectedSeat}
        onSeatSelect={onSeatSelect}
      />

      {selectedSeat && (
        <div
          style={{
            marginTop: "1rem",
            background: "rgba(0,106,78,0.15)",
            border: "1px solid rgba(0,106,78,0.35)",
            borderRadius: 12,
            padding: "1rem 1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "0.72rem", color: "#86efac" }}>
              নির্বাচিত আসন
            </div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>
              আসন {selectedSeat} • ৳{price}
            </div>
            <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
              কোনো লুকানো চার্জ নেই। টাকা গেলে টিকেট পাবেন।
            </div>
          </div>
          <button
            onClick={onNext}
            style={{ ...btnPrimary, width: "auto", padding: "0.7rem 1.5rem" }}
          >
            এগিয়ে যান →
          </button>
        </div>
      )}
    </div>
  )
}
