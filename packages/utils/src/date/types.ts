export interface ManipulateDateOperation {
  addDay?: number;
  addMonth?: number;
  addYear?: number;
  addHour?: number;
  addMinute?: number;
  addSeconds?: number;
}
export type DATE_STRING_FORMATS =
  'YYYY-MM-DDTHH:mm:ss' | 'YYYY-MM-DDTHH:mm:ssZ' |
  'DD/MM/YYYY' | 'DDMMYYYY' | 'DD-MM-YYYY' | 'DD.MM.YYYY' |
  'YYYY/MM/DD' | 'YYYYMMDD' | 'YYYY-MM-DD' | 'YYYY.MM.DD' |
  'DD/MM/YYYY HH:mm' | 'DD/MM/YYYY HH:mm:ss'