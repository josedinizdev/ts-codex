export function removeAt(arr, index) {
    if (index >= 0 && index < arr.length) {
        return arr.splice(index, 1)[0];
    }
    return undefined;
}
//# sourceMappingURL=removeAt.js.map