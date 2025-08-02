export function or<T = any>(value: T, values?: T[]): boolean | Function {
    if (values) return values.includes(value);
    return function (...values: T[]) {
        return values.includes(value);
    };
}
