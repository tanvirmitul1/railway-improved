"use client"

interface TipsTabProps {
  contentTips: string[]
  videoFormat?: string
}

const DEFAULT_VIDEO_FORMAT =
  "Screen record → reaction → redesign reveal. স্টপওয়াচ দেখান উভয় ক্ষেত্রে।"

export function TipsTab({ contentTips, videoFormat }: TipsTabProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.62rem",
          color: "#a78bfa",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: "0.75rem",
        }}
      >
        💡 কন্টেন্ট কৌশল
      </div>

      {contentTips.map((tip, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "0.65rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ color: "#a78bfa", flexShrink: 0 }}>▸</span>
          <span
            style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.6 }}
          >
            {tip}
          </span>
        </div>
      ))}

      <div
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          background: "rgba(167,139,250,0.1)",
          border: "1px solid rgba(167,139,250,0.2)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: "#a78bfa",
            fontWeight: 700,
            marginBottom: "0.3rem",
          }}
        >
          📱 ভিডিও ফরম্যাট
        </div>
        <div style={{ fontSize: "0.75rem", color: "#c4b5fd" }}>
          {videoFormat ?? DEFAULT_VIDEO_FORMAT}
        </div>
      </div>
    </div>
  )
}
