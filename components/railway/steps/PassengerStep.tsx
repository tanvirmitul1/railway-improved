"use client"

import type { Train, SeatClassKey } from "@/types/railway"
import { inputStyle, labelStyle, cardStyle, btnBack } from "@/lib/styles"
import { useIsMobile } from "@/hooks/useIsMobile"
import { BookingSummary } from "../BookingSummary"
import { PaymentMethods } from "../PaymentMethods"

interface PassengerStepProps {
  selectedTrain: Train
  selectedClass: SeatClassKey
  selectedSeat: string | null
  from: string
  to: string
  date: string
  price: number
  name: string
  phone: string
  otp: string
  otpSent: boolean
  otpTimer: number
  paying: boolean
  onNameChange: (val: string) => void
  onPhoneChange: (val: string) => void
  onOtpChange: (val: string) => void
  onSendOtp: () => void
  onPay: () => void
  onBack: () => void
}

export function PassengerStep({
  selectedTrain,
  selectedClass,
  selectedSeat,
  from,
  to,
  date,
  price,
  name,
  phone,
  otp,
  otpSent,
  otpTimer,
  paying,
  onNameChange,
  onPhoneChange,
  onOtpChange,
  onSendOtp,
  onPay,
  onBack,
}: PassengerStepProps) {
  const isMobile = useIsMobile()
  const canSendOtp = phone.length >= 11 && otpTimer === 0

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: isMobile ? "0.95rem" : "1.05rem", fontWeight: 900 }}>
          তথ্য দিন ও পেমেন্ট করুন
        </h2>
        <button onClick={onBack} style={btnBack}>
          ← ফিরুন
        </button>
      </div>

      {/* Single column on mobile, two columns on desktop */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1.25rem",
        }}
      >
        {/* Form column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={cardStyle}>
            <div
              style={{
                fontSize: "0.7rem",
                color: "#86efac",
                fontWeight: 700,
                marginBottom: "1rem",
                letterSpacing: 1,
              }}
            >
              👤 যাত্রীর তথ্য
            </div>

            <div style={{ marginBottom: "0.85rem" }}>
              <label style={labelStyle}>নাম</label>
              <input
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="আপনার পুরো নাম"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>মোবাইল নম্বর</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  value={phone}
                  onChange={(e) => onPhoneChange(e.target.value)}
                  placeholder="০১XXXXXXXXX"
                  style={{ ...inputStyle, flex: 1 }}
                />
                <button
                  onClick={onSendOtp}
                  disabled={!canSendOtp}
                  style={{
                    background: canSendOtp ? "#006a4e" : "rgba(255,255,255,0.06)",
                    border: "none",
                    borderRadius: 10,
                    padding: "0 0.75rem",
                    color: "#fff",
                    cursor: canSendOtp ? "pointer" : "not-allowed",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {otpTimer > 0 ? `${otpTimer}s` : "OTP পাঠান"}
                </button>
              </div>
              {otpTimer > 0 && (
                <div style={{ fontSize: "0.65rem", color: "#fbbf24", marginTop: "0.3rem" }}>
                  ✅ OTP পাঠানো হয়েছে! {otpTimer} সেকেন্ডে আসবেই — এটা নতুন সিস্টেম 😌
                </div>
              )}
            </div>

            {otpSent && (
              <div style={{ marginTop: "0.85rem" }}>
                <label style={labelStyle}>OTP কোড</label>
                <input
                  value={otp}
                  onChange={(e) => onOtpChange(e.target.value)}
                  placeholder="6 সংখ্যার কোড"
                  maxLength={6}
                  style={inputStyle}
                />
              </div>
            )}
          </div>

          <PaymentMethods />
        </div>

        {/* Summary column — appears below form on mobile */}
        <BookingSummary
          train={selectedTrain}
          from={from}
          to={to}
          date={date}
          selectedClass={selectedClass}
          selectedSeat={selectedSeat}
          price={price}
          name={name}
          otp={otp}
          paying={paying}
          isMobile={isMobile}
          onPay={onPay}
        />
      </div>
    </div>
  )
}
