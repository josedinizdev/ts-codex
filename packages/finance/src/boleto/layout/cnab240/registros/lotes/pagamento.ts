import { Layout } from "../../../../../types/boleto";

export const cabecalho = {
  codigo_banco_compensacao: {
    id: '01.1',
    type: 'num',
    pos_ini: 1,
    pos_fim: 3,
    default: undefined
  },
  lote_servico: {
    id: '02.1',
    type: 'num',
    pos_ini: 4,
    pos_fim: 7,
    default: undefined
  },
  tipo_registro: {
    id: '03.1',
    type: 'num',
    pos_ini: 8,
    pos_fim: 8,
    default: '1'
  },
  tipo_operacao: {
    id: '04.1',
    type: 'alfa',
    pos_ini: 9,
    pos_fim: 9,
    default: 'C'
  },
  tipo_servico: {
    id: '05.1',
    type: 'num',
    pos_ini: 10,
    pos_fim: 11,
    default: undefined
  },
  forma_lancamento: {
    id: '06.1',
    type: 'num',
    pos_ini: 12,
    pos_fim: 13,
    default: undefined
  },
  layout_lote: {
    id: '07.1',
    type: 'num',
    pos_ini: 14,
    pos_fim: 16,
    default: '046'
  },
  uso_reservado_1: {
    id: '08.1',
    type: 'alfa',
    pos_ini: 17,
    pos_fim: 17,
    default: ''
  },
  tipo_inscricao_empresa: {
    id: '09.1',
    type: 'num',
    pos_ini: 18,
    pos_fim: 18,
    default: undefined
  },
  numero_inscricao_empresa: {
    id: '10.1',
    type: 'num',
    pos_ini: 19,
    pos_fim: 32,
    default: undefined
  },
  cod_convenio_empresa: {
    id: '11.1',
    type: 'alfa',
    pos_ini: 33,
    pos_fim: 52,
    default: undefined
  },
  codigo_agencia_mantedora: {
    id: '12.1',
    type: 'num',
    pos_ini: 53,
    pos_fim: 57,
    default: undefined
  },
  digito_agencia_mantedora: {
    id: '13.1',
    type: 'alfa',
    pos_ini: 58,
    pos_fim: 58,
    default: undefined
  },
  numero_conta_corrente: {
    id: '14.1',
    type: 'num',
    pos_ini: 59,
    pos_fim: 70,
    default: undefined
  },
  digito_verificador_conta_corrente: {
    id: '15.1',
    type: 'alfa',
    pos_ini: 71,
    pos_fim: 71,
    default: undefined
  },
  digito_verificador_agencia_conta: {
    id: '16.1',
    type: 'alfa',
    pos_ini: 72,
    pos_fim: 72,
    default: undefined
  },
  nome_empresa: {
    id: '17.1',
    type: 'alfa',
    pos_ini: 73,
    pos_fim: 102,
    default: undefined
  },
  mensagem: {
    id: '18.1',
    type: 'alfa',
    pos_ini: 103,
    pos_fim: 142,
    default: undefined
  },
  logradouro_endereco: {
    id: '19.1',
    type: 'alfa',
    pos_ini: 143,
    pos_fim: 172,
    default: undefined
  },
  numero_endereco: {
    id: '20.1',
    type: 'num',
    pos_ini: 173,
    pos_fim: 177,
    default: undefined
  },
  complemento_endereco: {
    id: '21.1',
    type: 'alfa',
    pos_ini: 178,
    pos_fim: 192,
    default: undefined
  },
  cidade_endereco: {
    id: '22.1',
    type: 'alfa',
    pos_ini: 193,
    pos_fim: 212,
    default: undefined
  },
  cep_endereco: {
    id: '23.1',
    type: 'num',
    pos_ini: 213,
    pos_fim: 217,
    default: undefined
  },
  complemento_cep_endereco: {
    id: '24.1',
    type: 'alfa',
    pos_ini: 218,
    pos_fim: 220,
    default: undefined
  },
  uf_endereco: {
    id: '25.1',
    type: 'alfa',
    pos_ini: 221,
    pos_fim: 222,
    default: undefined
  },
  ind_forma_pagamento: {
    id: '26.1',
    type: 'num',
    pos_ini: 223,
    pos_fim: 224,
    default: undefined
  },
  uso_reservado_2: {
    id: '27.1',
    type: 'alfa',
    pos_ini: 225,
    pos_fim: 230,
    default: ''
  },
  ocorrencias: {
    id: '28.1',
    type: 'alfa',
    pos_ini: 231,
    pos_fim: 240,
    default: undefined
  }
} as const satisfies Layout;

