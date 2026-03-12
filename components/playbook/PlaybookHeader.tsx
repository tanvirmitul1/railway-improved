"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function PlaybookHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="border-b-[3px] border-[#f42a41] bg-gradient-to-br from-[#006a4e] via-[#003d2e] to-black px-3 py-4 md:px-8 md:py-6">
      <div className="mx-auto flex max-w-[950px] items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#f42a41] text-[1.1rem] md:h-[48px] md:w-[48px] md:text-[1.4rem]">
            🎬
          </div>
          <div>
            <h1 className="m-0 tracking-[1px] text-[1.05rem] font-black text-white md:text-[1.3rem]">
              UI রোস্ট বাংলাদেশ 🇧🇩
            </h1>
            <p className="m-0 text-[0.65rem] text-[#86efac] md:text-[0.75rem]">
              বাংলায় Roast &amp; Redesign — বাংলাদেশের বিখ্যাত সাইটগুলোর UI
              ভাঙা ও গড়া
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </div>
  )
}
