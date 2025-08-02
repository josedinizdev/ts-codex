export function sum(...valor: number[]): number {
  return valor.reduce((acc, num) => acc + num, 0);
}