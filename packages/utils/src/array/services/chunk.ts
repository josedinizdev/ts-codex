export function chunk<T = any>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunks.push(chunk);
  }
  return chunks;
}