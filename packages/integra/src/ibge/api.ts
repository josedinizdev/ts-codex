import axios from "axios";
import { IBGE_LOCALIDADE_BASE_URL } from "../base/constants";

export const apiLocalidades = axios.create({
  baseURL: IBGE_LOCALIDADE_BASE_URL
});