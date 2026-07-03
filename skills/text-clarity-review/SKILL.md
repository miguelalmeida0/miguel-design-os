---
name: text-clarity-review
description: Post-implementation UX writing review that finds unclear, vague, generic, inconsistent, or confusing interface copy and rewrites it into clearer production-ready text.
---

# Text Clarity Review

Use after UI implementation, after screenshot review, before final polish, or when Migi says copy feels unclear, generic, AI, confusing, or not production-ready.

Do not use during Fast Direction Gate, early visual direction generation, or pure layout exploration unless visible copy is harming the UI.

## Inputs

- target screen/component
- audience technical level
- user mental state
- screenshots or source files if available
- current copy strings
- product terminology, if known

## Checks

- jargon, ambiguity, passive voice, vague CTAs
- generic labels like `Submit`, `OK`, `Click here`
- unclear errors, empty states, loading states, success states
- destructive confirmations that do not name object/consequence
- inconsistent terminology
- tone mismatch
- translation-unfriendly strings
- placeholder-only labels
- redundant headings/intros

## UX Writing Rules

- Button labels use verb + object when the object is not obvious.
- Errors explain what happened, why, and how to fix it.
- Destructive actions name the exact object and consequence.
- Empty states explain what is missing and the next action.
- Loading states say what is happening.
- Success states confirm what changed.
- No humor in error states.
- No jargon without explanation.
- Avoid `OK`, `Submit`, `Yes`, `No`, and `Click here` unless truly unavoidable.
- Placeholders are not labels.
- Keep strings translation-safe and terminology consistent.

## Required Output

```md
## Text Clarity Review

### Copy Health Verdict

### Copy Audit
| Location | Current Copy | Problem | Better Copy | Why |
|---|---|---|---|---|

### Revised Copy Strings

### Tone Notes

### Terminology Glossary

### Strings Needing Migi/Product Context

### Final Copy Checklist
```

## Scorecard Caps

- vague primary CTA: max copy score 6
- generic destructive confirmation: max copy score 5
- unclear error message with no fix: max copy score 5
- placeholder-only form labels: max copy score 5
- inconsistent terminology: max copy score 6
- copy assumes technical knowledge without context: max copy score 6
- loading longer than 3 seconds with only `Loading...`: max copy score 6
- empty state has no next action: max copy score 6
