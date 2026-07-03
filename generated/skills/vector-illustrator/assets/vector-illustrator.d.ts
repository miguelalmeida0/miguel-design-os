export type Point = { x: number; y: number } | [number, number];
export type Stop = [offset: string, color: string, opacity?: number];

export type GradientFill =
  | { kind: "linearGradient"; stops: Stop[]; options?: Record<string, string | number> }
  | { kind: "radialGradient"; stops: Stop[]; options?: Record<string, string | number> };

export type PatternFill = {
  kind: "pattern";
  markup: string;
  options?: Record<string, string | number>;
};

export type FillValue = string | GradientFill | PatternFill;

export type SceneOptions = {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  title?: string;
  desc?: string;
  attrs?: Record<string, string | number | boolean>;
};

export type CircleOptions = { cx?: number; cy?: number };
export type RectOptions = { x?: number; y?: number; rx?: number; ry?: number; radius?: number };
export type PolygonOptions = { cx?: number; cy?: number; rotation?: number };
export type StarOptions = { cx?: number; cy?: number; rotation?: number };
export type BlobOptions = { cx?: number; cy?: number; points?: number; variance?: number; seed?: number; rotation?: number; tension?: number };
export type PathOptions = { points?: Point[]; closed?: boolean };
export type SmoothPathOptions = { closed?: boolean; tension?: number };
export type StrokeOptions = { dash?: string | number[]; linecap?: "butt" | "round" | "square"; linejoin?: "miter" | "round" | "bevel"; opacity?: number; nonScaling?: boolean };
export type ShadowOptions = { dx?: number; dy?: number; color?: string; opacity?: number };
export type TaperedStrokeOptions = { steps?: number; opacity?: number };
export type MorphOptions = { duration?: number; easing?: string; repeat?: number | "indefinite"; alternate?: boolean };
export type AnimateOptions = MorphOptions & { dur?: number; fill?: "freeze" | "remove" };

export declare const easings: {
  linear: string;
  easeIn: string;
  easeOut: string;
  easeInOut: string;
  backOut: string;
};

export declare function scene(options?: SceneOptions): VectorScene;
export declare function shape(label?: string): VectorShape;
export declare function group(label?: string): VectorGroup;
export declare function linearGradient(stops: Stop[], options?: Record<string, string | number>): GradientFill;
export declare function radialGradient(stops: Stop[], options?: Record<string, string | number>): GradientFill;
export declare function pattern(markup: string, options?: Record<string, string | number>): PatternFill;

export declare const compose: {
  union(...items: Renderable[]): VectorGroup;
  subtract(base: VectorShape, ...cutters: VectorShape[]): Renderable;
  intersect(base: VectorShape, clipShape: VectorShape): Renderable;
  exclude(...items: VectorShape[]): Renderable;
};

export interface Renderable {
  render(ctx: unknown): string;
}

export declare class VectorScene {
  constructor(options?: SceneOptions);
  title(value: string): this;
  desc(value: string): this;
  attr(name: string, value: string | number | boolean): this;
  add(...items: Renderable[]): this;
  toSVG(options?: SceneOptions): string;
}

export declare class VectorGroup implements Renderable {
  constructor(label?: string);
  add(...items: Renderable[]): this;
  attr(name: string, value: string | number | boolean): this;
  opacity(value: number): this;
  blend(mode: string): this;
  mask(maskShape: VectorShape): this;
  clip(clipShape: VectorShape): this;
  translate(x: number, y?: number): this;
  rotate(deg: number, cx?: number, cy?: number): this;
  scale(x: number, y?: number): this;
  skewX(deg: number): this;
  skewY(deg: number): this;
  matrix(a: number, b: number, c: number, d: number, e: number, f: number): this;
  render(ctx: unknown): string;
}

export declare class VectorShape implements Renderable {
  constructor(label?: string);
  clone(): VectorShape;
  circle(radius: number, options?: CircleOptions): this;
  ellipse(rx: number, ry: number, options?: CircleOptions): this;
  rect(width: number, height: number, options?: RectOptions): this;
  polygon(points: Point[], radius?: never, options?: never): this;
  polygon(sides: number, radius: number, options?: PolygonOptions): this;
  star(points?: number, outerRadius?: number, innerRadius?: number, options?: StarOptions): this;
  blob(radius?: number, options?: BlobOptions): this;
  path(d: string, options?: PathOptions): this;
  smoothPath(points: Point[], options?: SmoothPathOptions): this;
  offsetStroke(distance?: number, options?: { miterLimit?: number; tension?: number }): this;
  fill(value: FillValue): this;
  stroke(color: string, width?: number, options?: StrokeOptions): this;
  dash(patternValue: string | number[], offset?: number): this;
  taperedStroke(startWidth: number, endWidth: number, color: string, options?: TaperedStrokeOptions): this;
  shadow(blur?: number, options?: ShadowOptions): this;
  blend(mode: string): this;
  opacity(value: number): this;
  attr(name: string, value: string | number | boolean): this;
  mask(maskShape: VectorShape): this;
  clip(clipShape: VectorShape): this;
  translate(x: number, y?: number): this;
  rotate(deg: number, cx?: number, cy?: number): this;
  scale(x: number, y?: number): this;
  skewX(deg: number): this;
  skewY(deg: number): this;
  matrix(a: number, b: number, c: number, d: number, e: number, f: number): this;
  animate(attributeName: string, values: string[], options?: AnimateOptions): this;
  morphTo(targetShape: VectorShape, options?: MorphOptions): this;
  toPathData(): string;
  toSVG(options?: SceneOptions): string;
  render(ctx: unknown): string;
}
