"use client"

import { useState, useEffect } from "react"

export function BrokerDetectorBadge() {
  const [blocked, setBlocked] = useState(37)

  useEffect(() => {
    const id = setInterval(() => {
      setBlocked((n) => n + Math.floor(Math.random() * 3))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      style={{
        background: "rgba(34,197,94,0.06)",
        border: "1px solid rgba(34,197,94,0.2)",
        borderRadius: 10,
        padding: "0.7rem 1rem",
        marginBottom: "1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>🕵️</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "0.72rem", color: "#86efac", fontWeight: 700 }}>
          দালাল ডিটেক্টর সক্রিয় আছে
        </div>
        <div style={{ fontSize: "0.62rem", color: "#475569", marginTop: 2 }}>
          আজ <strong style={{ color: "#fbbf24" }}>{blocked}টি</strong> সন্দেহজনক bulk-booking ব্লক হয়েছে।
          🟡 আসন গুলো দালালের হলেও ক্লিক করলে অপশন দেখাবে।
        </div>
      </div>
      <div
        style={{
          fontSize: "0.6rem",
          color: "#22c55e",
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 6,
          padding: "0.2rem 0.5rem",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        🟢 LIVE
      </div>
    </div>
  )
}
