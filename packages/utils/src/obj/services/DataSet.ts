import { DataRow } from "../types.js";
import { DataTable } from "./DataTable.js";
import { DataPivot } from "./DataPivot.js";
import { or } from "./or.js";

export type OptionsCsv = {
  columnsFirstLine?: boolean;
  separator?: string | RegExp;
  columns?: [
    {
      column: string,
      index: number
    }
  ];
};

export class DataSet {
  public tables: { [tableName: string]: DataTable };
  public pivots: { [pivotName: string]: DataPivot<any> };

  constructor() {
    this.tables = {};
    this.pivots = {};
  }

  public createTable(tableName: string): void {
    this.tables[tableName] = new DataTable();
  }

  public createPivot<T>(pivotName: string): void {
    this.pivots[pivotName] = new DataPivot<T>();
  }

  public count(): number {
    return Object.keys(this.tables).length + Object.keys(this.pivots).length;
  }

  public clearTable(tableName: string): void {
    if (this.tables[tableName]) {
      this.tables[tableName].clear();
    } else {
      throw new Error(`Table '${tableName}' does not exist.`);
    }
  }

  public clearPivot(pivotName: string): void {
    if (this.pivots[pivotName]) {
      this.pivots[pivotName].clear();
    } else {
      throw new Error(`Pivot '${pivotName}' does not exist.`);
    }
  }

  public objectToTable(tableName: string, obj: any, columns?: object): void {
    this.createTable(tableName);

    const table = this.tables[tableName];
    const isArray = Array.isArray(obj);
    const objKeys = isArray ? Object.keys(obj[0]) : Object.keys(obj);

    if (columns) {
      for (const key of Object.keys(columns)) {
        table.addColumn(key);
      }
    } else {
      for (const key of objKeys) {
        table.addColumn(key);
      }
    }

    if (isArray) {
      let row;
      for (const objRow of obj) {
        row = table.newRow();
        for (const key of objKeys) {
          row[key] = objRow[key];
        }
        table.addRow(row);
      }
    } else {
      const row = table.newRow();
      for (const key of objKeys) {
        row[key] = obj[key];
      }
      table.addRow(row);
    }
  }

  public csvToTable(tableName: string, csv: string, options?: OptionsCsv): void {
    const { columnsFirstLine = true, separator = ";", columns = [] } = options || {};
    const rows = csv.split("\n");
    this.createTable(tableName);

    const table = this.tables[tableName];
    let columnNames: string[] = [];

    if (columnsFirstLine) {
      columnNames = rows[0].split(separator as string);
      rows.shift();
    } else if (columns.length > 0) {
      columns.map(o => columnNames[o.index] = o.column);
    } else {
      const rowCount = rows[0].split(separator as string).length;
      columnNames = Array.from({ length: rowCount }, (_, index) => `Column${index + 1}`);
    }

    table.addColumn(...columnNames);

    rows.forEach((row) => {
      const values = row.split(separator as string);
      const dataRow = table.newRow();

      columnNames.forEach((columnName, index) => {
        dataRow[columnName] = values[index];
      });

      table.addRow(dataRow);
    });
  }

  public export(table: string, mode: "csv" | "rows"): string | DataRow | DataRow[] | undefined {
    if (!or(mode, ["object", "csv"]) || !this.tables[table]) return undefined;

    switch (mode) {
      case "rows":
        if (this.tables[table].getRows().length == 1) return this.tables[table].getRows()[0];
        else if (this.tables[table].getRows().length > 1) return this.tables[table].getRows();
        else return undefined;
      case "csv":
        let columns: string[] = this.tables[table].getColumns();
        let rows: DataRow[] = this.tables[table].getRows();

        let csv: string = "";
        for (let column of columns)
          csv = csv.concat(column, ";");

        csv = csv.concat("\r\n");

        for (let row of rows) {
          for (let i in columns)
            csv = csv.concat(JSON.stringify(row[columns[i]]), ";");

          csv = csv.concat("\r\n");
        }

        return csv;
      default:
        break;
    }
  }
}