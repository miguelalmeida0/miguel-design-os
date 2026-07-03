// Midnight Scent Theater Figma Plugin API snippet.
// Paste into a normal Figma plugin command in a writable design file.
// Cost safety: this uses only normal Plugin API pages, frames, shapes, text, variables when available,
// styles/components are not required, and node metadata. It does not call Figma AI, Make, Weave,
// paid generation, AI credits, image generation, Dev Mode, Figma Motion, or Figma Draw.

const NS = "miguel.designos.midnightScentTheater";
const FONT = { family: "Inter", style: "Regular" };
const BOLD = { family: "Inter", style: "Bold" };

const colors = {
  ink: "#121019",
  plum: "#211426",
  violet: "#493047",
  ivory: "#F4E7CF",
  moon: "#EAD8B8",
  brass: "#B98745",
  smoke: "#B8A7B5",
  oxblood: "#4A171F",
  cyan: "#9AD8E0"
};

const pages = [
  "00 Shape Tokens",
  "01 Vector Grammar",
  "02 Motif Library",
  "03 Morph Boards",
  "04 Motion Storyboards",
  "05 Export Specs",
  "99 QA Review"
];

const primitiveTokens = [
  ["shape.radius.xs", "4px", "radius"],
  ["shape.radius.sm", "8px", "radius"],
  ["shape.radius.md", "16px", "radius"],
  ["shape.radius.lg", "28px", "radius"],
  ["shape.radius.xl", "44px", "radius"],
  ["shape.smoothing.none", "0", "smoothing"],
  ["shape.smoothing.ios", "0.62", "smoothing"],
  ["shape.family.round", "round", "family"],
  ["shape.family.squircle", "superellipse", "family"],
  ["shape.family.notch", "notch", "family"],
  ["shape.family.bevel", "bevel", "family"],
  ["shape.keyline.thin", "1px", "keyline"],
  ["shape.keyline.medium", "1.5px", "keyline"],
  ["shape.offset.sm", "8px", "offset"],
  ["shape.offset.md", "16px", "offset"]
];

const semanticTokens = [
  ["shape.surface.card", "radius.md + smoothing.ios", "surface"],
  ["shape.surface.sheet", "radius.lg + smoothing.ios", "surface"],
  ["shape.surface.media", "lens mask + safe zone", "surface"],
  ["shape.interactive.button", "radius.sm", "interactive"],
  ["shape.interactive.chip", "radius.xl capsule", "interactive"],
  ["shape.icon.container", "radius.sm + keyline.thin", "icon"],
  ["shape.editorial.mask", "moon-lens or curtain-fold", "mask"],
  ["shape.motion.morphable", "compatible parametric family", "motion"]
];

const projectTokens = [
  ["project.hero.shapeFamily", "moon-lens + scent-bottle", "project"],
  ["project.motion.morphFamily", "circle/lens, squircle/bottle, curtain/mask, petal/smoke", "project"],
  ["project.surface.smoothing", "0.62", "project"],
  ["project.icon.strokeWidth", "1.75px", "project"]
];

