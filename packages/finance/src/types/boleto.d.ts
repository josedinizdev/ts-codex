
export interface Field {
  id: `${number}.${string}`
  type: 'alfa' | 'num'
  pos_ini: number,
  pos_fim: number,
  qtde_decimais?: number | undefined,
  default: string | undefined
}

export type Layout = Record<string, Field>;

export type MappedField<T> = T extends 'num'
  ? `${number}`
  : string

export type RegMap<T extends Base> = {
  -readonly [K in keyof T]-?:
  T[K]['default'] extends undefined
  ? MappedField<T[K]['type']>
  : MappedField<T[K]['type']> | undefined
};