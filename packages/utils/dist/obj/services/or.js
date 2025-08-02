export function or(value, values) {
    if (values)
        return values.includes(value);
    return function (...values) {
        return values.includes(value);
    };
}
//# sourceMappingURL=or.js.map