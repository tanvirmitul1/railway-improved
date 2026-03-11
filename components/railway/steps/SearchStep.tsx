"use client"

import { STATIONS, QUICK_ROUTES } from "@/constants/railway"
import { inputStyle, labelStyle, btnPrimary } from "@/lib/styles"
import { useIsMobile } from "@/hooks/useIsMobile"

interface SearchStepProps {
  from: string
  to: string
  date: string
  searching: boolean
  onFromChange: (val: string) => void
  onToChange: (val: string) => void
  onDateChange: (val: string) => void
  onSearch: () => void
  onSwap: () => void
}

export function SearchStep({
  from,
  to,
  date,
  searching,
  onFromChange,
  onToChange,
  onDateChange,
  onSearch,
  onSwap,
}: SearchStepProps) {
  const isMobile = useIsMobile()
  const isSameStation = from === to

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: isMobile ? "1.25rem" : "2rem" }}>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: 900,
            color: "#fff",
            margin: "0 0 0.4rem",
          }}
        >
          ট্রেনের টিকেট কাটুন 🎫
        </h1>
        <p style={{ color: "#64748b", fontSize: isMobile ? "0.78rem" : "0.85rem", margin: 0 }}>
          আগের মতো ৪৫ মিনিট না — এখন ৪৫ সেকেন্ডে হবে। দেখুন।
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, rgba(0,106,78,0.2), rgba(0,60,40,0.4))",
          border: "1px solid rgba(0,106,78,0.4)",
          borderRadius: 20,
          padding: isMobile ? "1.25rem" : "2rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* From / To — side-by-side on desktop, stacked on mobile */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle}>🚉 কোথা থেকে</label>
              <select value={from} onChange={(e) => onFromChange(e.target.value)} style={inputStyle}>
                {STATIONS.map((s) => (
                  <option key={s} value={s} style={{ background: "#1a2e24" }}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={onSwap}
                title="অদলবদল করুন"
                style={{
                  background: "rgba(244,42,65,0.15)",
                  border: "1.5px solid rgba(244,42,65,0.3)",
                  borderRadius: 10,
                  padding: "0.4rem 1.5rem",
                  cursor: "pointer",
                  color: "#f42a41",
                  fontSize: "1.2rem",
                  transition: "all 0.2s",
                }}
              >
                ↕
              </button>
            </div>
            <div>
              <label style={labelStyle}>🏁 কোথায়</label>
              <select value={to} onChange={(e) => onToChange(e.target.value)} style={inputStyle}>
                {STATIONS.map((s) => (
                  <option key={s} value={s} style={{ background: "#1a2e24" }}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>🚉 কোথা থেকে</label>
              <select value={from} onChange={(e) => onFromChange(e.target.value)} style={inputStyle}>
                {STATIONS.map((s) => (
                  <option key={s} value={s} style={{ background: "#1a2e24" }}>{s}</option>
                ))}
              </select>
            </div>
            <button
              onClick={onSwap}
              title="অদলবদল করুন"
              style={{
                background: "rgba(244,42,65,0.15)",
                border: "1.5px solid rgba(244,42,65,0.3)",
                borderRadius: 10,
                padding: "0.7rem",
                cursor: "pointer",
                color: "#f42a41",
                fontSize: "1.1rem",
                flexShrink: 0,
                marginBottom: 1,
                transition: "all 0.2s",
              }}
            >
              ⇄
            </button>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>🏁 কোথায়</label>
              <select value={to} onChange={(e) => onToChange(e.target.value)} style={inputStyle}>
                {STATIONS.map((s) => (
                  <option key={s} value={s} style={{ background: "#1a2e24" }}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Date */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={labelStyle}>📅 তারিখ</label>
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            style={{ ...inputStyle, colorScheme: "dark" }}
          />
        </div>

        {isSameStation && (
          <div
            style={{
              background: "rgba(244,42,65,0.1)",
              border: "1px solid rgba(244,42,65,0.3)",
              borderRadius: 8,
              padding: "0.6rem 1rem",
              marginBottom: "1rem",
              fontSize: "0.78rem",
              color: "#fca5a5",
            }}
          >
            😅 একই জায়গা থেকে একই জায়গায় যাওয়া যায় না। জীবনেও না, ট্রেনেও না।
          </div>
        )}

        <button
          onClick={onSearch}
          disabled={isSameStation || searching}
          style={{
            ...btnPrimary,
            opacity: isSameStation ? 0.5 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: isMobile ? "0.9rem" : "1rem",
          }}
        >
          {searching ? (
            <>
              <span style={{ display: "inline-block", animation: "spin 1s linear infinite", fontSize: "1.1rem" }}>
                🔄
              </span>
              খোঁজা হচ্ছে... (সার্ভার ডাউন নেই আজ!)
            </>
          ) : (
            "🔍 ট্রেন খুঁজুন"
          )}
        </button>

        {/* Quick routes */}
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {QUICK_ROUTES.map(([f, t]) => (
            <button
              key={f + t}
              onClick={() => { onFromChange(f); onToChange(t) }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "0.3rem 0.75rem",
                fontSize: isMobile ? "0.65rem" : "0.7rem",
                color: "#94a3b8",
                cursor: "pointer",
              }}
            >
              {f} → {t}
            </button>
          ))}
        </div>
      </div>

      {/* Fun fact */}
      <div
        style={{
          marginTop: "1.25rem",
          background: "rgba(244,42,65,0.06)",
          border: "1px solid rgba(244,42,65,0.15)",
          borderRadius: 12,
          padding: "0.85rem 1rem",
          display: "flex",
          gap: "0.65rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>📊</span>
        <div>
          <div style={{ fontSize: "0.72rem", color: "#f42a41", fontWeight: 700, marginBottom: "0.2rem" }}>
            আসল সাইটের সাথে তুলনা
          </div>
          <div style={{ fontSize: isMobile ? "0.7rem" : "0.75rem", color: "#94a3b8", lineHeight: 1.6 }}>
            আসল railway.gov.bd তে টিকেট কাটতে গড়ে লাগে{" "}
            <strong style={{ color: "#fbbf24" }}>৪৫+ মিনিট</strong> (সার্ভার ডাউন ছাড়া)। এই
            ডিজাইনে: <strong style={{ color: "#86efac" }}>৪৫ সেকেন্ড</strong>। ব্যবধান: ৬০ গুণ।
            গণিত মিথ্যা বলে না। 💀
          </div>
        </div>
      </div>
    </div>
  )
}
