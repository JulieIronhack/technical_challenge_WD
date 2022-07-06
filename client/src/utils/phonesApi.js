import axios from "axios";

class PhonesApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_BEERS_URL}/phones` });
    };

    getAllPhones = async setPhones => {
        try {
            const { data } = await this.api.get("/");
            setPhones(await data);
        } catch (error) {
            console.error("Error on getAllPhones", error);
        };
    };
};