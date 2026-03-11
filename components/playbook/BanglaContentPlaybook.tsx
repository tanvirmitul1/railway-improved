"use client"

import { usePlaybook } from "@/hooks/usePlaybook"
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

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'SolaimanLipi', sans-serif",
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#f0f0f0",
      }}
    >
      <PlaybookHeader />

      <div
        style={{
          maxWidth: 950,
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <EpisodeSidebar
          episodes={EPISODES}
          selected={selected}
          onSelect={(i) => goTo(i)}
        />

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <EpisodeHeader episode={episode} />

          <TabNav activeTab={tab} onTabChange={setTab} />

          {/* Tab content panel */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "1.25rem",
              minHeight: 300,
            }}
          >
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
