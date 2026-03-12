"use client"

import { usePlaybook } from "@/hooks/usePlaybook"
import { useIsMobile } from "@/hooks/useIsMobile"
import { EPISODES, CONTENT_STRATEGY } from "@/constants/playbook"
import { PlaybookHeader } from "./PlaybookHeader"
import { EpisodeSidebar } from "./EpisodeSidebar"
import { EpisodeHeader } from "./EpisodeHeader"
import { TabNav } from "./TabNav"
import { EpisodeNav } from "./EpisodeNav"
import { ContentStrategySection } from "./ContentStrategySection"
import { RoastTab } from "./tabs/RoastTab"
import { RedesignTab } from "./tabs/RedesignTab"
import { ScriptTab } from "./tabs/ScriptTab"
import { TipsTab } from "./tabs/TipsTab"

/**
 * Root component for the Bangla content playbook.
 * All state lives in usePlaybook; this component is purely declarative.
 */
export function BanglaContentPlaybook() {
  const { selected, tab, setTab, goTo, goNext, goPrev, episode, totalEpisodes, isFirst, isLast } =
    usePlaybook()
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PlaybookHeader />

      <div className="mx-auto flex max-w-[950px] flex-col gap-4 p-3 md:flex-row md:gap-6 md:p-6">
        <EpisodeSidebar
          episodes={EPISODES}
          selected={selected}
          onSelect={(i) => goTo(i)}
        />

        <div className="min-w-0 flex-1">
          <EpisodeHeader episode={episode} />

          <TabNav activeTab={tab} onTabChange={setTab} />

          {/* Tab content panel */}
          <div className="min-h-[300px] rounded-xl border border-border bg-card/30 p-5">
            {tab === "roast" && (
              <RoastTab roastPoints={episode.roastPoints} />
            )}
            {tab === "redesign" && (
              <RedesignTab
                funnyLogic={episode.funnyLogic}
                redesignFeatures={episode.redesignFeatures}
              />
            )}
            {tab === "script" && <ScriptTab script={episode.script} />}
            {tab === "tips" && (
              <TipsTab
                contentTips={episode.contentTips}
                videoFormat={episode.videoFormat}
              />
            )}
          </div>

          <EpisodeNav
            selected={selected}
            total={totalEpisodes}
            isFirst={isFirst}
            isLast={isLast}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>

      <ContentStrategySection strategies={CONTENT_STRATEGY} />
    </div>
  )
}
