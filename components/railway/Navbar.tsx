"use client"

interface NavbarProps {
  serverMsg: string
}

export function Navbar({ serverMsg }: NavbarProps) {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #003d2e 0%, #006a4e 100%)",
        padding: "0 1.5rem",
        height: 56,
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
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ fontSize: "1.6rem" }}>🚂</span>
        <div>
          <div
            style={{
              fontWeight: 900,
              fontSize: "1rem",
              color: "#fff",
              letterSpacing: 0.5,
            }}
          >
            বাংলাদেশ রেলওয়ে
          </div>
          <div style={{ fontSize: "0.6rem", color: "#86efac" }}>
            নতুন রূপে — IE ছাড়াই চলে!
          </div>
        </div>
      </div>

      <div
        style={{
          background: "rgba(0,0,0,0.3)",
          border: "1px solid rgba(134,239,172,0.3)",
          borderRadius: 20,
          padding: "0.3rem 0.8rem",
          fontSize: "0.65rem",
          color: "#86efac",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            background: "#22c55e",
            borderRadius: "50%",
            display: "inline-block",
            boxShadow: "0 0 6px #22c55e",
          }}
        />
        {serverMsg}
      </div>
    </nav>
  )
}
