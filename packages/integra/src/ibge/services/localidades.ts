import { apiLocalidades } from "../api";
import { DistritoInfo, MesorregiaoInfo, MicrorregiaoInfo, MunicipioInfo, PaisInfo, RegiaoImediataInfo, RegiaoInfo, RegiaoIntermediariaInfo, RegiaoMetropolitanaInfo, SubDistritoInfo, UFInfo } from "../types";

export async function distritos(codigo?: string | number): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get("distritos".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function distritosPorUf(uf: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/distritos`);
  return response.data;
}

export async function distritosPorMesorregiao(mesorregiao: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`mesorregioes/${mesorregiao}/distritos`);
  return response.data;
}

export async function distritosPorMicrorregiao(microrregiao: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`microrregioes/${microrregiao}/distritos`);
  return response.data;
}

export async function distritosPorMunicipio(municipio: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`municipios/${municipio}/distritos`);
  return response.data;
}

export async function distritosPorRegiaoImediata(regiaoImediata: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`regioes-imediatas/${regiaoImediata}/distritos`);
  return response.data;
}

export async function distritosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`regioes-intermediarias/${regiaoIntermediaria}/distritos`);
  return response.data;
}

export async function distritosPorRegiao(regiao: string): Promise<DistritoInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/distritos`);
  return response.data;
}

export async function mesorregioes(codigo?: string | number): Promise<MesorregiaoInfo[]> {
  const response = await apiLocalidades.get("mesorregioes".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function mesorregioesPorUf(uf: string): Promise<MesorregiaoInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/mesorregioes`);
  return response.data;
}

export async function mesorregioesPorRegiao(regiao: string): Promise<MesorregiaoInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/mesorregioes`);
  return response.data;
}

export async function microrregioes(codigo?: string | number): Promise<MicrorregiaoInfo[]> {
  const response = await apiLocalidades.get("microrregioes".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function microrregioesPorUf(uf: string): Promise<MicrorregiaoInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/microrregioes`);
  return response.data;
}

export async function microrregioesPorRegiao(regiao: string): Promise<MicrorregiaoInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/microrregioes`);
  return response.data;
}

export async function microrregioesPorMesorregiao(regiao: string): Promise<MicrorregiaoInfo[]> {
  const response = await apiLocalidades.get(`mesorregioes/${regiao}/microrregioes`);
  return response.data;
}

export async function municipios(codigo?: string | number): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get("municipios".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function municipiosPorUf(uf: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/municipios`);
  return response.data;
}

export async function municipiosPorMesorregiao(regiao: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`mesorregioes/${regiao}/municipios`);
  return response.data;
}

export async function municipiosPorMicrorregiao(microrregiao: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`microrregioes/${microrregiao}/municipios`);
  return response.data;
}

export async function municipiosPorRegiaoImediata(regiaoImediata: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`regioes-imediatas/${regiaoImediata}/municipios`);
  return response.data;
}

export async function municipiosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`regioes-intermediarias/${regiaoIntermediaria}/municipios`);
  return response.data;
}

export async function municipiosPorRegiao(regiao: string): Promise<MunicipioInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/municipios`);
  return response.data;
}

export async function paises(codigo?: string | number): Promise<PaisInfo[]> {
  const response = await apiLocalidades.get("paises".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function regioes(codigo?: string | number): Promise<RegiaoInfo[]> {
  const response = await apiLocalidades.get("regioes".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function regioesImediatas(codigo?: string | number): Promise<RegiaoImediataInfo[]> {
  const response = await apiLocalidades.get("regioes-imediatas".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function regioesImediatasPorUf(uf: string): Promise<RegiaoImediataInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/regioes-imediatas`);
  return response.data;
}

export async function regioesImediatasPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<RegiaoImediataInfo[]> {
  const response = await apiLocalidades.get(`regioes-intermediarias/${regiaoIntermediaria}/regioes-imediatas`);
  return response.data;
}

export async function regioesImediatasPorRegiao(regiao: string): Promise<RegiaoImediataInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/regioes-imediatas`);
  return response.data;
}

export async function regioesIntermediarias(codigo?: string | number): Promise<RegiaoIntermediariaInfo[]> {
  const response = await apiLocalidades.get("regioes-intermediarias".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function regioesIntermediariasPorUf(uf: string): Promise<RegiaoIntermediariaInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/regioes-intermediarias`);
  return response.data;
}

export async function regioesIntermediariasPorRegiao(regiao: string): Promise<RegiaoIntermediariaInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/regioes-intermediarias`);
  return response.data;
}

export async function regioesMetropolitanas(codigo?: string | number): Promise<RegiaoMetropolitanaInfo[]> {
  const response = await apiLocalidades.get("regioes-metropolitanas".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function regioesMetropolitanasPorUf(uf: string): Promise<RegiaoMetropolitanaInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/regioes-metropolitanas`);
  return response.data;
}

export async function regioesMetropolitanasPorRegiao(regiao: string): Promise<RegiaoMetropolitanaInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/regioes-metropolitanas`);
  return response.data;
}

export async function subdistritos(codigo?: string | number): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get("subdistritos".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function subdistritosPorUf(uf: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`estados/${uf}/subdistritos`);
  return response.data;
}

export async function subdistritosPorDistrito(distrito: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`distritos/${distrito}/subdistritos`);
  return response.data;
}

export async function subdistritosMunicipio(municipio: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`municipios/${municipio}/subdistritos`);
  return response.data;
}

export async function subdistritosPorMicrorregiao(microrregiao: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`microrregioes/${microrregiao}/subdistritos`);
  return response.data;
}

export async function subdistritosPorMesorregiao(mesorregiao: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`mesorregioes/${mesorregiao}/subdistritos`);
  return response.data;
}

export async function subdistritosPorRegiaoImediata(regiaoImediata: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`regioes-imediatas/${regiaoImediata}/subdistritos`);
  return response.data;
}

export async function subdistritosPorRegiao(regiao: string): Promise<SubDistritoInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/subdistritos`);
  return response.data;
}

export async function uf(codigo?: string | number): Promise<UFInfo | UFInfo[]> {
  const response = await apiLocalidades.get("estados".concat(codigo ? `/${codigo}` : ""));
  return response.data;
}

export async function ufPorRegiao(regiao: string): Promise<UFInfo[]> {
  const response = await apiLocalidades.get(`regioes/${regiao}/estados`);
  return response.data;
}