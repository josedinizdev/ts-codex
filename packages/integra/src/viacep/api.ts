import axios from "axios";
import { VIACEP_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: VIACEP_BASE_URL
});