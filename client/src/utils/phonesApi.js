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
            console.error(`Error on getPhoneDetails! => ${error.message}`, error.response);
            return [{ statusText: error.response.statusText, status: error.response.status }];
        };
    };

    getPhoneDetails = async _id => {
        try {
            const { data } = await this.api.get(`/${_id}`);
            return await data;
        } catch (error) {
            console.error(`Error on getPhoneDetails! => ${error.message}`, error.response);
            return { statusText: error.response.statusText, status: error.response.status };
        };
    };
};

export default new PhonesApi();