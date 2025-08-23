import { TypeInfo, TypeOptions, TypesAvaialable } from "../../types";

export function def(type: "string"): TypeInfo<"string">;
export function def(type: "bigint"): TypeInfo<"bigint">;
export function def(type: "double"): TypeInfo<"double">;
export function def(type: "date"): TypeInfo<"date">;
export function def(type: "int"): TypeInfo<"int">;
export function def(type: "smallint"): TypeInfo<"smallint">;
export function def(type: "uuid"): TypeInfo<"uuid">;
export function def(type: "boolean"): TypeInfo<"boolean">;

export function def(type: TypesAvaialable, options: TypeOptions = {}): TypeInfo<TypesAvaialable> {
  switch (type) {
    case "string":
      return { internalUse: true, type: type }
    case "bigint":
    case "double":
    case "date":
    case "int":
    case "smallint":
    default:
      return { internalUse: true, type: type }
  }
}