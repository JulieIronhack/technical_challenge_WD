import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import phoneService from "../services/phoneService";
import { NavLink } from "react-router-dom";

function PhoneDetail() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhone() {
      try {
        const newPhone = await phoneService.detail(phoneId);
        setPhone(newPhone.data);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate("/");
        }
      }
    }

    fetchPhone();
  }, [phoneId]);

  return (
    <>
      {!phone ? (
        <p>....Finding Phone</p>
      ) : (
        <>
          <NavLink to="/" className="text-white text-center m-10 mt-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Go Back
          </NavLink>
          <div className="flex justify-center mt-20">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src={`assets/images/${phone.imageFileName}`}
                alt="phone"
              />

              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {phone.name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {phone.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PhoneDetail;
