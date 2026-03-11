export interface Episode {
  id: number
  target: string
  emoji: string
  banglaTitle: string
  tagline: string
  roastScore: number
  viralPotential: string
  targetAudience: string
  hook: string
  roastPoints: string[]
  redesignFeatures: string[]
  funnyLogic: string
  script: string
  contentTips: string[]
  bestPostingTime: string
  platform: string
  videoFormat?: string
}

export interface ContentStrategy {
  icon: string
  title: string
  desc: string
}

export type TabKey = "roast" | "redesign" | "script" | "tips"
