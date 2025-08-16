import { base64_chars } from "../../base/constants";

export function atob(input: string) {
  let i = 0;
  let bc = 0;
  let bs = 0;
  let buffer;
  let output = '';

  const str = input.replace(/[=]+$/, '');

  if (str.length % 4 === 1) {
    throw new Error(
      "The string to be decoded is not correctly encoded.",
    );
  }

  for (
    bc = 0, bs = 0, i = 0;
    (buffer = str.charAt(i++));
    ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    buffer = base64_chars.indexOf(buffer);
  }

  return output;
}