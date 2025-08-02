import axios from "axios";
import { MINHARECEITA_BASE_URL, RECEITASWS_BASE_URL} from "../base/constants";

export const apiMinhaReceita = axios.create({
  baseURL: MINHARECEITA_BASE_URL
});

export const apiReceitaWs = axios.create({
  baseURL: RECEITASWS_BASE_URL
});