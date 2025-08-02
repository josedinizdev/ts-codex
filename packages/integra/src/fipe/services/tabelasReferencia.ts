import { api } from "../api";
import { TabelaReferencia } from "../types";

export async function tabelasReferencia(): Promise<TabelaReferencia[]> {
  const response = await api.post("veiculos/ConsultarTabelaDeReferencia");

  return response.data
    .map((item: any) => ({ codigo: item.Codigo, mes: item.Mes }))
    .sort((a: TabelaReferencia, b: TabelaReferencia) => b.codigo - a.codigo);
}