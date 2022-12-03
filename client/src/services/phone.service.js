import axios from "axios";

class PhoneService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllPhones = () => {
    return this.api.get("/phones");
  };

  getPhoneDetails = () => {
    return this.api.get(`/phone/3`);
  };
}

const phoneService = new PhoneService();

export default phoneService;
