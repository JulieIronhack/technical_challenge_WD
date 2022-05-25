import axios from 'axios'

class PhonesService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phone`
        })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPhones = () => {
        return this.app.get('/all-phones')
    }
    getOnePhone = (id) => {
        return this.app.get(`/detail-phone/${id}`)
    }

}

const PhonesService = new PhoneService()

export default phonesService