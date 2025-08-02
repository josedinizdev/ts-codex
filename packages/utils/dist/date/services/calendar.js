export function calendar(year, month) {
    const calendar = [];
    const firstWeekDay = new Date(year, month - 1, 1).getDay();
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();
    let currentDay = 1;
    let prevMonthDay = lastDayOfPrevMonth - firstWeekDay + 1;
    let nextMonthDay = 1;
    for (let week = 0; week < 6; week++) {
        const weekRow = [];
        for (let weekDay = 0; weekDay < 7; weekDay++) {
            let day, currentMonth, currentYear;
            if (week === 0 && weekDay < firstWeekDay) {
                day = prevMonthDay++;
                currentMonth = month - 1;
                currentYear = currentMonth < 1 ? year - 1 : year;
                currentMonth = currentMonth < 1 ? 12 : currentMonth;
            }
            else if (currentDay > lastDayOfMonth) {
                day = nextMonthDay++;
                currentMonth = month + 1;
                currentYear = currentMonth > 12 ? year + 1 : year;
                currentMonth = currentMonth > 12 ? 1 : currentMonth;
            }
            else {
                day = currentDay++;
                currentMonth = month;
                currentYear = year;
            }
            weekRow.push({ day, month: currentMonth, year: currentYear });
        }
        calendar.push(weekRow);
    }
    return calendar;
}
//# sourceMappingURL=calendar.js.map