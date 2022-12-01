import service from "./config.services";

const getPhoneListService = () => {
    return service.get(`/phones`)
  }

const getPhoneDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export {
    getPhoneListService,
    getPhoneDetailsService
}