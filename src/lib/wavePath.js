function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function stringToSeed(str) {
  let h = 0;
  for (let i = 0; i < String(str).length; i++) {
    h = (Math.imul(31, h) + String(str).charCodeAt(i)) | 0;
  }
  return Math.abs(h) || 1;
}

export function generateWavePath(width, height, opts = {}) {
  const {
    density = 0.75,
    depthMin = 0,
    depthMax = 2,
    corner = 17,
    seed = 1,
  } = opts;

  const pad = depthMax + 2;
  const x0 = pad;
  const y0 = pad;
  const W = Math.max(1, width - pad * 2);
  const H = Math.max(1, height - pad * 2);
  const r = Math.min(corner, Math.min(W, H) / 2 - 2);

  const pts = [];
  const step = 6;

  function line(ax, ay, bx, by, nx, ny) {
    const len = Math.hypot(bx - ax, by - ay);
    const n = Math.max(1, Math.round(len / step));
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push({ x: ax + (bx - ax) * t, y: ay + (by - ay) * t, nx, ny });
    }
  }

  function arc(cx, cy, a0, a1) {
    const len = Math.abs(a1 - a0) * r;
    const n = Math.max(2, Math.round(len / step));
    for (let i = 0; i < n; i++) {
      const t = i / n;
      const a = a0 + (a1 - a0) * t;
      pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), nx: Math.cos(a), ny: Math.sin(a) });
    }
  }

  line(x0 + r, y0, x0 + W - r, y0, 0, -1);
  arc(x0 + W - r, y0 + r, -Math.PI / 2, 0);
  line(x0 + W, y0 + r, x0 + W, y0 + H - r, 1, 0);
  arc(x0 + W - r, y0 + H - r, 0, Math.PI / 2);
  line(x0 + W - r, y0 + H, x0 + r, y0 + H, 0, 1);
  arc(x0 + r, y0 + H - r, Math.PI / 2, Math.PI);
  line(x0, y0 + H - r, x0, y0 + r, -1, 0);
  arc(x0 + r, y0 + r, Math.PI, Math.PI * 1.5);

  const n = pts.length;
  const seg = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    const q = pts[(i + 1) % n];
    const dl = Math.hypot(q.x - pts[i].x, q.y - pts[i].y);
    seg.push(dl);
    total += dl;
  }

  const rng = mulberry32(seed);
  const depth = depthMin + rng() * (depthMax - depthMin);
  const ph1 = rng() * Math.PI * 2;
  const ph2 = rng() * Math.PI * 2;

  const freq = Math.max(2, Math.round((total / 100) * density));
  const freq2 = freq + 1;

  let cum = 0;
  for (let i = 0; i < n; i++) {
    const s = cum / total;
    const off =
      depth *
      (0.6 * Math.sin(Math.PI * 2 * freq * s + ph1) +
        0.4 * Math.sin(Math.PI * 2 * freq2 * s + ph2));
    pts[i].x += pts[i].nx * off;
    pts[i].y += pts[i].ny * off;
    cum += seg[i];
  }

  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
  }
  return d + "Z";
}