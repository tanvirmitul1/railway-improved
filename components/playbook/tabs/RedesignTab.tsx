"use client"

interface RedesignTabProps {
  funnyLogic: string
  redesignFeatures: string[]
}

export function RedesignTab({ funnyLogic, redesignFeatures }: RedesignTabProps) {
  return (
    <div>
      <div className="mb-2 text-[0.62rem] font-bold tracking-[2px] text-green-500">
        ✨ আমার রিডিজাইনে কী থাকবে
      </div>

      <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-[0.78rem] leading-[1.6] text-green-800 dark:bg-green-500/5 dark:text-green-200">
        💡 <strong>মজার যুক্তি:</strong> {funnyLogic}
      </div>

      {redesignFeatures.map((feature, i) => (
        <div key={i} className="mb-[0.6rem] flex items-start gap-3">
          <span className="shrink-0 text-[0.9rem] text-green-500">
            ✓
          </span>
          <span className="text-[0.82rem] leading-[1.6] text-muted-foreground">
            {feature}
          </span>
        </div>
      ))}
    </div>
  )
}
