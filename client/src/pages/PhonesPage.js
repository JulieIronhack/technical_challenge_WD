import { getAllPhonesService, getPhoneDetailsService } from "../services/phone.services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneDetails from "../components/phoneDetails";

function PhonesPage() {
  const [phones, setPhones] = useState([]);
  const [phoneDetails, setPhoneDetails] = useState(null)

  const getAllPhones = async () => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getAllPhonesService();
      setPhones(response.data);
      console.log(
        "🚀 ~ file: PhonesPage.js ~ line 13 ~ getAllPhones ~ response.data",
        response.data
      );
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getPhoneDetails = async (id) => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getPhoneDetailsService(id);
      setPhoneDetails(response.data);
      console.log(
        "🚀 ~ file: PhonesPage.js ~ line 13 ~ getAllPhones ~ response.data",
        response.data
      );
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="bg-gray-50 h-screen p-4">
      <h1 className="text-4xl">Phones List</h1>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          <div className="col-span-1 p-2 border-2 shadow drop-shadow-xl bg-white">
            {phones.map((phone) => {
              return (
                  <button className="block w-full border-2 my-2 shadow drop-shadow-xl max-w-md hover:bg-indigo-50 sm:rounded-md" onClick={() => getPhoneDetails(phone.id)} key={phone.id}>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 max-w-sm flex flex-col justify-around">
                        <h2 className="text-2xl font-medium">{phone.name}</h2>
                        <h3 className="text-base text-gray-400">
                          {phone.manufacturer}
                        </h3>
                      </div>
                    </div>
                  </button>
              );
            })}
          </div>
          <div className="col-span-2 border-2 shadow drop-shadow-xl bg-white">
            {phoneDetails ? <PhoneDetails phone={phoneDetails}/>:<></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonesPage;
