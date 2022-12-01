import service from "./config.services";

const getAllPhonesService = () => {
    return service.get("/phones")
}

const getPhoneDetailsService = (phoneId) => {
    return service.get(`/phones/${phoneId}`)
}

export {
    getAllPhonesService,
    getPhoneDetailsService
}