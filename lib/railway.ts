import type { SeatRow, SeatClassKey } from "@/types/railway"
import { FUNNY_SERVER_MESSAGES, SEAT_CLASSES } from "@/constants/railway"

/** Generates a randomised 8×4 seat grid for the seat map step. */
export function generateSeats(): SeatRow[] {
  const rows: SeatRow[] = []
  for (let i = 1; i <= 8; i++) {
    const row = []
    for (let j = 0; j < 4; j++) {
      const rand = Math.random()
      row.push({
        id: `${i}${["A", "B", "C", "D"][j]}`,
        status:
          rand < 0.35 ? "taken" : rand < 0.45 ? "broker" : "available",
      } as const)
    }
    rows.push(row)
  }
  return rows
}

/** Returns a random server status message for the navbar badge. */
export function getRandomServerMessage(): string {
  return FUNNY_SERVER_MESSAGES[
    Math.floor(Math.random() * FUNNY_SERVER_MESSAGES.length)
  ]
}

/** Looks up a seat class label by its key. */
export function getSeatClassLabel(key: SeatClassKey): string {
  return SEAT_CLASSES.find((c) => c.key === key)?.label ?? key
}
