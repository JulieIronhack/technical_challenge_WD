import http from './base-api';

const list = () => http.get(`/phones`)

const detail = (phoneId) => http.get(`/phones/${phoneId}`)

export default {
  list, 
  detail
}