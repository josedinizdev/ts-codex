import { arquivo, lotes } from "./index.js"

export namespace Arquivo {
  // obrigatório - remessa/retorno
  export type Cabecalho = RegMap<typeof arquivo.cabecalho>
  // obrigatório - remessa/retorno
  export type Trailer = RegMap<typeof arquivo.trailer>
}

//3.1.2 - Pagamento através de Crédito em Conta, Cheque, OP, DOC, TED ou Pagamento com Autenticação
export namespace Pagamento {
  // obrigatório - remessa/retorno
  export type Cabecalho = RegMap<typeof lotes.pagamento.cabecalho>
  // obrigatório - remessa/retorno
  export type Segmento_A = RegMap<typeof lotes.pagamento.segmento_A>
  // obrigatório - remessa/retorno
  export type Segmento_B = RegMap<typeof lotes.pagamento.segmento_B>
  // opcional - remessa/retorno
  export type Segmento_C = RegMap<typeof lotes.pagamento.segmento_C>
  // obrigatório - remessa/retorno
  export type Trailer = RegMap<typeof lotes.pagamento.trailer>
}


//3.1.3 - Pagamento de Títulos de Cobrança e QRCode Pix
export namespace Pagamento_Integrado {

}

//3.1.4 - Pagamento de Tributos
export namespace Pagamento_Tributos {

}

//3.2.2 - Titulos em cobrança
export namespace Cobranca {

}

//3.2.3 - Boleto de pagamento eletrônico
export namespace Cobranca_Boleto_Eletronico {

}

//3.2.4 - Alegacao do pagador
export namespace Cobranca_Alegacao_Pagador {

}

//3.3.2 - Extrato de conta corrente para conciliação bancária
export namespace Extrato_Conta_Corrente {

}

//3.4.2 - Débito em conta corrente
export namespace Debito_Conta_Corrente {

}

//3.5.2 - Vendor
export namespace Vendor {

}

//3.6.2 - Custódias de cheques
export namespace Custodia_Cheque {

}

//3.7.2 - Extrato para gestão de caixa
export namespace Extrato_Gestao_Caixa {

}

//3.8.2 - Emprestimo por consignação
export namespace Emprestimo_Consignacao {

}

//3.9.2 - Compror
export namespace Compror {

}