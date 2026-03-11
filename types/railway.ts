export type SeatStatus = "available" | "taken" | "broker"

export interface Seat {
  id: string
  status: SeatStatus
}

export type SeatRow = Seat[]

export type SeatClassKey = "S_CHAIR" | "SNIGDHA" | "AC_B" | "F_BERTH"

export interface SeatClass {
  key: SeatClassKey
  label: string
  emoji: string
  funny: string
}

export interface Train {
  id: number
  name: string
  number: string
  depart: string
  arrive: string
  duration: string
  type: string
  seats: Record<SeatClassKey, number>
  price: Record<SeatClassKey, number>
  status: string
}
