function ResultCard({ result }) {
  // Each card mirrors one verified PostgreSQL row returned by the backend.
  return (
    <article className="result-card">
      <div className="result-card-top">
        <div>
          <span className="result-label">Article {result.articleNumber}</span>
          <h3>{result.heading}</h3>
        </div>
        <span className={`status-pill status-${result.status.toLowerCase()}`}>
          {result.status}
        </span>
      </div>

      <p className="result-exact-text">{result.exactCitation}</p>

      <dl className="result-metadata">
        <div>
          <dt>Version date</dt>
          <dd>{result.versionDate}</dd>
        </div>
        <div>
          <dt>Reviewer</dt>
          <dd>
            {result.reviewerName} - {result.reviewerCredential}
          </dd>
        </div>
        <div>
          <dt>OCR confidence</dt>
          <dd>{result.ocrConfidence}</dd>
        </div>
        <div>
          <dt>Source PDF</dt>
          <dd>
            <a href={result.sourceUrl} rel="noreferrer" target="_blank">
              View source
            </a>
          </dd>
        </div>
      </dl>

      <p className="result-provenance">{result.provenance}</p>
    </article>
  )
}

export function RetrievalWorkspace({ session }) {
  const hasResults = session.results.length > 0

  return (
    <main className="workspace-panel">
      <section className="workspace-intro">
        <div>
          <span className="eyebrow">Citation retrieval workspace</span>
          <h1>Show the statute exactly as stored in the verified corpus.</h1>
        </div>

        <div className="classifier-strip">
          <div className="classifier-primary">
            <span className="result-label">Detected domain</span>
            <strong>{session.classifier.domain}</strong>
          </div>
          <div className="classifier-primary">
            <span className="result-label">Confidence</span>
            <strong>{session.classifier.confidence}</strong>
          </div>
          <div className="classifier-primary classifier-alternates">
            <span className="result-label">Alternates</span>
            <div className="chip-row">
              {session.classifier.alternates.map((alternate) => (
                <span className="info-chip" key={alternate}>
                  {alternate}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="workspace-summary">
          Query: <strong>{session.query}</strong>
        </p>
        <p className="workspace-summary">{session.classifier.routeReason}</p>
      </section>

      <section className="answers-panel">
        <div className="answers-panel-header">
          <div>
            <span className="eyebrow">Results</span>
            <h2>Exact citation results</h2>
          </div>
          <p>
            This is the only scrollable area on the page so lawyers can stay
            focused on the returned provisions.
          </p>
        </div>

        <div className="answers-scroll-region">
          {hasResults ? (
            <div className="results-stack">
              {session.results.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No exact citation found in the current PostgreSQL corpus.</h3>
              <p>
                The interface should refuse cleanly when the corpus does not have
                a confident exact match, instead of paraphrasing the law.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
