import { deepClone } from "./deepClone.js";
export function merge(from, type, to) {
    if (type === null) {
        if (to)
            return deepClone({ ...to, ...from });
        else
            return deepClone({ ...from });
    }
    from = deepClone(from);
    to = deepClone(to);
    const resp = to ? Object.assign(new type(), to) : new type();
    const keys = Object.keys(resp);
    for (const key of keys) {
        if (from.hasOwnProperty(key)) {
            if (typeof from[key] === 'object' && !Array.isArray(from[key]) && from[key] !== null) {
                resp[key] = merge(from[key], from[key].constructor, resp[key]);
            }
            else {
                resp[key] = from[key];
            }
        }
    }
    return resp;
}
//# sourceMappingURL=merge.js.map