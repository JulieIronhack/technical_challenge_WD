import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export function getTelephones() {
  return http.get("/api/telephones");
}