import { base64_chars } from "../../base/constants";

export function btoa(input: any) {
  input = JSON.stringify(input);
  let map;
  let i = 0;
  let block = 0;
  let output = '';

  for (
    block = 0, i = 0, map = base64_chars;
    input.charAt(i | 0) || ((map = '='), i % 1);
    output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
  ) {
    const charCode = input.charCodeAt((i += 3 / 4));

    if (charCode > 0xff) {
      throw new Error(
        "The string to be encoded contains characters outside of the Latin1 range.",
      );
    }

    block = (block << 8) | charCode;
  }

  return output;
}