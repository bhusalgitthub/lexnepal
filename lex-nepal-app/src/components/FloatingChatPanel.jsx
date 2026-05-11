import { useState } from 'react'

function buildAssistantReply(query, citations) {
  const normalizedQuery = query.toLowerCase()

  if (
    /fired|termination|dismiss|removed|notice|service/.test(normalizedQuery)
  ) {
    return {
      domain: 'labor',
      confidence: 'High',
      message:
        'This looks like a termination-flow question. The interface should surface dismissal-related citations first, then let the lawyer override the domain if needed.',
      articles: citations.filter(({ id }) => ['145', '93'].includes(id)),
    }
  }

  if (/leave|absence|holiday|maternity|time off/.test(normalizedQuery)) {
    return {
      domain: 'labor',
      confidence: 'High',
      message:
        'This reads like a leave-and-entitlement query. Show leave-focused articles with status, version date, and reviewer details before any broader guidance.',
      articles: citations.filter(({ id }) => ['93', '67'].includes(id)),
    }
  }

  if (/wage|salary|deduction|bonus|payment|gratuity/.test(normalizedQuery)) {
    return {
      domain: 'labor',
      confidence: 'Medium',
      message:
        'Payment issues often mix lexical and semantic matches, so the banner should keep alternates visible while ranking wage-related citations highest.',
      articles: citations.filter(({ id }) => ['34', '67'].includes(id)),
    }
  }

  if (/appointment|dashboard|case|document|consultation/.test(normalizedQuery)) {
    return {
      domain: 'operations',
      confidence: 'Medium',
      message:
        'This points toward the broader digital law-firm layer from the project brief rather than a narrow Labor Act article, so the product should separate platform tasks from corpus retrieval.',
      articles: [],
    }
  }

  return {
    domain: 'other',
    confidence: 'Low',
    message:
      'Outside the current Labor Act demo corpus. The honest-failure path should invite a manual override or a broader rephrase instead of guessing.',
    articles: [],
  }
}

export function FloatingChatPanel({ citations, quickPrompts }) {
  const [isOpen, setIsOpen] = useState(true)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 'intro',
      role: 'assistant',
      domain: 'labor',
      confidence: 'Ready',
      message:
        'Describe a legal situation in Nepali or English. This demo panel shows how the right-side router can stay visible without taking over the whole page.',
      articles: citations.slice(0, 1),
    },
  ])

  function submitQuery(nextQuery) {
    const trimmedQuery = nextQuery.trim()

    if (!trimmedQuery) {
      return
    }

    const assistantReply = buildAssistantReply(trimmedQuery, citations)

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${currentMessages.length + 1}`,
        role: 'user',
        message: trimmedQuery,
      },
      {
        id: `assistant-${currentMessages.length + 2}`,
        role: 'assistant',
        ...assistantReply,
      },
    ])
    setDraft('')
  }

  return (
    <div className={`chat-dock${isOpen ? ' is-open' : ''}`}>
      {isOpen ? (
        <section
          aria-label="Lex Nepal query router"
          className="chat-panel"
        >
          <div className="chat-panel-header">
            <div>
              <span className="eyebrow">Floating right panel</span>
              <h2>Lex Nepal Chat</h2>
            </div>
            <button
              aria-label="Minimize chat panel"
              className="icon-button"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              -
            </button>
          </div>

          <div className="quick-prompt-row">
            {quickPrompts.map((prompt) => (
              <button
                className="quick-prompt"
                key={prompt}
                onClick={() => submitQuery(prompt)}
                type="button"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="chat-thread">
            {messages.map((message) => (
              <article
                className={`chat-bubble chat-bubble-${message.role}`}
                key={message.id}
              >
                {message.role === 'assistant' ? (
                  <>
                    <div className="chat-bubble-meta">
                      <span>Domain: {message.domain}</span>
                      <span>{message.confidence}</span>
                    </div>
                    <p>{message.message}</p>
                    {message.articles?.length ? (
                      <div className="chat-citation-row">
                        {message.articles.map((article) => (
                          <span className="chat-citation-chip" key={article.id}>
                            {article.article}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="chat-empty-state">
                        No citation returned. Suggest override or refusal UX.
                      </span>
                    )}
                  </>
                ) : (
                  <p>{message.message}</p>
                )}
              </article>
            ))}
          </div>

          <form
            className="chat-composer"
            onSubmit={(event) => {
              event.preventDefault()
              submitQuery(draft)
            }}
          >
            <label className="sr-only" htmlFor="chat-query">
              Ask Lex Nepal
            </label>
            <input
              id="chat-query"
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type a legal situation..."
              type="text"
              value={draft}
            />
            <button className="solid-button compact-button" type="submit">
              Send
            </button>
          </form>
        </section>
      ) : (
        <button
          className="chat-tab"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          Open Lex Nepal Chat
        </button>
      )}
    </div>
  )
}
