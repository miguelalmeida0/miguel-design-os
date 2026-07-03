# Vector Illustrator API

## Imports

```js
import {
  scene,
  shape,
  group,
  compose,
  linearGradient,
  radialGradient,
  pattern,
  easings
} from "../assets/vector-illustrator.js";
```

## Root Scene

- `scene({ width, height, viewBox, title, desc, attrs })`
- `.add(...items)`
- `.title(text)`
- `.desc(text)`
- `.attr(name, value)`
- `.toSVG(options?)`

`toSVG()` always emits `role="img"`, `aria-labelledby`, `<title>`, and `<desc>`.

## Shape Primitives

- `shape(label).circle(radius, { cx, cy })`
- `.ellipse(rx, ry, { cx, cy })`
- `.rect(width, height, { x, y, rx, ry, radius })`
- `.polygon(points)` where points are `{ x, y }` or `[x, y]`
- `.polygon(sides, radius, { cx, cy, rotation })`
- `.star(points, outerRadius, innerRadius, { cx, cy, rotation })`
- `.blob(radius, { cx, cy, points, variance, seed, rotation, tension })`
- `.path(d, { points, closed })`
- `.smoothPath(points, { closed, tension })`

Most primitives are emitted as `<path>` so they can share morphing, masking, compound-path, and tapered-stroke behavior.

## Styling

- `.fill("#FF5E5B")`
- `.fill(linearGradient(stops, attrs))`
- `.fill(radialGradient(stops, attrs))`
- `.fill(pattern(markup, attrs))`
- `.stroke(color, width, { dash, linecap, linejoin, opacity, nonScaling })`
- `.dash([8, 4], offset)`
- `.taperedStroke(startWidth, endWidth, color, { opacity })`
- `.shadow(blur, { dx, dy, color, opacity })`
- `.blend("multiply" | "screen" | "soft-light" | string)`
- `.opacity(value)`

`taperedStroke` emits a filled outline path because SVG has no native variable-width stroke. It works best with point-backed shapes such as polygons, stars, blobs, and `smoothPath`.

## Transformations

Transform methods are chainable and emitted in call order:

- `.translate(x, y)`
- `.rotate(deg, cx?, cy?)`
- `.scale(x, y?)`
- `.skewX(deg)`
- `.skewY(deg)`
- `.matrix(a, b, c, d, e, f)`

## Composition

- `group(label).add(...items)`
- `compose.union(...items)` creates an additive group.
- `compose.subtract(base, ...cutters)` creates a mask with white base and black cutters.
- `compose.intersect(base, clipShape)` creates a clip path.
- `compose.exclude(...items)` creates an even-odd compound path from path-backed shapes.

Boolean operations are SVG-native and non-destructive. They do not require a polygon clipping dependency, so the skill remains portable across UI stacks.

## Path Manipulation

- `.smoothPath(points, { tension, closed })` uses Catmull-Rom points converted to cubic Bezier path commands.
- `.offsetStroke(distance, { miterLimit, tension })` offsets closed point-backed shapes by shifting edges and intersecting adjacent offset lines.
- `.morphTo(targetShape, { duration, easing, repeat, alternate })` emits SMIL `<animate attributeName="d">`.
- `.animate(attributeName, values, options)` emits raw keyframe-ready SVG animation.

Morphing requires compatible path command structure for the cleanest browser interpolation. For dependable morphs, use matching primitives or generate both paths from the same point count.

## Accessibility Requirements

- Give every scene a specific `title` and `desc`.
- Use shape labels for meaningful internal groups when the artwork contains important sub-objects.
- Use decorative SVGs with `aria-hidden="true"` only when the consuming UI provides equivalent text elsewhere.
- Keep text out of generated paths unless the user explicitly needs outlined lettering; normal SVG text is more accessible.
