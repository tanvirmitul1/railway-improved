"use client"

import type { Train, SeatClassKey } from "@/types/railway"
import { getSeatClassLabel } from "@/lib/railway"
import { btnPrimary } from "@/lib/styles"

interface SuccessStepProps {
  selectedTrain: Train
  selectedClass: SeatClassKey
  selectedSeat: string
  from: string
  to: string
  price: number
  confetti: boolean
  onReset: () => void
}

export function SuccessStep({
  selectedTrain,
  selectedClass,
  selectedSeat,
  from,
  to,
  price,
  confetti,
  onReset,
}: SuccessStepProps) {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <div
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          animation: confetti ? "bounce 0.5s ease" : "none",
        }}
      >
        🎉
      </div>
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: 900,
          color: "#86efac",
          margin: "0 0 0.5rem",
        }}
      >
        টিকেট পেয়েছেন!
      </h1>
      <p
        style={{
          color: "#64748b",
          fontSize: "0.85rem",
          marginBottom: "2rem",
        }}
      >
        টাকাও গেছে, টিকেটও পেয়েছেন! এটা অলৌকিক না — এটা ভালো ডিজাইন। 😌
      </p>

      {/* Ticket card */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(0,106,78,0.25), rgba(0,60,40,0.4))",
          border: "2px solid rgba(0,106,78,0.5)",
          borderRadius: 20,
          padding: "2rem",
          maxWidth: 420,
          margin: "0 auto 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BD flag stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "repeating-linear-gradient(90deg, #006a4e 0px, #006a4e 20px, #f42a41 20px, #f42a41 40px)",
          }}
        />

        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚂</div>
        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: 900,
            marginBottom: "0.25rem",
          }}
        >
          {selectedTrain.name}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "#64748b",
            marginBottom: "1rem",
          }}
        >
          #{selectedTrain.number}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>
              {selectedTrain.depart}
            </div>
            <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{from}</div>
          </div>
          <div style={{ color: "#475569", alignSelf: "center" }}>──🛤️──▶</div>
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>
              {selectedTrain.arrive}
            </div>
            <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{to}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.75rem",
            background: "rgba(0,0,0,0.3)",
            borderRadius: 10,
            fontSize: "0.8rem",
          }}
        >
          <div>
            <div style={{ color: "#64748b", fontSize: "0.62rem" }}>আসন</div>
            <strong>{selectedSeat}</strong>
          </div>
          <div>
            <div style={{ color: "#64748b", fontSize: "0.62rem" }}>শ্রেণী</div>
            <strong>{getSeatClassLabel(selectedClass)}</strong>
          </div>
          <div>
            <div style={{ color: "#64748b", fontSize: "0.62rem" }}>মূল্য</div>
            <strong style={{ color: "#86efac" }}>৳{price}</strong>
          </div>
        </div>

        {/* QR placeholder */}
        <div
          style={{
            marginTop: "1rem",
            padding: "0.5rem",
            background: "rgba(0,0,0,0.4)",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: "1.1rem",
            letterSpacing: 4,
            color: "#fbbf24",
          }}
        >
          ██ ████ ██████ ██
        </div>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#475569",
            marginTop: "0.25rem",
          }}
        >
          QR Code • SMS-ও গেছে
        </div>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{ ...btnPrimary, width: "auto", padding: "0.7rem 1.5rem" }}
        >
          📱 SMS পাঠান
        </button>
        <button
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            color: "#fff",
            padding: "0.7rem 1.5rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          🖨️ Print
        </button>
        <button
          onClick={onReset}
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            color: "#fff",
            padding: "0.7rem 1.5rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          🔄 নতুন টিকেট
        </button>
      </div>

      {/* Comparison note */}
      <div
        style={{
          marginTop: "2rem",
          background: "rgba(244,42,65,0.08)",
          border: "1px solid rgba(244,42,65,0.2)",
          borderRadius: 12,
          padding: "1rem",
          fontSize: "0.75rem",
          color: "#94a3b8",
          lineHeight: 1.7,
        }}
      >
        ⏱️ এই বুকিং এ সময় লেগেছে{" "}
        <strong style={{ color: "#fbbf24" }}>~৪৫ সেকেন্ড</strong>। আসল
        railway.gov.bd তে গড়ে লাগে{" "}
        <strong style={{ color: "#f87171" }}>৪৫+ মিনিট</strong>।<br />
        <span style={{ color: "#64748b" }}>
          এই ভিডিওটা শেয়ার করুন — হয়তো কেউ দেখবে যে বদলাতে পারে। 🙏
        </span>
      </div>
    </div>
  )
}