const motifs = [
  {
    id: "moon-lens",
    role: "mask",
    title: "Moon / Lens",
    use: "Focal portal, aperture mask, scene framing, magnified product moment.",
    avoid: "Fake glass oval, orbital/HUD/radar circle, decorative ring.",
    layer: "mask above atmosphere, below hero bottle",
    material: "moon ivory, smoked silver, thin brass keyline",
    motion: "circle-to-lens, lens wipe, aperture crop",
    export: "SVG ellipse/capsule or CSS clip-path ellipse"
  },
  {
    id: "scent-bottle",
    role: "hero-object",
    title: "Scent Bottle Silhouette",
    use: "Fictional product object, hero silhouette, icon container, morph target.",
    avoid: "Fake proof of a real perfume product.",
    layer: "hero-object above lens",
    material: "black glass, ink violet, moon edge highlight, brass stopper",
    motion: "squircle-to-bottle, object reveal, selection snap",
    export: "SVG component with title/desc"
  },
  {
    id: "curtain-reveal",
    role: "mask",
    title: "Curtain Reveal",
    use: "Stage transition, mask reveal, scroll chapter entrance.",
    avoid: "Random wavy panels with no reveal role.",
    layer: "foreground-object during transition; mask while revealing",
    material: "velvet black, oxblood, midnight plum",
    motion: "curtain reveal, editorial scroll chapter",
    export: "CSS transform strips, SVG mask, or clip-path"
  },
  {
    id: "smoke-mark",
    role: "decorative",
    title: "Smoke Mark",
    use: "Scent atmosphere, scent-note trail, decorative morph endpoint.",
    avoid: "Random blob, text obstruction, noisy particle field.",
    layer: "atmosphere behind content",
    material: "translucent moon grey, violet smoke",
    motion: "petal-to-smoke, draw-on scent trail",
    export: "aria-hidden SVG path with CSS opacity variables"
  },
  {
    id: "couture-label",
    role: "callout",
    title: "Couture Label",
    use: "Scent note tags, chapter labels, premium metadata.",
    avoid: "Meaningless badge decoration.",
    layer: "callout above hero object",
    material: "ivory label, brass keyline, ink text",
    motion: "selection snap, state change",
    export: "SVG frame only; keep text live"
  }
];

const morphs = [
  ["circle to lens", "circle aperture", "horizontal lens", "same family, stable center anchor", "CSS radius/scale or SVG ellipse attributes"],
  ["squircle to bottle silhouette", "rounded product frame", "bottle body with neck and stopper", "normalized path or parametric bridge required", "SVG path interpolation only after point normalization"],
  ["curtain fold to mask", "vertical fold strips", "open content mask", "rect/fold strips preserve bounds", "CSS transform and clip-path"],
  ["petal to smoke mark", "petal scent note", "smoke trail", "decorative-only unless normalized", "SVG path interpolation or static fallback"],
  ["card frame to portal", "editorial card", "shadow portal", "rounded rect/squircle family", "CSS radius, scale, opacity"]
];

const storyboardFrames = [
  ["01 start", "Curtain closed; moon lens is narrow slit; bottle hidden in shadow.", 0],
  ["02 anticipation", "Curtain compresses inward; brass hardware tightens.", 120],
  ["03 transformation", "Curtain opens; moon circle expands into lens; bottle emerges.", 520],
  ["04 settle", "Bottle rises 12px; keyline draws on; smoke stays behind content.", 820],
  ["05 final state", "Headline, CTA, lens, and bottle are stable in text-safe zones.", 980]
];

function paint(hex, opacity = 1) {
  const value = hex.replace("#", "");
  return {
    type: "SOLID",
    color: {
      r: parseInt(value.slice(0, 2), 16) / 255,
      g: parseInt(value.slice(2, 4), 16) / 255,
      b: parseInt(value.slice(4, 6), 16) / 255
    },
    opacity
  };
}

function meta(node, data) {
  const payload = JSON.stringify(data, null, 2);
  if (typeof node.setSharedPluginData === "function") {
    node.setSharedPluginData(NS, "metadata", payload);
  }
  if ("description" in node) {
    node.description = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join("\n");
  }
}

function findOrCreatePage(name) {
  const existing = figma.root.children.find((page) => page.name === name);
  if (existing) return existing;
  const page = figma.createPage();
  page.name = name;
  return page;
}

async function setPage(page) {
  if (typeof figma.setCurrentPageAsync === "function") {
    await figma.setCurrentPageAsync(page);
  } else {
    figma.currentPage = page;
  }
}

function clear(page) {
  page.children.slice().forEach((node) => node.remove());
}

