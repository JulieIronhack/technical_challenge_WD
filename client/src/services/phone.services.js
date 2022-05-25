import axios from 'axios'

class PhoneService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/phone` })

    }

    getPhones = () => {
        return this.api.get('/')
    }

    getPhone = user_id => {
        return this.api.get(`/${user_id}`)
    }


}

const phoneService = new PhoneService()

export default phoneService