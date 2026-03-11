"use client"

import { PAYMENT_METHODS } from "@/constants/railway"
import { sectionLabelStyle } from "@/lib/styles"
import { cardStyle } from "@/lib/styles"

export function PaymentMethods() {
  return (
    <div style={cardStyle}>
      <div style={sectionLabelStyle}>💳 পেমেন্ট পদ্ধতি</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
        }}
      >
        {PAYMENT_METHODS.map((m, i) => (
          <button
            key={m.label}
            style={{
              padding: "0.6rem",
              borderRadius: 8,
              border:
                i === 1
                  ? "1.5px solid rgba(244,42,65,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                i === 1 ? "rgba(244,42,65,0.1)" : "rgba(255,255,255,0.04)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "0.75rem",
              fontWeight: i === 1 ? 700 : 400,
            }}
          >
            {m.icon} {m.label}
          </button>
        ))}
      </div>
      <div
        style={{
          marginTop: "0.6rem",
          fontSize: "0.62rem",
          color: "#475569",
        }}
      >
        পেমেন্ট fail হলে টাকা ৫ মিনিটে ফেরত। কোনো "contact support" নেই।
      </div>
    </div>
  )
}
