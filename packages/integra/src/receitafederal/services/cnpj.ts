import { date, string } from "@ts-codex/utils";
import { apiMinhaReceita, apiReceitaWs } from "../api";
import { CnaeInfo, ConsultaCnpjInfo, DatasInfo, EnderecoInfo, MinhaReceitaInfo, ReceitaWsInfo, SocioInfo } from "../types";

async function cnpjMinhaReceita(cnpj: string): Promise<ConsultaCnpjInfo | undefined> {
  try {
    const response = await apiMinhaReceita.get(cnpj);
    const rInfo: MinhaReceitaInfo = response.data;
    const socios: SocioInfo[] = [];
    const cnaesSecundarios: CnaeInfo[] = [];
    const emails: string[] = [];
    const telefones: string[] = [];
    let cnae: CnaeInfo | null = null;
    let endereco: EnderecoInfo | null = null;
    rInfo.qsa?.map((s) => socios.push({ nome: s.nome_socio, codQualificacao: string.onlyNumbers(s.codigo_qualificacao_socio.toString()), qualificacao: s.qualificacao_socio }))
    if (rInfo.cnae_fiscal && rInfo.cnae_fiscal_descricao)
      cnae = { cod: string.onlyNumbers(rInfo.cnae_fiscal.toString()), descricao: rInfo.cnae_fiscal_descricao }
    rInfo.cnaes_secundarios?.map(c => cnaesSecundarios.push({ cod: string.onlyNumbers(c.codigo.toString()), descricao: c.descricao }))
    if (rInfo.cep && rInfo.uf && rInfo.logradouro) {
      endereco = {
        bairro: rInfo.bairro ?? '',
        cep: string.onlyNumbers(rInfo.cep),
        complemento: rInfo.complemento ?? '',
        logradouro: rInfo.logradouro,
        municipio: rInfo.municipio ?? '',
        numero: rInfo.numero ?? '',
        uf: rInfo.uf
      }
    }

    if (rInfo.email)
      emails.push(rInfo.email);

    if (rInfo.ddd_telefone_1)
      telefones.push(string.onlyNumbers(rInfo.ddd_telefone_1));
    if (rInfo.ddd_telefone_2)
      telefones.push(string.onlyNumbers(rInfo.ddd_telefone_2));

    return {
      razao_social: rInfo.razao_social,
      fantasia: rInfo.nome_fantasia ?? "",
      cnpj: string.onlyNumbers(rInfo.cnpj),
      codNatureza: rInfo.codigo_natureza_juridica == 0 ? null : rInfo.codigo_natureza_juridica.toString(),
      natureza: rInfo.natureza_juridica ?? null,
      tipo: rInfo.descricao_identificador_matriz_filial ?? null,
      situacaoCadastral: rInfo.descricao_situacao_cadastral ?? null,
      simplesNacional: rInfo.opcao_pelo_simples,
      mei: rInfo.opcao_pelo_mei,
      socios,
      cnae,
      endereco,
      emails,
      telefones,
      cnaesSecundarios,
      datas: {
        inicioAtividade: rInfo.data_inicio_atividade ? date.toDateString(rInfo.data_inicio_atividade, "DD/MM/YYYY") : null,
        exclusaoMei: rInfo.data_exclusao_do_mei ? date.toDateString(rInfo.data_exclusao_do_mei, "DD/MM/YYYY") : null,
        exclusaoSimples: rInfo.data_exclusao_do_simples ? date.toDateString(rInfo.data_exclusao_do_simples, "DD/MM/YYYY") : null,
        mei: rInfo.data_opcao_pelo_mei ? date.toDateString(rInfo.data_opcao_pelo_mei, "DD/MM/YYYY") : null,
        simplesNacional: rInfo.data_opcao_pelo_simples ? date.toDateString(rInfo.data_opcao_pelo_simples, "DD/MM/YYYY") : null,
        situacaoCadastral: rInfo.data_situacao_cadastral ? date.toDateString(rInfo.data_situacao_cadastral, "DD/MM/YYYY") : null,
      }
    }
  } catch {
    return undefined;
  }
}

