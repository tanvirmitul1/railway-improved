"use client"

export function BrokerDetectorBadge() {
  return (
    <div
      style={{
        background: "rgba(34,197,94,0.08)",
        border: "1px solid rgba(34,197,94,0.2)",
        borderRadius: 10,
        padding: "0.6rem 1rem",
        marginBottom: "1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      <span style={{ fontSize: "1.1rem" }}>🕵️</span>
      <div style={{ fontSize: "0.72rem", color: "#86efac" }}>
        <strong>দালাল ডিটেক্টর চালু আছে</strong> — সন্দেহজনক bulk booking
        স্বয়ংক্রিয়ভাবে block হচ্ছে। (হ্যাঁ, এটা features।)
      </div>
    </div>
  )
}
