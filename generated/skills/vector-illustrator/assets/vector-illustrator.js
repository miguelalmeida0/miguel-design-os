/**
 * Vector Illustrator
 * Dependency-free SVG illustration builder for UI codebases.
 * The runtime is vanilla JavaScript; TypeScript users get types from vector-illustrator.d.ts.
 */

const SVG_NS = "http://www.w3.org/2000/svg";
let idCounter = 0;

export const easings = {
  linear: "0 0 1 1",
  easeIn: "0.42 0 1 1",
  easeOut: "0 0 0.58 1",
  easeInOut: "0.42 0 0.58 1",
  backOut: "0.34 1.56 0.64 1"
};

export function scene(options = {}) {
  return new VectorScene(options);
}

export function shape(label = "") {
  return new VectorShape(label);
}

export function group(label = "") {
  return new VectorGroup(label);
}

export function linearGradient(stops, options = {}) {
  return { kind: "linearGradient", stops, options };
}

export function radialGradient(stops, options = {}) {
  return { kind: "radialGradient", stops, options };
}

export function pattern(markup, options = {}) {
  return { kind: "pattern", markup, options };
}

export const compose = {
  union(...items) {
    return group("union").add(...items);
  },

  subtract(base, ...cutters) {
    return new BooleanComposition("subtract", base, cutters);
  },

  intersect(base, clipShape) {
    return new BooleanComposition("intersect", base, [clipShape]);
  },

  exclude(...items) {
    return new BooleanComposition("exclude", items[0], items.slice(1));
  }
};

export class VectorScene {
  constructor(options = {}) {
    this.width = options.width ?? 640;
    this.height = options.height ?? 480;
    this.viewBox = options.viewBox ?? `0 0 ${this.width} ${this.height}`;
    this.titleText = options.title ?? "Vector illustration";
    this.descText = options.desc ?? "Accessible SVG illustration generated with Vector Illustrator.";
    this.items = [];
    this.attrs = { ...(options.attrs ?? {}) };
    this.defs = [];
    this.id = nextId("svg");
  }

  title(value) {
    this.titleText = value;
    return this;
  }

  desc(value) {
    this.descText = value;
    return this;
  }

  attr(name, value) {
    this.attrs[name] = value;
    return this;
  }

  add(...items) {
    this.items.push(...items.flat().filter(Boolean));
    return this;
  }

  toSVG(options = {}) {
    const ctx = createRenderContext();
    const body = this.items.map((item) => item.render(ctx)).join("");
    const titleId = `${this.id}-title`;
    const descId = `${this.id}-desc`;
    const defs = [...ctx.defs, ...this.defs].join("");
    return element(
      "svg",
      {
        xmlns: SVG_NS,
        width: options.width ?? this.width,
        height: options.height ?? this.height,
        viewBox: options.viewBox ?? this.viewBox,
        role: "img",
        "aria-labelledby": `${titleId} ${descId}`,
        ...this.attrs
      },
      `${element("title", { id: titleId }, escapeText(options.title ?? this.titleText))}${element(
        "desc",
        { id: descId },
        escapeText(options.desc ?? this.descText)
      )}${defs ? element("defs", {}, defs) : ""}${body}`
    );
  }
}

export class VectorGroup {
  constructor(label = "") {
    this.label = label;
    this.items = [];
    this.transforms = [];
    this.attrs = {};
    this.styleAttrs = {};
    this.maskShape = null;
    this.clipShape = null;
    this.id = nextId("group");
  }

  add(...items) {
    this.items.push(...items.flat().filter(Boolean));
    return this;
  }

  attr(name, value) {
    this.attrs[name] = value;
    return this;
  }

  opacity(value) {
    this.attrs.opacity = value;
    return this;
  }

  blend(mode) {
    this.styleAttrs["mix-blend-mode"] = mode;
    return this;
  }

  mask(maskShape) {
    this.maskShape = maskShape;
    return this;
  }

  clip(clipShape) {
    this.clipShape = clipShape;
    return this;
  }

  translate(x, y = 0) {
    this.transforms.push(`translate(${fmt(x)} ${fmt(y)})`);
    return this;
  }

  rotate(deg, cx, cy) {
    this.transforms.push(cx == null ? `rotate(${fmt(deg)})` : `rotate(${fmt(deg)} ${fmt(cx)} ${fmt(cy ?? 0)})`);
    return this;
  }

