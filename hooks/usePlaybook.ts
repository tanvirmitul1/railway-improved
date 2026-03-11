import { useState } from "react"
import type { TabKey } from "@/types/playbook"
import { EPISODES } from "@/constants/playbook"

/**
 * Manages episode selection and tab navigation for the content playbook page.
 */
export function usePlaybook() {
  const [selected, setSelected] = useState(0)
  const [tab, setTab] = useState<TabKey>("roast")

  const goTo = (index: number, newTab: TabKey = "roast") => {
    setSelected(index)
    setTab(newTab)
  }

  const goNext = () => {
    if (selected < EPISODES.length - 1) setSelected((s) => s + 1)
  }

  const goPrev = () => {
    if (selected > 0) setSelected((s) => s - 1)
  }

  return {
    selected,
    tab,
    setTab,
    goTo,
    goNext,
    goPrev,
    episode: EPISODES[selected],
    totalEpisodes: EPISODES.length,
    isFirst: selected === 0,
    isLast: selected === EPISODES.length - 1,
  }
}
