import { toDate } from "./toDate.js";
export function toDateString(value, to) {
    let day = '', month = '', year = '', hour = '00', minutes = '00', seconds = '00';
    const date = toDate(value);
    day = date.getDate().toString().padStart(2, '0');
    month = (date.getMonth() + 1).toString().padStart(2, '0');
    year = date.getFullYear().toString();
    hour = date.getHours().toString().padStart(2, '0');
    minutes = date.getMinutes().toString().padStart(2, '0');
    seconds = date.getSeconds().toString().padStart(2, '0');
    switch (to) {
        case 'YYYY-MM-DDTHH:mm:ss':
            return year + '-' + month + '-' + day + "T" + hour + ":" + minutes + ":" + seconds;
        case 'YYYY-MM-DDTHH:mm:ssZ':
            return year + '-' + month + '-' + day + "T" + hour + ":" + minutes + ":" + seconds + "Z";
        case 'DD/MM/YYYY':
            return day + '/' + month + '/' + year;
        case 'DDMMYYYY':
            return day + month + year;
        case 'DD-MM-YYYY':
            return day + '-' + month + '-' + year;
        case 'DD.MM.YYYY':
            return day + '.' + month + '.' + year;
        case 'YYYY/MM/DD':
            return year + "/" + month + '/' + day;
        case 'YYYYMMDD':
            return year + month + day;
        case 'YYYY-MM-DD':
            return year + "-" + month + '-' + day;
        case 'YYYY.MM.DD':
            return year + "." + month + '.' + day;
        case 'DD/MM/YYYY HH:mm':
            return day + '/' + month + '/' + year + " " + hour + ":" + month;
        case 'DD/MM/YYYY HH:mm:ss':
            return day + '/' + month + '/' + year + " " + hour + ":" + month + ":" + day;
        default:
            return day + '/' + month + '/' + year;
    }
}
//# sourceMappingURL=toDateString.js.map