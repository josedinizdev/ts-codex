import { api } from "../api";
import { date, DataSet, DataTable } from "@ts-codex/utils";

export async function participantesPix(data: Date = new Date): Promise<DataTable> {
  const response = await api.get(`content/estabilidadefinanceira/spi/participantes-spi-${date.toDateString(data,"YYYY/MM/DD")}.csv`);

  const ds: DataSet = new DataSet();
  ds.csvToTable("participantes-pix", response.data);

  return ds.tables["participantes-pix"];
}