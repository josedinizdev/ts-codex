import axios from "axios";
import { FIPE_BASE_URL } from "../base/constants";

export const api = axios.create({
  baseURL: FIPE_BASE_URL
});