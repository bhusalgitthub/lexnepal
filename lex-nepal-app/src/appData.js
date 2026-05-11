export const citations = [
  {
    id: '145',
    article: 'Article 145',
    cluster: 'Termination and notice',
    status: 'Amended',
    versionDate: '2079-12-05',
    reviewer: 'Aastha Karki - LLB Candidate',
    sourceLabel: 'Labor Act, 2074 source PDF',
    summary:
      'Pinned for dismissal, notice-period, and wrongful termination style queries in the Labor Act demo set.',
    proofLine:
      'Result card should surface the article number, version date, status badge, source PDF, and named reviewer without paraphrasing the section text.',
  },
  {
    id: '93',
    article: 'Article 93',
    cluster: 'Leave and worker welfare',
    status: 'Current',
    versionDate: '2074-06-19',
    reviewer: 'Nima Sherpa - Law Student Reviewer',
    sourceLabel: 'Verified corpus entry',
    summary:
      'Useful for leave-related prompts where the user describes time off, entitlements, or absence handling in plain language.',
    proofLine:
      'The UI keeps this card citation-first so the lawyer sees provenance before interpretation.',
  },
  {
    id: '34',
    article: 'Article 34',
    cluster: 'Remuneration and wage handling',
    status: 'Current',
    versionDate: '2074-06-19',
    reviewer: 'Sanjog Bista - Corpus Lead',
    sourceLabel: 'Labor Act, 2074 source PDF',
    summary:
      'Acts as the demo cluster for wage, salary, deduction, and payment-timing questions in English or Nepali.',
    proofLine:
      'Lexical scoring should dominate here because wage queries often mirror statutory wording closely.',
  },
  {
    id: '67',
    article: 'Article 67',
    cluster: 'Benefits, social security, and employer duty',
    status: 'Current',
    versionDate: '2074-06-19',
    reviewer: 'Prerana Shrestha - Legal Validator',
    sourceLabel: 'Reviewer-approved section',
    summary:
      'A fit for benefit and contribution questions when the user is unsure whether the issue is payroll, welfare, or dismissal.',
    proofLine:
      'This card is intentionally shown as a cluster, not a generated summary, to reinforce the product contract.',
  },
]

export const trustMetrics = [
  {
    label: 'Demo corpus',
    value: '30 verified articles',
    detail: 'Labor Act, 2074 only',
  },
  {
    label: 'Retrieval contract',
    value: 'Top-5 verbatim results',
    detail: 'AI routes, DB answers',
  },
  {
    label: 'Transparency',
    value: 'Classifier always visible',
    detail: 'One-click override',
  },
]

export const focusAreas = [
  {
    title: 'Verbatim retrieval',
    tag: 'Product premise',
    description:
      'Lawyers describe a situation in Nepali or English, then receive exact corpus rows with status, version date, source hash, and reviewer sign-off.',
  },
  {
    title: 'AI-assisted routing',
    tag: 'Classifier only',
    description:
      'The assistant never writes or paraphrases the law. It only routes the query into a domain, confidence bucket, and alternate options.',
  },
  {
    title: 'Human-reviewed corpus',
    tag: 'Trust layer',
    description:
      'Every demo article is tied back to a named reviewer and a source PDF link so the result card carries legal provenance, not just text.',
  },
  {
    title: 'Honest failure mode',
    tag: 'Safer UX',
    description:
      'If the query is outside the corpus or confidence is low, the interface is allowed to say no instead of fabricating an answer.',
  },
]

export const productColumns = [
  {
    title: 'Main Features',
    description: 'The broader Lex Nepal platform keeps the law library and legal-operations layer in one place.',
    items: [
      'User registration and login',
      'Lawyer and client dashboard',
      'Appointment booking system',
      'Case management',
      'Secure document upload',
      'Online legal consultation',
      'Notification and status updates',
    ],
  },
  {
    title: 'Why It Helps',
    description: 'The site narrative combines the digital law-firm workflow with the primary-law retrieval promise.',
    items: [
      'Reduce paperwork and manual tracking',
      'Keep client-lawyer communication faster',
      'Make legal records easier to manage',
      'Surface legal information quickly',
      'Give teams a cleaner review trail',
      'Save time during legal intake',
    ],
  },
  {
    title: 'Future Scope',
    description: 'These next-step ideas come straight from the project brief and sit naturally beside the demo vision.',
    items: [
      'AI legal chatbot for guided intake',
      'Mobile application',
      'Online payment system',
      'Video consultation feature',
      'Multi-language support',
      'Cross-act expansion beyond labor law',
    ],
  },
]

export const sprintMilestones = [
  {
    hour: 'H1',
    time: '11:00-12:00',
    outcome: 'Scaffold, `/ping`, preview deploy, Postgres + pgvector, and one fake row flowing through the stack.',
  },
  {
    hour: 'H2',
    time: '12:00-13:00',
    outcome: 'Schema ready, OCR underway, first ten articles inserted, and classifier JSON contract stubbed.',
  },
  {
    hour: 'H3',
    time: '13:00-14:00',
    outcome: 'All demo articles loaded, embeddings stored, and classifier returning valid structured output.',
  },
  {
    hour: 'H4',
    time: '14:00-15:00',
    outcome: 'Hybrid retrieval live with lexical plus semantic scoring and full provenance in top-five results.',
  },
  {
    hour: 'H5',
    time: '15:00-16:00',
    outcome: 'Frontend wired with classifier banner, result cards, status badges, and override-friendly UX.',
  },
  {
    hour: 'H6',
    time: '16:00-17:00',
    outcome: 'End-to-end production integration and gold-query pass with honest-failure checks included.',
  },
  {
    hour: 'H7',
    time: '17:00-18:00',
    outcome: 'Law-student validation pass locks the final demo set and removes any article that cannot be trusted.',
  },
  {
    hour: 'H8',
    time: '18:00-19:00',
    outcome: 'Code freeze, deploy, smoke test, and SQL dump capture before the hard stop.',
  },
]

export const quickPrompts = [
  'Worker fired without notice after five years of service',
  'Employee asking about leave and absence handling',
  'How should wage deductions be checked before payment?',
]
