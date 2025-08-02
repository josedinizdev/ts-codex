export function sum(arr, selector) {
    let sum = 0;
    for (const value of arr) {
        if (typeof value != "number")
            return 0;
        const num = selector ? selector(value) : value;
        sum += num;
    }
    return sum;
}
//# sourceMappingURL=sum.js.map