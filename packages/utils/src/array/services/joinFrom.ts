export function joinFrom<U, TKey, TResult, T = any>(
  arr: T[],
  otherList: U[],
  keySelector: (value: T) => TKey,
  otherKeySelector: (value: U) => TKey,
  resultSelector: (value1: T, value2: U) => TResult
): TResult[] {
  const result: TResult[] = [];
  for (const value1 of arr) {
    for (const value2 of otherList) {
      if (keySelector(value1) === otherKeySelector(value2)) {
        result.push(resultSelector(value1, value2));
      }
    }
  }
  return result;
}