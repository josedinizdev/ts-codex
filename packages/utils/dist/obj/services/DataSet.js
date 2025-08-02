import { DataTable } from "./DataTable.js";
import { DataPivot } from "./DataPivot.js";
import { or } from "./or.js";
export class DataSet {
    constructor() {
        this.tables = {};
        this.pivots = {};
    }
    createTable(tableName) {
        this.tables[tableName] = new DataTable();
    }
    createPivot(pivotName) {
        this.pivots[pivotName] = new DataPivot();
    }
    count() {
        return Object.keys(this.tables).length + Object.keys(this.pivots).length;
    }
    clearTable(tableName) {
        if (this.tables[tableName]) {
            this.tables[tableName].clear();
        }
        else {
            throw new Error(`Table '${tableName}' does not exist.`);
        }
    }
    clearPivot(pivotName) {
        if (this.pivots[pivotName]) {
            this.pivots[pivotName].clear();
        }
        else {
            throw new Error(`Pivot '${pivotName}' does not exist.`);
        }
    }
    objectToTable(tableName, obj, columns) {
        this.createTable(tableName);
        const table = this.tables[tableName];
        const isArray = Array.isArray(obj);
        const objKeys = isArray ? Object.keys(obj[0]) : Object.keys(obj);
        if (columns) {
            for (const key of Object.keys(columns)) {
                table.addColumn(key);
            }
        }
        else {
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
        }
        else {
            const row = table.newRow();
            for (const key of objKeys) {
                row[key] = obj[key];
            }
            table.addRow(row);
        }
    }
    csvToTable(tableName, csv, options) {
        const { columnsFirstLine = true, separator = ";", columns = [] } = options || {};
        const rows = csv.split("\n");
        this.createTable(tableName);
        const table = this.tables[tableName];
        let columnNames = [];
        if (columnsFirstLine) {
            columnNames = rows[0].split(separator);
            rows.shift();
        }
        else if (columns.length > 0) {
            columns.map(o => columnNames[o.index] = o.column);
        }
        else {
            const rowCount = rows[0].split(separator).length;
            columnNames = Array.from({ length: rowCount }, (_, index) => `Column${index + 1}`);
        }
        table.addColumn(...columnNames);
        rows.forEach((row) => {
            const values = row.split(separator);
            const dataRow = table.newRow();
            columnNames.forEach((columnName, index) => {
                dataRow[columnName] = values[index];
            });
            table.addRow(dataRow);
        });
    }
    export(table, mode) {
        if (!or(mode, ["object", "csv"]) || !this.tables[table])
            return undefined;
        switch (mode) {
            case "rows":
                if (this.tables[table].getRows().length == 1)
                    return this.tables[table].getRows()[0];
                else if (this.tables[table].getRows().length > 1)
                    return this.tables[table].getRows();
                else
                    return undefined;
            case "csv":
                let columns = this.tables[table].getColumns();
                let rows = this.tables[table].getRows();
                let csv = "";
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
//# sourceMappingURL=DataSet.js.map