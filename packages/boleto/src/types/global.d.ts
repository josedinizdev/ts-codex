export { };
declare global {

  interface Campo {
    id: `${number}.${string}`
    type: 'alfa' | 'num'
    pos_ini: number,
    pos_fim: number,
    qtde_decimais?: number | undefined,
    default: string | undefined
  }

  type Base = Record<string, Campo>;

  type Field<T> = T extends 'num'
    ? `${number}`
    : string
  
  type RegMap<T extends Base> = {
    -readonly [K in keyof T]-?:
    T[K]['default'] extends undefined
    ? Field<T[K]['type']>
    : Field<T[K]['type']> | undefined
  };
}