function frame(name, x, y, w, h, fill = colors.ink) {
  const node = figma.createFrame();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.fills = [paint(fill)];
  node.strokes = [paint(colors.violet, 0.55)];
  node.strokeWeight = 1;
  node.cornerRadius = 24;
  if ("cornerSmoothing" in node) node.cornerSmoothing = 0.62;
  return node;
}

function text(characters, x, y, size = 18, bold = false, color = colors.ivory) {
  const node = figma.createText();
  node.name = `text / note / default / ${characters.slice(0, 28)}`;
  node.fontName = bold ? BOLD : FONT;
  node.fontSize = size;
  node.characters = characters;
  node.fills = [paint(color)];
  node.x = x;
  node.y = y;
  return node;
}

function labelCard(parent, title, body, x, y, w, h, role = "callout") {
  const card = frame(`${role} / couture-label / default / ${title}`, x, y, w, h, colors.plum);
  card.cornerRadius = 18;
  card.fills = [paint(colors.ivory, 0.94)];
  card.strokes = [paint(colors.brass)];
  card.appendChild(text(title, 18, 16, 17, true, colors.ink));
  const copy = text(body, 18, 46, 12, false, colors.ink);
  copy.resize(w - 36, h - 56);
  card.appendChild(copy);
  meta(card, { role, motif: "couture-label", textSafe: "copy stays inside label frame", codeHandoff: "keep text live in implementation" });
  parent.appendChild(card);
  return card;
}

function ellipse(name, x, y, w, h, fill, stroke = colors.brass, opacity = 1) {
  const node = figma.createEllipse();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.fills = [paint(fill, opacity)];
  node.strokes = [paint(stroke)];
  node.strokeWeight = 1.5;
  return node;
}

function rect(name, x, y, w, h, fill, radius = 16, opacity = 1) {
  const node = figma.createRectangle();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.cornerRadius = radius;
  if ("cornerSmoothing" in node) node.cornerSmoothing = 0.62;
  node.fills = [paint(fill, opacity)];
  node.strokes = [paint(colors.brass, 0.65)];
  node.strokeWeight = 1;
  return node;
}

function makeBottle(parent, x, y, scale = 1) {
  const group = frame("hero-object / scent-bottle / default / silhouette", x, y, 160 * scale, 360 * scale, colors.ink);
  group.fills = [];
  group.strokes = [];
  const cap = rect("foreground-object / bottle-stopper / default / cap", 58 * scale, 0, 44 * scale, 42 * scale, colors.brass, 10 * scale);
  const neck = rect("hero-object / bottle-neck / default / neck", 50 * scale, 42 * scale, 60 * scale, 80 * scale, colors.violet, 18 * scale);
  const body = rect("hero-object / bottle-body / default / body", 18 * scale, 96 * scale, 124 * scale, 250 * scale, colors.plum, 42 * scale);
  body.strokes = [paint(colors.moon)];
  body.strokeWeight = 2;
  const label = rect("callout / scent-label / default / bottle", 42 * scale, 190 * scale, 76 * scale, 54 * scale, colors.ivory, 14 * scale);
  group.appendChild(cap);
  group.appendChild(neck);
  group.appendChild(body);
  group.appendChild(label);
  meta(group, {
    role: "hero-object",
    motif: "scent-bottle-silhouette",
    accessibility: "meaningful; title/desc required in SVG export",
    fictional: "fictional perfume concept object"
  });
  parent.appendChild(group);
  return group;
}

function makeSmoke(parent, x, y, variant = "trail") {
  const smoke = frame(`decorative / smoke-mark / background / ${variant}`, x, y, 220, 120, colors.ink);
  smoke.fills = [];
  smoke.strokes = [];
  smoke.appendChild(ellipse("decorative / smoke-mark / default / wisp-a", 0, 36, 120, 26, colors.smoke, colors.smoke, 0.18));
  smoke.appendChild(ellipse("decorative / smoke-mark / default / wisp-b", 70, 14, 130, 24, colors.smoke, colors.smoke, 0.14));
  smoke.appendChild(ellipse("decorative / smoke-mark / default / wisp-c", 40, 76, 170, 20, colors.smoke, colors.smoke, 0.12));
  meta(smoke, {
    role: "decorative",
    motif: "smoke-mark",
    accessibility: "aria-hidden in code",
    textSafe: "must remain behind readable zones"
  });
  parent.appendChild(smoke);
  return smoke;
}

