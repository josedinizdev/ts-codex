import { TypeInfo, TypesAvaialable } from "../../types";

export function resolvePrimitive(type: TypeInfo<TypesAvaialable>, value: any): any {
  return value;
}