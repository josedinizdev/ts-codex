export interface DistritoInfo {
  id: number,
  nome: string,
  municipio?: MunicipioInfo
}

export interface SubDistritoInfo {
  id: number,
  nome: string,
  distrito?: DistritoInfo
}

export interface MunicipioInfo {
  id: number,
  nome: string,
  microrregiao: MicrorregiaoInfo,
  "regiao-imediata"?: RegiaoImediataInfo
}

export interface MicrorregiaoInfo {
  id: number,
  nome: string,
  mesorregiao?: MesorregiaoInfo
}

export interface RegiaoImediataInfo {
  id: number,
  nome: string,
  "regiao-intermediara"?: RegiaoIntermediariaInfo
}

export interface RegiaoIntermediariaInfo {
  id: number,
  nome: string,
  uf?: UFInfo
}

export interface MesorregiaoInfo {
  id: number,
  nome: string
}

export interface UFInfo {
  id: number,
  nome: string,
  sigla: string,
  regiao?: RegiaoInfo
}

export interface RegiaoInfo {
  id: number,
  nome: string,
  sigla?: string
}

export interface SubRegiaoInfo {
  id: number,
  nome: string,
  regiao?: RegiaoInfo
}

export interface PaisInfo {
  id: string | number,
  nome: string,
  "regiao-intermediaria"?: RegiaoIntermediariaInfo,
  "sub-regiao"?: SubRegiaoInfo
}

export interface RegiaoMetropolitanaInfo {
  id: number,
  nome: string,
  uf?: UFInfo,
  'sub-regioes-metropolitanas'?: SubRegiaoMetropolitanaInfo,
  municipios?: MunicipioInfo[],
}

export interface SubRegiaoMetropolitanaInfo {
  id: number,
  nome: string,
  municipios?: MunicipioInfo[],
}