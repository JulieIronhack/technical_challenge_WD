import http from './base-api';

const list = () => http.get('/phones').then(res => res.data)

const detail = (phoneId) => http.get(`/phones/${phoneId}`).then(res => res.data)

export default {
  list, 
  detail,
}