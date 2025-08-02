import { DataRow } from "../types.js";
import { DataTable } from "./DataTable.js";
import { DataPivot } from "./DataPivot.js";
export type OptionsCsv = {
    columnsFirstLine?: boolean;
    separator?: string | RegExp;
    columns?: [
        {
            column: string;
            index: number;
        }
    ];
};
export declare class DataSet {
    tables: {
        [tableName: string]: DataTable;
    };
    pivots: {
        [pivotName: string]: DataPivot<any>;
    };
    constructor();
    createTable(tableName: string): void;
    createPivot<T>(pivotName: string): void;
    count(): number;
    clearTable(tableName: string): void;
    clearPivot(pivotName: string): void;
    objectToTable(tableName: string, obj: any, columns?: object): void;
    csvToTable(tableName: string, csv: string, options?: OptionsCsv): void;
    export(table: string, mode: "csv" | "rows"): string | DataRow | DataRow[] | undefined;
}
//# sourceMappingURL=DataSet.d.ts.map