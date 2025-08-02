import axios from "axios";
import { ANATEL_DADOSABERTOS_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: ANATEL_DADOSABERTOS_BASE_URL
});