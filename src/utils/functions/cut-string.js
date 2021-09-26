import { toCapitalize } from "./capitalaize";

export function toCutString(str) {
  return toCapitalize(str.split(' ').slice(0, 3).join(' '));
}