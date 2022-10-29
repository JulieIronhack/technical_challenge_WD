import axios from "axios"

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api/v1",
  withCredentials: true
})

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.error("unauthenticated, redirect to home");
      localStorage.clear();
      window.location.replace("/phones");
    }

    return Promise.reject(error);
  }
);

export function getPhones() {
  return http.get("/phones")
}

export function getPhone(id) {
  return http.get(`/phones/${id}`)
}