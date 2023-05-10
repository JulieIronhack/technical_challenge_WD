import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/API";
const PhoneDetail = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    api
      .getOne(id)
      .then((response) => {
        console.log("response: ", response);
        setPhone(response.data);
        console.log(phone);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8">
      {phone && (
        <>
          <img
            className="w-full"
            src={`/assets/images/${phone.imageFileName}`}
            alt=""
          />
          <div>
            <h1 className="text-3xl text-orange-500 font-extrabold">
              {phone.name}
            </h1>
            <p className="text-xl font-light text-slate-600">
              {phone.manufacturer}
            </p>
            <p>{phone.description}</p>
            <p className="text-xl font-light text-slate-600">
              Price: <span className="text-sm ">USD </span>
              <span className="text-slate-800 font-extrabold">
                {phone.price}
              </span>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneDetail;
