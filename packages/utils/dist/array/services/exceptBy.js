export function exceptBy(arr, otherArray, keySelector) {
    const otherKeys = new Set(otherArray.map(keySelector));
    return arr.filter((value) => !otherKeys.has(keySelector(value)));
}
//# sourceMappingURL=exceptBy.js.map