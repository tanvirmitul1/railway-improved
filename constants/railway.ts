import type { Train, SeatClass } from "@/types/railway"

export const TRAINS: Train[] = [
  {
    id: 1,
    name: "সুবর্ণ এক্সপ্রেস",
    number: "701",
    depart: "07:00",
    arrive: "12:30",
    duration: "5h 30m",
    type: "আন্তঃনগর",
    seats: { S_CHAIR: 4, SNIGDHA: 0, AC_B: 2, F_BERTH: 0 },
    price: { S_CHAIR: 365, SNIGDHA: 700, AC_B: 1050, F_BERTH: 1260 },
    status: "চলছে",
  },
  {
    id: 2,
    name: "মহানগর প্রভাতী",
    number: "703",
    depart: "08:00",
    arrive: "14:15",
    duration: "6h 15m",
    type: "আন্তঃনগর",
    seats: { S_CHAIR: 0, SNIGDHA: 3, AC_B: 0, F_BERTH: 1 },
    price: { S_CHAIR: 315, SNIGDHA: 650, AC_B: 980, F_BERTH: 1180 },
    status: "সময়মতো",
  },
  {
    id: 3,
    name: "তূর্ণা নিশীথা",
    number: "741",
    depart: "23:00",
    arrive: "05:30",
    duration: "6h 30m",
    type: "আন্তঃনগর",
    seats: { S_CHAIR: 12, SNIGDHA: 8, AC_B: 5, F_BERTH: 3 },
    price: { S_CHAIR: 315, SNIGDHA: 650, AC_B: 980, F_BERTH: 1180 },
    status: "রাতের ট্রেন 🌙",
  },
]

export const SEAT_CLASSES: SeatClass[] = [
  {
    key: "S_CHAIR",
    label: "শোভন চেয়ার",
    emoji: "💺",
    funny: "সাশ্রয়ী, মেরুদণ্ড বাঁকানো বিনামূল্যে",
  },
  {
    key: "SNIGDHA",
    label: "স্নিগ্ধা",
    emoji: "✨",
    funny: "AC আছে, জীবন সুন্দর",
  },
  {
    key: "AC_B",
    label: "AC বার্থ",
    emoji: "🛏️",
    funny: "শুয়ে যান, রাজার মতো",
  },
  {
    key: "F_BERTH",
    label: "প্রথম শ্রেণী বার্থ",
    emoji: "👑",
    funny: "VIP। দালাল এটাই নেয় আগে।",
  },
]

export const STATIONS: string[] = [
  "ঢাকা",
  "চট্টগ্রাম",
  "সিলেট",
  "রাজশাহী",
  "খুলনা",
  "ময়মনসিংহ",
  "কুমিল্লা",
  "বগুড়া",
  "নরসিংদী",
  "নারায়ণগঞ্জ",
]

export const FUNNY_SERVER_MESSAGES: string[] = [
  "সার্ভার বেঁচে আছে! 🎉 আজ ভালো দিন।",
  "সার্ভার জেগে আছে ✅ (সকাল ৮টায় কথা দিতে পারছি না)",
  "✅ সিস্টেম চালু — Internet Explorer লাগবে না!",
  "🟢 সার্ভার ঠিকঠাক — দালাল ডিটেক্টর চালু আছে",
]

export const BOOKING_STEPS: string[] = [
  "খুঁজুন",
  "ট্রেন বাছুন",
  "আসন নিন",
  "তথ্য দিন",
  "হয়ে গেল!",
]

export const QUICK_ROUTES: [string, string][] = [
  ["ঢাকা", "চট্টগ্রাম"],
  ["ঢাকা", "সিলেট"],
  ["ঢাকা", "খুলনা"],
]

export const PAYMENT_METHODS = [
  { icon: "💳", label: "কার্ড" },
  { icon: "💸", label: "bKash" },
  { icon: "🏦", label: "Nagad" },
  { icon: "💰", label: "রকেট" },
]

export const SEAT_LEGEND = [
  { color: "#006a4e", border: "rgba(0,106,78,0.6)", label: "খালি আছে" },
  { color: "#f42a41", border: "rgba(244,42,65,0.4)", label: "নেওয়া হয়েছে" },
  {
    color: "#f59e0b",
    border: "rgba(245,158,11,0.4)",
    label: "দালাল নিয়েছে (সন্দেহজনক) 🕵️",
  },
  { color: "#3b82f6", border: "rgba(59,130,246,0.6)", label: "আপনার পছন্দ" },
]
