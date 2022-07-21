import api from './api';

export const listPhones = () => {
  api.get('/').then(response => response.data);
};

export const phoneLoad = id =>
  api.get(`/${id}`).then(response => response.data);
