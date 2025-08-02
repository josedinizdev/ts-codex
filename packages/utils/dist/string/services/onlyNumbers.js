export function onlyNumbers(text) {
    if (typeof text != "string")
        return text;
    return text.replace(/[^0-9]/g, "");
}
//# sourceMappingURL=onlyNumbers.js.map