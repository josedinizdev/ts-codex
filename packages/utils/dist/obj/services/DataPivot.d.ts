import { DataRow } from "../types.js";
import { Nullable } from "../../types.js";
export declare class DataPivot<T> {
    private columns;
    private rows;
    constructor();
    addColumn(...columnName: string[]): void;
    addRow(rowKey: string, row: DataRow): void;
    newRow(): DataRow;
    get(rowKey: string, columnKey: string): Nullable<T>;
    clear(): void;
}
//# sourceMappingURL=DataPivot.d.ts.map