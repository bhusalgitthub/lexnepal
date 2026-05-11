export function QuerySidebar({
  databaseFields,
  onQueryChange,
  onSubmitQuery,
  query,
  queryPresets,
  session,
}) {
  return (
    <aside className="query-sidebar">
      <section className="sidebar-panel">
        <div className="sidebar-section">
          <span className="eyebrow">Right sidebar</span>
          <h2>Query router</h2>
          <p>
            Built into the layout, not floating. The AI classifies the issue,
            while PostgreSQL stores and returns the exact legal citation rows.
          </p>
        </div>

        <form
          className="sidebar-form"
          onSubmit={(event) => {
            event.preventDefault()
            onSubmitQuery(query)
          }}
        >
          <label className="sr-only" htmlFor="legal-query">
            Search legal citations
          </label>
          <textarea
            id="legal-query"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Describe the legal situation in Nepali or English..."
            rows="5"
            value={query}
          />
          <button className="solid-button sidebar-submit" type="submit">
            Retrieve exact citation
          </button>
        </form>

        <div className="sidebar-section">
          <span className="result-label">Quick prompts</span>
          <div className="preset-grid">
            {queryPresets.map((preset) => (
              <button
                className="preset-button"
                key={preset}
                onClick={() => onSubmitQuery(preset)}
                type="button"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-section sidebar-card">
          <div className="sidebar-metadata-row">
            <span className="result-label">Current route</span>
            <span className="confidence-badge">{session.classifier.confidence}</span>
          </div>
          <strong className="route-domain">{session.classifier.domain}</strong>
          <p>{session.classifier.routeReason}</p>
        </div>

        <div className="sidebar-section sidebar-card">
          <span className="result-label">PostgreSQL fields</span>
          <div className="field-chip-grid">
            {databaseFields.map((fieldName) => (
              <span className="field-chip" key={fieldName}>
                {fieldName}
              </span>
            ))}
          </div>
        </div>

        <div className="sidebar-section sidebar-card">
          <span className="result-label">Backend expectation</span>
          <p>
            FastAPI should call `/query`, receive classifier metadata plus
            PostgreSQL citation rows, and render `body_ne` exactly as stored.
          </p>
        </div>
      </section>
    </aside>
  )
}
