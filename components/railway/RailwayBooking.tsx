"use client"

import { useMemo } from "react"
import { useRailwayBooking } from "@/hooks/useRailwayBooking"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getRandomServerMessage } from "@/lib/railway"
import { BOOKING_STEPS } from "@/constants/railway"
import { Navbar } from "./Navbar"
import { ProgressBar } from "./ProgressBar"
import { SearchStep } from "./steps/SearchStep"
import { TrainListStep } from "./steps/TrainListStep"
import { SeatMapStep } from "./steps/SeatMapStep"
import { PassengerStep } from "./steps/PassengerStep"
import { SuccessStep } from "./steps/SuccessStep"

/**
 * Root component for the railway ticket booking demo.
 * Orchestrates step navigation via useRailwayBooking — all state/logic lives
 * in the hook, keeping this component purely declarative.
 */
export function RailwayBooking() {
  const serverMsg = useMemo(() => getRandomServerMessage(), [])
  const isMobile = useIsMobile()
  const booking = useRailwayBooking()

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0f0d",
        fontFamily:
          "'Hind Siliguri', 'Noto Sans Bengali', 'Segoe UI', sans-serif",
        color: "#f0f0f0",
      }}
    >
      <Navbar serverMsg={serverMsg} />
      <ProgressBar steps={BOOKING_STEPS} currentStep={booking.step} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: isMobile ? "1.25rem 0.75rem" : "2rem 1.5rem" }}>
        {booking.step === 0 && (
          <SearchStep
            from={booking.from}
            to={booking.to}
            date={booking.date}
            searching={booking.searching}
            onFromChange={booking.setFrom}
            onToChange={booking.setTo}
            onDateChange={booking.setDate}
            onSearch={booking.handleSearch}
            onSwap={booking.swap}
          />
        )}

        {booking.step === 1 && (
          <TrainListStep
            from={booking.from}
            to={booking.to}
            date={booking.date}
            onBack={() => booking.setStep(0)}
            onSelectTrain={booking.handleSelectTrain}
          />
        )}

        {booking.step === 2 && booking.selectedTrain && booking.selectedClass && (
          <SeatMapStep
            selectedTrain={booking.selectedTrain}
            selectedClass={booking.selectedClass}
            seats={booking.seats}
            selectedSeat={booking.selectedSeat}
            price={booking.price}
            onSeatSelect={booking.setSelectedSeat}
            onBack={() => booking.setStep(1)}
            onNext={() => booking.setStep(3)}
          />
        )}

        {booking.step === 3 && booking.selectedTrain && booking.selectedClass && (
          <PassengerStep
            selectedTrain={booking.selectedTrain}
            selectedClass={booking.selectedClass}
            selectedSeat={booking.selectedSeat}
            from={booking.from}
            to={booking.to}
            date={booking.date}
            price={booking.price}
            name={booking.name}
            phone={booking.phone}
            otp={booking.otp}
            otpSent={booking.otpSent}
            otpTimer={booking.otpTimer}
            paying={booking.paying}
            onNameChange={booking.setName}
            onPhoneChange={booking.setPhone}
            onOtpChange={booking.setOtp}
            onSendOtp={booking.handleSendOtp}
            onPay={booking.handlePay}
            onBack={() => booking.setStep(2)}
          />
        )}

        {booking.step === 4 &&
          booking.selectedTrain &&
          booking.selectedClass &&
          booking.selectedSeat && (
            <SuccessStep
              selectedTrain={booking.selectedTrain}
              selectedClass={booking.selectedClass}
              selectedSeat={booking.selectedSeat}
              from={booking.from}
              to={booking.to}
              price={booking.price}
              confetti={booking.confetti}
              onReset={booking.resetBooking}
            />
          )}
      </div>
    </div>
  )
}
