export function removeRange<T = any>(arr: T[], startIndex: number, count: number): T[] {
  if (startIndex >= 0 && startIndex < arr.length && count > 0) {
    return arr.splice(startIndex, count);
  }
  return [];
}