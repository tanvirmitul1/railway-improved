"use client"

import type { Train, SeatClassKey } from "@/types/railway"
import { TRAINS } from "@/constants/railway"
import { btnBack } from "@/lib/styles"
import { TrainCard } from "../TrainCard"
import { BrokerDetectorBadge } from "../BrokerDetectorBadge"

interface TrainListStepProps {
  from: string
  to: string
  date: string
  onBack: () => void
  onSelectTrain: (train: Train, cls: SeatClassKey) => void
}

export function TrainListStep({
  from,
  to,
  date,
  onBack,
  onSelectTrain,
}: TrainListStepProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 900 }}>
            {from} → {to}
          </h2>
          <div style={{ fontSize: "0.72rem", color: "#64748b" }}>
            {date} • {TRAINS.length}টি ট্রেন পাওয়া গেছে (সার্ভার ডাউন ছাড়াই!) 🎉
          </div>
        </div>
        <button onClick={onBack} style={btnBack}>
          ← পরিবর্তন করুন
        </button>
      </div>

      <BrokerDetectorBadge />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {TRAINS.map((train) => (
          <TrainCard key={train.id} train={train} onSelect={onSelectTrain} />
        ))}
      </div>

      {/* Sarcastic footnote */}
      <div
        style={{
          marginTop: "1rem",
          padding: "0.65rem 1rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10,
          fontSize: "0.62rem",
          color: "#374151",
          textAlign: "center",
        }}
      >
        আসল সাইটে এখন সার্ভার ডাউন থাকত। এখানে নেই। আপনি ভাগ্যবান। 🙏
      </div>
    </div>
  )
}
