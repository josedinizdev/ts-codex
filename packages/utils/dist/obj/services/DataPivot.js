export class DataPivot {
    constructor() {
        this.columns = [];
        this.rows = {};
    }
    addColumn(...columnName) {
        this.columns.push(...columnName);
    }
    addRow(rowKey, row) {
        this.rows[rowKey] = row;
    }
    newRow() {
        const row = {};
        for (const column of this.columns) {
            row[column] = null;
        }
        return row;
    }
    get(rowKey, columnKey) {
        const row = this.rows[rowKey];
        if (row) {
            return row[columnKey] || null;
        }
        return null;
    }
    clear() {
        this.rows = {};
    }
}
//# sourceMappingURL=DataPivot.js.map