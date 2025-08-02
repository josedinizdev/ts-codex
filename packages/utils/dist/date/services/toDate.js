export function toDate(value) {
    let day = '01', month = '01', year = '2001', hour = '00', minutes = '00', seconds = '00';
    if (value instanceof Date) {
        return value;
    }
    else {
        value = value.trim();
        const rgxISO8601 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([+-]\d{2}:\d{2})?(Z)?/;
        const rgxDate = /\d{2}(\/|\-|\.)?\d{2}(\/|\-|\.)?\d{4}/;
        const rgxDateReversed = /\d{4}(\/|\-|\.)?\d{2}(\/|\-|\.)?\d{2}/;
        const rgxDateTime = /\d{2}(\/|\-|\.)?\d{2}(\/|\-|\.)?\d{4} \d{2}:\d{2}(:\d{2})?/;
        if (rgxISO8601.test(value)) {
            let [fullDate, fullTime] = value.split('T');
            fullTime = fullTime.replace('Z', '');
            fullTime = fullTime.replace(/ /g, "");
            fullTime = fullTime.replace(/(\.\d+(Z)?)?(\-\d{2}:\d{2})?/g, "");
            [year, month, day] = fullDate.split('-');
            [hour, minutes, seconds] = fullTime.split(':');
        }
        else if (rgxDate.test(value)) {
            value = value.replace(/\/|\-|\./g, '');
            day = value.substring(0, 2);
            month = value.substring(2, 4);
            year = value.substring(4, 8);
        }
        else if (rgxDateReversed.test(value)) {
            value = value.replace(/\/|\-|\./g, '');
            year = value.substring(0, 4);
            month = value.substring(4, 6);
            day = value.substring(6, 8);
        }
        else if (rgxDateTime.test(value)) {
            let [fullDate, fullTime] = value.split(' ');
            [day, month, year] = fullDate.split('/');
            if (fullTime.split(':').length == 2)
                [hour, minutes] = fullTime.split(':');
            else
                [hour, minutes, seconds] = fullTime.split(':');
        }
    }
    let date = new Date();
    date.setDate(Number(day));
    date.setMonth(Number(month) - 1);
    date.setFullYear(Number(year));
    date.setHours(Number(hour));
    date.setHours(Number(minutes));
    date.setSeconds(Number(seconds));
    return date;
}
//# sourceMappingURL=toDate.js.map