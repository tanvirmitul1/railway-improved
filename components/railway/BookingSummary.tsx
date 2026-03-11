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
  isMobile?: boolean
  otp: string
  selectedPayment: string | null
  brokerMode?: boolean
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
  selectedPayment,
  brokerMode = false,
  paying,
  isMobile = false,
  onPay,
}: BookingSummaryProps) {
  const basePrice = brokerMode ? Math.round(price / 2) : price
  const canPay = !!name && !!otp && !!selectedPayment

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
          brokerMode
            ? "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(120,60,0,0.3))"
            : "linear-gradient(135deg, rgba(0,106,78,0.2), rgba(0,40,30,0.4))",
        border: brokerMode
          ? "1px solid rgba(245,158,11,0.4)"
          : "1px solid rgba(0,106,78,0.3)",
        borderRadius: 14,
        padding: "1.25rem",
        position: isMobile ? "static" : "sticky",
        top: isMobile ? undefined : 80,
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          color: brokerMode ? "#fbbf24" : "#86efac",
          fontWeight: 700,
          marginBottom: "1rem",
          letterSpacing: 1,
        }}
      >
        {brokerMode ? "🕵️ দালাল মোড বুকিং" : "🎫 বুকিং সারাংশ"}
      </div>

      {brokerMode && (
        <div
          style={{
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: 8,
            padding: "0.5rem 0.75rem",
            marginBottom: "0.85rem",
            fontSize: "0.65rem",
            color: "#fbbf24",
          }}
        >
          🕵️ আপনি স্বেচ্ছায় দালালের কাছ থেকে কিনছেন। দাম ২ গুণ।{" "}
          <strong>এটা আমরা সাপোর্ট করি না, কিন্তু বাস্তবতা অস্বীকার করি না।</strong> 😐
        </div>
      )}

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
        {brokerMode && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.35rem",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: "#64748b" }}>আসল মূল্য</span>
            <span style={{ textDecoration: "line-through", color: "#64748b" }}>
              ৳{basePrice}
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.35rem",
            fontSize: "0.78rem",
          }}
        >
          <span style={{ color: "#64748b" }}>
            {brokerMode ? "দালাল চার্জ 🕵️" : "টিকেট মূল্য"}
          </span>
          <span style={{ color: brokerMode ? "#fbbf24" : undefined }}>৳{price}</span>
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
          <span style={{ color: brokerMode ? "#fbbf24" : "#86efac" }}>৳{price}</span>
        </div>
      </div>

      <button
        onClick={onPay}
        disabled={!canPay || paying}
        style={{
          ...btnPrimary,
          marginTop: "1.25rem",
          background: canPay
            ? brokerMode
              ? "linear-gradient(135deg, #b45309, #d97706)"
              : "linear-gradient(135deg, #006a4e, #009966)"
            : undefined,
          opacity: canPay ? 1 : 0.45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {paying ? (
          <>
            <span style={{ display: "inline-block", animation: "spin 0.8s linear infinite" }}>
              ⏳
            </span>{" "}
            পেমেন্ট হচ্ছে...
          </>
        ) : canPay ? (
          `${brokerMode ? "🕵️" : "💳"} ৳${price} পরিশোধ করুন`
        ) : (
          "⬆ উপরের তথ্য পূরণ করুন"
        )}
      </button>

      {!canPay && (
        <div style={{ marginTop: "0.5rem", fontSize: "0.6rem", color: "#475569", textAlign: "center" }}>
          {!name && "নাম দিন • "}
          {!otp && "OTP দিন • "}
          {!selectedPayment && "পেমেন্ট বেছে নিন"}
        </div>
      )}

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
