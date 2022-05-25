import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/phones` })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPhones = () => {
        return this.api.get('/getAllPhones')
    }

    getOnePhone = (id) => {
        return this.api.get(`/getOnePhone/${id}`)
    }
}

const phonesService = new PhonesService()

export default phonesService