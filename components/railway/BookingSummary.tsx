"use client"

import type { Train, SeatClassKey } from "@/types/railway"
import { getSeatClassLabel } from "@/lib/railway"
import { btnPrimary } from "@/lib/styles"

interface BookingSummaryProps {
  train: Train
  from: string
  to: string
  date: string
  selectedClass: SeatClassKey
  selectedSeat: string | null
  price: number
  name: string
  otp: string
  paying: boolean
  onPay: () => void
}

export function BookingSummary({
  train,
  from,
  to,
  date,
  selectedClass,
  selectedSeat,
  price,
  name,
  otp,
  paying,
  onPay,
}: BookingSummaryProps) {
  const summaryRows: [string, string | undefined][] = [
    ["ট্রেন", train.name],
    ["রুট", `${from} → ${to}`],
    ["তারিখ", date],
    ["ছাড়ার সময়", train.depart],
    ["শ্রেণী", getSeatClassLabel(selectedClass)],
    ["আসন", selectedSeat ?? "—"],
  ]

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(0,106,78,0.2), rgba(0,40,30,0.4))",
        border: "1px solid rgba(0,106,78,0.3)",
        borderRadius: 14,
        padding: "1.25rem",
        position: "sticky",
        top: 80,
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          color: "#86efac",
          fontWeight: 700,
          marginBottom: "1rem",
          letterSpacing: 1,
        }}
      >
        🎫 বুকিং সারাংশ
      </div>

      {summaryRows.map(([k, v]) => (
        <div
          key={k}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
            fontSize: "0.78rem",
          }}
        >
          <span style={{ color: "#64748b" }}>{k}</span>
          <span style={{ fontWeight: 600 }}>{v}</span>
        </div>
      ))}

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "0.75rem",
          paddingTop: "0.75rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.35rem",
            fontSize: "0.78rem",
          }}
        >
          <span style={{ color: "#64748b" }}>টিকেট মূল্য</span>
          <span>৳{price}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.35rem",
            fontSize: "0.78rem",
          }}
        >
          <span style={{ color: "#64748b" }}>সার্ভিস চার্জ</span>
          <span style={{ color: "#86efac" }}>৳০ (বিনামূল্যে!)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1rem",
            fontWeight: 900,
            marginTop: "0.5rem",
          }}
        >
          <span>মোট</span>
          <span style={{ color: "#86efac" }}>৳{price}</span>
        </div>
      </div>

      <button
        onClick={onPay}
        disabled={!name || !otp || paying}
        style={{
          ...btnPrimary,
          marginTop: "1.25rem",
          opacity: !name || !otp ? 0.5 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {paying ? (
          <>
            <span
              style={{
                display: "inline-block",
                animation: "spin 0.8s linear infinite",
              }}
            >
              ⏳
            </span>{" "}
            পেমেন্ট হচ্ছে...
          </>
        ) : (
          `💳 ৳${price} পরিশোধ করুন`
        )}
      </button>

      <div
        style={{
          textAlign: "center",
          marginTop: "0.6rem",
          fontSize: "0.62rem",
          color: "#374151",
        }}
      >
        🔒 SSL Encrypted • পেমেন্ট fail হলে টাকা ফেরত
      </div>
    </div>
  )
}
