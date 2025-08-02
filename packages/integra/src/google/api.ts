import axios from "axios";
import { GOOGLE_LIVROS_BASE_URL } from "../base/constants";

export const apiBooks = axios.create({
  baseURL: GOOGLE_LIVROS_BASE_URL
});