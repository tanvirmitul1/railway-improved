"use client"

interface ScriptTabProps {
  script: string
}

export function ScriptTab({ script }: ScriptTabProps) {
  return (
    <div>
      <div className="mb-3 text-[0.62rem] font-bold tracking-[2px] text-amber-600 dark:text-amber-400">
        🎬 বাংলা স্ক্রিপ্ট
      </div>
      <pre className="m-0 whitespace-pre-wrap font-sans text-[0.78rem] leading-[1.9] text-slate-800 dark:text-slate-200">
        {script}
      </pre>
    </div>
  )
}
