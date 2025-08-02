export function insert<T = any>(arr: T[], index: number, element: T): void {
  if (index >= 0 && index <= arr.length) {
    arr.splice(index, 0, element);
  } else {
    arr.push(element);
  }
}