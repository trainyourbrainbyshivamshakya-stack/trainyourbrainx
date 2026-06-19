import { stringToSeed } from "./wavePath";

export { stringToSeed };

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function splineOpen(P) {
  const n = P.length;
  let d = `M ${P[0].x.toFixed(2)} ${P[0].y.toFixed(2)} `;
  for (let i = 0; i < n - 1; i++) {
    const p0 = P[Math.max(i - 1, 0)];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[Math.min(i + 2, n - 1)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
  }
  return d;
}

function win(t, m) {
  let w;
  if (t < m) w = t / m;
  else if (t > 1 - m) w = (1 - t) / m;
  else w = 1;
  return w * w * (3 - 2 * w);
}

export function straightPath(sx, sy, tx, ty) {
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
}

export function curvePath(sx, sy, tx, ty, opts = {}) {
  const { pos = 0.7, amount = 22 } = opts;
  const dx = tx - sx;
  const dy = ty - sy;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const vx = sx + dx * pos + px * amount;
  const vy = sy + dy * pos + py * amount;
  return splineOpen([
    { x: sx, y: sy },
    { x: vx, y: vy },
    { x: tx, y: ty },
  ]);
}

export function zigzagPath(sx, sy, tx, ty, opts = {}) {
  const {
    waves = 6,
    amplitude = 7,
    ends = 0.25,
    irregularity = 0.25,
    seed = 1,
  } = opts;
  const dx = tx - sx;
  const dy = ty - sy;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const rng = mulberry32(seed);
  const p0 = rng() * 6.283;
  const p1 = rng() * 6.283;
  const ph = rng() * 6.283;
  const N = Math.max(40, Math.round(len / 4));
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const mod =
      1 + irregularity * (0.6 * Math.sin(6.283 * t + p0) + 0.4 * Math.sin(6.283 * 2 * t + p1));
    const off = amplitude * mod * Math.sin(t * Math.PI * waves + ph) * win(t, ends);
    pts.push({ x: sx + dx * t + px * off, y: sy + dy * t + py * off });
  }
  return splineOpen(pts);
}