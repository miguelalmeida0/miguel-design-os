---
name: vector-illustrator
description: Create production-ready SVG/vector illustration systems with a framework-agnostic fluent builder API. Use when Codex needs to generate, manipulate, compose, style, animate, or package SVG shapes, paths, masks, clip paths, gradients, patterns, morphing illustrations, icon systems, decorative UI art, brand marks, or responsive vector components for React, Vue, Svelte, vanilla JS, or design-system codebases.
---

# Vector Illustrator

Use this skill to create polished, accessible SVG illustration code instead of ad hoc markup. The bundled implementation is a dependency-free ES module with TypeScript declarations.

## Files

- `assets/vector-illustrator.js`: runtime builder API.
- `assets/vector-illustrator.d.ts`: TypeScript declarations.
- `scripts/render-demo.mjs`: demo generator and smoke test.
- `references/api.md`: detailed API reference and implementation notes.

Read `references/api.md` when a task needs exact method signatures, boolean composition behavior, or path math details.

## Workflow

1. Define the illustration contract: viewport, title, desc, primary shapes, desired interactions, and whether output is a single SVG string or reusable module code.
2. Start with `scene({ width, height, viewBox, title, desc })` for complete artwork, or `shape()` for a single accessible SVG.
3. Build forms with primitives: `circle`, `ellipse`, `rect`, `polygon`, `star`, `blob`, `path`, or `smoothPath`.
4. Compose forms with `group()` and `compose.union`, `compose.subtract`, `compose.intersect`, or `compose.exclude`.
5. Style with `fill`, `linearGradient`, `radialGradient`, `pattern`, `stroke`, `dash`, `taperedStroke`, `shadow`, `blend`, and opacity.
6. Manipulate paths with `smoothPath`, `offsetStroke`, `morphTo`, and point-based helpers when creating logos, blobs, ribbons, waves, or organic forms.
7. Chain transforms in visual order: `translate`, `rotate`, `scale`, `skewX`, `skewY`, `matrix`.
8. Add animation hooks with `animate` or `morphTo`; include reduced-motion alternatives in the consuming UI when the artwork is animated.
9. Always set meaningful `title` and `desc`; the SVG root must keep `role="img"` and `aria-labelledby`.
10. Run `node scripts/render-demo.mjs` after changes to verify the implementation renders the five demo compositions.

## Quick Start

```js
import {
  scene,
  shape,
  group,
  compose,
  linearGradient,
  easings
} from "./vector-illustrator.js";

const mark = scene({
  width: 320,
  height: 220,
  viewBox: "0 0 320 220",
  title: "Layered product illustration",
  desc: "An accessible SVG composed from gradient circles, a clipped star, and a morph-ready blob."
})
  .add(
    shape("core orb")
      .circle(58, { cx: 112, cy: 104 })
      .fill(linearGradient([
        ["0%", "#FF7A59"],
        ["100%", "#4527A0"]
      ], { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }))
      .shadow(14, { dy: 10, opacity: 0.25 })
  )
  .add(
    shape("spark aperture")
      .star(7, 48, 20, { cx: 112, cy: 104, rotation: -90 })
      .fill("#FFFFFF")
      .blend("soft-light")
  )
  .add(
    shape("orbiting blob")
      .blob(44, { cx: 212, cy: 112, points: 9, variance: 0.28, seed: 9 })
      .fill("#00A6A6")
      .morphTo(
        shape().star(9, 48, 30, { cx: 212, cy: 112, rotation: 18 }),
        { duration: 2.8, easing: easings.easeInOut, repeat: "indefinite", alternate: true }
      )
  );

export const svg = mark.toSVG();
```

## Composition Rules

- Use `compose.union(...items)` for grouped additive forms that keep their individual styles.
- Use `compose.subtract(base, ...cutters)` for SVG mask subtraction. This is non-destructive and works across arbitrary SVG shapes.
- Use `compose.intersect(base, clipShape)` for SVG clip-path intersection.
- Use `compose.exclude(a, b, ...)` when point/path-backed shapes can be converted into one even-odd compound path.
- Prefer path-backed primitives when morphing, variable strokes, or compound-path export matters.

## Quality Bar

- Output clean SVG strings with deterministic IDs, escaped text, stable `viewBox`, and no framework assumptions.
- Keep every meaningful SVG accessible with `title`, `desc`, `role`, and `aria-labelledby`.
- Use `vector-effect="non-scaling-stroke"` when strokes need to stay crisp under responsive scaling.
- Avoid raster fallbacks unless the user explicitly asks for bitmap export.
- Keep comments only around non-obvious vector math, path smoothing, masks, animation splines, or SVG rendering techniques.

## Validation

Run:

```bash
node scripts/render-demo.mjs
```

Expected output:

- `assets/vector-illustrator-demo.svg`
- `assets/vector-illustrator-demo.html`
- terminal confirmation that at least five compositions were rendered.
