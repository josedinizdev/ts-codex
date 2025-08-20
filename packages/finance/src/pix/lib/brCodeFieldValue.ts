export function brCodeFieldValue(id: string, valor: string, maxLength: number) {
  if (valor.length > maxLength)
    valor = valor.substring(0, maxLength);
  let tamanho = valor.length.toString().padStart(2, '0');
  return id + tamanho + valor;
}