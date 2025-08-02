export function binarySearch(arr, element) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === element) {
            return mid;
        }
        else if (arr[mid] < element) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
//# sourceMappingURL=binarySearch.js.map