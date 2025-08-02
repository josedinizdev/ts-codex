export function exceptBy<TKey, T = any>(arr: T[], otherArray: T[], keySelector: (value: T) => TKey): T[] {
  const otherKeys = new Set(otherArray.map(keySelector));
  return arr.filter((value) => !otherKeys.has(keySelector(value)));
}