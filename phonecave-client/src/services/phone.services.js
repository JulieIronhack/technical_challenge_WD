import service from "./config.services";

const getAllPhonesService = () => {
    return service.get("/phones")
}

export {
    getAllPhonesService
}