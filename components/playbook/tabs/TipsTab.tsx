"use client"

interface TipsTabProps {
  contentTips: string[]
  videoFormat?: string
}

const DEFAULT_VIDEO_FORMAT =
  "Screen record → reaction → redesign reveal. স্টপওয়াচ দেখান উভয় ক্ষেত্রে।"

export function TipsTab({ contentTips, videoFormat }: TipsTabProps) {
  return (
    <div>
      <div className="mb-3 text-[0.62rem] font-bold tracking-[2px] text-purple-600 dark:text-purple-400">
        💡 কন্টেন্ট কৌশল
      </div>

      {contentTips.map((tip, i) => (
        <div key={i} className="mb-[0.65rem] flex items-start gap-3">
          <span className="shrink-0 text-purple-600 dark:text-purple-400">▸</span>
          <span className="text-[0.82rem] leading-[1.6] text-muted-foreground">
            {tip}
          </span>
        </div>
      ))}

      <div className="mt-4 rounded-lg border border-purple-400/20 bg-purple-400/10 p-3 dark:bg-purple-400/5">
        <div className="mb-1 text-[0.65rem] font-bold text-purple-700 dark:text-purple-400">
          📱 ভিডিও ফরম্যাট
        </div>
        <div className="text-[0.75rem] text-purple-800 dark:text-purple-300">
          {videoFormat ?? DEFAULT_VIDEO_FORMAT}
        </div>
      </div>
    </div>
  )
}
