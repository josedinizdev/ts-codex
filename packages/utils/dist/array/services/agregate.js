export function agregate(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (const value of arr) {
        accumulator = callback(accumulator, value);
    }
    return accumulator;
}
//# sourceMappingURL=agregate.js.map