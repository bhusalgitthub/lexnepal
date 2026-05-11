export function MainShowcase({
  activeCitation,
  focusAreas,
  productColumns,
  sprintMilestones,
  trustMetrics,
}) {
  return (
    <main className="main-showcase">
      <section className="section-surface hero-surface">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Versioned Nepali primary-law corpus</span>
            <h1>Verbatim law on the page. AI only as the router.</h1>
            <p className="hero-text">
              Lex Nepal blends the citation discipline of a legal research tool
              with the workflow polish of a modern law-firm platform. The result
              is a site where the lawyer can search in plain language, inspect
              classifier output, and still land on trusted statutory text with
              human review attached.
            </p>

            <div className="hero-actions-row">
              <a className="solid-button" href="#sprint">
                View Build Sprint
              </a>
              <a className="ghost-button" href="#platform">
                Explore Platform Features
              </a>
            </div>

            <div className="metric-grid" role="list">
              {trustMetrics.map((metric) => (
                <article className="metric-card" key={metric.label} role="listitem">
                  <span className="metric-label">{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-spotlight">
            <div className="classifier-panel">
              <div className="classifier-header">
                <span className="eyebrow">Visible classifier output</span>
                <span className="confidence-badge">High confidence</span>
              </div>
              <h2>Domain: labor</h2>
              <p>
                Alternates remain visible and overridable, so the UI stays honest
                about ambiguity instead of pretending the router is infallible.
              </p>
              <div className="chip-row">
                <span className="info-chip">Alternate: civil</span>
                <span className="info-chip">Alternate: company</span>
                <span className="info-chip">Override ready</span>
              </div>
            </div>

            <div className="highlight-card">
              <span className="eyebrow">Pinned citation focus</span>
              <h3>{activeCitation.article}</h3>
              <strong>{activeCitation.cluster}</strong>
              <p>{activeCitation.summary}</p>
              <div className="highlight-footer">
                <span>{activeCitation.status}</span>
                <span>{activeCitation.versionDate}</span>
                <span>{activeCitation.reviewer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="section-heading">
          <span className="eyebrow">What the product emphasizes</span>
          <h2>Built for trust before convenience</h2>
          <p>
            The interface pulls the strongest ideas from the brief into cards
            that feel suited to legal work rather than generic SaaS marketing.
          </p>
        </div>

        <div className="focus-grid" role="list">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title} role="listitem">
              <span className="focus-tag">{area.tag}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-surface" id="platform">
        <div className="section-heading">
          <span className="eyebrow">Platform story</span>
          <h2>From legal retrieval to full practice operations</h2>
          <p>
            The longer project description adds the broader law-firm management
            vision, so the page keeps both narratives visible without diluting
            the Labor Act demo.
          </p>
        </div>

        <div className="column-grid">
          {productColumns.map((column) => (
            <article className="column-card" key={column.title}>
              <h3>{column.title}</h3>
              <p>{column.description}</p>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-surface" id="sprint">
        <div className="section-heading">
          <span className="eyebrow">Today&apos;s execution plan</span>
          <h2>Eight-hour build sprint, one shippable result each hour</h2>
          <p>
            This turns the sprint plan into a visual roadmap so visitors
            understand how the demo comes together from corpus, backend, AI
            routing, and frontend integration.
          </p>
        </div>

        <div className="timeline-grid" role="list">
          {sprintMilestones.map((milestone) => (
            <article className="timeline-card" key={milestone.hour} role="listitem">
              <span className="timeline-hour">{milestone.hour}</span>
              <strong>{milestone.time}</strong>
              <p>{milestone.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="disclaimer-bar" aria-label="Disclaimer">
        Retrieval aid only. Verify currency with official sources before court
        submission. Lex Nepal does not provide legal advice.
      </section>
    </main>
  )
}
