import axios from "axios";
import { REGISTROBR_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: REGISTROBR_BASE_URL
});