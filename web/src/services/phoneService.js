import http from "./base-api";

const list = (query) =>
  http.get("/phones", { params: query })

const detail = (id) => http.get(`/phones/${id}`)

export default {
  list,
  detail,
};