"use client"

export function PlaybookHeader() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #006a4e 0%, #003d2e 60%, #000 100%)",
        padding: "1.5rem 2rem",
        borderBottom: "3px solid #f42a41",
      }}
    >
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#f42a41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              flexShrink: 0,
            }}
          >
            🎬
          </div>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "1.3rem",
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              UI রোস্ট বাংলাদেশ 🇧🇩
            </h1>
            <p style={{ margin: 0, color: "#86efac", fontSize: "0.75rem" }}>
              বাংলায় Roast &amp; Redesign — বাংলাদেশের বিখ্যাত সাইটগুলোর UI
              ভাঙা ও গড়া
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
