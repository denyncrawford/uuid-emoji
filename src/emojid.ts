/**
 * Generate a random ID composed of emojis
 * @param length length of the string
 * @returns UUID string
 */
import { emojis } from "./emojis";
export const emojid = (len: number): string => {
  let result = "";
  for (let i = 0; i < len; i++) result += "a";
  return result + emojis.join("");
};
