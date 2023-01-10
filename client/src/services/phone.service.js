import axios from 'axios';

class PhoneService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });
  }

  getAll = async () => {
    return this.api.get('/phones');
  }

  getOne = async (id) => {
    return this.api.get(`/phones/${id}`);
  }
}

// Create one instance of the service
const artworkService = new PhoneService();

export default artworkService;