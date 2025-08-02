export function deepClone(obj: any): any {
  return clone(obj);
}

function cloneArray(a: any[], fn: Function): any[] {
  let keys = Object.keys(a);
  let a2 = new Array(keys.length);
  for (let i = 0; i < keys.length; i++) {
    let k: any = keys[i];
    let cur: any = a[k];
    if (typeof cur !== 'object' || cur === null) {
      a2[k] = cur;
    } else if (cur instanceof Date) {
      a2[k] = new Date(cur);
    } else {
      a2[k] = fn(cur);
    }
  }
  return a2;
}

function clone(o: any): any {
  if (typeof o !== 'object' || o === null) return o;
  if (o instanceof Date) return new Date(o);
  if (Array.isArray(o)) return cloneArray(o, clone);
  if (o instanceof Map) return new Map(cloneArray(Array.from(o), clone));
  if (o instanceof Set) return new Set(cloneArray(Array.from(o), clone));
  let o2: any = {};
  for (let k in o) {
    let cur = o[k];
    if (typeof cur !== 'object' || cur === null) {
      o2[k] = cur;
    } else if (cur instanceof Date) {
      o2[k] = new Date(cur);
    } else if (cur instanceof Map) {
      o2[k] = new Map(cloneArray(Array.from(cur), clone));
    } else if (cur instanceof Set) {
      o2[k] = new Set(cloneArray(Array.from(cur), clone));
    } else {
      o2[k] = clone(cur);
    }
  }
  return o2;
}