  scale(x, y = x) {
    this.transforms.push(`scale(${fmt(x)} ${fmt(y)})`);
    return this;
  }

  skewX(deg) {
    this.transforms.push(`skewX(${fmt(deg)})`);
    return this;
  }

  skewY(deg) {
    this.transforms.push(`skewY(${fmt(deg)})`);
    return this;
  }

  matrix(a, b, c, d, e, f) {
    this.transforms.push(`matrix(${[a, b, c, d, e, f].map(fmt).join(" ")})`);
    return this;
  }

  render(ctx) {
    const attrs = { ...this.attrs };
    if (this.label) attrs["aria-label"] = this.label;
    if (this.transforms.length) attrs.transform = this.transforms.join(" ");
    if (Object.keys(this.styleAttrs).length) attrs.style = styleString(this.styleAttrs);

    if (this.maskShape) {
      const maskId = nextId("mask");
      ctx.defs.push(
        element("mask", { id: maskId, maskUnits: "userSpaceOnUse" }, this.maskShape.clone().fill("#fff").render(createRenderContext(ctx)))
      );
      attrs.mask = `url(#${maskId})`;
    }

    if (this.clipShape) {
      const clipId = nextId("clip");
      ctx.defs.push(element("clipPath", { id: clipId }, this.clipShape.render(createRenderContext(ctx))));
      attrs["clip-path"] = `url(#${clipId})`;
    }

    const body = this.items.map((item) => item.render(ctx)).join("");
    return element("g", attrs, body);
  }
}

export class VectorShape {
  constructor(label = "") {
    this.label = label;
    this.kind = "path";
    this.attrs = {};
    this.styleAttrs = {};
    this.transforms = [];
    this.animations = [];
    this.points = null;
    this.closed = true;
    this.pathData = "";
    this.fillValue = "none";
    this.strokeValue = null;
    this.strokeWidth = null;
    this.gradientFill = null;
    this.patternFill = null;
    this.shadowSpec = null;
    this.maskShape = null;
    this.clipShape = null;
    this.taperSpec = null;
    this.id = nextId("shape");
  }

  clone() {
    const copy = new VectorShape(this.label);
    copy.kind = this.kind;
    copy.attrs = { ...this.attrs };
    copy.styleAttrs = { ...this.styleAttrs };
    copy.transforms = [...this.transforms];
    copy.animations = this.animations.map((item) => ({ ...item }));
    copy.points = this.points ? this.points.map((point) => ({ ...point })) : null;
    copy.closed = this.closed;
    copy.pathData = this.pathData;
    copy.fillValue = this.fillValue;
    copy.strokeValue = this.strokeValue;
    copy.strokeWidth = this.strokeWidth;
    copy.gradientFill = this.gradientFill ? structuredCloneSafe(this.gradientFill) : null;
    copy.patternFill = this.patternFill ? structuredCloneSafe(this.patternFill) : null;
    copy.shadowSpec = this.shadowSpec ? { ...this.shadowSpec } : null;
    copy.maskShape = this.maskShape;
    copy.clipShape = this.clipShape;
    copy.taperSpec = this.taperSpec ? structuredCloneSafe(this.taperSpec) : null;
    return copy;
  }

  circle(radius, options = {}) {
    const cx = options.cx ?? 0;
    const cy = options.cy ?? 0;
    this.kind = "path";
    this.pathData = circlePath(cx, cy, radius);
    this.points = regularPolygonPoints(48, radius, { cx, cy });
    this.closed = true;
    return this;
  }

  ellipse(rx, ry, options = {}) {
    const cx = options.cx ?? 0;
    const cy = options.cy ?? 0;
    this.kind = "path";
    this.pathData = ellipsePath(cx, cy, rx, ry);
    this.points = regularPolygonPoints(64, 1, { cx, cy }).map((point) => ({ x: cx + (point.x - cx) * rx, y: cy + (point.y - cy) * ry }));
    this.closed = true;
    return this;
  }

  rect(width, height, options = {}) {
    const x = options.x ?? 0;
    const y = options.y ?? 0;
    const rx = options.rx ?? options.radius ?? 0;
    const ry = options.ry ?? rx;
    this.kind = "path";
    this.pathData = roundedRectPath(x, y, width, height, rx, ry);
    this.points = [
      { x, y },
      { x: x + width, y },
      { x: x + width, y: y + height },
      { x, y: y + height }
    ];
    this.closed = true;
    return this;
  }

