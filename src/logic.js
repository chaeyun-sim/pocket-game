export const TAU = Math.PI * 2;
export const wrapAngle = angle => ((angle % TAU) + TAU) % TAU;
export const angularDistance = (a, b) => Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
export const scoreForShard = combo => 10 * Math.max(1, combo);
export const difficultyAt = seconds => ({
  speed: Math.min(1.85, 1 + seconds / 80),
  spawnEvery: Math.max(0.62, 1.38 - seconds / 100),
});
export function daySeed(date = new Date()) {
  return Number(`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`);
}
export function mulberry32(seed) {
  return () => { let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
