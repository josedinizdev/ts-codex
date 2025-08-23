import { string } from "@ts-codex/utils";
import { ModelCreation, Model, TypeInfo, TypesAvaialable } from "../../types";
import { resolveProperty } from "./resolveProperty";

export function model<S extends ModelCreation>(schema: S, className: string, prefix: string = "") {
  const tableName = (prefix + className).toLowerCase();

  const cls = class {
    constructor(data: Model<S>) {
      for (const key in schema) {
        const typeOrSubschema = schema[key];
        const value = (data as any)[key];
        (this as any)[key] = resolveProperty(key, typeOrSubschema, value);
      }
    }

    public insert(): string | null {
      const mainColumns: string[] = [];
      const mainValues: string[] = [];

      for (const key in schema) {
        const value = (this as any)[key];

        if (typeof schema[key] === "function") {
          // primitivo -> vai para tabela principal
          mainColumns.push(key);
          mainValues.push(`'${value}'`);
        } else if (Array.isArray(schema[key])) {
          const subTable = `${tableName}_${key}`.toLowerCase();
          if (typeof schema[key][0] === "function") {
            // array de primitivos
            (value as any[]).forEach((v) => {
              console.log(
                `INSERT INTO ${subTable} (${className.toLowerCase()}_id, value) VALUES ('${(this as any).id
                }', '${v}');`
              );
            });
          } else {
            // array de objetos
            (value as any[]).forEach((obj) => {
              const cols = Object.keys(obj);
              const vals = cols.map((c) => `'${(obj as any)[c]}'`);
              console.log(
                `INSERT INTO ${subTable} (${className.toLowerCase()}_id, ${cols.join(
                  ", "
                )}) VALUES ('${(this as any).id}', ${vals.join(", ")});`
              );
            });
          }
        } else if (typeof schema[key] === "object") {
          // objeto aninhado -> vira subtabela
          const subTable = `${tableName}_${key}`.toLowerCase();
          const cols = Object.keys(value);
          const vals = cols.map((c) => `'${(value as any)[c]}'`);
          console.log(
            `INSERT INTO ${subTable} (${className.toLowerCase()}_id, ${cols.join(
              ", "
            )}) VALUES ('${(this as any).id}', ${vals.join(", ")});`
          );
        }
      }

      const sql = `INSERT INTO ${tableName} (${mainColumns.join(
        ", "
      )}) VALUES (${mainValues.join(", ")});`;
      console.log(sql);

      return null;
    }

    public update(): string {
      const sqls: string[] = [];

      const sets: string[] = [];
      for (const key in schema) {
        const value = (this as any)[key];
        if (value === undefined) continue;

        if (typeof value === "object" && !Array.isArray(value)) {
          // objeto -> sub tabela (drop e recria registro)
          const subTable = `${tableName}_${key}`;
          sqls.push(`DELETE FROM ${subTable} WHERE parentId = '${(this as any)["id"]}';`);
          const subCols: string[] = ["parentId"];
          const subVals: string[] = [`'${(this as any)["id"]}'`];
          for (const subKey in value) {
            subCols.push(subKey);
            subVals.push(`'${value[subKey]}'`);
          }
          sqls.push(
            `INSERT INTO ${subTable} (${subCols.join(", ")}) VALUES (${subVals.join(", ")});`
          );
        } else if (Array.isArray(value)) {
          const subTable = `${tableName}_${key}`;
          sqls.push(`DELETE FROM ${subTable} WHERE parentId = '${(this as any)["id"]}';`);
          for (const item of value) {
            const subCols: string[] = ["parentId"];
            const subVals: string[] = [`'${(this as any)["id"]}'`];
            if (typeof item === "object") {
              for (const subKey in item) {
                subCols.push(subKey);
                subVals.push(`'${item[subKey]}'`);
              }
            } else {
              subCols.push("value");
              subVals.push(`'${item}'`);
            }
            sqls.push(
              `INSERT INTO ${subTable} (${subCols.join(", ")}) VALUES (${subVals.join(", ")});`
            );
          }
        } else if (key !== "id") {
          sets.push(`${key} = '${value}'`);
        }
      }

      if (sets.length > 0) {
        sqls.unshift(
          `UPDATE ${tableName} SET ${sets.join(", ")} WHERE id = '${(this as any)["id"]}';`
        );
      }

      sqls.forEach(sql => console.log(sql));
      return sqls.join("\n");
    }

    public delete(): boolean {
      const sqls: string[] = [];

      for (const [key, value] of Object.entries(this)) {
        if (typeof value === "object" && value !== null) {
          const subTable = `${tableName}_${key.toLowerCase()}`;
          sqls.push(`DELETE FROM ${subTable} WHERE parentId='${(this as any).id}';`);
        }
      }

      sqls.push(`DELETE FROM ${tableName} WHERE id='${(this as any).id}';`);

      sqls.forEach((s) => console.log(s));
      return true;
    }

    public static select(filter: Partial<Model<S>>): Model<S>[] {
      const tableName = "tbperson";
      const filterSql =
        Object.keys(filter).length > 0
          ? " WHERE " + Object.entries(filter).map(([k, v]) => `${k}='${v}'`).join(" AND ")
          : "";

      const sqlMain = `
        SELECT p.*, i.dataNascimento
        FROM ${tableName} p
        LEFT JOIN tbperson_info i ON i.person_id = p.id
        ${filterSql};
      `;

      console.log("Main SELECT =>", sqlMain);

      const sqlCredentials = `
        SELECT c.* 
        FROM tbperson_credentials c
        INNER JOIN ${tableName} p ON p.id = c.person_id
        ${filterSql};
      `;
      console.log("Credentials SELECT =>", sqlCredentials);

      const sqlBooks = `
        SELECT b.* 
        FROM tbperson_books b
        INNER JOIN ${tableName} p ON p.id = b.person_id
        ${filterSql};
      `;
      console.log("Books SELECT =>", sqlBooks);

      return [];
    }

    public static selectFirstOrDefault(
      filter: Partial<Model<S>>
    ): Model<S> | null {
      const lst = this.select(filter);
      return lst && lst.length > 0 ? lst[0] : null;
    }

    public static selectLastOrDefault(
      filter: Partial<Model<S>>
    ): Model<S> | null {
      const lst =this.select(filter);
      return lst && lst.length > 0 ? lst[lst.length - 1] : null;
    }
  };

  Object.defineProperty(cls, "name", { value: className });
  return cls as unknown as {
    new(data: Model<S>): Model<S> & {
      insert(): string | null,
      update(): boolean,
      delete(): boolean
    }
    select(filter: Partial<Model<S>>): Model<S>[],
    selectFirstOrDefault(filter: Partial<Model<S>>): Model<S> | null
    selectLastOrDefault(filter: Partial<Model<S>>): Model<S> | null
  };
}