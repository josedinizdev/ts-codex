export function selectMany(arr, selector) {
    const result = [];
    for (const value of arr) {
        result.push(...selector(value));
    }
    return result;
}
//# sourceMappingURL=selectMany.js.map