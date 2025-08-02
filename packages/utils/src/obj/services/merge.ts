import { Class } from "../../types.js";
import { deepClone } from "./deepClone.js";

export function merge<T extends object = any>(from: any, type: Class<T>, to?: T): T {
  if (type === null) {
    if (to) return deepClone({ ...to, ...from }) as T;
    else return deepClone({ ...from }) as T;
  }

  from = deepClone(from);
  to = deepClone(to);

  const resp: any = to ? Object.assign(new type(), to) : new type();

  const keys: string[] = Object.keys(resp);
  for (const key of keys) {
    if (from.hasOwnProperty(key)) {
      if (typeof from[key] === 'object' && !Array.isArray(from[key]) && from[key] !== null) {
        resp[key] = merge(from[key], from[key].constructor, resp[key]);
      } else {
        resp[key] = from[key];
      }
    }
  }

  return resp as T;
}