  polygon(pointsOrSides, radius, options = {}) {
    this.kind = "path";
    this.points = Array.isArray(pointsOrSides)
      ? normalizePoints(pointsOrSides)
      : regularPolygonPoints(pointsOrSides, radius, options);
    this.pathData = pointsToPath(this.points, true);
    this.closed = true;
    return this;
  }

  star(points = 5, outerRadius = 48, innerRadius = outerRadius * 0.48, options = {}) {
    const cx = options.cx ?? 0;
    const cy = options.cy ?? 0;
    const rotation = (options.rotation ?? -90) * Math.PI / 180;
    const starPoints = [];
    for (let i = 0; i < points * 2; i += 1) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = rotation + (i * Math.PI) / points;
      starPoints.push({ x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius });
    }
    this.kind = "path";
    this.points = starPoints;
    this.pathData = pointsToPath(starPoints, true);
    this.closed = true;
    return this;
  }

  blob(radius = 48, options = {}) {
    const cx = options.cx ?? 0;
    const cy = options.cy ?? 0;
    const count = options.points ?? 10;
    const variance = options.variance ?? 0.22;
    const rand = seededRandom(options.seed ?? 1);
    const points = [];
    for (let i = 0; i < count; i += 1) {
      const angle = ((Math.PI * 2) / count) * i + (options.rotation ?? 0) * Math.PI / 180;
      const wobble = 1 + (rand() * 2 - 1) * variance;
      points.push({ x: cx + Math.cos(angle) * radius * wobble, y: cy + Math.sin(angle) * radius * wobble });
    }
    this.kind = "path";
    this.points = points;
    this.pathData = catmullRomPath(points, { closed: true, tension: options.tension ?? 1 });
    this.closed = true;
    return this;
  }

  path(d, options = {}) {
    this.kind = "path";
    this.pathData = d;
    this.points = options.points ? normalizePoints(options.points) : null;
    this.closed = options.closed ?? /z\s*$/i.test(d.trim());
    return this;
  }

  smoothPath(points, options = {}) {
    this.kind = "path";
    this.points = normalizePoints(points);
    this.closed = options.closed ?? false;
    this.pathData = catmullRomPath(this.points, { closed: this.closed, tension: options.tension ?? 1 });
    return this;
  }

  offsetStroke(distance = 8, options = {}) {
    if (!this.points || !this.closed) return this;
    const offsetPoints = offsetClosedPolygon(this.points, distance, options.miterLimit ?? 8);
    this.points = offsetPoints;
    this.pathData = this.kind === "path" && this.closed ? catmullRomPath(offsetPoints, { closed: true, tension: options.tension ?? 1 }) : pointsToPath(offsetPoints, true);
    return this;
  }

  fill(value) {
    this.gradientFill = null;
    this.patternFill = null;
    if (value && typeof value === "object" && value.kind === "linearGradient") this.gradientFill = value;
    else if (value && typeof value === "object" && value.kind === "radialGradient") this.gradientFill = value;
    else if (value && typeof value === "object" && value.kind === "pattern") this.patternFill = value;
    else this.fillValue = value;
    return this;
  }

  stroke(color, width = 1, options = {}) {
    this.strokeValue = color;
    this.strokeWidth = width;
    if (options.linecap) this.attrs["stroke-linecap"] = options.linecap;
    if (options.linejoin) this.attrs["stroke-linejoin"] = options.linejoin;
    if (options.opacity != null) this.attrs["stroke-opacity"] = options.opacity;
    if (options.nonScaling !== false) this.attrs["vector-effect"] = "non-scaling-stroke";
    if (options.dash) this.dash(options.dash);
    return this;
  }

  dash(patternValue, offset = 0) {
    this.attrs["stroke-dasharray"] = Array.isArray(patternValue) ? patternValue.join(" ") : patternValue;
    if (offset) this.attrs["stroke-dashoffset"] = offset;
    return this;
  }

  taperedStroke(startWidth, endWidth, color, options = {}) {
    this.taperSpec = { startWidth, endWidth, color, steps: options.steps ?? 1, opacity: options.opacity };
    return this;
  }

  shadow(blur = 10, options = {}) {
    this.shadowSpec = {
      blur,
      dx: options.dx ?? 0,
      dy: options.dy ?? Math.max(1, blur * 0.45),
      color: options.color ?? "#000000",
      opacity: options.opacity ?? 0.22
    };
    return this;
  }

  blend(mode) {
    this.styleAttrs["mix-blend-mode"] = mode;
    return this;
  }

  opacity(value) {
    this.attrs.opacity = value;
    return this;
  }

  attr(name, value) {
    this.attrs[name] = value;
    return this;
  }

  mask(maskShape) {
    this.maskShape = maskShape;
    return this;
  }

  clip(clipShape) {
    this.clipShape = clipShape;
    return this;
  }

  translate(x, y = 0) {
    this.transforms.push(`translate(${fmt(x)} ${fmt(y)})`);
    return this;
  }

  rotate(deg, cx, cy) {
    this.transforms.push(cx == null ? `rotate(${fmt(deg)})` : `rotate(${fmt(deg)} ${fmt(cx)} ${fmt(cy ?? 0)})`);
    return this;
  }

  scale(x, y = x) {
    this.transforms.push(`scale(${fmt(x)} ${fmt(y)})`);
    return this;
  }

  skewX(deg) {
    this.transforms.push(`skewX(${fmt(deg)})`);
    return this;
  }

  skewY(deg) {
    this.transforms.push(`skewY(${fmt(deg)})`);
    return this;
  }

  matrix(a, b, c, d, e, f) {
    this.transforms.push(`matrix(${[a, b, c, d, e, f].map(fmt).join(" ")})`);
    return this;
  }

  animate(attributeName, values, options = {}) {
    this.animations.push({ attributeName, values, options });
    return this;
  }

  morphTo(targetShape, options = {}) {
    const target = targetShape.toPathData();
    this.animate("d", [this.toPathData(), target], {
      duration: options.duration ?? 1.8,
      easing: options.easing ?? easings.easeInOut,
      repeat: options.repeat,
      alternate: options.alternate
    });
    return this;
  }

  toPathData() {
    return this.pathData;
  }

  toSVG(options = {}) {
    return scene({
      width: options.width ?? 240,
      height: options.height ?? 240,
      viewBox: options.viewBox ?? "0 0 240 240",
      title: options.title ?? (this.label || "Vector shape"),
      desc: options.desc ?? "Accessible SVG shape generated with Vector Illustrator."
    }).add(this).toSVG();
  }

  render(ctx) {
    const attrs = { ...this.attrs, d: this.pathData };
    if (this.label) attrs["aria-label"] = this.label;
    if (this.transforms.length) attrs.transform = this.transforms.join(" ");
    if (Object.keys(this.styleAttrs).length) attrs.style = styleString(this.styleAttrs);

    if (this.gradientFill) {
      const gradientId = registerGradient(ctx, this.gradientFill);
      attrs.fill = `url(#${gradientId})`;
    } else if (this.patternFill) {
      const patternId = registerPattern(ctx, this.patternFill);
      attrs.fill = `url(#${patternId})`;
    } else {
      attrs.fill = this.fillValue;
    }

    if (this.strokeValue) {
      attrs.stroke = this.strokeValue;
      attrs["stroke-width"] = this.strokeWidth;
    }

    if (this.shadowSpec) {
      attrs.filter = `url(#${registerShadow(ctx, this.shadowSpec)})`;
    }

    if (this.maskShape) {
      const maskId = nextId("mask");
      ctx.defs.push(element("mask", { id: maskId, maskUnits: "userSpaceOnUse" }, this.maskShape.clone().fill("#fff").render(createRenderContext(ctx))));
      attrs.mask = `url(#${maskId})`;
    }

    if (this.clipShape) {
      const clipId = nextId("clip");
      ctx.defs.push(element("clipPath", { id: clipId }, this.clipShape.render(createRenderContext(ctx))));
      attrs["clip-path"] = `url(#${clipId})`;
    }

    const body = this.animations.map(renderAnimation).join("");
    const base = element("path", attrs, body);

    if (!this.taperSpec || !this.points || this.points.length < 2) return base;

    const outline = variableStrokeOutline(this.points, this.taperSpec.startWidth, this.taperSpec.endWidth, this.closed);
    const taperAttrs = {
      d: pointsToPath(outline, true),
      fill: this.taperSpec.color,
      opacity: this.taperSpec.opacity
    };
    if (this.transforms.length) taperAttrs.transform = this.transforms.join(" ");
    return `${base}${element("path", taperAttrs)}`;
  }
}

