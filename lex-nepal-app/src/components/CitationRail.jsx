export function CitationRail({
  activeCitationId,
  citations,
  onSelectCitation,
}) {
  const activeCitation =
    citations.find(({ id }) => id === activeCitationId) ?? citations[0]

  return (
    <aside className="citation-rail" aria-labelledby="citation-rail-title">
      <div className="section-surface rail-surface">
        <div className="section-heading">
          <span className="eyebrow">Left rail</span>
          <h2 id="citation-rail-title">Law citations</h2>
          <p>
            Keep the legal source material visible while the center panel tells
            the product story.
          </p>
        </div>

        <ul className="citation-list">
          {citations.map((citation) => {
            const isActive = citation.id === activeCitationId

            return (
              <li key={citation.id}>
                <button
                  aria-pressed={isActive}
                  className={`citation-card${isActive ? ' is-active' : ''}`}
                  onClick={() => onSelectCitation(citation.id)}
                  type="button"
                >
                  <div className="citation-card-header">
                    <span className="citation-article">{citation.article}</span>
                    <span
                      className={`status-pill status-${citation.status.toLowerCase()}`}
                    >
                      {citation.status}
                    </span>
                  </div>
                  <strong>{citation.cluster}</strong>
                  <p>{citation.summary}</p>
                  <span className="meta-line">
                    Version date: {citation.versionDate}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="citation-proof">
          <span className="eyebrow">Selected citation</span>
          <h3>{activeCitation.article}</h3>
          <p>{activeCitation.proofLine}</p>
          <dl className="proof-grid">
            <div>
              <dt>Reviewer</dt>
              <dd>{activeCitation.reviewer}</dd>
            </div>
            <div>
              <dt>Source</dt>
              <dd>{activeCitation.sourceLabel}</dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  )
}
