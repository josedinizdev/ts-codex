import axios from "axios";
import { SISCOMEX_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: SISCOMEX_BASE_URL
});