"use client"

import { useState, useEffect } from "react"
import { FUNNY_SERVER_MESSAGES } from "@/constants/railway"
import { useIsMobile } from "@/hooks/useIsMobile"

export function Navbar() {
  const isMobile = useIsMobile()
  const [msgIdx, setMsgIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setMsgIdx((i) => (i + 1) % FUNNY_SERVER_MESSAGES.length),
      4000,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #003d2e 0%, #006a4e 100%)",
        padding: isMobile ? "0 0.75rem" : "0 1.5rem",
        height: isMobile ? 50 : 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid #f42a41",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ fontSize: isMobile ? "1.3rem" : "1.6rem" }}>🚂</span>
        <div>
          <div
            style={{
              fontWeight: 900,
              fontSize: isMobile ? "0.85rem" : "1rem",
              color: "#fff",
              letterSpacing: 0.5,
            }}
          >
            বাংলাদেশ রেলওয়ে™
          </div>
          {!isMobile && (
            <div style={{ fontSize: "0.6rem", color: "#86efac" }}>
              গন্তব্যে পৌঁছানোর গ্যারান্টি নেই, কিন্তু সার্ভার চালু আছে!
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          background: "rgba(0,0,0,0.3)",
          border: "1px solid rgba(134,239,172,0.3)",
          borderRadius: 20,
          padding: "0.3rem 0.7rem",
          fontSize: "0.65rem",
          color: "#86efac",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          maxWidth: isMobile ? 120 : 320,
          overflow: "hidden",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            background: "#22c55e",
            borderRadius: "50%",
            display: "inline-block",
            flexShrink: 0,
            boxShadow: "0 0 6px #22c55e",
            animation: "pulse 2s infinite",
          }}
        />
        {isMobile ? (
          <span style={{ whiteSpace: "nowrap" }}>সার্ভার চালু (এখনো) ✅</span>
        ) : (
          <span
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {FUNNY_SERVER_MESSAGES[msgIdx]}
          </span>
        )}
      </div>
    </nav>
  )
}
