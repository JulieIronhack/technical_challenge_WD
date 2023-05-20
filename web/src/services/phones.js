import http from '../services/base-api';

export const list = () => http.get('/phones').then(r => r.data);

export const detail = (phoneId) => http.get(`/phones/${phoneId}`).then(r => r.data);

