import { DataRow } from "../types";
export declare class DataTable {
    columns: string[];
    rows: DataRow[];
    constructor();
    addColumn(...columnName: string[]): void;
    addRow(...row: DataRow[]): void;
    getRows(): DataRow[];
    getColumns(): string[];
    select(filter: (row: DataRow) => boolean): DataRow[];
    orderBy(columnName: string): void;
    count(): number;
    clear(): void;
    newRow(): DataRow;
    findLast(predicate: (row: DataRow) => boolean): DataRow | undefined;
    findLastIndex(predicate: (row: DataRow) => boolean): number;
    find(predicate: (row: DataRow) => boolean): DataRow | undefined;
    findIndex(predicate: (row: DataRow) => boolean): number;
    remove(row: DataRow): boolean;
    removeAt(index: number): void;
    removeAll(predicate?: (value: DataRow) => boolean): void;
    isEmpty(): boolean;
    exceptBy(source: DataRow[]): DataRow[];
    selectMany(selector: (row: DataRow) => any[]): any[];
    convert<T>(converter: (row: DataRow) => T): T[];
}
//# sourceMappingURL=DataTable.d.ts.map