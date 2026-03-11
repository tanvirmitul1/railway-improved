import type { Episode, ContentStrategy } from "@/types/playbook"

export const EPISODES: Episode[] = [
  {
    id: 1,
    target: "Bangladesh Railway (railway.gov.bd)",
    emoji: "🚂",
    banglaTitle: "বাংলাদেশ রেলওয়ে — টিকেট কাটতে গিয়ে বুড়া হয়ে গেলাম",
    tagline: '"আসন পাওয়া যাচ্ছে না" — ট্রেন ছাড়ার ৩ মাস আগেও',
    roastScore: 10,
    viralPotential: "🔥🔥🔥🔥🔥",
    targetAudience: "সব বাংলাদেশি — সবাই এই কষ্ট পেয়েছে",
    hook: "বাংলাদেশ রেলওয়ের ওয়েবসাইটে টিকেট কাটতে গেলে মনে হয় আপনি হ্যাকার। এটা সরকারি ওয়েবসাইট না, এটা একটা পাজল গেম।",
    roastPoints: [
      "সকাল ৮টায় টিকেট রিলিজ হয় — ৮:০০:০১ এ সার্ভার ডাউন",
      "OTP আসে ৫ মিনিট পরে — সেশন আগেই এক্সপায়ার",
      "সিট সিলেক্ট করলে 'আসন পাওয়া যাচ্ছে না' — কিন্তু ব্রোকার ঠিকই পাচ্ছে",
      "পেমেন্ট গেলে কিন্তু টিকেট নাই — টাকাও নাই, টিকেটও নাই",
      "মোবাইলে সাইটটা দেখতে পারস্পরিক যুদ্ধের মতো লাগে",
      "লগইন করতে গেলে CAPTCHA — এত কঠিন যে রোবটও পারবে না",
      "ট্রেনের নাম খুঁজতে হয় স্ক্রল করে — কোনো সার্চ বার নেই",
    ],
    redesignFeatures: [
      "সিট ম্যাপ লাইভ — কোন কামরায় কতটা খালি, রিয়েলটাইমে দেখা যাবে",
      "OTP ৩০ সেকেন্ডের মধ্যে, নইলে অটো রিসেন্ড",
      "পেমেন্ট ফেইল হলে টাকা ৫ মিনিটে ফেরত — অটোমেটিক",
      "মোবাইল ফার্স্ট ডিজাইন — এক হাতে বুকিং সম্ভব",
      "ট্রেন সার্চ: শুধু 'ঢাকা → চট্টগ্রাম' লিখলেই হবে",
      "ওয়েটিং লিস্ট নোটিফিকেশন — সিট খালি হলে SMS আসবে",
      "বুকিং হিস্ট্রি এক জায়গায় — আর স্ক্রিনশট রাখতে হবে না",
    ],
    funnyLogic:
      "আমার রিডিজাইনে টিকেট কাটতে সময় লাগবে ৪৫ সেকেন্ড। এখন লাগে ৪৫ মিনিট — যদি ভাগ্য ভালো থাকে। যদি খারাপ থাকে, লাগে ৩ দিন।",
    script: `[হুক — ০:০০-০:০৫]
"বাংলাদেশ রেলওয়ে ওয়েবসাইটে টিকেট কাটা মানে
একটা boss fight জেতার চেয়েও কঠিন।"

[রোস্ট — ০:০৫-০:৩০]
*স্ক্রিন রেকর্ড — লাইভ টিকেট কাটার চেষ্টা*
"সকাল ৮টা বাজে। টিকেট রিলিজ হবে।
৮:০০ — সার্ভার লোড হচ্ছে...
৮:০০:৩০ — সার্ভার ডাউন।"

*হাসি/হতাশার রিঅ্যাকশন*
"OTP গেল। ওকে, অপেক্ষা করি...
৫ মিনিট পরে OTP আসলো।
কিন্তু সেশন এক্সপায়ার। আবার শুরু।"

"এটা টিকেট কাটা না ভাই।
এটা বাংলাদেশ সরকারের দেওয়া
ধৈর্য্য পরীক্ষা।"

[দাবি — ০:৩০-০:৩৫]
*ক্যামেরার দিকে তাকিয়ে*
"আমি এটা ঠিক করতে পারি।
৪৫ সেকেন্ডে টিকেট। দেখেন।"

[রিডিজাইন রিভিল — ০:৩৫-০:৫৫]
*নতুন ডিজাইন দেখান*
"সার্চ করুন। সিট বেছে নিন।
পেমেন্ট করুন। হয়ে গেল।"
*স্টপওয়াচ: ৪৩ সেকেন্ড*
"কেউ কি আমাকে রেলওয়েতে চাকরি দেবে? 😭"

[আউটরো — ০:৫৫-১:০০]
"কমেন্টে বলুন — শেষবার টিকেট কাটতে কতক্ষণ লেগেছিল।
আমার রেকর্ড হলো ২ ঘন্টা ১৭ মিনিট। 💀"`,
    contentTips: [
      "লাইভ টিকেট কাটার স্ক্রিন রেকর্ড করুন — রিয়েল ব্যর্থতা সেরা কন্টেন্ট",
      "স্টপওয়াচ দেখান — সময়ের তুলনাটাই ভাইরাল মুহূর্ত",
      "কমেন্ট বেইট: 'কতক্ষণ লেগেছিল বলুন' — সবাই শেয়ার করবে",
      "ঈদের আগে পোস্ট করুন — সবচেয়ে বেশি রিলেটেবল সময়",
    ],
    bestPostingTime: "ঈদের ১ মাস আগে 🕌",
    platform: "Facebook, YouTube Shorts, TikTok",
  },
  {
    id: 2,
    target: "bKash App",
    emoji: "💸",
    banglaTitle: "bKash — টাকা পাঠাতে গিয়ে হার্ট অ্যাটাক",
    tagline: '"ট্রানজেকশন ফেইলড" — কিন্তু টাকা গেছে',
    roastScore: 9.5,
    viralPotential: "🔥🔥🔥🔥🔥",
    targetAudience: "১৮ কোটি মানুষ — সবাই bKash ব্যবহার করে",
    hook: "bKash বাংলাদেশের সবচেয়ে বড় ফিনটেক। ১৮ কোটি মানুষ ব্যবহার করে। UI ডিজাইন হয়েছে মনে হয় ১৮ বছর আগে।",
    roastPoints: [
      "Send Money এ চার্জ — ১.৮৫% — ছোট ছোট অ্যামাউন্টে বিশাল কাটে",
      "ট্রানজেকশন হিস্ট্রি স্ক্রিনশট নেওয়া ছাড়া স্টেটমেন্ট পাওয়া যায় না সহজে",
      "নম্বর টাইপ করতে হয় ম্যানুয়ালি — কন্টাক্ট থেকে সরাসরি কাজ করে না সবসময়",
      "PIN ভুলে গেলে process অনেক লম্বা",
      "Cash Out এ চার্জ বেশি — Agent এ গেলে আবার আলাদা হিসাব",
      "App স্লো হয় peak time এ — যখন সবচেয়ে বেশি দরকার তখন কাজ করে না",
      "Offer/Cashback কোথায় আছে খুঁজে পাওয়া কঠিন",
    ],
    redesignFeatures: [
      "Send Money: কন্টাক্ট থেকে সরাসরি পাঠান — নম্বর টাইপ লাগবে না",
      "Smart Charge Calculator: পাঠানোর আগেই দেখাবে মোট কত কাটবে",
      "Transaction History: সহজে ফিল্টার করুন, PDF export করুন",
      "Quick Send: যাদের বেশি পাঠান তারা Home screen এ থাকবে",
      "Cashback Tracker: সব অফার এক জায়গায়, মিস হবে না",
      "Offline notification: নেট না থাকলেও SMS দিয়ে confirm করবে",
      "Split Bill: বন্ধুদের সাথে খরচ ভাগ করার feature",
    ],
    funnyLogic:
      "আমার রিডিজাইনে Send Money করতে লাগবে ৩ ট্যাপ। এখন লাগে: নম্বর টাইপ → ভুল হলে মুছো → আবার টাইপ → Amount → PIN → Confirm। গড়ে ৮ ট্যাপ। আমি ৬২.৫% কমিয়েছি। গণিত মিথ্যা বলে না।",
    script: `[হুক — ০:০০-০:০৫]
"bKash এ টাকা পাঠাতে গেলে
মনে হয় চাঁদে রকেট পাঠাচ্ছি।
এত confirm কেন ভাই?"

[রোস্ট — ০:০৫-০:৩০]
*App screen record*
"মামাকে ৫০০ টাকা পাঠাব।
নম্বর টাইপ করি — ১১ ডিজিট।
Amount দিই।
Charge দেখাচ্ছে ৯ টাকা ২৫ পয়সা।
৫০০ টাকা পাঠাতে ৯ টাকা?
ওকে, Confirm।
PIN দিই।
আবার Confirm।
'Transaction Successful'
আলহামদুলিল্লাহ।"

"এই পুরো প্রসেসে আমি ৮ বার কিছু না কিছু press করলাম।
মামাকে ৫০০ টাকা দিতে এত কষ্ট?"

[দাবি — ০:৩০-০:৩৫]
"৩ ট্যাপে হওয়া উচিত। আমি বানিয়েছি।"

[রিডিজাইন — ০:৩৫-০:৫৫]
"Contacts থেকে মামার নাম।
Amount টাইপ — charge আগেই দেখাচ্ছে।
PIN। শেষ।"
*৩ ট্যাপ, ১৫ সেকেন্ড*
"bKash আমাকে চাকরি দেন। 🙏"

[আউটরো]
"আপনার bKash এ সবচেয়ে বড় ভুল ট্রানজেকশন কোনটা?
কমেন্টে বলুন 😂"`,
    contentTips: [
      "Charge calculation দেখান — লোকে জানে না কত কাটে",
      "'৩ ট্যাপ vs ৮ ট্যাপ' side by side = শেয়ারযোগ্য",
      "ভুল ট্রানজেকশনের গল্প চাইলে কমেন্ট ভরে যাবে",
      "ঈদে বা বেতনের দিনে পোস্ট করুন",
    ],
    bestPostingTime: "মাসের শুরুতে / ঈদে 💰",
    platform: "Facebook সবচেয়ে ভালো, TikTok",
  },
  {
    id: 3,
    target: "Daraz Bangladesh",
    emoji: "🛒",
    banglaTitle: "Daraz — ছবিতে যা, ডেলিভারিতে অন্য কিছু",
    tagline: '"Free Delivery" — কিন্তু ৭ দিন পরে',
    roastScore: 9.7,
    viralPotential: "🔥🔥🔥🔥🔥",
    targetAudience: "অনলাইন শপার — বিশেষত যারা ধোঁকা খেয়েছেন",
    hook: "Daraz এ কিনলাম স্মার্টফোন কভার। এলো একটা রাবার ব্যান্ড। ৫ স্টার রিভিউ দেখেই কিনেছিলাম। রিভিউগুলো কোথা থেকে এলো সেটাই আজকের প্রশ্ন।",
    roastPoints: [
      "১১.১১ Sale এ দাম আগে বাড়িয়ে তারপর ডিসকাউন্ট দেখানো হয়",
      "ছবি এবং প্রোডাক্ট — দুটো ভিন্ন জিনিস",
      "রিভিউতে ৫ স্টার কিন্তু মন্তব্য 'জিনিস ভালো না' — রেটিং সিস্টেম broken",
      "Delivery date: '৩-৭ দিন' — এটা কোনো তারিখ না, এটা আশাবাদ",
      "Return process: ছবি তুলুন, ফর্ম পূরণ করুন, অপেক্ষা করুন, হয়তো ফেরত পাবেন",
      "Search result এ sponsored product আসল product এর চেয়ে বেশি",
      "Flash Sale countdown timer — পরের দিনও একই timer চলছে",
    ],
    redesignFeatures: [
      "Price History Graph — দেখুন sale এর আগে দাম বেড়েছিল কিনা",
      "Verified Purchase Only Review filter — শুধু আসল কিনেছেন এমন রিভিউ",
      "Real Delivery Date — 'আগামীকাল' বা '৫ই জানুয়ারি', '৩-৭ দিন' না",
      "Product vs Photo Comparison — ব্যবহারকারীর তোলা ছবি আলাদাভাবে দেখান",
      "১-ক্লিক Return — কারণ লিখুন, পিকআপ schedule করুন, শেষ",
      "Seller Rating: শুধু Delivery Speed, Product Accuracy আলাদা রেটিং",
      "Sale Timer Integrity: একই timer দিনের পর দিন চললে auto-flag",
    ],
    funnyLogic:
      "Daraz এর ১১.১১ Sale এ আমার কার্টের ৬টি পণ্যের ৪টির দাম Sale এর ৩ দিন আগে বেড়েছিল। আমি screenshot রেখেছিলাম। এটাই আমার ভিডিওর evidence।",
    script: `[হুক — ০:০০-০:০৫]
"Daraz এ ১১.১১ Sale।
সবকিছু ৫০% ছাড়।
আমার স্ক্রিনশট বলছে অন্য কথা।"

[রোস্ট — ০:০৫-০:৩০]
*Screenshot comparison দেখান*
"এই জুতা। ১০ নভেম্বর: ৮০০ টাকা।
১১ নভেম্বর, Sale এর দিন: ১,২০০ টাকা।
'৫০% ছাড়' দিয়ে হলো: ৬০০ টাকা।"

"ভাই, এটা ছাড় না। এটা ম্যাথ।
আমি Software Engineer, আমি বুঝি।"

*রিভিউ section দেখান*
"৪.৮ স্টার। পড়ি কী লেখা:
'জিনিস একদম বাজে, দেরিতে এসেছে' — ৫ স্টার।
এই মানুষ কি ভুলে ক্লিক করলেন?"

[দাবি — ০:৩০-০:৩৫]
"Price History দেখা দরকার।
আমি বানিয়েছি।"

[রিডিজাইন — ০:৩৫-০:৫৫]
*Price History graph দেখান*
"এই গ্রাফ দেখলেই বুঝবেন
Sale এর আগে দাম বাড়ানো হয়েছে কিনা।
Verified Review filter — শুধু আসল কেনার রিভিউ।
Real delivery date — '৫ই জানুয়ারি'। '৩-৭ দিন' না।"

[আউটরো]
"Daraz এ সবচেয়ে বাজে জিনিস কিনেছেন কখনো?
কমেন্টে বলুন — এটা therapy session 😂"`,
    contentTips: [
      "স্ক্রিনশট evidence দেখান — proof based roast সবচেয়ে শক্তিশালী",
      "১১.১১ Sale এর ৩ দিন আগে পোস্ট করুন = সর্বোচ্চ ভিউ",
      "'আপনার বাজে অভিজ্ঞতা বলুন' = হাজার কমেন্ট",
      "Price comparison screenshot সংগ্রহ করতে থাকুন এখন থেকেই",
    ],
    bestPostingTime: "১১.১১ এবং ১২.১২ Sale এর আগে 🛍️",
    platform: "Facebook, YouTube, TikTok",
  },
  {
    id: 4,
    target: "Pathao / Shohoz",
    emoji: "🛵",
    banglaTitle: "Pathao — সার্জ প্রাইসিং এবং রাইডার খোঁজার রহস্য",
    tagline: "বৃষ্টি হলে ভাড়া দ্বিগুণ — এটা কোন অ্যাপের নিয়ম?",
    roastScore: 9.3,
    viralPotential: "🔥🔥🔥🔥",
    targetAudience: "ঢাকাবাসী — রাইড শেয়ার ব্যবহারকারী",
    hook: "বৃষ্টি শুরু হলো। Pathao খুললাম। ভাড়া ৩৫০ টাকা। ৫ মিনিট আগে ছিল ১৫০। রাইডার পাচ্ছি না। বৃষ্টিতে দাঁড়িয়ে আছি। অ্যাপ বলছে 'Searching for rider...' ২০ মিনিট ধরে।",
    roastPoints: [
      "Surge pricing: বৃষ্টিতে ভাড়া ২-৩ গুণ — কোনো cap নেই",
      "'Searching for rider' — ২০ মিনিট পরেও rider নেই, কিন্তু cancel করলে charge",
      "Estimated time: '৩ মিনিট' — rider আসে ১৫ মিনিটে",
      "Driver rating: সবাই ৪.৮+ — কারণ কম রেটিং দিলে rider block করে",
      "Route suggestion: longest route নেয় — জানাজানি হয়ে গেছে",
      "Customer care: chat bot দিয়ে ঘুরিয়ে মারে, মানুষ পাওয়া যায় না",
      "Cash payment: rider অনেকসময় নেয় না, অ্যাপে লেখা নেই আগে থেকে",
    ],
    redesignFeatures: [
      "Surge Price Cap: সর্বোচ্চ ১.৫x — এর বেশি হবে না, দেখাবে কেন বাড়ছে",
      "Rider না পেলে ৫ মিনিটে auto-cancel, charge নেই",
      "Live ETA: GPS based real time — estimate না, actual location",
      "Route Lock: শুরু করার আগেই route confirm — পরে বদলানো যাবে না",
      "Cash/Card: rider এর preference আগেই দেখাবে",
      "Rating Protection: rider block করতে পারবে না — rating anonymous",
      "Transparent Surge: কেন বাড়ছে সেটা দেখাবে — বৃষ্টি/traffic/demand",
    ],
    funnyLogic:
      "Pathao এর surge pricing এর কোনো official explanation নেই। আমার redesign এ surge কারণ দেখাবে। কারণ 'দাম বাড়লাম' জাস্টিফিকেশন ছাড়া মানুষ গাড়িতে থাকে।",
    script: `[হুক — ০:০০-০:০৫]
"বৃষ্টি আসলে Pathao এর ভাড়া বাড়ে।
আর রাইডার কমে।
এই অদ্ভুত গণিত কে শেখিয়েছে?"

[রোস্ট — ০:০৫-০:৩০]
"আজকে সত্যিকারের তুলনা দেখাই।
রোদে ভাড়া: ১৩০ টাকা।"
*screenshot*
"বৃষ্টিতে ভাড়া: ৩২০ টাকা।"
*screenshot*
"একই route। একই দূরত্ব।
শুধু আকাশ পানি ঢালছে।"

"আর 'Searching for rider'...
৮ মিনিট... ১২ মিনিট... ১৮ মিনিট...
Cancel করলে আমার charge।
Wait করলে আমার কষ্ট।
Pathao এর কোনো সমস্যা নেই।"

[রিডিজাইন]
"Surge cap: maximum ১.৫x।
কেন বাড়ছে: দেখাবে।
Rider না পেলে: ৫ মিনিটে free cancel।
এটুকুই। এটুকুই দরকার ছিল।"

[আউটরো]
"বৃষ্টিতে Pathao এ কত দিয়েছেন সর্বোচ্চ?
কমেন্টে বলুন 😂 আমার রেকর্ড ৪৫০ টাকা।"`,
    contentTips: [
      "বৃষ্টির দিনে screen record করুন — real evidence সেরা",
      "Normal vs Surge price screenshot comparison = instant share",
      "রাইডারদেরও tag করুন — তারাও share করবে",
      "বর্ষাকালে পোস্ট করুন",
    ],
    bestPostingTime: "বর্ষাকাল ☔ জুন-সেপ্টেম্বর",
    platform: "Facebook, TikTok",
  },
  {
    id: 5,
    target: "Govt. Portals (জন্ম নিবন্ধন / পাসপোর্ট)",
    emoji: "🏛️",
    banglaTitle: "সরকারি ওয়েবসাইট — ডিজিটাল বাংলাদেশে এনালগ অভিজ্ঞতা",
    tagline: '"Online এ করুন" — সাইটটা অফলাইন',
    roastScore: 10,
    viralPotential: "🔥🔥🔥🔥🔥",
    targetAudience: "সকল নাগরিক — সবাই কোনো না কোনোভাবে ভোগান্তি পেয়েছেন",
    hook: "ডিজিটাল বাংলাদেশ। সব কিছু অনলাইনে করুন। জন্ম নিবন্ধন সাইটে গেলাম। IE browser দরকার। Internet Explorer। যেটা Microsoft নিজেই বন্ধ করে দিয়েছে ২০২২ সালে।",
    roastPoints: [
      "Internet Explorer support চাই — ২০২৪ সালেও",
      "Form fill করার পর submit দিলে সব মুছে যায়",
      "CAPTCHA এত কঠিন — নিজেরাও পারে না",
      "Payment gateway redirect করে — ফিরে আসলে session নেই",
      "Error message: 'An error occurred' — কোন error, কেন, কোথায়?",
      "Mobile এ কাজ করে না — zoom করে করতে হয়",
      "Office এ গেলে বলে 'অনলাইনে করুন', অনলাইনে বলে 'অফিসে যান'",
    ],
    redesignFeatures: [
      "যেকোনো modern browser এ কাজ করবে — Chrome, Firefox, Mobile",
      "Form auto-save: প্রতি ৩০ সেকেন্ডে save — session শেষে আবার পাবেন",
      "Payment return: payment এর পরে automatically আগের জায়গায় ফিরবে",
      "Human-readable error: 'আপনার NID নম্বর ভুল' — 'An error occurred' না",
      "Step indicator: মোট ৫ ধাপ, এখন ৩ নম্বরে — কতটুকু বাকি জানবেন",
      "Application tracker: status দেখুন SMS এ বা app এ",
      "Help chat: real FAQ, real answers — bot না",
    ],
    funnyLogic:
      "একটা সরকারি ফর্ম আমি ১১ বার submit করেছি। ১১তম বারে হয়েছে। কারণ জানি না। এটাকে bug না বলে 'feature' বলব — এটা আমাদের ধৈর্য্য test করছে।",
    script: `[হুক — ০:০০-০:০৫]
"ডিজিটাল বাংলাদেশে জন্ম নিবন্ধন করতে
Internet Explorer লাগে।
IE বন্ধ হয়েছে ২০২২ এ।
আমরা কোন বছরে আছি?"

[রোস্ট — ০:০৫-০:৩০]
*Screen record*
"Form পূরণ করলাম। ২০ মিনিট।
Submit। Loading...
'Session Expired।'
সব মুছে গেছে।"

"আবার। ২০ মিনিট।
Payment করতে গেলাম।
Payment হলো।
ফিরে এলাম।
'Application not found।'"

"আমার টাকা গেছে।
Application নেই।
সেশন নেই।
আমিও নেই — মানসিকভাবে।"

[রিডিজাইন]
"Auto-save। প্রতি ৩০ সেকেন্ড।
Payment return — automatically।
Error message বাংলায়, বুঝা যায়।
Status tracker — কোথায় আছে জানবেন।
এটুকু হলেই হতো। এটুকু।"

[আউটরো]
"সরকারি ওয়েবসাইটে সবচেয়ে বড় কষ্ট কোনটা?
কমেন্টে বলুন — আমি পরের ভিডিও এটা নিয়েই করব।"`,
    contentTips: [
      "Real time এ সাইট ব্যবহার করুন — real failure = best content",
      "IE দরকার — এই একটা পয়েন্টই ভাইরাল হওয়ার জন্য যথেষ্ট",
      "Everybody relates — highest potential comment section",
      "সরকারি কাজ করার সময় করুন = authentic",
    ],
    bestPostingTime: "যেকোনো সময় — এই ব্যথা চিরকালের 😭",
    platform: "Facebook, YouTube",
  },
]