export const segmento_A = {
  codigo_banco_compensacao: {
    id: '01.3A',
    type: 'num',
    pos_ini: 1,
    pos_fim: 3,
    default: undefined
  },
  lote_servico: {
    id: '02.3A',
    type: 'num',
    pos_ini: 4,
    pos_fim: 7,
    default: undefined
  },
  tipo_registro: {
    id: '03.3A',
    type: 'num',
    pos_ini: 8,
    pos_fim: 8,
    default: '3'
  },
  num_sequencial_lote: {
    id: '04.3A',
    type: 'num',
    pos_ini: 9,
    pos_fim: 13,
    default: undefined
  }, 
  cod_sequencial_registro_detalhe: {
    id: '05.3A',
    type: 'alfa',
    pos_ini: 14,
    pos_fim: 14,
    default: 'A'
  },
  tipo_movimento: {
    id: '06.3A',
    type: 'num',
    pos_ini: 15,
    pos_fim: 15,
    default: undefined
  },
  codigo_instrucao_movimento: {
    id: '07.3A',
    type: 'num',
    pos_ini: 16,
    pos_fim: 17,
    default: undefined
  }, 
  codigo_camara_centralizadora: {
    id: '08.3A',
    type: 'num',
    pos_ini: 18,
    pos_fim: 20,
    default: undefined
  }, 
  codigo_banco_favorecido:{
    id: '09.3A',
    type: 'num',
    pos_ini: 21,
    pos_fim: 23,
    default: undefined
  },
  agencia_mantenedora: {
    id: '10.3A',
    type: 'num',
    pos_ini: 24,
    pos_fim: 28,
    default: undefined
  }, 
  digito_verificador_agencia: {
    id: '11.3A',
    type: 'alfa',
    pos_ini: 29,
    pos_fim: 29,
    default: undefined
  },
  num_conta_corrente: {
    id: '12.3A',
    type: 'num',
    pos_ini: 30,
    pos_fim: 41,
    default: undefined
  },
  digito_verificador_conta_corrente: {
    id: '13.3A',
    type: 'alfa',
    pos_ini: 42,
    pos_fim: 42,
    default: undefined
  },
  digito_verificador_agencia_conta: {
    id: '14.3A',
    type: 'alfa',
    pos_ini: 43,
    pos_fim: 43,
    default: undefined
  },
  nome_favorecido: {
    id: '15.3A',
    type: 'alfa',
    pos_ini: 44,
    pos_fim: 73,
    default: undefined
  },
  num_doc_empresa: {
    id: '16.3A',
    type: 'alfa',
    pos_ini: 74,
    pos_fim: 93,
    default: undefined
  },
  data_pagamento:{
    id: '17.3A',
    type: 'num',
    pos_ini: 94,
    pos_fim: 101,
    default: undefined
  },
  tipo_moeda: {
    id: '18.3A',
    type: 'alfa',
    pos_ini: 102,
    pos_fim: 104,
    default: undefined
  },
  qtde_moeda: {
    id: '19.3A',
    type: 'num',
    pos_ini: 105,
    pos_fim: 119,
    default: undefined,
    qtde_decimais: 5
  },
  valor_pagamento: {
    id: '20.3A',
    type: 'num',
    pos_ini: 120,
    pos_fim: 134,
    default: undefined,
    qtde_decimais: 2
  },
  num_doc_banco: {
    id: '21.3A',
    type: 'alfa',
    pos_ini: 135,
    pos_fim: 154,
    default: undefined
  },
  data_pagamento_efetivado: {
    id: '22.3A',
    type: 'num',
    pos_ini: 155,
    pos_fim: 162,
    default: undefined
  },
  valor_pagamento_efetivado: {
    id: '23.3A',
    type: 'num',
    pos_ini: 163,
    pos_fim: 177,
    default: undefined,
    qtde_decimais: 2
  },
  observacao: {
    id: '24.3A',
    type: 'alfa',
    pos_ini: 178,
    pos_fim: 217,
    default: undefined
  },
  cod_finalidade_doc: {
    id: '25.3A',
    type: 'alfa',
    pos_ini: 218,
    pos_fim: 219,
    default: undefined
  },
  cod_finalidade_ted: {
    id: '26.3A',
    type: 'alfa',
    pos_ini: 220,
    pos_fim: 224,
    default: undefined
  },
  cod_finalidade_complementar: {
    id: '27.3A',
    type: 'alfa',
    pos_ini: 225,
    pos_fim: 226,
    default: undefined
  },
  uso_exclusivo_1:{
    id: '28.3A',
    type: 'alfa',
    pos_ini: 227,
    pos_fim: 229,
    default: ''
  },
  aviso: {
    id: '29.3A',
    type: 'num',
    pos_ini: 230,
    pos_fim: 230,
    default: undefined
  },
  ocorrencias: {
    id: '30.3A',
    type: 'alfa',
    pos_ini: 231,
    pos_fim: 240,
    default: undefined
  }
} as const satisfies Layout;

export const segmento_B = {

} as const satisfies Layout;

export const segmento_C = {

} as const satisfies Layout;

export const trailer = {
  codigo_banco_compensacao: {
    id: '01.5',
    type: 'num',
    pos_ini: 1,
    pos_fim: 3,
    default: undefined
  },
  lote_servico: {
    id: '02.5',
    type: 'num',
    pos_ini: 4,
    pos_fim: 7,
    default: undefined
  },
  tipo_registro: {
    id: '03.5',
    type: 'num',
    pos_ini: 8,
    pos_fim: 8,
    default: '5'
  },
  uso_exclusivo_1: {
    id: '04.5',
    type: 'alfa',
    pos_ini: 8,
    pos_fim: 17,
    default: ''
  },
  qtde_registros: {
    id: '05.5',
    type: 'num',
    pos_ini: 18,
    pos_fim: 23,
    default: undefined
  },
  valor_total_registros: {
    id: '06.5',
    type: 'num',
    pos_ini: 24,
    pos_fim: 41,
    qtde_decimais: 2,
    default: undefined
  },
  qtde_total_moeda: {
    id: '07.5',
    type: 'num',
    pos_ini: 42,
    pos_fim: 59,
    qtde_decimais: 5,
    default: undefined
  },
  numero_aviso_debito: {
    id: '08.5',
    type: 'num',
    pos_ini: 60,
    pos_fim: 65,
    default: undefined
  },
  uso_exclusivo_2: {
    id: '09.5',
    type: 'alfa',
    pos_ini: 66,
    pos_fim: 230,
    default: ''
  },
  ocorrencias: {
    id: '10.5',
    type: 'alfa',
    pos_ini: 231,
    pos_fim: 240,
    default: undefined
  },
} as const satisfies Layout;