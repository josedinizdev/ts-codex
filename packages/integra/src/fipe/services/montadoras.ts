import { api } from "../api";
import { Montadora, VEICULO } from "../types";
import { tabelasReferencia } from "./tabelasReferencia";

// TODO receber mes e ano
export async function montadoras(veiculo: VEICULO): Promise<any> {
  const lstTabelas = await tabelasReferencia();

  const response = await api.post("veiculos/ConsultarMarcas", {
    codigoTabelaReferencia: lstTabelas[0].codigo,
    codigoTipoVeiculo: veiculo
  });

  return response.data
    .map((item: any) => ({ nome: item.Label, valor: item.Value }))
    .sort((a: Montadora, b: Montadora) => parseInt(a.valor, 10) - parseInt(b.valor, 10));
}