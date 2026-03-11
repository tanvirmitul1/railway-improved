"use client"

import { useIsMobile } from "@/hooks/useIsMobile"

export function PlaybookHeader() {
  const isMobile = useIsMobile()

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #006a4e 0%, #003d2e 60%, #000 100%)",
        padding: isMobile ? "1rem 0.75rem" : "1.5rem 2rem",
        borderBottom: "3px solid #f42a41",
      }}
    >
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "0.75rem" : "1rem" }}>
          <div
            style={{
              width: isMobile ? 38 : 48,
              height: isMobile ? 38 : 48,
              borderRadius: "50%",
              background: "#f42a41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "1.1rem" : "1.4rem",
              flexShrink: 0,
            }}
          >
            🎬
          </div>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: isMobile ? "1.05rem" : "1.3rem",
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              UI রোস্ট বাংলাদেশ 🇧🇩
            </h1>
            <p style={{ margin: 0, color: "#86efac", fontSize: isMobile ? "0.65rem" : "0.75rem" }}>
              বাংলায় Roast &amp; Redesign — বাংলাদেশের বিখ্যাত সাইটগুলোর UI
              ভাঙা ও গড়া
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
