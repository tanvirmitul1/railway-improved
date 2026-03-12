"use client"

interface RoastTabProps {
  roastPoints: string[]
}

export function RoastTab({ roastPoints }: RoastTabProps) {
  return (
    <div>
      <div className="mb-4 text-[0.62rem] font-bold tracking-[2px] text-[#f42a41] dark:text-red-500">
        😤 যা যা ভুল আছে এই সাইটে
      </div>
      {roastPoints.map((point, i) => (
        <div key={i} className="mb-[0.6rem] flex items-start gap-3">
          <span className="mt-[2px] shrink-0 rounded-full bg-[#f42a41] px-[7px] py-[2px] text-[0.6rem] font-bold text-white">
            #{i + 1}
          </span>
          <span className="text-[0.82rem] leading-[1.6] text-muted-foreground">
            {point}
          </span>
        </div>
      ))}
    </div>
  )
}