async function cnpjReceitaWs(cnpj: string): Promise<ConsultaCnpjInfo | undefined> {
  try {
    const response = await apiReceitaWs.get(cnpj);
    const rInfo: ReceitaWsInfo = response.data;
    const socios: SocioInfo[] = [];
    const cnaesSecundarios: CnaeInfo[] = [];
    const emails: string[] = [];
    const telefones: string[] = [];
    let codNatureza: string | null = null;
    let natureza: string | null = null;
    let cnae: CnaeInfo | null = null;
    let endereco: EnderecoInfo | null = null;
    if (rInfo.natureza_juridica) {
      if (rInfo.natureza_juridica.split('-').length >= 3) {
        codNatureza = rInfo.natureza_juridica.split('-')[0].trim() + rInfo.natureza_juridica.split('-')[1].trim();
        natureza = rInfo.natureza_juridica.split('-')[2].trim();
      } else if (rInfo.natureza_juridica.split('-').length == 2) {
        codNatureza = rInfo.natureza_juridica.split('-')[0].trim();
        natureza = rInfo.natureza_juridica.split('-')[1].trim();
      }
    }
    rInfo.qsa?.map((s) => {
      const [codQualificacao, ...qualificacao] = s.qual.split('-');
      socios.push({ nome: s.nome, codQualificacao, qualificacao: qualificacao.join('-') })
    })
    if (rInfo.atividade_principal && rInfo.atividade_principal.length >= 1)
      cnae = { cod: string.onlyNumbers(rInfo.atividade_principal[0].code), descricao: rInfo.atividade_principal[0].text }
    rInfo.atividades_secundarias?.map(c => cnaesSecundarios.push({ cod: string.onlyNumbers(c.code.toString()), descricao: c.text }))
    if (rInfo.cep && rInfo.uf && rInfo.logradouro) {
      endereco = {
        bairro: rInfo.bairro ?? '',
        cep: string.onlyNumbers(rInfo.cep),
        complemento: rInfo.complemento ?? '',
        logradouro: rInfo.logradouro,
        municipio: rInfo.municipio ?? '',
        numero: rInfo.numero ?? '',
        uf: rInfo.uf
      }
    }

    if (rInfo.email)
      emails.push(rInfo.email);

    if (rInfo.telefone && rInfo.telefone.split('/').length >= 1) {
      rInfo.telefone.split('/').map(t => telefones.push(string.onlyNumbers(t)));
    }

    return {
      razao_social: rInfo.nome,
      fantasia: "",
      cnpj: string.onlyNumbers(rInfo.cnpj),
      codNatureza: codNatureza,
      natureza: natureza,
      tipo: rInfo.tipo ?? null,
      situacaoCadastral: rInfo.situacao ?? null,
      simplesNacional: rInfo.simples?.optante ?? null,
      mei: rInfo.simei?.optante ?? null,
      socios,
      cnae,
      endereco,
      emails,
      telefones,
      cnaesSecundarios,
      datas: {
        inicioAtividade: rInfo.abertura ? date.toDateString(rInfo.abertura, "DD/MM/YYYY") : null,
        exclusaoMei: rInfo.simei?.data_exclusao ? date.toDateString(rInfo.simei?.data_exclusao, "DD/MM/YYYY") : null,
        exclusaoSimples: rInfo.simples?.data_exclusao ? date.toDateString(rInfo.simples?.data_exclusao, "DD/MM/YYYY") : null,
        mei: rInfo.simei?.data_opcao ? date.toDateString(rInfo.simei?.data_opcao, "DD/MM/YYYY") : null,
        simplesNacional: rInfo.simples?.data_opcao ? date.toDateString(rInfo.simples?.data_opcao, "DD/MM/YYYY") : null,
        situacaoCadastral: rInfo.data_situacao ? date.toDateString(rInfo.data_situacao, "DD/MM/YYYY") : null,
      }
    }
  } catch {
    return undefined;
  }
}

export async function cnpj(cnpj: string): Promise<ConsultaCnpjInfo | undefined> {
  let info: ConsultaCnpjInfo | undefined = undefined;
  info = await cnpjMinhaReceita(cnpj);
  if (!info)
    info = await cnpjReceitaWs(cnpj);

  return info;
}