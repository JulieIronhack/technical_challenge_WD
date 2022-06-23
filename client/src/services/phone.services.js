import service from "./config.services";

const getPhonesService = () => {
    return service.get('/phones/')
}

const getPhoneService = (id) => {
    return service.get(`/phones/${id}`)
}

export {
    getPhonesService, 
    getPhoneService
}