import { useEffect, useState } from "react"

/**
 * Returns true when the viewport width is below the given breakpoint (px).
 * Initialises to false to match SSR output and avoid hydration mismatch.
 */
export function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])

  return isMobile
}