class BooleanComposition {
  constructor(mode, base, cutters = []) {
    this.mode = mode;
    this.base = base;
    this.cutters = cutters;
    this.label = `${mode} composition`;
    this.id = nextId("boolean");
  }

  render(ctx) {
    if (this.mode === "subtract") return this.renderSubtract(ctx);
    if (this.mode === "intersect") return this.renderIntersect(ctx);
    if (this.mode === "exclude") return this.renderExclude(ctx);
    return this.base.render(ctx);
  }

  renderSubtract(ctx) {
    const maskId = `${this.id}-mask`;
    const maskCtx = createRenderContext(ctx);
    const whiteBaseShape = this.base.clone().fill("#fff").attr("stroke", "none");
    whiteBaseShape.strokeValue = null;
    const whiteBase = whiteBaseShape.render(maskCtx);
    const blackCutters = this.cutters
      .map((shapeItem) => {
        const cutter = shapeItem.clone().fill("#000").attr("stroke", "none");
        cutter.strokeValue = null;
        return cutter.render(maskCtx);
      })
      .join("");
    ctx.defs.push(...maskCtx.defs);
    ctx.defs.push(element("mask", { id: maskId, maskUnits: "userSpaceOnUse" }, `${whiteBase}${blackCutters}`));
    return group(this.label).attr("mask", `url(#${maskId})`).add(this.base).render(ctx);
  }

