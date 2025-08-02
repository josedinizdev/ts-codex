import { DataRow } from "../types";

export class DataTable {
    public columns: string[];
    public rows: DataRow[];

    constructor() {
        this.columns = [];
        this.rows = [];
    }

    public addColumn(...columnName: string[]): void {
        this.columns.push(...columnName);
    }

    public addRow(...row: DataRow[]): void {
        this.rows.push(...row);
    }

    public getRows(): DataRow[] {
        return this.rows;
    }

    public getColumns(): string[] {
        return this.columns;
    }

    public select(filter: (row: DataRow) => boolean): DataRow[] {
        return this.rows.filter(filter);
    }

    public orderBy(columnName: string): void {
        this.rows.sort((a, b) => {
            if (a[columnName] < b[columnName]) {
                return -1;
            } else if (a[columnName] > b[columnName]) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    public count(): number {
        return this.rows.length;
    }

    public clear(): void {
        this.rows = [];
    }

    public newRow(): DataRow {
        const row: DataRow = {};

        for (const columnName of this.columns) {
            row[columnName] = null;
        }

        return row;
    }
    
    public findLast(predicate: (row: DataRow) => boolean): DataRow | undefined {
        for (let i = this.rows.length - 1; i >= 0; i--) {
            const row = this.rows[i];
            if (predicate(row)) {
                return row;
            }
        }
        return undefined;
    }

    public findLastIndex(predicate: (row: DataRow) => boolean): number {
        for (let i = this.rows.length - 1; i >= 0; i--) {
            const row = this.rows[i];
            if (predicate(row)) {
                return i;
            }
        }
        return -1;
    }

    public find(predicate: (row: DataRow) => boolean): DataRow | undefined {
        for (const row of this.rows) {
            if (predicate(row)) {
                return row;
            }
        }
        return undefined;
    }

    public findIndex(predicate: (row: DataRow) => boolean): number {
        for (let i = 0; i < this.rows.length; i++) {
            const row = this.rows[i];
            if (predicate(row)) {
                return i;
            }
        }
        return -1;
    }

    public remove(row: DataRow): boolean {
        const index = this.rows.indexOf(row);
        if (index !== -1) {
            this.rows.splice(index, 1);
            return true;
        }
        return false;
    }

    public removeAt(index: number): void {
        if (index >= 0 && index < this.rows.length) {
            this.rows.splice(index, 1);
        }
    }

    public removeAll(predicate?: (value: DataRow) => boolean): void {
        if (predicate) {
            this.rows = this.rows.filter((row) => !predicate(row));
        } else {
            this.rows = [];
        }
    }

    public isEmpty(): boolean {
        return this.rows.length === 0;
    }

    public exceptBy(source: DataRow[]): DataRow[] {
        const sourceKeys = new Set(Object.keys(source[0]));

        return this.rows.filter((row) => {
            const rowKeys = Object.keys(row);
            if (rowKeys.length !== sourceKeys.size) {
                return true;
            }
            for (const key of rowKeys) {
                if (!sourceKeys.has(key) || row[key] !== source[0][key]) {
                    return true;
                }
            }
            return false;
        });
    }

    public selectMany(selector: (row: DataRow) => any[]): any[] {
        const result: any[] = [];
        for (const row of this.rows) {
            result.push(...selector(row));
        }
        return result;
    }

    public convert<T>(converter: (row: DataRow) => T): T[] {
        return this.rows.map(converter);
    }
}