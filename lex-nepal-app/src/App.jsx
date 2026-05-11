import { useState } from 'react'
import './App.css'
import { demoQuestions, initialSession, runMockRetrieval } from './appData'
import { QuerySidebar } from './components/QuerySidebar'
import { RetrievalWorkspace } from './components/RetrievalWorkspace'
import { SiteHeader } from './components/SiteHeader'

export function App() {
  // Keep the query text local so the sidebar and results area stay synchronized.
  const [query, setQuery] = useState(initialSession.query)

  // The session shape mirrors the payload the real backend can return later.
  const [session, setSession] = useState(initialSession)

  function submitQuery(nextQuery) {
    const trimmedQuery = nextQuery.trim()

    if (!trimmedQuery) {
      return
    }

    setQuery(trimmedQuery)
    setSession(runMockRetrieval(trimmedQuery))
  }

  return (
    <div className="app-shell">
      <div className="background-orb background-orb-left" aria-hidden="true" />
      <div className="background-orb background-orb-right" aria-hidden="true" />

      <SiteHeader />

      <div className="workspace-grid">
        <RetrievalWorkspace
          demoQuestions={demoQuestions}
          onSelectDemoQuestion={submitQuery}
          session={session}
        />

        <QuerySidebar
          onQueryChange={setQuery}
          onSubmitQuery={submitQuery}
          query={query}
        />
      </div>
    </div>
  )
}
