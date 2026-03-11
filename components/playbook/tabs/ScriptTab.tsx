"use client"

interface ScriptTabProps {
  script: string
}

export function ScriptTab({ script }: ScriptTabProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.62rem",
          color: "#fbbf24",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: "0.75rem",
        }}
      >
        🎬 বাংলা স্ক্রিপ্ট
      </div>
      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          fontSize: "0.78rem",
          lineHeight: 1.9,
          color: "#e2e8f0",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {script}
      </pre>
    </div>
  )
}