function makeCurtain(parent, x, y, side = "left") {
  const curtain = frame(`mask / curtain-fold / reveal-start / ${side}`, x, y, 190, 360, colors.oxblood);
  curtain.fills = [paint(colors.oxblood)];
  for (let i = 0; i < 5; i += 1) {
    const fold = rect(`foreground-object / curtain-fold / default / fold-${i + 1}`, 20 + i * 32, 0, 18, 360, i % 2 ? colors.plum : colors.oxblood, 10, 0.82);
    curtain.appendChild(fold);
  }
  meta(curtain, {
    role: "mask",
    motif: "curtain-reveal",
    motion: "reveal/mask, not random wavy panel",
    codeHandoff: "CSS transform strips or SVG mask"
  });
  parent.appendChild(curtain);
  return curtain;
}

function makeTitle(page, title, subtitle) {
  page.appendChild(text(title, 80, 64, 36, true));
  page.appendChild(text(subtitle, 80, 116, 15, false, colors.moon));
}

async function createShapeTokensPage() {
  const page = findOrCreatePage("00 Shape Tokens");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Shape tokens for Midnight Scent Theater", costSafety: "normal Plugin API only" });
  makeTitle(page, "00 Shape Tokens", "Geometry only. Brand/material color stays separate from shape tokens.");
  const all = [
    ["Primitive Tokens", primitiveTokens],
    ["Semantic Tokens", semanticTokens],
    ["Project Tokens", projectTokens]
  ];
  all.forEach(([section, tokens], sectionIndex) => {
    const board = frame(`frame / token-section / default / ${section}`, 80, 180 + sectionIndex * 390, 1120, 330, colors.ink);
    board.appendChild(text(section, 28, 24, 24, true));
    tokens.forEach(([name, value, type], index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      labelCard(board, name, `value: ${value}\ntype: ${type}\nrule: no color baked into geometry`, 28 + col * 350, 78 + row * 116, 320, 92, "token");
    });
    page.appendChild(board);
  });
}

async function createVectorGrammarPage() {
  const page = findOrCreatePage("01 Vector Grammar");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Shape role taxonomy, layers, safe zones, responsive behavior, accessibility notes" });
  makeTitle(page, "01 Vector Grammar", "Every shape has role, layer, bounds, anchors, material, responsive behavior, accessibility status, and code handoff.");
  const roles = ["background-object", "atmosphere", "mask", "hero-object", "frame", "foreground-object", "callout", "control"];
  const board = frame("frame / vector-grammar / default / layer-stack", 80, 180, 1180, 620, colors.ink);
  board.appendChild(text("Layer Stack", 28, 24, 26, true));
  roles.forEach((role, index) => {
    labelCard(board, role, `Layer ${index + 1}. Bounds, anchors, material, responsive behavior, and code handoff required.`, 28 + (index % 2) * 550, 84 + Math.floor(index / 2) * 118, 520, 88, role);
  });
  labelCard(board, "Text-safe zones", "Hero headline, CTA, scent notes, and navigation cannot be covered by lens, curtain, bottle, or smoke marks.", 28, 548, 520, 70, "rule");
  labelCard(board, "Banned forms", "No random blobs, fake glass ovals, orbital/HUD/radar lines, cheap gradients, roleless smoke, or shapes covering text.", 578, 548, 520, 70, "rule");
  page.appendChild(board);
}

