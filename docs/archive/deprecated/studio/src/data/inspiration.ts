import type { InspirationQueueItem, InspirationSource } from "../types/studio";

export const inspirationSources: InspirationSource[] = [
  {
    id: "awwwards",
    name: "Awwwards",
    type: "award",
    baseUrl: "https://www.awwwards.com",
    bestUse: "High-end interactive web composition, art direction, motion, and first-impression references.",
    trustLevel: "high",
    screenshotPolicy: "Public local captures only; keep attribution and do not commit copyrighted captures without approval.",
    notes: "Strong for award-level web direction, not a direct app template.",
    shortlisted: true,
    userNote: "Use for stagecraft and visual hierarchy."
  },
  {
    id: "fwa",
    name: "FWA",
    type: "award",
    baseUrl: "https://thefwa.com",
    bestUse: "Immersive interactive experiences, cinematic web, and motion-led concepts.",
    trustLevel: "high",
    screenshotPolicy: "Local reference captures only; do not bypass access controls.",
    notes: "Best for bold interaction and immersive scene logic.",
    shortlisted: false,
    userNote: ""
  },
  {
    id: "css-design-awards",
    name: "CSS Design Awards",
    type: "award",
    baseUrl: "https://www.cssdesignawards.com",
    bestUse: "Awarded web composition, visual craft, and responsive art direction.",
    trustLevel: "high",
    screenshotPolicy: "Local reference captures only when public.",
    notes: "Useful for layout and polish references.",
    shortlisted: false,
    userNote: ""
  },
  {
    id: "godly",
    name: "Godly.website",
    type: "gallery",
    baseUrl: "https://godly.website",
    bestUse: "High-taste website references and contemporary landing-page composition.",
    trustLevel: "medium",
    screenshotPolicy: "Local captures only; keep source URLs.",
    notes: "Strong curation, not formal award proof.",
    shortlisted: true,
    userNote: "Good for sharp dark operational references."
  },
  {
    id: "mobbin",
    name: "Mobbin",
    type: "mobile-reference",
    baseUrl: "https://mobbin.com",
    bestUse: "Mobile app flows, UI patterns, and production interaction references.",
    trustLevel: "medium",
    screenshotPolicy: "Do not bypass login or paid access; use notes/links unless access is approved.",
    notes: "Useful for mobile patterns and app ergonomics.",
    shortlisted: false,
    userNote: ""
  },
  {
    id: "behance",
    name: "Behance",
    type: "portfolio",
    baseUrl: "https://www.behance.net",
    bestUse: "Portfolio case studies, product UI concepts, art direction boards.",
    trustLevel: "medium",
    screenshotPolicy: "Respect creator rights; local notes/screenshots only unless approved.",
    notes: "Can include concept work; verify realism before treating as product evidence.",
    shortlisted: false,
    userNote: ""
  },
  {
    id: "dribbble",
    name: "Dribbble",
    type: "portfolio",
    baseUrl: "https://dribbble.com",
    bestUse: "UI mood, component treatments, micro-compositions, and visual exploration.",
    trustLevel: "medium",
    screenshotPolicy: "Respect creator rights; local notes/screenshots only unless approved.",
    notes: "Often polished shots, not full product systems.",
    shortlisted: false,
    userNote: ""
  },
  {
    id: "pinterest",
    name: "Pinterest",
    type: "moodboard",
    baseUrl: "https://www.pinterest.com",
    bestUse: "Moodboard discovery, visual clustering, and broad aesthetic search.",
    trustLevel: "moodboard-only",
    screenshotPolicy: "Moodboard only; do not bypass login; keep links/notes and local-only screenshots.",
    notes: "Allowed for inspiration discovery, not proof or asset sourcing.",
    shortlisted: true,
    userNote: "Useful for search language, never quality proof."
  }
];

export const inspirationQueue: InspirationQueueItem[] = [
  {
    id: "pinterest-moodboard-50",
    sourceName: "Pinterest",
    sourceType: "moodboard",
    category: "pinterest-moodboard",
    targetCount: 50,
    screenshotStatus: "not-captured",
    whyItMatters: "Moodboard discovery for visual language, not award-quality proof.",
    compositionNotes: "Discover stage, roster, configurator, and immersive composition clusters.",
    focalObjectNotes: "Look for primary object dominance and avoid boards where the object is lost in decoration.",
    interactionNotes: "Collect interaction promises only as notes."
  },
  {
    id: "award-gallery-50",
    sourceName: "Award and gallery sources",
    sourceType: "award-gallery",
    category: "award-gallery",
    targetCount: 50,
    screenshotStatus: "not-captured",
    whyItMatters: "High-trust web inspiration for composition, motion, hierarchy, and craft.",
    compositionNotes: "Prioritize full-screen visual systems and non-card-first pages.",
    focalObjectNotes: "Identify how award sites create desire around one object, scene, product, or story.",
    interactionNotes: "Document motion and interaction ideas without copying code or assets."
  },
  {
    id: "mobile-product-ui-30",
    sourceName: "Mobbin, Behance, Dribbble",
    sourceType: "mobile-product-reference",
    category: "mobile-product-ui",
    targetCount: 30,
    screenshotStatus: "not-captured",
    whyItMatters: "Mobile/product UI references keep cinematic concepts ergonomic.",
    compositionNotes: "Capture mobile density, navigation, sheet behavior, and first action visibility.",
    focalObjectNotes: "Prioritize screens where the product object remains visible on mobile.",
    interactionNotes: "Document selection, compare, inspect, and configure flows."
  },
  {
    id: "selection-roster-game-ui-30",
    sourceName: "Selection and roster references",
    sourceType: "selection-reference",
    category: "selection-roster-game-ui",
    targetCount: 30,
    screenshotStatus: "not-captured",
    whyItMatters: "Selection-first products need desire, comparison, and selected-state clarity.",
    compositionNotes: "Look for rosters, galleries, card decks, and comparison rails.",
    focalObjectNotes: "Track whether the selected object stays dominant at 390, 768, and 1440.",
    interactionNotes: "Document hover reward, selected reward, detail reveal, and object swap behavior."
  },
  {
    id: "cinematic-immersive-ui-30",
    sourceName: "Cinematic and immersive references",
    sourceType: "immersive-reference",
    category: "cinematic-immersive-ui",
    targetCount: 30,
    screenshotStatus: "not-captured",
    whyItMatters: "Visual-heavy apps need stagecraft, depth, and emotional hook before product logic.",
    compositionNotes: "Look for staged objects, full-bleed environments, controlled negative space, and motion-led reveals.",
    focalObjectNotes: "Track whether the object or scene remains legible without oversized AI-app scale.",
    interactionNotes: "Document purposeful motion, reveal order, and transitions that clarify hierarchy."
  }
];
