export function insert(arr, index, element) {
    if (index >= 0 && index <= arr.length) {
        arr.splice(index, 0, element);
    }
    else {
        arr.push(element);
    }
}
//# sourceMappingURL=insert.js.map