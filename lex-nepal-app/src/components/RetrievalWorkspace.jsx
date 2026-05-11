function DemoQuestionCard({ question, onSelect }) {
  return (
    <button
      className="demo-card"
      onClick={() => onSelect(question.title)}
      type="button"
    >
      <span className="result-label">{question.tag}</span>
      <h3>{question.title}</h3>
    </button>
  )
}

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

export function RetrievalWorkspace({
  demoQuestions,
  onSelectDemoQuestion,
  session,
}) {
  const hasQuery = session.query.trim().length > 0
  const hasResults = session.results.length > 0

  return (
    <main className="workspace-panel">
      <section className="answers-panel answers-panel-full">
        <div className="answers-panel-header answers-panel-header-minimal">
          <div>
            <span className="eyebrow">
              {hasQuery ? 'Exact citation results' : 'Demo questions'}
            </span>
            <h2>
              {hasQuery ? 'Nepal legal citation results' : 'Try one of these questions'}
            </h2>
          </div>
        </div>

        <div className="answers-scroll-region">
          {!hasQuery ? (
            <div className="demo-grid">
              {demoQuestions.map((question) => (
                <DemoQuestionCard
                  key={question.id}
                  onSelect={onSelectDemoQuestion}
                  question={question}
                />
              ))}
            </div>
          ) : hasResults ? (
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
