export type ModelCreation = {
  id: TypeInfo<"uuid">
  [key: string]: TypeInfo<TypesAvaialable> | ModelCreation | TypeInfo<TypesAvaialable>[] | ModelCreation[]
};

export type Model<S extends ModelCreation> = {
  [K in keyof S]:
  S[K] extends TypeInfo<"string">
  ? string
  : S[K] extends TypeInfo<"bigint">
  ? number
  : S[K] extends TypeInfo<"int">
  ? number
  : S[K] extends TypeInfo<"smallint">
  ? number
  : S[K] extends TypeInfo<"double">
  ? number
  : S[K] extends TypeInfo<"date">
  ? Date
  : S[K] extends TypeInfo<"uuid">
  ? string
  : S[K] extends TypeInfo<"boolean">
  ? boolean
  : S[K] extends ModelCreation
  ? Model<S[K]>
  : S[K] extends Array<infer U>
  ? U extends ModelCreation
  ? Model<U>[]
  : any[]
  : any;
};

export type TypesAvaialable = "uuid" | "bigint" | "int" |"smallint" | "double" | "string" | "date" | "boolean"

export type TypeOptions = {
  maxLenght?: number
  foreign?: string
}

export type TypeInfo<T> = {
  internalUse: true,
  type: T,
} & TypeOptions