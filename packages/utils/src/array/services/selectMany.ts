export function selectMany<U, T = any>(arr: T[], selector: (value: T) => U[]): U[] {
  const result: U[] = [];
  for (const value of arr) {
    result.push(...selector(value));
  }
  return result;
}