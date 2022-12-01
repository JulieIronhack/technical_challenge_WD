import axios from "axios"

const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

export default service