  renderIntersect(ctx) {
    const clipId = `${this.id}-clip`;
    const clipCtx = createRenderContext(ctx);
    const clipBody = this.cutters.map((item) => item.render(clipCtx)).join("");
    ctx.defs.push(...clipCtx.defs);
    ctx.defs.push(element("clipPath", { id: clipId }, clipBody));
    return group(this.label).attr("clip-path", `url(#${clipId})`).add(this.base).render(ctx);
  }

  renderExclude(ctx) {
    const shapes = [this.base, ...this.cutters].filter(Boolean);
    const paths = shapes.map((item) => item.toPathData?.()).filter(Boolean);
    const baseClone = this.base.clone();
    baseClone.path(paths.join(" "), { closed: true }).attr("fill-rule", "evenodd").attr("clip-rule", "evenodd");
    return baseClone.render(ctx);
  }
}

function registerGradient(ctx, fill) {
  const id = nextId(fill.kind === "radialGradient" ? "radial" : "linear");
  const stops = fill.stops
    .map(([offset, color, opacity]) => element("stop", { offset, "stop-color": color, "stop-opacity": opacity }))
    .join("");
  if (fill.kind === "radialGradient") {
    ctx.defs.push(element("radialGradient", { id, ...fill.options }, stops));
  } else {
    ctx.defs.push(element("linearGradient", { id, ...fill.options }, stops));
  }
  return id;
}

function registerPattern(ctx, fill) {
  const id = nextId("pattern");
  const attrs = {
    id,
    patternUnits: "userSpaceOnUse",
    width: fill.options.width ?? 16,
    height: fill.options.height ?? 16,
    ...fill.options
  };
  ctx.defs.push(element("pattern", attrs, fill.markup));
  return id;
}

function registerShadow(ctx, spec) {
  const id = nextId("shadow");
  const flood = element("feFlood", { "flood-color": spec.color, "flood-opacity": spec.opacity, result: "shadowColor" });
  const blur = element("feGaussianBlur", { in: "SourceAlpha", stdDeviation: spec.blur, result: "blur" });
  const offset = element("feOffset", { in: "blur", dx: spec.dx, dy: spec.dy, result: "offsetBlur" });
  const comp = element("feComposite", { in: "shadowColor", in2: "offsetBlur", operator: "in", result: "shadow" });
  const merge = element("feMerge", {}, `${element("feMergeNode", { in: "shadow" })}${element("feMergeNode", { in: "SourceGraphic" })}`);
  ctx.defs.push(element("filter", { id, x: "-50%", y: "-50%", width: "200%", height: "200%" }, `${flood}${blur}${offset}${comp}${merge}`));
  return id;
}

function renderAnimation(animation) {
  const options = animation.options ?? {};
  const values = options.alternate
    ? [...animation.values, ...[...animation.values].reverse().slice(1)]
    : animation.values;
  const segmentCount = Math.max(1, values.length - 1);
  const attrs = {
    attributeName: animation.attributeName,
    values: values.join(";"),
    dur: `${options.duration ?? options.dur ?? 1}s`,
    fill: options.fill ?? "freeze"
  };
  if (options.repeat) attrs.repeatCount = options.repeat;
  if (options.easing) {
    // SVG SMIL uses cubic-bezier splines as four numbers in keySplines.
    attrs.calcMode = "spline";
    attrs.keySplines = Array.from({ length: segmentCount }, () => options.easing).join(";");
    attrs.keyTimes = values.map((_, index) => fmt(index / segmentCount)).join(";");
  }
  return element("animate", attrs);
}

