import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/phone` })

    }


    getAllPhones = () => {
        return this.api.get('/phones')
    }

    getOnePhone = id => {
        return this.api.get(`/${id}`)
    }

}

const phonesService = new PhonesService()
export default phonesService
