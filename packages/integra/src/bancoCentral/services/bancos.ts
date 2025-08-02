import { DataSet, DataTable } from "@ts-codex/utils";
import { api } from "../api";

export async function bancos(): Promise<DataTable> {
  const response = await api.get("pom/spb/estatistica/port/ParticipantesSTRport.csv");

  const ds: DataSet = new DataSet();
  ds.csvToTable("bancos", response.data);

  return ds.tables["bancos"];
}