import { apiDados } from "../api";
import { DadosSGSInfo } from "../types";

export async function indiceSGSTodos(indice: number): Promise<DadosSGSInfo[]> {
  try {
    const response = await apiDados.get(`dados/serie/bcdata.sgs.${indice}/dados?formato=json`)
    return response.data
  } catch {
    return [];
  }
}