export function remove(arr, element) {
    const index = arr.indexOf(element);
    if (index > -1) {
        return arr.splice(index, 1)[0];
    }
    return undefined;
}
//# sourceMappingURL=remove.js.map