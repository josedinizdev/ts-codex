import { groupBy } from "./groupBy";

export function groupJoin<U, TKey, TResult, T = any>(
  arr: T[],
  otherList: U[],
  keySelector: (value: T) => TKey,
  otherKeySelector: (value: U) => TKey,
  resultSelector: (value: T, list: U[]) => TResult
): TResult[] {
  const groups = groupBy(otherList, otherKeySelector);
  return arr.map((value) => resultSelector(value, groups.get(keySelector(value)) || []));
}