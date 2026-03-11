import { useState } from "react"
import type { Train, SeatClassKey, SeatRow } from "@/types/railway"
import { generateSeats } from "@/lib/railway"
import { useOtpTimer } from "./useOtpTimer"

/**
 * Centralises all state and actions for the multi-step railway booking flow.
 * Pages / orchestrator components consume this hook instead of managing state
 * directly, keeping them thin and easy to test.
 */
export function useRailwayBooking() {
  const [step, setStep] = useState(0)
  const [from, setFrom] = useState("ঢাকা")
  const [to, setTo] = useState("চট্টগ্রাম")
  const [date, setDate] = useState("২০২৫-০৩-২০")
  const [searching, setSearching] = useState(false)
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null)
  const [selectedClass, setSelectedClass] = useState<SeatClassKey | null>(null)
  const [seats, setSeats] = useState<SeatRow[]>([])
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null)
  const [otpSent, setOtpSent] = useState(false)
  const { otpTimer, startTimer } = useOtpTimer()
  const [otp, setOtp] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [paying, setPaying] = useState(false)
  const [confetti, setConfetti] = useState(false)

  const handleSearch = () => {
    if (from === to) return
    setSearching(true)
    setTimeout(() => {
      setSearching(false)
      setStep(1)
    }, 1200)
  }

  const handleSelectTrain = (train: Train, cls: SeatClassKey) => {
    setSelectedTrain(train)
    setSelectedClass(cls)
    setSeats(generateSeats())
    setSelectedSeat(null)
    setStep(2)
  }

  const handleSendOtp = () => {
    setOtpSent(true)
    startTimer(30)
  }

  const handlePay = () => {
    setPaying(true)
    setTimeout(() => {
      setPaying(false)
      setConfetti(true)
      setStep(4)
    }, 2000)
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const resetBooking = () => {
    setStep(0)
    setSelectedTrain(null)
    setSelectedClass(null)
    setSelectedSeat(null)
    setOtpSent(false)
    setOtp("")
    setName("")
    setPhone("")
    setConfetti(false)
  }

  const price =
    selectedTrain && selectedClass ? selectedTrain.price[selectedClass] : 0

  return {
    // navigation
    step,
    setStep,
    // search
    from,
    setFrom,
    to,
    setTo,
    date,
    setDate,
    searching,
    // seat selection
    selectedTrain,
    selectedClass,
    seats,
    selectedSeat,
    setSelectedSeat,
    // passenger / otp
    otpSent,
    otpTimer,
    otp,
    setOtp,
    name,
    setName,
    phone,
    setPhone,
    // payment
    paying,
    confetti,
    price,
    // actions
    handleSearch,
    handleSelectTrain,
    handleSendOtp,
    handlePay,
    swap,
    resetBooking,
  }
}