async function createMotifLibraryPage() {
  const page = findOrCreatePage("02 Motif Library");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Motif library for editorial perfume landing page" });
  makeTitle(page, "02 Motif Library", "Moon/lens, scent bottle, curtain reveal, smoke mark, and couture label motifs.");
  motifs.forEach((motif, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const board = frame(`${motif.role} / ${motif.id} / default / motif-card`, 80 + col * 620, 180 + row * 360, 560, 300, colors.ink);
    board.appendChild(text(motif.title, 28, 24, 26, true));
    board.appendChild(text(`Use: ${motif.use}\nAvoid: ${motif.avoid}\nLayer: ${motif.layer}\nMaterial: ${motif.material}\nMotion: ${motif.motion}\nExport: ${motif.export}`, 28, 72, 13, false, colors.moon));
    if (motif.id === "moon-lens") {
      board.appendChild(ellipse("mask / moon-lens / default / aperture", 320, 64, 170, 92, colors.moon, colors.brass, 0.92));
    } else if (motif.id === "scent-bottle") {
      makeBottle(board, 350, 58, 0.5);
    } else if (motif.id === "curtain-reveal") {
      makeCurtain(board, 340, 58, "sample");
    } else if (motif.id === "smoke-mark") {
      makeSmoke(board, 310, 90, "sample");
    } else {
      board.appendChild(rect("callout / couture-label / selected / sample", 330, 90, 160, 70, colors.ivory, 18));
    }
    meta(board, motif);
    page.appendChild(board);
  });
}

async function createMorphBoardsPage() {
  const page = findOrCreatePage("03 Morph Boards");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Morph-compatible boards with before/after/compatibility notes" });
  makeTitle(page, "03 Morph Boards", "Morphs require compatibility notes. Do not claim arbitrary paths will morph cleanly unless normalized.");
  morphs.forEach(([name, before, after, compatibility, technique], index) => {
    const board = frame(`frame / morph-board / default / ${name}`, 80, 180 + index * 230, 1180, 190, colors.ink);
    board.appendChild(text(name, 28, 22, 22, true));
    board.appendChild(ellipse(`mask / ${before} / before / morph`, 36, 78, 130, 72, colors.moon, colors.brass, 0.88));
    board.appendChild(rect(`hero-object / ${after} / after / morph`, 300, 58, 150, 112, colors.plum, 32, 0.9));
    board.appendChild(text("before", 54, 154, 12, false, colors.smoke));
    board.appendChild(text("after", 348, 154, 12, false, colors.smoke));
    board.appendChild(text(`Compatibility: ${compatibility}\nTechnique: ${technique}\nEasing: cubic-bezier(.16,1,.3,1)\nReduced motion: show final static shape with no path interpolation.`, 520, 58, 14, false, colors.moon));
    meta(board, { morph: name, before, after, compatibility, technique, reducedMotion: "static final state" });
    page.appendChild(board);
  });
}

async function createMotionStoryboardsPage() {
  const page = findOrCreatePage("04 Motion Storyboards");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Storyboard frames for runtime animation handoff; Figma is not runtime animation." });
  makeTitle(page, "04 Motion Storyboards", "Midnight curtain lens reveal: start, anticipation, transformation, settle, final state.");
  storyboardFrames.forEach(([name, state, time], index) => {
    const board = frame(`frame / motion-storyboard / ${name} / curtain-lens-reveal`, 80 + index * 310, 180, 280, 520, colors.ink);
    board.appendChild(text(name, 22, 22, 20, true));
    board.appendChild(text(`${time}ms`, 22, 50, 13, false, colors.brass));
    board.appendChild(ellipse(`mask / moon-lens / ${name} / aperture`, 54, 105, index < 2 ? 84 : 160, index < 2 ? 28 : 86, colors.moon, colors.brass, 0.82));
    if (index < 3) {
      makeCurtain(board, 20, 165, "left");
    } else {
      makeBottle(board, 72, 150, 0.7);
    }
    board.appendChild(text(state, 22, 430, 12, false, colors.moon));
    meta(board, { motionFrame: name, timeMs: time, state, reducedMotion: "static final open scene" });
    page.appendChild(board);
  });
  const notes = frame("frame / reduced-motion / default / fallback", 80, 760, 1500, 180, colors.plum);
  notes.appendChild(text("Reduced-motion fallback", 28, 24, 24, true));
  notes.appendChild(text("Render final open lens and bottle immediately. No curtain slide, path morph, smoke draw-on, or large parallax. Keep only 100-160ms focus/button feedback.", 28, 70, 16, false, colors.moon));
  meta(notes, { role: "motion-fallback", implementation: "prefers-reduced-motion: reduce" });
  page.appendChild(notes);
}

