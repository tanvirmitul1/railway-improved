"use client"

interface RoastTabProps {
  roastPoints: string[]
}

export function RoastTab({ roastPoints }: RoastTabProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.62rem",
          color: "#f42a41",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: "1rem",
        }}
      >
        😤 যা যা ভুল আছে এই সাইটে
      </div>
      {roastPoints.map((point, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "0.6rem",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              background: "#f42a41",
              color: "#fff",
              fontSize: "0.6rem",
              padding: "2px 7px",
              borderRadius: 20,
              fontWeight: 700,
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            #{i + 1}
          </span>
          <span
            style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.6 }}
          >
            {point}
          </span>
        </div>
      ))}
    </div>
  )
}
