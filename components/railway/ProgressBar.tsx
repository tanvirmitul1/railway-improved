"use client"

import { useIsMobile } from "@/hooks/useIsMobile"

interface ProgressBarProps {
  steps: string[]
  currentStep: number
}

export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  const isMobile = useIsMobile()
  const circleSize = isMobile ? 22 : 28

  return (
    <div
      style={{
        background: "#0d1a14",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: isMobile ? "0.5rem 0.75rem" : "0.6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {steps.map((label, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < steps.length - 1 ? 1 : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <div
                style={{
                  width: circleSize,
                  height: circleSize,
                  borderRadius: "50%",
                  background:
                    i < currentStep
                      ? "#006a4e"
                      : i === currentStep
                        ? "#f42a41"
                        : "rgba(255,255,255,0.08)",
                  border:
                    i === currentStep
                      ? "2px solid #ff6b6b"
                      : "2px solid transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "0.6rem" : "0.7rem",
                  fontWeight: 900,
                  color: "#fff",
                  flexShrink: 0,
                  boxShadow:
                    i === currentStep
                      ? "0 0 12px rgba(244,42,65,0.5)"
                      : "none",
                  transition: "all 0.3s",
                }}
              >
                {i < currentStep ? "✓" : i + 1}
              </div>

              {/* Hide labels on mobile to prevent overflow */}
              {!isMobile && (
                <span
                  style={{
                    fontSize: "0.55rem",
                    color:
                      i === currentStep
                        ? "#f42a41"
                        : i < currentStep
                          ? "#86efac"
                          : "#475569",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              )}
            </div>

            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background:
                    i < currentStep ? "#006a4e" : "rgba(255,255,255,0.08)",
                  margin: "0 3px",
                  marginBottom: isMobile ? 0 : 16,
                  transition: "background 0.3s",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
