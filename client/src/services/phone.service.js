import axios from 'axios'

class PhoneService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getAllPhones = () => {
        return this.app.get('/phones')
    }

    getOnePhone = id => {
        return this.app.get(`/getOnePhone/${id}`)
    }
}

const phonesService = new PhoneService()

export default phonesService