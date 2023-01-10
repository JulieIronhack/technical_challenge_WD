
import _api from "./api"

export const getAllPhones = ()=> _api.get(`/phones`);
export const getDetailPhone = (id)=> _api.get(`/phones/${id}`);