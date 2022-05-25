import axios from 'axios'

class PhoneService {

    constructor() {
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

    }

    getAllPhones = () => {
        return this.app.get('/phones')
    }

    getPhone = id => {
        return this.app.get(`/${id}`)
    }
}

const phoneService = new PhoneService()

export default phoneService