async function createExportSpecsPage() {
  const page = findOrCreatePage("05 Export Specs");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "Code-ready handoff specs for SVG, tokens, motion, CSS variables, and parity risks" });
  makeTitle(page, "05 Export Specs", "SVG exports preserve viewBox, separate geometry/material, and include accessibility notes.");
  const rules = [
    "Preserve SVG viewBox.",
    "Meaningful bottle and moon/lens SVGs need title and desc.",
    "Decorative smoke and curtain texture are aria-hidden in code.",
    "Use currentColor for reusable icon-like marks.",
    "Do not bake fixed theme fills into reusable geometry.",
    "Keep live text as HTML where possible.",
    "Motion manifest names trigger, duration, easing, keyframes, affected layers, reduced-motion fallback, and implementation target.",
    "CSS variables map radius, keyline, offset, and smoothing model."
  ];
  rules.forEach((rule, index) => {
    labelCard(page, `Export rule ${index + 1}`, rule, 80 + (index % 2) * 560, 180 + Math.floor(index / 2) * 150, 520, 110, "rule");
  });
}

async function createQAReviewPage() {
  const page = findOrCreatePage("99 QA Review");
  await setPage(page);
  clear(page);
  meta(page, { purpose: "QA review for shapes, morphs, motion, export, cost safety, and accessibility" });
  makeTitle(page, "99 QA Review", "Reject roleless shapes, random blobs, orbital/HUD lines, text-covering marks, missing reduced motion, and missing code handoff.");
  const checks = [
    "Every visible shape has role/layer/bounds/anchors/material/responsive behavior.",
    "Decorative smoke is marked decorative and never covers text.",
    "Moon/lens is not an orbit/HUD/radar decoration.",
    "Bottle silhouette is fictional and meaningful, with SVG title/desc.",
    "Curtain reveal controls a real reveal/mask behavior.",
    "Morph boards include compatibility and reduced-motion notes.",
    "Storyboard has start, anticipation, transformation, settle, final.",
    "No Figma AI, Make, Weave, image generation, AI credits, Motion, Draw, or Dev Mode features.",
    "Export manifest includes viewBox, color strategy, accessibility, responsive behavior, and parity risks."
  ];
  checks.forEach((check, index) => {
    labelCard(page, `QA ${index + 1}`, check, 80 + (index % 3) * 410, 180 + Math.floor(index / 3) * 160, 370, 120, "qa");
  });
}

async function main() {
  await figma.loadFontAsync(FONT);
  await figma.loadFontAsync(BOLD);

  pages.forEach(findOrCreatePage);
  await createShapeTokensPage();
  await createVectorGrammarPage();
  await createMotifLibraryPage();
  await createMorphBoardsPage();
  await createMotionStoryboardsPage();
  await createExportSpecsPage();
  await createQAReviewPage();

  const page = findOrCreatePage("00 Shape Tokens");
  await setPage(page);
  figma.viewport.scrollAndZoomIntoView(page.children);
  figma.closePlugin("Created Midnight Scent Theater visual grammar pages.");
}

main().catch((error) => {
  figma.closePlugin(`Midnight Scent Theater page creation failed: ${error.message}`);
});