function catmullRomPath(points, options = {}) {
  const normalized = normalizePoints(points);
  if (normalized.length < 2) return "";
  const closed = options.closed ?? false;
  const tension = options.tension ?? 1;
  const path = [`M ${fmt(normalized[0].x)} ${fmt(normalized[0].y)}`];
  const pointAt = (index) => {
    if (closed) return normalized[(index + normalized.length) % normalized.length];
    return normalized[Math.max(0, Math.min(normalized.length - 1, index))];
  };
  const last = closed ? normalized.length : normalized.length - 1;
  for (let i = 0; i < last; i += 1) {
    const p0 = pointAt(i - 1);
    const p1 = pointAt(i);
    const p2 = pointAt(i + 1);
    const p3 = pointAt(i + 2);
    // Catmull-Rom is converted to cubic Beziers so the SVG remains plain path data.
    // The 1/6 factor maps cardinal spline tangents into cubic control handles.
    const cp1 = { x: p1.x + ((p2.x - p0.x) * tension) / 6, y: p1.y + ((p2.y - p0.y) * tension) / 6 };
    const cp2 = { x: p2.x - ((p3.x - p1.x) * tension) / 6, y: p2.y - ((p3.y - p1.y) * tension) / 6 };
    path.push(`C ${fmt(cp1.x)} ${fmt(cp1.y)} ${fmt(cp2.x)} ${fmt(cp2.y)} ${fmt(p2.x)} ${fmt(p2.y)}`);
  }
  if (closed) path.push("Z");
  return path.join(" ");
}

function offsetClosedPolygon(points, distance, miterLimit) {
  const normalized = normalizePoints(points);
  const area = signedArea(normalized);
  const outwardSign = area >= 0 ? 1 : -1;
  const shiftedEdges = normalized.map((point, index) => {
    const next = normalized[(index + 1) % normalized.length];
    const dx = next.x - point.x;
    const dy = next.y - point.y;
    const length = Math.hypot(dx, dy) || 1;
    const normal = { x: (dy / length) * outwardSign * distance, y: (-dx / length) * outwardSign * distance };
    return {
      a: { x: point.x + normal.x, y: point.y + normal.y },
      b: { x: next.x + normal.x, y: next.y + normal.y }
    };
  });
  return normalized.map((point, index) => {
    const prev = shiftedEdges[(index - 1 + shiftedEdges.length) % shiftedEdges.length];
    const curr = shiftedEdges[index];
    const intersection = lineIntersection(prev.a, prev.b, curr.a, curr.b);
    if (!intersection || distanceBetween(intersection, point) > Math.abs(distance) * miterLimit) {
      return { x: point.x, y: point.y };
    }
    return intersection;
  });
}

function variableStrokeOutline(points, startWidth, endWidth, closed = false) {
  const normalized = normalizePoints(points);
  const left = [];
  const right = [];
  for (let i = 0; i < normalized.length; i += 1) {
    const current = normalized[i];
    const prev = closed ? normalized[(i - 1 + normalized.length) % normalized.length] : normalized[Math.max(0, i - 1)];
    const next = closed ? normalized[(i + 1) % normalized.length] : normalized[Math.min(normalized.length - 1, i + 1)];
    const tangent = normalizeVector({ x: next.x - prev.x, y: next.y - prev.y });
    const normal = { x: -tangent.y, y: tangent.x };
    const t = normalized.length === 1 ? 0 : i / (normalized.length - 1);
    const halfWidth = (startWidth + (endWidth - startWidth) * t) / 2;
    left.push({ x: current.x + normal.x * halfWidth, y: current.y + normal.y * halfWidth });
    right.unshift({ x: current.x - normal.x * halfWidth, y: current.y - normal.y * halfWidth });
  }
  // A variable-width stroke is emitted as a filled outline path. This avoids SVG's lack of
  // native tapered strokes while keeping the result resolution-independent.
  return [...left, ...right];
}

