import type { CSSProperties } from "react"

// ─── Shared form styles ───────────────────────────────────────────────────────

export const inputStyle: CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1.5px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  color: "#fff",
  padding: "0.7rem 1rem",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
}

export const labelStyle: CSSProperties = {
  fontSize: "0.65rem",
  color: "#86efac",
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: "0.3rem",
  display: "block",
}

export const sectionLabelStyle: CSSProperties = {
  fontSize: "0.7rem",
  color: "#86efac",
  fontWeight: 700,
  marginBottom: "1rem",
  letterSpacing: 1,
}

// ─── Button styles ────────────────────────────────────────────────────────────

export const btnPrimary: CSSProperties = {
  background: "linear-gradient(135deg, #006a4e, #009966)",
  border: "none",
  color: "#fff",
  padding: "0.85rem 2rem",
  borderRadius: 12,
  fontSize: "1rem",
  fontWeight: 800,
  cursor: "pointer",
  width: "100%",
  letterSpacing: 0.5,
  transition: "transform 0.1s",
}

export const btnBack: CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  padding: "0.4rem 0.85rem",
  color: "#94a3b8",
  cursor: "pointer",
  fontSize: "0.72rem",
}

// ─── Card styles ──────────────────────────────────────────────────────────────

export const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "1.25rem",
}

// ─── Step header ──────────────────────────────────────────────────────────────

export const stepHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.25rem",
}
