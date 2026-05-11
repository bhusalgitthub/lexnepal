import { useState } from 'react'
import './App.css'
import {
  citations,
  focusAreas,
  productColumns,
  quickPrompts,
  sprintMilestones,
  trustMetrics,
} from './appData'
import { CitationRail } from './components/CitationRail'
import { FloatingChatPanel } from './components/FloatingChatPanel'
import { MainShowcase } from './components/MainShowcase'
import { SiteHeader } from './components/SiteHeader'

export function App() {
  const [activeCitationId, setActiveCitationId] = useState(citations[0].id)

  const activeCitation =
    citations.find(({ id }) => id === activeCitationId) ?? citations[0]

  return (
    <div className="app-shell">
      <div className="background-orb background-orb-left" aria-hidden="true" />
      <div className="background-orb background-orb-right" aria-hidden="true" />

      <SiteHeader />

      <div className="page-grid">
        <CitationRail
          activeCitationId={activeCitationId}
          citations={citations}
          onSelectCitation={setActiveCitationId}
        />

        <MainShowcase
          activeCitation={activeCitation}
          focusAreas={focusAreas}
          productColumns={productColumns}
          sprintMilestones={sprintMilestones}
          trustMetrics={trustMetrics}
        />
      </div>

      <FloatingChatPanel citations={citations} quickPrompts={quickPrompts} />
    </div>
  )
}
