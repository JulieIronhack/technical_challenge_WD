import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getPhones = async () => {
  try {
    const response = await axios.get(`${apiUrl}/phones`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const getPhoneById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/phones/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    if (error.response && error.response.status === 404) {
      throw new Error("Phone not found");
    } else {
      throw error;
    }
  }
};
