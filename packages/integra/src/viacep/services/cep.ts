import { api } from "../api";
import { string } from "@ts-codex/utils";

export async function cep(cep: string): Promise<any> {
  cep = string.onlyNumbers(cep);
  const response = await api.get(`/${cep}/json`);
  return response.data;
}