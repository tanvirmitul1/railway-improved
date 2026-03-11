import { useEffect, useRef, useState } from "react"

/** Countdown timer used for the OTP re-send window. */
export function useOtpTimer() {
  const [otpTimer, setOtpTimer] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (otpTimer > 0) {
      timerRef.current = setTimeout(() => setOtpTimer((t) => t - 1), 1000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [otpTimer])

  const startTimer = (seconds = 30) => setOtpTimer(seconds)

  return { otpTimer, startTimer }
}
