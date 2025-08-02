import { DataRow } from "../types.js";
import { Nullable } from "../../types.js";

export class DataPivot<T> {
  private columns: string[];
  private rows: { [key: string]: DataRow };

  constructor() {
    this.columns = [];
    this.rows = {};
  }

  public addColumn(...columnName: string[]): void {
    this.columns.push(...columnName);
  }

  public addRow(rowKey: string, row: DataRow): void {
    this.rows[rowKey] = row;
  }

  public newRow(): DataRow {
    const row: DataRow = {};
    for (const column of this.columns) {
      row[column] = null;
    }
    return row;
  }

  public get(rowKey: string, columnKey: string): Nullable<T> {
    const row = this.rows[rowKey];
    if (row) {
      return row[columnKey] || null;
    }
    return null;
  }

  public clear(): void {
    this.rows = {};
  }
}