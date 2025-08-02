export function map(value, fromLow, fromHigh, toLow, toHigh) {
    return (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
}
//# sourceMappingURL=map.js.map