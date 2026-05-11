import { useState } from 'react'
import './App.css'
import {
  databaseFields,
  initialSession,
  queryPresets,
  runMockRetrieval,
} from './appData'
import { QuerySidebar } from './components/QuerySidebar'
import { RetrievalWorkspace } from './components/RetrievalWorkspace'
import { SiteHeader } from './components/SiteHeader'

export function App() {
  // Keep the typed query local to the app shell so both panels stay in sync.
  const [query, setQuery] = useState(initialSession.query)

  // The active session mimics the backend payload the UI would receive from FastAPI.
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
        <RetrievalWorkspace session={session} />

        <QuerySidebar
          databaseFields={databaseFields}
          onQueryChange={setQuery}
          onSubmitQuery={submitQuery}
          query={query}
          queryPresets={queryPresets}
          session={session}
        />
      </div>
    </div>
  )
}
