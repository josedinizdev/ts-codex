export const cabecalho = {
  cod_banco_compreensao: {
    id: '01.0',
    type: 'num',
    pos_ini: 1,
    pos_fim: 3,
    default: undefined
  },
  lote_servico: {
    id: '02.0',
    type: 'num',
    pos_ini: 4,
    pos_fim: 7,
    default: '0000'
  },
  tipo_registro: {
    id: '03.0',
    type: 'num',
    pos_ini: 8,
    pos_fim: 8,
    default: '0'
  },
  uso_exclusivo_1: {
    id: '04.0',
    type: 'alfa',
    pos_ini: 9,
    pos_fim: 17,
    default: ''
  },
  tipo_inscricao_empresa: {
    id: '05.0',
    type: 'num',
    pos_ini: 18,
    pos_fim: 18,
    default: undefined
  },
  numero_inscricao_empresa: {
    id: '06.0',
    type: 'num',
    pos_ini: 19,
    pos_fim: 32,
    default: undefined
  },
  cod_convenio_empresa: {
    id: '07.0',
    type: 'alfa',
    pos_ini: 33,
    pos_fim: 52,
    default: undefined
  },
  codigo_agencia_mantedora: {
    id: '08.0',
    type: 'num',
    pos_ini: 53,
    pos_fim: 57,
    default: undefined
  },
  digito_agencia_mantedora: {
    id: '09.0',
    type: 'alfa',
    pos_ini: 58,
    pos_fim: 58,
    default: undefined
  },
  numero_conta_corrente: {
    id: '10.0',
    type: 'num',
    pos_ini: 59,
    pos_fim: 70,
    default: undefined
  },
  digito_verificador_conta_corrente: {
    id: '11.0',
    type: 'alfa',
    pos_ini: 71,
    pos_fim: 71,
    default: undefined
  },
  digito_verificador_agencia_conta: {
    id: '12.0',
    type: 'alfa',
    pos_ini: 72,
    pos_fim: 72,
    default: undefined
  },
  nome_empresa: {
    id: '13.0',
    type: 'alfa',
    pos_ini: 73,
    pos_fim: 102,
    default: undefined
  },
  nome_banco: {
    id: '14.0',
    type: 'alfa',
    pos_ini: 103,
    pos_fim: 132,
    default: undefined
  },
  uso_exclusivo_2: {
    id: '15.0',
    type: 'alfa',
    pos_ini: 133,
    pos_fim: 142,
    default: ''
  },
  codigo_remessa_retorno: {
    id: '16.0',
    type: 'num',
    pos_ini: 143,
    pos_fim: 143,
    default: undefined
  },
  data_geracao_arquivo: {
    id: '17.0',
    type: 'num',
    pos_ini: 144,
    pos_fim: 151,
    default: undefined
  },
  hora_geracao_arquivo:{
    id: '18.0',
    type: 'num',
    pos_ini: 152,
    pos_fim: 157,
    default: undefined
  },
  num_sequencial_arquivo: {
    id: '19.0',
    type: 'num',
    pos_ini: 158,
    pos_fim: 163,
    default: undefined
  },
  layout_arquivo: {
    id: '20.0',
    type: 'num',
    pos_ini: 164,
    pos_fim: 166,
    default: '103',
  }, 
  densidade_arquivo: {
    id: '21.0',
    type: 'num',
    pos_ini: 167,
    pos_fim: 171,
    default: undefined
  },
  reservado_banco: {
    id: '22.0',
    type: 'alfa',
    pos_ini: 172,
    pos_fim: 191,
    default: undefined
  },
  reservado_empresa: {
    id: '23.0',
    type: 'alfa',
    pos_ini: 192,
    pos_fim: 211,
    default: undefined
  },
  uso_exclusivo_3: {
    id: '24.0',
    type: 'alfa',
    pos_ini: 212,
    pos_fim: 240,
    default: undefined
  }
} as const satisfies Base;

export const trailer = {
  codigo_banco_compensacao: {
    id: '01.9',
    type: 'num',
    pos_ini: 1,
    pos_fim: 3,
    default: undefined
  },
  lote_servico: {
    id: '02.9',
    type: 'num',
    pos_ini: 4,
    pos_fim: 7,
    default: '9999'
  },
  tipo_registro: {
    id: '03.9',
    type: 'num',
    pos_ini: 8,
    pos_fim: 8,
    default: '9'
  },
  uso_exclusivo_1: {
    id: '04.9',
    type: 'alfa',
    pos_ini: 9,
    pos_fim: 17,
    default: ''
  },
  qtde_lotes_arquivo: {
    id: '05.9',
    type: 'num',
    pos_ini: 18,
    pos_fim: 23,
    default: undefined
  },
  qtde_registros_arquivo: {
    id: '06.9',
    type: 'num',
    pos_ini: 24,
    pos_fim: 29,
    default: undefined
  },
  qtde_contas: {
    id: '07.9',
    type: 'num',
    pos_ini: 30,
    pos_fim: 35,
    default: undefined
  },
  uso_exclusivo_2: {
    id: '08.9',
    type: 'alfa',
    pos_ini: 36,
    pos_fim: 240,
    default: ''
  }
} as const satisfies Base;