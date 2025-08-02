export class DataTable {
    constructor() {
        this.columns = [];
        this.rows = [];
    }
    addColumn(...columnName) {
        this.columns.push(...columnName);
    }
    addRow(...row) {
        this.rows.push(...row);
    }
    getRows() {
        return this.rows;
    }
    getColumns() {
        return this.columns;
    }
    select(filter) {
        return this.rows.filter(filter);
    }
    orderBy(columnName) {
        this.rows.sort((a, b) => {
            if (a[columnName] < b[columnName]) {
                return -1;
            }
            else if (a[columnName] > b[columnName]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    count() {
        return this.rows.length;
    }
    clear() {
        this.rows = [];
    }
    newRow() {
        const row = {};
        for (const columnName of this.columns) {
            row[columnName] = null;
        }
        return row;
    }
    findLast(predicate) {
        for (let i = this.rows.length - 1; i >= 0; i--) {
            const row = this.rows[i];
            if (predicate(row)) {
                return row;
            }
        }
        return undefined;
    }
    findLastIndex(predicate) {
        for (let i = this.rows.length - 1; i >= 0; i--) {
            const row = this.rows[i];
            if (predicate(row)) {
                return i;
            }
        }
        return -1;
    }
    find(predicate) {
        for (const row of this.rows) {
            if (predicate(row)) {
                return row;
            }
        }
        return undefined;
    }
    findIndex(predicate) {
        for (let i = 0; i < this.rows.length; i++) {
            const row = this.rows[i];
            if (predicate(row)) {
                return i;
            }
        }
        return -1;
    }
    remove(row) {
        const index = this.rows.indexOf(row);
        if (index !== -1) {
            this.rows.splice(index, 1);
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.rows.length) {
            this.rows.splice(index, 1);
        }
    }
    removeAll(predicate) {
        if (predicate) {
            this.rows = this.rows.filter((row) => !predicate(row));
        }
        else {
            this.rows = [];
        }
    }
    isEmpty() {
        return this.rows.length === 0;
    }
    exceptBy(source) {
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
    selectMany(selector) {
        const result = [];
        for (const row of this.rows) {
            result.push(...selector(row));
        }
        return result;
    }
    convert(converter) {
        return this.rows.map(converter);
    }
}
//# sourceMappingURL=DataTable.js.map