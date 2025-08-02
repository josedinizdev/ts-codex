import { groupBy } from "./groupBy";
export function groupJoin(arr, otherList, keySelector, otherKeySelector, resultSelector) {
    const groups = groupBy(otherList, otherKeySelector);
    return arr.map((value) => resultSelector(value, groups.get(keySelector(value)) || []));
}
//# sourceMappingURL=groupJoin.js.map