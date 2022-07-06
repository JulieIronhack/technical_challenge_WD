import axios from "axios";

class PhonesApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_PHONES_URI}/phones` });
    };

    getAllPhones = async () => {
        try {
            const { data } = await this.api.get("/");
            return await data;
        } catch (error) {
            console.error("Error on getAllPhones", error);
        };
    };
};

export default new PhonesApi();