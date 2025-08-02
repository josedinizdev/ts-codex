import { apiDados } from "../api";
import { DadosSGSInfo } from "../types";

export async function indiceSGSUltimos(indice: number, qtdeUltimos: number): Promise<DadosSGSInfo[]> {
  try {
    const response = await apiDados.get(`dados/serie/bcdata.sgs.${indice}/dados/ultimos/${qtdeUltimos}?formato=json`)
    return response.data
  } catch {
    return [];
  }
}