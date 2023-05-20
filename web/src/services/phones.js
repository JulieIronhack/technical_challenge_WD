import http from './base-api';

const list = () => http.get('/phones')
.then((res) => res.data)

const detail = (id) => http.get(`/phones/${id}`)
.then((res) => res.data)

export default {
  list,
  detail
}