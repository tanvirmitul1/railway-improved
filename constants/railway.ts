import type { Train, SeatClass } from "@/types/railway"

export const TRAINS: Train[] = [
  {
    id: 1,
    name: "সুবর্ণ এক্সপ্রেস",
    number: "701",
    depart: "07:00",
    arrive: "12:30",
    duration: "5h 30m (Maybe)",
    type: "আন্তঃনগর",
    seats: { S_CHAIR: 4, SNIGDHA: 0, AC_B: 2, F_BERTH: 0 },
    price: { S_CHAIR: 365, SNIGDHA: 700, AC_B: 1050, F_BERTH: 1260 },
    status: "৪ ঘণ্টা লেট (BD Standard Time)",
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
    status: "ইঞ্জিন নষ্ট। ঠেলে নিয়ে যাওয়া হচ্ছে।",
  },
  {
    id: 3,
    name: "তূর্ণা নিশীথা",
    number: "741",
    depart: "23:00",
    arrive: "05:30 (+১ দিন বা ২ দিন)",
    duration: "6h 30m",
    type: "আন্তঃনগর",
    seats: { S_CHAIR: 12, SNIGDHA: 8, AC_B: 5, F_BERTH: 3 },
    price: { S_CHAIR: 315, SNIGDHA: 650, AC_B: 980, F_BERTH: 1180 },
    status: "রাতের ট্রেন 🌙 (সবাই ঘুমালে ট্রেনও ঘুমাবে)",
  },
]

export const SEAT_CLASSES: SeatClass[] = [
  {
    key: "S_CHAIR",
    label: "শোভন চেয়ার",
    emoji: "💺",
    funny: "মেরুদণ্ড বাঁকাবেন, আত্মা মুক্ত থাকবে। বসার পর ওঠার গ্যারান্টি নেই।",
  },
  {
    key: "SNIGDHA",
    label: "স্নিগ্ধা",
    emoji: "✨",
    funny: "AC আছে — যদি কাজ করে আরকি। এটাই বিলাসিতা।",
  },
  {
    key: "AC_B",
    label: "ছাদের উপর (Open Air AC)",
    emoji: "🌬️",
    funny: "ন্যাচারাল এসি। ব্রিজের নিচে মাথা সাবধানে রাখবেন।",
  },
  {
    key: "F_BERTH",
    label: "প্রথম শ্রেণী বার্থ",
    emoji: "👑",
    funny: "VIP। এমপি সাহেবের শ্যালক আগেই বুক করে ফেলেছে। আপনি শুধু তাকিয়ে দেখেন।",
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
  "🟢 সার্ভার চালু আছে! আজ এখন পর্যন্ত মাত্র ১৩ বার ডাউন হয়েছে। রেকর্ড!",
  "✅ সিস্টেম অনলাইন — বিজ্ঞান সত্যিই অগ্রসর হচ্ছে, কিন্তু আমাদের সার্ভার না।",
  "🟢 সার্ভার চা খাচ্ছে। ১০ মিনিট পর আসেন। (না আসলেও সমস্যা নাই, টিকিট তো পাবেন না)।",
  "⚡ দালাল ডিটেক্টর চালু — কিন্তু ডিটেক্টর নিজেই দালালদের সাথে চা খাচ্ছে।",
  "🟢 আপটাইম: ৯৯.১% — বাকি ০.৯% 'Technical Difficulties' 😶",
  "✅ পেমেন্ট গেটওয়ে চালু! আপনার টাকা কেটে নেয়ার পর সার্ভার আবার ঘুমাবে।",
  "🟢 সার্ভার LIVE — CAPTCHA নেই, কিন্তু ধৈর্যের চরমে পরীক্ষা আছে!",
]

export const BOOKING_STEPS: string[] = [
  "কোথায় যাবেন?",
  "ট্রেন খুঁজবেন (পাবেন না)",
  "খালি সিট (মরীচিকা)",
  "টাকা গচ্চা দিন",
  "টিকেট? হাহাহা! 🎉",
]

export const QUICK_ROUTES: [string, string][] = [
  ["ঢাকা", "চট্টগ্রাম"],
  ["ঢাকা", "সিলেট"],
  ["ঢাকা", "খুলনা"],
]

export const PAYMENT_METHODS = [
  { icon: "💰", label: "কিডনি বিক্রি", funny: "ব্লাড গ্রুপ মিলিয়ে পেমেন্ট করুন। নো ক্যাপচা!" },
  { icon: "💸", label: "bKasht", funny: "কষ্ট করে বিকাশ করুন। বাংলাদেশের নিজস্ব জাদু 🪄" },
  { icon: "🏦", label: "Na-God", funny: "ট্রাস্ট মি ব্রো, সরকারি অ্যাপ।" },
  { icon: "📄", label: "বাবার সম্পত্তি", funny: "দলিল স্ক্যান করে আপলোড করুন।" },
]

export const SEAT_LEGEND = [
  { color: "#006a4e", border: "rgba(0,106,78,0.6)", label: "খালি (ক্লিক করলেই গায়েব হবে)" },
  { color: "#f42a41", border: "rgba(244,42,65,0.4)", label: "নেওয়া হয়েছে (মন্ত্রীর পিএস)" },
  {
    color: "#f59e0b",
    border: "rgba(245,158,11,0.4)",
    label: "দালাল ভাইয়ের সিট 🕵️",
  },
  { color: "#3b82f6", border: "rgba(59,130,246,0.6)", label: "আপনার পছন্দ (স্বপ্ন দেখেন)" },
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
