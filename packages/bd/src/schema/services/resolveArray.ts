import { string } from "@ts-codex/utils";
import { model } from "./model";

export function resolveArray(key: string, schemaArray: any[], value: any): any[] {
  if (!value) return [];

  const first = schemaArray[0];
  if (typeof first === "object" && first.internalUse) {
    return value;
  }

  if (typeof first === "object") {
    const subClass = model(first, string.capitalize(key));
    return value.map((v: any) => new subClass(v));
  }

  return value;
}