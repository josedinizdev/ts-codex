export function removeRange(arr, startIndex, count) {
    if (startIndex >= 0 && startIndex < arr.length && count > 0) {
        return arr.splice(startIndex, count);
    }
    return [];
}
//# sourceMappingURL=removeRange.js.map