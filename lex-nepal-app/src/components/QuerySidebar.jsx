export function QuerySidebar({ onQueryChange, onSubmitQuery, query }) {
  return (
    <aside className="query-sidebar">
      <section className="sidebar-panel sidebar-panel-minimal">
        <div className="sidebar-section">
          <h2>Ask your Query</h2>
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
            placeholder="Ask your legal query..."
            rows="10"
            value={query}
          />
          <button className="solid-button sidebar-submit" type="submit">
            Search citations
          </button>
        </form>
      </section>
    </aside>
  )
}
