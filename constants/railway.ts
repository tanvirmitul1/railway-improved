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
    funny: "মেরুদণ্ড বাঁকাবেন, আত্মা মুক্ত থাকবে",
  },
  {
    key: "SNIGDHA",
    label: "স্নিগ্ধা",
    emoji: "✨",
    funny: "AC আছে — এটাই বিলাসিতা এই দেশে",
  },
  {
    key: "AC_B",
    label: "AC বার্থ",
    emoji: "🛏️",
    funny: "শুয়ে যান। রাজা হওয়ার সবচেয়ে সস্তা উপায়।",
  },
  {
    key: "F_BERTH",
    label: "প্রথম শ্রেণী বার্থ",
    emoji: "👑",
    funny: "VIP। দালাল ভাই আগেই বুক করে ফেলেছে।",
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
  "🟢 সার্ভার চালু আছে! আজ এখন পর্যন্ত মাত্র ৩ বার ডাউন হয়েছে 🎉",
  "✅ সিস্টেম অনলাইন — Internet Explorer ছাড়াই! বিজ্ঞান সত্যিই অগ্রসর হচ্ছে।",
  "🟢 সার্ভার জেগে আছে (সকাল ৮টায় গ্যারান্টি নেই, কিন্তু এখন ঠিক আছে)",
  "⚡ দালাল ডিটেক্টর চালু — ৩৭টি সন্দেহজনক বুকিং আজ ব্লক হয়েছে",
  "🟢 আপটাইম: ৯৯.১% — বাকি ০.৯% 'technical difficulties' 😶",
  "✅ পেমেন্ট গেটওয়ে চালু আছে! টাকা গেলে ফেরত আসবে (আসল সাইটে আসে না)",
  "🟢 সার্ভার LIVE — CAPTCHA নেই, IE নেই, ধৈর্যের পরীক্ষাও নেই!",
]

export const BOOKING_STEPS: string[] = [
  "কোথায় যাবেন?",
  "ট্রেন পাবেন কি?",
  "দালাল বাদে আসন",
  "টাকা দিন",
  "টিকেট পেয়েছেন! 🎉",
]

export const QUICK_ROUTES: [string, string][] = [
  ["ঢাকা", "চট্টগ্রাম"],
  ["ঢাকা", "সিলেট"],
  ["ঢাকা", "খুলনা"],
]

export const PAYMENT_METHODS = [
  { icon: "💳", label: "কার্ড", funny: "পিন দিলেই হবে, ক্যাপচা নেই" },
  { icon: "💸", label: "bKash", funny: "বাংলাদেশের নিজস্ব জাদু 🪄" },
  { icon: "🏦", label: "Nagad", funny: "সরকারি, তাই বিশ্বাস করা যায়" },
  { icon: "💰", label: "রকেট", funny: "নামটাই বলছে — fast!" },
]

export const SEAT_LEGEND = [
  { color: "#006a4e", border: "rgba(0,106,78,0.6)", label: "খালি আছে" },
  { color: "#f42a41", border: "rgba(244,42,65,0.4)", label: "নেওয়া হয়েছে" },
  {
    color: "#f59e0b",
    border: "rgba(245,158,11,0.4)",
    label: "দালাল নিয়েছে 🕵️",
  },
  { color: "#3b82f6", border: "rgba(59,130,246,0.6)", label: "আপনার পছন্দ" },
]

export interface ComparisonRow {
  feature: string
  real: string
  improved: string
  realBad?: boolean
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "টিকেট কাটার সময়",
    real: "৪৫+ মিনিট 😭",
    improved: "৪৫ সেকেন্ড ✅",
    realBad: true,
  },
  {
    feature: "সার্ভার আপটাইম",
    real: "সকাল ৮টায় শূন্য 💀",
    improved: "সবসময় চালু 🟢",
    realBad: true,
  },
  {
    feature: "OTP আসতে সময়",
    real: "৩–৫ মিনিট (যদি আসে)",
    improved: "৫ সেকেন্ড ⚡",
    realBad: true,
  },
  {
    feature: "CAPTCHA",
    real: "৩–৫ বার 🤬",
    improved: "০ বার 😌",
    realBad: true,
  },
  {
    feature: "ব্রাউজার সাপোর্ট",
    real: "Internet Explorer 🪦",
    improved: "সব ব্রাউজার 🌐",
    realBad: true,
  },
  {
    feature: "দালাল সমস্যা",
    real: "সব টিকেট দালালের 🕵️",
    improved: "দালাল ডিটেক্টর চালু 🛡️",
    realBad: true,
  },
  {
    feature: "পেমেন্ট fail হলে",
    real: "টাকা গেছে, টিকেট নেই 💸",
    improved: "৫ মিনিটে ফেরত ✅",
    realBad: true,
  },
  {
    feature: "মোবাইলে কাজ করে?",
    real: "না (officially) 😐",
    improved: "হ্যাঁ, সুন্দর করে 📱",
    realBad: true,
  },
]
