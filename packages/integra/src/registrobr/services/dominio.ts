import { api } from "../api";

export async function dominio(dominio: string): Promise<any> {
  if (!dominio.length || /[^A-Za-z0-9àáâãéêíóôõúüç.-]/.test(`avail/raw/${dominio}`))
    throw new Error('O domínio não foi informado corretamente!');

  const response: any = await api.get(dominio);
  return response.data;
}