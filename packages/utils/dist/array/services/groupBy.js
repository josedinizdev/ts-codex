export function groupBy(arr, keySelector) {
    const groups = new Map();
    for (const v of arr) {
        const key = keySelector(v);
        const group = groups.get(key);
        if (group) {
            group.push(v);
        }
        else {
            let value = [v];
            groups.set(key, value);
        }
    }
    return groups;
}
//# sourceMappingURL=groupBy.js.map