function pointsToPath(points, closed = true) {
  const normalized = normalizePoints(points);
  if (!normalized.length) return "";
  const rest = normalized.slice(1).map((point) => `L ${fmt(point.x)} ${fmt(point.y)}`).join(" ");
  return `M ${fmt(normalized[0].x)} ${fmt(normalized[0].y)} ${rest}${closed ? " Z" : ""}`;
}

function circlePath(cx, cy, r) {
  return `M ${fmt(cx - r)} ${fmt(cy)} A ${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(cx + r)} ${fmt(cy)} A ${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(cx - r)} ${fmt(cy)} Z`;
}

function ellipsePath(cx, cy, rx, ry) {
  return `M ${fmt(cx - rx)} ${fmt(cy)} A ${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(cx + rx)} ${fmt(cy)} A ${fmt(rx)} ${fmt(ry)} 0 1 0 ${fmt(cx - rx)} ${fmt(cy)} Z`;
}

function roundedRectPath(x, y, width, height, rx, ry) {
  const crx = Math.min(rx, width / 2);
  const cry = Math.min(ry, height / 2);
  if (!crx && !cry) return `M ${fmt(x)} ${fmt(y)} H ${fmt(x + width)} V ${fmt(y + height)} H ${fmt(x)} Z`;
  return [
    `M ${fmt(x + crx)} ${fmt(y)}`,
    `H ${fmt(x + width - crx)}`,
    `Q ${fmt(x + width)} ${fmt(y)} ${fmt(x + width)} ${fmt(y + cry)}`,
    `V ${fmt(y + height - cry)}`,
    `Q ${fmt(x + width)} ${fmt(y + height)} ${fmt(x + width - crx)} ${fmt(y + height)}`,
    `H ${fmt(x + crx)}`,
    `Q ${fmt(x)} ${fmt(y + height)} ${fmt(x)} ${fmt(y + height - cry)}`,
    `V ${fmt(y + cry)}`,
    `Q ${fmt(x)} ${fmt(y)} ${fmt(x + crx)} ${fmt(y)}`,
    "Z"
  ].join(" ");
}

function regularPolygonPoints(sides = 3, radius = 48, options = {}) {
  const cx = options.cx ?? 0;
  const cy = options.cy ?? 0;
  const rotation = ((options.rotation ?? -90) * Math.PI) / 180;
  return Array.from({ length: Math.max(3, sides) }, (_, index) => {
    const angle = rotation + (Math.PI * 2 * index) / Math.max(3, sides);
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });
}

function normalizePoints(points) {
  return points.map((point) => Array.isArray(point) ? { x: point[0], y: point[1] } : { x: point.x, y: point.y });
}

function normalizeVector(vector) {
  const length = Math.hypot(vector.x, vector.y) || 1;
  return { x: vector.x / length, y: vector.y / length };
}

function signedArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    area += current.x * next.y - next.x * current.y;
  }
  return area / 2;
}

function lineIntersection(a, b, c, d) {
  const denominator = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
  if (Math.abs(denominator) < 1e-8) return null;
  const x = ((a.x * b.y - a.y * b.x) * (c.x - d.x) - (a.x - b.x) * (c.x * d.y - c.y * d.x)) / denominator;
  const y = ((a.x * b.y - a.y * b.x) * (c.y - d.y) - (a.y - b.y) * (c.x * d.y - c.y * d.x)) / denominator;
  return { x, y };
}

function distanceBetween(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createRenderContext(parent) {
  return parent ? { defs: parent.defs } : { defs: [] };
}

function element(tag, attrs = {}, body = undefined) {
  const attrText = Object.entries(attrs)
    .filter(([, value]) => value != null && value !== false)
    .map(([name, value]) => ` ${name}="${escapeAttr(value)}"`)
    .join("");
  if (body == null || body === "") return `<${tag}${attrText}/>`;
  return `<${tag}${attrText}>${body}</${tag}>`;
}

function styleString(styleMap) {
  return Object.entries(styleMap)
    .filter(([, value]) => value != null)
    .map(([name, value]) => `${name}:${value}`)
    .join(";");
}

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeText(value).replaceAll('"', "&quot;");
}

function nextId(prefix) {
  idCounter += 1;
  return `vi-${prefix}-${idCounter}`;
}

function fmt(value) {
  if (typeof value === "string") return value;
  if (!Number.isFinite(value)) return "0";
  const rounded = Math.round(value * 1000) / 1000;
  return Object.is(rounded, -0) ? "0" : String(rounded);
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}
