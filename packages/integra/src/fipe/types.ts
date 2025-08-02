export interface TabelaReferencia {
  codigo: number,
  mes: string
}

export interface Montadora {
  nome: string,
  valor: string
}

export enum VEICULO {
  CARRO = 1,
  MOTO = 2,
  CAMINHAO = 3,
};