import { removeAccents } from "./removeAccents.js";

export function removeSpecialCharacters(text: string): string {
  text = removeAccents(text);
  text = text.replace(/[^a-zA-Z0-9_. \-]+/g, "");
  return text;
}