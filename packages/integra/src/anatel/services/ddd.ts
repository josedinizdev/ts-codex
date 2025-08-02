import { api } from "../api";
import { DDDInfo } from "../types";

export async function ddd(): Promise<DDDInfo[]> {
  const response = await api.get('PDA/Codigo_Nacional/PGCN.csv', {
    responseEncoding: 'binary'
  });

  const csv: string[] = response.data.toString('binary')
    .split('\r\n')
    .shift();

  return csv.map((l) => l.split(';')).map(([Codigo, Estado, Cidade, DDD]) => {
    return {
      Codigo,
      Estado,
      Cidade,
      DDD
    };
  });
}