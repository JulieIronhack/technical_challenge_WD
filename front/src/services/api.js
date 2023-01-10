import axios from 'axios';

const _api = axios.create({
    baseURL: "http://localhost:5005/api",
    withCredentials:true
})


_api.interceptors.request.use((config) => {
    // Retrieve the JWT token from the local storage
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      config.headers = { Authorization: `Bearer ${storedToken}` };
    }

    return config;
});



export default _api