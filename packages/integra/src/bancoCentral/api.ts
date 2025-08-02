import axios from "axios";
import { BANCOCENTRAL_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: BANCOCENTRAL_BASE_URL
});