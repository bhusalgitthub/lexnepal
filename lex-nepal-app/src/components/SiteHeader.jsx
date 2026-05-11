export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="brand-mark">Lex Nepal</span>
        <p className="brand-copy">
          Smart digital law workspace with citation-first retrieval.
        </p>
      </div>

      <div className="header-actions">
        <button className="ghost-button" type="button">
          Log in
        </button>
        <button className="solid-button" type="button">
          Sign up
        </button>
      </div>
    </header>
  )
}
