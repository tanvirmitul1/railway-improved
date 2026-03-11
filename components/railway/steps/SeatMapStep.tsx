"use client"

import { useState } from "react"
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
  onBrokerSelect: (seatId: string) => void
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
  onBrokerSelect,
  onBack,
  onNext,
}: SeatMapStepProps) {
  const [brokerSeatId, setBrokerSeatId] = useState<string | null>(null)

  const handleBrokerClick = (id: string) => {
    setBrokerSeatId(id === brokerSeatId ? null : id)
  }

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
            {selectedTrain.name} • {getSeatClassLabel(selectedClass)} •{" "}
            <span style={{ color: "#fbbf24" }}>🕵️ গুলো দালালের — ক্লিক করলে অপশন আছে</span>
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
        onBrokerSeatClick={handleBrokerClick}
      />

      {/* Broker seat popup */}
      {brokerSeatId && (
        <div
          style={{
            marginTop: "1rem",
            background: "rgba(245,158,11,0.1)",
            border: "2px solid rgba(245,158,11,0.4)",
            borderRadius: 14,
            padding: "1.25rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>🕵️</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, fontSize: "0.9rem", color: "#fbbf24", marginBottom: "0.3rem" }}>
                আসন {brokerSeatId} — দালাল নিয়েছে
              </div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                এই আসনটি সন্দেহজনক bulk-booking এর মাধ্যমে নেওয়া হয়েছে।{" "}
                আমরা এটা আটকাতে চাই — কিন্তু বাস্তবে দালালরা এখনো বিদ্যমান।{" "}
                <strong style={{ color: "#fbbf24" }}>দাম হবে ২ গুণ।</strong> এটা normal না, এটা absurd।
              </div>
              <div
                style={{
                  background: "rgba(245,158,11,0.08)",
                  borderRadius: 8,
                  padding: "0.5rem 0.75rem",
                  marginBottom: "0.75rem",
                  fontSize: "0.65rem",
                  color: "#64748b",
                }}
              >
                💰 আসল মূল্য:{" "}
                <span style={{ textDecoration: "line-through", color: "#64748b" }}>৳{price}</span>
                {"  →  "}
                <strong style={{ color: "#fbbf24", fontSize: "0.8rem" }}>৳{price * 2}</strong>{" "}
                (দালাল সার্ভিস চার্জ 😑)
              </div>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => onBrokerSelect(brokerSeatId)}
                  style={{
                    background: "linear-gradient(135deg, #b45309, #d97706)",
                    border: "none",
                    borderRadius: 10,
                    padding: "0.6rem 1.25rem",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                  }}
                >
                  🕵️ কিনুন (দালাল মোড) — ৳{price * 2}
                </button>
                <button
                  onClick={() => setBrokerSeatId(null)}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "0.6rem 1rem",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                  }}
                >
                  না ধন্যবাদ, অন্য আসন দেখি
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedSeat && !brokerSeatId && (
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
            <div style={{ fontSize: "0.72rem", color: "#86efac" }}>নির্বাচিত আসন</div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>
              আসন {selectedSeat} • ৳{price}
            </div>
            <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
              কোনো লুকানো চার্জ নেই। টাকা গেলে টিকেট পাবেন। 😌
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
