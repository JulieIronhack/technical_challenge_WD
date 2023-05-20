import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http