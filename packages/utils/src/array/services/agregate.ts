export function agregate<U, T = any>(arr: T[], callback: (accumulator: U, value: T) => U, initialValue: U): U {
  let accumulator = initialValue;
  for (const value of arr) {
    accumulator = callback(accumulator, value);
  }
  return accumulator;
}