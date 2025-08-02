export function manipulateDate(date, operations) {
    const newDate = new Date(date);
    if (operations.addDay !== undefined) {
        newDate.setDate(newDate.getDate() + Number(operations.addDay));
    }
    if (operations.addMonth !== undefined) {
        newDate.setMonth(newDate.getMonth() + Number(operations.addMonth));
    }
    if (operations.addYear !== undefined) {
        newDate.setFullYear(newDate.getFullYear() + Number(operations.addYear));
    }
    if (operations.addHour !== undefined) {
        newDate.setHours(newDate.getHours() + Number(operations.addHour));
    }
    if (operations.addMinute !== undefined) {
        newDate.setMinutes(newDate.getMinutes() + Number(operations.addMinute));
    }
    if (operations.addSeconds !== undefined) {
        newDate.setSeconds(newDate.getSeconds() + Number(operations.addSeconds));
    }
    return newDate;
}
//# sourceMappingURL=manipulateDate.js.map