export function higherTime(...timeList) {
    let higherTimeInSeconds = -1;
    let higherTime = "00:00:00";
    for (const time of timeList) {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds > higherTimeInSeconds) {
            higherTimeInSeconds = totalSeconds;
            higherTime = time;
        }
    }
    return higherTime;
}
//# sourceMappingURL=higherTime.js.map