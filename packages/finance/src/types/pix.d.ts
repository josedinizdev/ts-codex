export interface BrCodeOptions {
  chave: string,
  destinatario: string,
  cidade: string,
  valor?: number,
  mcc?: string,
  descricao?: string,
  txid?: string
  location?: string,
  pagamentoUnico?: boolean
  cep?: string
}