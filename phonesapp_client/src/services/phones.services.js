import axios from 'axios'

class PhonesService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/`
        })

    }

    getAllPhones = () => {
        return this.axiosApp.get('/phones')
    }

    getPhone = id => {
        return this.axiosApp.get(`/phones/${id}`)

    }

}

const phonesService = new PhonesService()

export default phonesService