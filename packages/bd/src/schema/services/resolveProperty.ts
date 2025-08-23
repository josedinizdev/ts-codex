import { resolveArray } from "./resolveArray";
import { resolvePrimitive } from "./resolvePrimitive";

export function resolveProperty(
  key: string,
  schemaPart: any,
  value: any
): any {
  if (Array.isArray(schemaPart)) {
    return resolveArray(key, schemaPart, value);
  }
  else if (typeof schemaPart === "object" && schemaPart.internalUse) {
    return resolvePrimitive(schemaPart, value);
  }
  else if (typeof schemaPart === "object") {
    return resolveObject(key, schemaPart, value);
  }

  return value;
}

function resolveObject(key: string, schemaPart: any, value: any): any {
  throw new Error("Function not implemented.");
}
