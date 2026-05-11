export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="brand-mark">Lex Nepal</span>
        <p className="brand-copy">
          Exact Nepali legal citations, never paraphrased answers.
        </p>
      </div>

      <nav aria-label="User actions" className="header-actions">
        <button className="ghost-button" type="button">
          Log in
        </button>
        <button className="solid-button" type="button">
          Sign up
        </button>
      </nav>
    </header>
  )
}