export const CONTENT_STRATEGY: ContentStrategy[] = [
  {
    icon: "🎬",
    title: "ভিডিও ফরম্যাট",
    desc: "Screen record + রিঅ্যাকশন + রিডিজাইন। মুখ না দেখালেও চলবে — শুধু voice আর screen।",
  },
  {
    icon: "⏱️",
    title: "দৈর্ঘ্য",
    desc: "৪৫ সেকেন্ড - ১ মিনিট। Hook প্রথম ৩ সেকেন্ডেই।",
  },
  {
    icon: "📅",
    title: "পোস্টিং সময়",
    desc: "সমস্যার সময়ে পোস্ট করুন — ঈদে রেলওয়ে, ১১.১১তে Daraz, বৃষ্টিতে Pathao।",
  },
  {
    icon: "💬",
    title: "কমেন্ট বেইট",
    desc: "'আপনার অভিজ্ঞতা বলুন' — বাংলাদেশিরা অভিযোগ করতে ভালোবাসেন 😂",
  },
  {
    icon: "🔥",
    title: "Series করুন",
    desc: "'বাংলাদেশের সেরা বাজে UI' সিরিজ — প্রতি সপ্তাহে একটা।",
  },
  {
    icon: "🎯",
    title: "Channel নাম",
    desc: "'UI রোস্ট', 'ডিজাইন ডাক্তার', 'Better Bangladesh UI' — Bangla + English mix।",
  },
]
