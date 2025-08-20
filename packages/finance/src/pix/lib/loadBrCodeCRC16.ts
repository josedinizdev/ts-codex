import { FIELD } from "../constants/field";

export function loadBrCodeCRC16(payload: string) {
  payload += FIELD.ID_CRC16 + "04";

  let polinomio = 0x1021;
  let resultado = 0xffff;

  for (let offset = 0; offset < payload.length; offset++) {
    resultado ^= payload.charCodeAt(offset) << 8;
    for (let bitwise = 0; bitwise < 8; bitwise++) {
      if ((resultado & 0x8000) !== 0) {
        resultado = (resultado << 1) ^ polinomio;
      } else {
        resultado <<= 1;
      }
      resultado &= 0xffff;
    }
  }

  const crcHex = resultado.toString(16).toUpperCase().padStart(4, "0");
  return FIELD.ID_CRC16 + "04" + crcHex;
}