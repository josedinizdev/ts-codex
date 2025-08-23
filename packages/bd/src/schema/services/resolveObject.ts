import { string } from "@ts-codex/utils";
import { model } from "./model";

function resolveObject(key: string, schemaObj: any, value: any): any {
  const subClass = model(schemaObj, string.capitalize(key));
  return new subClass(value);
}