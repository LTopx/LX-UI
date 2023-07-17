const opt = Object.prototype.toString;

export const isUndefined = (value: unknown): value is undefined =>
  typeof value === "undefined";

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
