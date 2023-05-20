import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1'
})

export default http;