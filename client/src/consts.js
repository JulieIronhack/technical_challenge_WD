import axios from "axios";

axios.defaults.withCredentials = true;

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5005/api";
