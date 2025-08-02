export function onlyNumbers(text: string) {
    if (typeof text != "string") return text;

    return text.replace(/[^0-9]/g, "");
  }