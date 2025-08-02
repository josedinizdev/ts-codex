import { doubleRoundLimit, roundPower10Double } from "../../base/constants/index.js";
import { sign } from "./sign.js";
import { splitFractionDouble } from "./splitFractionDouble.js";

export function abnt(value: number, decimalPlaces: number) {
  if (!Number.isFinite(value) || Number.isNaN(value)) {
    return 0;
  } else if (Math.abs(value) < doubleRoundLimit) {
    let power10 = roundPower10Double[decimalPlaces];
    value *= power10;
    let decimais = splitFractionDouble(value)[1];
    value = splitFractionDouble(value)[0];

    if (value % 2 != 0 && Math.abs(decimais) * 1000 == 500)
      value += sign(decimais);
    else if (Math.abs(decimais) > 0.5) {
      value += sign(decimais);
    }
    value /= power10;
  }

  return value;
}