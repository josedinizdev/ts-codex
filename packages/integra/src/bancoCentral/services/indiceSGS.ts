import { apiDados } from "../api";
import { DadosSGSInfo } from "../types";

export async function indiceSGS(indice: number): Promise<DadosSGSInfo | undefined> {
  try {
    const response = await apiDados.get(`dados/serie/bcdata.sgs.${indice}/dados/ultimos/1?formato=json`)
    if (response.data && response.data.length == 1)
      return response.data[0];
  } catch {
  }
  return undefined;
}

export async function ipcaMes(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(433);
}

export async function imabDiario(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(12466);
}

export async function imab5Diario(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(12467);
}

export async function imab5plusDiario(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(12468);
}

export async function cdiDiario(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(12);
}

export async function cdiMes(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(4391);
}

export async function selicDiario(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(11);
}

export async function selicMes(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(4390);
}

export async function igpmMes(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(189);
}

export async function trMes(): Promise<DadosSGSInfo | undefined> {
  return await indiceSGS(226);
}