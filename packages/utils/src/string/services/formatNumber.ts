import { abnt } from "../../math/index.js";
import { FormatNumberOptions } from "../types";

export function formatNumber(value: number, options: FormatNumberOptions = {}): string {
  const { decimalPlaces = 0, prefix = '', suffix = '', useAbnt = true } = options;

  if (useAbnt)
    value = abnt(value, decimalPlaces);
  value = Number(value.toFixed(decimalPlaces));
  const isNegative = value < 0;

  let result = value.toString().replace("-", "");
  if (result.length < decimalPlaces + 1)
    result = result.padStart(decimalPlaces + 1, "0");

  let integers = result.substring(0, result.length - decimalPlaces);
  if (integers === "") integers = "0";

  let decimals = result.substring(result.length - decimalPlaces, result.length);

  if (integers.length > 3) {
    let digits = integers.split("").reverse();
    let count = 0;

    integers = "";
    digits.forEach((digit, i) => {
      count++;
      integers = digit + integers;
      if (count === 3 && i !== digits.length - 1) {
        count = 0;
        integers = "." + integers;
      }
    });
  }

  if (decimalPlaces === 0) result = integers;
  else result = `${integers},${decimals}`;

  if (isNegative) result = "-" + result;

  return prefix + result + suffix;
}
