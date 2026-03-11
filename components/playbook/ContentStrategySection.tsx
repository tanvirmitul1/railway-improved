"use client"

import type { ContentStrategy } from "@/types/playbook"

interface ContentStrategySectionProps {
  strategies: ContentStrategy[]
}

export function ContentStrategySection({
  strategies,
}: ContentStrategySectionProps) {
  return (
    <div
      style={{
        maxWidth: 950,
        margin: "0 auto",
        padding: "0 1.5rem 2.5rem",
      }}
    >
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.62rem",
            color: "#f42a41",
            fontWeight: 700,
            letterSpacing: 2,
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          🚀 সিরিজ কৌশল — কীভাবে বড় হবেন
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {strategies.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "0.85rem",
              }}
            >
              <div style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>
                {s.icon}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#f1f5f9",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  lineHeight: 1.5,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
