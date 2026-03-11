import { useState, useEffect, useRef } from "react"
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
  const [brokerMode, setBrokerMode] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otpAutoFilled, setOtpAutoFilled] = useState(false)
  const { otpTimer, startTimer } = useOtpTimer()
  const [otp, setOtp] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [paying, setPaying] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const autoFilledRef = useRef(false)

  /** Auto-fill OTP after 5s countdown expires — funnier than waiting forever */
  useEffect(() => {
    if (otpSent && otpTimer === 0 && !autoFilledRef.current && otp === "") {
      autoFilledRef.current = true
      const t = setTimeout(() => {
        setOtp("123456")
        setOtpAutoFilled(true)
      }, 600)
      return () => clearTimeout(t)
    }
  }, [otpSent, otpTimer, otp])

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
    setBrokerMode(false)
    setStep(2)
  }

  /** User chose to buy from a broker — seat is pre-selected at 2× price */
  const handleBrokerSelect = (seatId: string) => {
    setSelectedSeat(seatId)
    setBrokerMode(true)
    setStep(3)
  }

  const handleSendOtp = () => {
    autoFilledRef.current = false
    setOtpAutoFilled(false)
    setOtp("")
    setOtpSent(true)
    startTimer(5)
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
    setBrokerMode(false)
    setOtpSent(false)
    setOtpAutoFilled(false)
    setOtp("")
    setName("")
    setPhone("")
    setSelectedPayment(null)
    setConfetti(false)
    autoFilledRef.current = false
  }

  const basePrice =
    selectedTrain && selectedClass ? selectedTrain.price[selectedClass] : 0
  /** Broker mode charges 2× the original price — সেবার মূল্য 😏 */
  const price = brokerMode ? basePrice * 2 : basePrice

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
    brokerMode,
    // passenger / otp
    otpSent,
    otpTimer,
    otpAutoFilled,
    otp,
    setOtp,
    name,
    setName,
    phone,
    setPhone,
    // payment
    selectedPayment,
    setSelectedPayment,
    paying,
    confetti,
    price,
    // actions
    handleSearch,
    handleSelectTrain,
    handleBrokerSelect,
    handleSendOtp,
    handlePay,
    swap,
    resetBooking,
  }
}
