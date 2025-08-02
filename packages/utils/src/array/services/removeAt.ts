export function removeAt<T = any>(arr: T[], index: number): T | undefined {
  if (index >= 0 && index < arr.length) {
    return arr.splice(index, 1)[0];
  }
  return undefined;
}