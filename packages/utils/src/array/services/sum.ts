export function sum<T = number>(arr: T[], selector?: (value: T) => number): number {
  let sum = 0;
  for (const value of arr) {
    if (typeof value != "number") return 0;
    const num = selector ? selector(value) : value as any;
    sum += num;
  }
  return sum;
}