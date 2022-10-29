import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true
});

export function getPhones(criterial) {
  return http.get(`/phones${criterial ? `/${criterial}` : ""}`);
}