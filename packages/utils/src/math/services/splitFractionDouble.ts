export function splitFractionDouble(value: number) {
  return [Math.floor(value / 1), value % 1];
}