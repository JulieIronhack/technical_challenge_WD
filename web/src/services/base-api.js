import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:5173/api/v1",
});

export default http;
