export function remove<T = any>(arr: T[], element: T): T | undefined {
  const index = arr.indexOf(element);
  if (index > -1) {
    return arr.splice(index, 1)[0];
  }
  return undefined;
}