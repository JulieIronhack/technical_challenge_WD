import http from './base-api'

const list = () => http.get('/phones')


const detail = (id) => http.get(`/phones/${id}`)

export default {
  list, detail
}