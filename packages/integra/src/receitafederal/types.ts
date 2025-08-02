import { Nullable } from "../types";

export interface ConsultaCnpjInfo {
  razao_social: string;
  fantasia: string;
  cnpj: string;
  codNatureza: string | null;
  natureza: string | null;
  tipo: string | null;
  situacaoCadastral: string | null;
  simplesNacional: boolean | null,
  mei: boolean | null,
  socios: SocioInfo[],
  cnae: CnaeInfo | null,
  cnaesSecundarios: CnaeInfo[],
  endereco: EnderecoInfo | null,
  emails: string[],
  telefones: string[],
  datas: DatasInfo
}

export interface EnderecoInfo {
  logradouro: string;
  numero: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  complemento: string;
}

export interface SocioInfo {
  nome: string,
  codQualificacao: string,
  qualificacao: string,
}

export interface CnaeInfo {
  descricao: string,
  cod: string,
}

export interface DatasInfo {
  inicioAtividade: string | null;
  simplesNacional: string | null;
  situacaoCadastral: string | null;
  mei: string | null;
  exclusaoMei: string | null;
  exclusaoSimples: string | null;
}

export interface MinhaReceitaInfo {
  uf: Nullable<string>;
  cep: Nullable<string>;
  qsa: MinhaReceitaSocioInfo[];
  cnpj: string;
  pais: Nullable<string>;
  email: Nullable<string>;
  porte: Nullable<string>;
  bairro: Nullable<string>;
  numero: Nullable<string>;
  ddd_fax: Nullable<string>;
  municipio: Nullable<string>;
  logradouro: Nullable<string>;
  cnae_fiscal: number;
  codigo_pais: Nullable<string>;
  complemento: Nullable<string>;
  codigo_porte: number;
  razao_social: string;
  nome_fantasia: Nullable<string>;
  capital_social: number;
  ddd_telefone_1: Nullable<string>;
  ddd_telefone_2: Nullable<string>;
  opcao_pelo_mei: boolean;
  codigo_municipio: number;
  cnaes_secundarios: MinhaReceitaCnaeInfo[];
  natureza_juridica: Nullable<string>;
  regime_tributario: Nullable<string>;
  situacao_especial: Nullable<string>;
  opcao_pelo_simples: boolean;
  situacao_cadastral: number;
  data_opcao_pelo_mei: Nullable<string>;
  data_exclusao_do_mei: Nullable<string>;
  cnae_fiscal_descricao: Nullable<string>;
  codigo_municipio_ibge: number;
  data_inicio_atividade: Nullable<string>;
  data_situacao_especial: Nullable<string>;
  data_opcao_pelo_simples: Nullable<string>;
  data_situacao_cadastral: Nullable<string>;
  nome_cidade_no_exterior: Nullable<string>;
  codigo_natureza_juridica: number;
  data_exclusao_do_simples: Nullable<string>;
  motivo_situacao_cadastral: number;
  ente_federativo_responsavel: Nullable<string>;
  identificador_matriz_filial: number;
  qualificacao_do_responsavel: number;
  descricao_situacao_cadastral: Nullable<string>;
  descricao_tipo_de_logradouro: Nullable<string>;
  descricao_motivo_situacao_cadastral: Nullable<string>;
  descricao_identificador_matriz_filial: Nullable<string>;
}

export interface MinhaReceitaSocioInfo {
  pais: Nullable<string>;
  nome_socio: string;
  codigo_pais: Nullable<string>;
  faixa_etaria: Nullable<string>;
  cnpj_cpf_do_socio: Nullable<string>;
  qualificacao_socio: string;
  codigo_faixa_etaria: number;
  data_entrada_sociedade: Nullable<string>;
  identificador_de_socio: number;
  cpf_representante_legal: Nullable<string>;
  nome_representante_legal: Nullable<string>;
  codigo_qualificacao_socio: number;
  qualificacao_representante_legal: Nullable<string>;
  codigo_qualificacao_representante_legal: number;
}

export interface MinhaReceitaCnaeInfo {
  codigo: number;
  descricao: string;
}

export interface ReceitaWsInfo {
  abertura: Nullable<string>;
  situacao: Nullable<string>
  tipo: Nullable<string>;
  nome: string;
  porte: Nullable<string>;
  natureza_juridica: Nullable<string>;
  atividade_principal: ReceitaWsCnaeInfo[];
  atividades_secundarias: ReceitaWsCnaeInfo[];
  qsa: ReceitaWsSocioInfo[];
  logradouro: Nullable<string>;
  numero: Nullable<string>;
  municipio: Nullable<string>;
  bairro: Nullable<string>;
  uf: Nullable<string>;
  cep: Nullable<string>;
  email: Nullable<string>;
  telefone: Nullable<string>;
  data_situacao: Nullable<string>;
  cnpj: string;
  ultima_atualizacao: Nullable<string>;
  status: Nullable<string>;
  fantasia: Nullable<string>;
  complemento: Nullable<string>;
  efr: Nullable<string>;
  motivo_situacao: Nullable<string>;
  situacao_especial: Nullable<string>;
  data_situacao_especial: Nullable<string>;
  capital_social: Nullable<string>;
  simples: Nullable<ReceitaWsSimplesInfo>;
  simei: Nullable<ReceitaWsSimeiInfo>;
  extra: any;
  billing: {
    free: boolean;
    database: boolean;
  };
}

export interface ReceitaWsSimplesInfo {
  optante: boolean;
  data_opcao: Nullable<string>;
  data_exclusao: Nullable<string>;
  ultima_atualizacao: Nullable<string>;
}

export interface ReceitaWsSimeiInfo {
  optante: boolean;
  data_opcao: Nullable<string>;
  data_exclusao: Nullable<string>;
  ultima_atualizacao: Nullable<string>;
}

export interface ReceitaWsSocioInfo {
  nome: string;
  qual: string;
}

export interface ReceitaWsCnaeInfo {
  code: string;
  text: string;
}