import { removeAccents } from "./removeAccents.js";
export function removeSpecialCharacters(text) {
    text = removeAccents(text);
    text = text.replace(/[^a-zA-Z0-9_. \-]+/g, "");
    return text;
}
//# sourceMappingURL=removeSpecialCharacters.js.map