"use client"

import { PAYMENT_METHODS } from "@/constants/railway"
import { sectionLabelStyle, cardStyle } from "@/lib/styles"

interface PaymentMethodsProps {
  selected: string | null
  onSelect: (label: string) => void
}

export function PaymentMethods({ selected, onSelect }: PaymentMethodsProps) {
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
        {PAYMENT_METHODS.map((m) => {
          const isSelected = selected === m.label
          return (
            <button
              key={m.label}
              onClick={() => onSelect(m.label)}
              style={{
                padding: "0.65rem 0.5rem",
                borderRadius: 8,
                border: isSelected
                  ? "2px solid #22c55e"
                  : "1px solid rgba(255,255,255,0.08)",
                background: isSelected
                  ? "rgba(34,197,94,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: isSelected ? "#86efac" : "#94a3b8",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontWeight: isSelected ? 800 : 400,
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div>
                {m.icon} {m.label}{" "}
                {isSelected && <span style={{ float: "right" }}>✅</span>}
              </div>
              <div
                style={{
                  fontSize: "0.58rem",
                  marginTop: 2,
                  color: isSelected ? "#86efac" : "#475569",
                }}
              >
                {m.funny}
              </div>
            </button>
          )
        })}
      </div>
      {selected ? (
        <div
          style={{
            marginTop: "0.6rem",
            fontSize: "0.65rem",
            color: "#86efac",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          ✅ {selected} সিলেক্ট হয়েছে — পেমেন্ট রেডি! এখন শুধু "পরিশোধ" চাপুন।
        </div>
      ) : (
        <div
          style={{
            marginTop: "0.6rem",
            fontSize: "0.62rem",
            color: "#475569",
          }}
        >
          👆 একটা সিলেক্ট করুন — আসল সাইটে এটাও crash করত
        </div>
      )}
    </div>
  )
}
