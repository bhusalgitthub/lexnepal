// Demo question cards for the empty workspace state before the user searches.
export const demoQuestions = [
  {
    id: 'termination',
    title: 'Worker fired without notice after five years of service',
    tag: 'Termination',
  },
  {
    id: 'leave',
    title: 'Employee asking about leave and absence handling',
    tag: 'Leave',
  },
  {
    id: 'wages',
    title: 'How should wage deductions be checked before payment?',
    tag: 'Wages',
  },
]

const retrievalCatalog = {
  termination: {
    classifier: {
      domain: 'labor',
      confidence: 'high',
    },
    results: [
      {
        id: 'labor-145',
        articleNumber: '145',
        heading: 'Termination and notice',
        status: 'Amended',
        versionDate: '2079-12-05',
        sourceUrl: 'https://lawcommission.gov.np/en/wp-content/uploads/2019/07/The-Labor-Act-2017-2074.pdf',
        reviewerName: 'Aastha Karki',
        reviewerCredential: 'LLB Candidate',
        ocrConfidence: '0.98',
        exactCitation:
          'Exact statutory text should render here from PostgreSQL `body_ne` without rewriting, shortening, or paraphrasing.',
        provenance:
          'Served from reviewer-approved corpus row with source PDF linkage and amendment-aware status metadata.',
      },
      {
        id: 'labor-146',
        articleNumber: '146',
        heading: 'Notice period and service protection',
        status: 'Current',
        versionDate: '2074-06-19',
        sourceUrl: 'https://lawcommission.gov.np/en/wp-content/uploads/2019/07/The-Labor-Act-2017-2074.pdf',
        reviewerName: 'Nima Sherpa',
        reviewerCredential: 'Law Student Reviewer',
        ocrConfidence: '0.97',
        exactCitation:
          'This card is reserved for the verbatim citation block returned by the backend, preserving line breaks from the verified corpus.',
        provenance:
          'Filtered by labor domain, reviewed_at present, and status restricted to current or amended rows.',
      },
    ],
  },
  leave: {
    classifier: {
      domain: 'labor',
      confidence: 'high',
    },
    results: [
      {
        id: 'labor-93',
        articleNumber: '93',
        heading: 'Leave and worker welfare',
        status: 'Current',
        versionDate: '2074-06-19',
        sourceUrl: 'https://lawcommission.gov.np/en/wp-content/uploads/2019/07/The-Labor-Act-2017-2074.pdf',
        reviewerName: 'Prerana Shrestha',
        reviewerCredential: 'Legal Validator',
        ocrConfidence: '0.99',
        exactCitation:
          'Verbatim leave-related law text from PostgreSQL would appear in this space exactly as stored in the approved corpus.',
        provenance:
          'Result row is shown with reviewer identity, OCR confidence, and source PDF traceability for court-safe verification.',
      },
    ],
  },
  wages: {
    classifier: {
      domain: 'labor',
      confidence: 'medium',
    },
    results: [
      {
        id: 'labor-34',
        articleNumber: '34',
        heading: 'Remuneration and wage handling',
        status: 'Current',
        versionDate: '2074-06-19',
        sourceUrl: 'https://lawcommission.gov.np/en/wp-content/uploads/2019/07/The-Labor-Act-2017-2074.pdf',
        reviewerName: 'Sanjog Bista',
        reviewerCredential: 'Corpus Lead',
        ocrConfidence: '0.96',
        exactCitation:
          'This region is intentionally designed for the unmodified statutory citation returned from the PostgreSQL record.',
        provenance:
          'Hybrid SQL ranking can promote this row through lexical matches first, with pgvector acting as fallback recall.',
      },
      {
        id: 'labor-67',
        articleNumber: '67',
        heading: 'Benefits, social security, and employer duty',
        status: 'Current',
        versionDate: '2074-06-19',
        sourceUrl: 'https://lawcommission.gov.np/en/wp-content/uploads/2019/07/The-Labor-Act-2017-2074.pdf',
        reviewerName: 'Bina Rai',
        reviewerCredential: 'Validation Reviewer',
        ocrConfidence: '0.95',
        exactCitation:
          'When the backend includes adjacent relevant provisions, each citation still renders as an independent exact-text card.',
        provenance:
          'Useful as the semantic fallback result when payment questions also touch employer obligations or contribution logic.',
      },
    ],
  },
}

function createRefusalSession(query) {
  return {
    query,
    classifier: {
      domain: 'other',
      confidence: 'low',
    },
    results: [],
  }
}

// This mock routing function mirrors the shape of a future `/query` response.
export function runMockRetrieval(query) {
  const normalizedQuery = query.toLowerCase()

  if (/fired|termination|dismiss|notice|service/.test(normalizedQuery)) {
    return {
      query,
      ...retrievalCatalog.termination,
    }
  }

  if (/leave|absence|holiday|maternity|time off/.test(normalizedQuery)) {
    return {
      query,
      ...retrievalCatalog.leave,
    }
  }

  if (/wage|salary|deduction|bonus|payment|gratuity/.test(normalizedQuery)) {
    return {
      query,
      ...retrievalCatalog.wages,
    }
  }

  return createRefusalSession(query)
}

export const initialSession = {
  query: '',
  classifier: null,
  results: [],
}
