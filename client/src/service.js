import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

/**
 * Returns a list of phones from the API.
 * @returns {Promise<Array>} An array of phone objects.
 * @throws {Error} If the API request fails.
 */
export const getPhones = async () => {
  try {
    const response = await axios.get(`${apiUrl}/phones`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

/**
 * Returns a single phone object from the API.
 * @param {string} id - The ID of the phone to retrieve.
 * @returns {Promise<Object>} A phone object.
 * @throws {Error} If the API request fails or the phone is not found.
 */
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
