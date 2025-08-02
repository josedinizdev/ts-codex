import { date } from "@ts-codex/utils";
import { apiDados } from "../api";
import { DadosSGSInfo } from "../types";

export async function indiceSGSPeriodo(indice: number, dataInicial: Date | string, dataFinal: Date | string): Promise<DadosSGSInfo[]> {
  try {
    const response = await apiDados.get(`dados/serie/bcdata.sgs.${indice}/dados?formato=json&dataInicial=${date.toDateString(dataInicial, "DD/MM/YYYY")}&dataFinal=${date.toDateString(dataFinal, "DD/MM/YYYY")}`)
    return response.data
  } catch {
    return [];
  }
}