import { apiBooks } from "../api";
import { OpcoesPesquisarLivros } from "../types";

export async function pesquisarLivros(options: OpcoesPesquisarLivros): Promise<any> {
  let query = "";

  if (options.isbn) {
    query += `isbn:${options.isbn}`;
  } else {
    if (options.keywords)
      query += options.keywords;
    if (options.title)
      query += `intitle:${options.title}`;
    if (options.author)
      query += `inauthor:${options.author}`;
  }

  const response = await apiBooks.get("", {
    params: {
      q: query,
      country: options.country ?? "BR"
    }
  });

  return response.data;
}
