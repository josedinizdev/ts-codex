import axios from "axios";
import { BANCOCENTRAL_BASE_URL, API_BANCOCENTRAL_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: BANCOCENTRAL_BASE_URL
});

export const apiDados = axios.create({
  baseURL: API_BANCOCENTRAL_BASE_URL
});