export function joinFrom(arr, otherList, keySelector, otherKeySelector, resultSelector) {
    const result = [];
    for (const value1 of arr) {
        for (const value2 of otherList) {
            if (keySelector(value1) === otherKeySelector(value2)) {
                result.push(resultSelector(value1, value2));
            }
        }
    }
    return result;
}
//# sourceMappingURL=joinFrom.js.map