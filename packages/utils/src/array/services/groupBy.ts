export function groupBy<TKey, T = any>(arr: T[], keySelector: (value: T) => TKey): Map<TKey, T[]> {
  const groups = new Map<TKey, T[]>();
  for (const v of arr) {
    const key = keySelector(v);
    const group = groups.get(key);
    if (group) {
      group.push(v);
    } else {
      let value: T[] = [v];
      groups.set(key, value);
    }
  }
  return groups;
}