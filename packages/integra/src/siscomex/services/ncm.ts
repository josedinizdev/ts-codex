import { api } from "../api";

export async function ncm() {
  const response = await api.get('classif/api/publico/nomenclatura/download/json')
  return response.data.Nomenclaturas?.map((o: object) => {
    return normalizeNcm(o);
  });
}

function normalizeNcm(obj: object) {
  const resp = Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
  );

  return resp;
}