"use client"

interface RedesignTabProps {
  funnyLogic: string
  redesignFeatures: string[]
}

export function RedesignTab({ funnyLogic, redesignFeatures }: RedesignTabProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.62rem",
          color: "#22c55e",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: "0.5rem",
        }}
      >
        ✨ আমার রিডিজাইনে কী থাকবে
      </div>

      <div
        style={{
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 8,
          padding: "0.75rem",
          marginBottom: "1rem",
          fontSize: "0.78rem",
          color: "#86efac",
          lineHeight: 1.6,
        }}
      >
        💡 <strong>মজার যুক্তি:</strong> {funnyLogic}
      </div>

      {redesignFeatures.map((feature, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "0.6rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ color: "#22c55e", flexShrink: 0, fontSize: "0.9rem" }}>
            ✓
          </span>
          <span
            style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.6 }}
          >
            {feature}
          </span>
        </div>
      ))}
    </div>
  )
}
