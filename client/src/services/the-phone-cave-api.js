import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export function getPhones() {
  return http.get("/phones");
}

export function getPhone(id) {
  return http.get(`/phones/${id}`);
}
