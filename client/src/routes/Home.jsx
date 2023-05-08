import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/API";

const Home = () => {
  const [phoneData, setPhoneData] = useState(null);

  useEffect(() => {
    api
      .getAll()
      .then((response) => {
        console.log("response: ", response);
        setPhoneData(response.data);
        console.log(phoneData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="text-center relative pt-8 mb-8">
        <h1 className="text-3xl">
          Welcome to{" "}
          <span className="font-extrabold text-orange-500">
            The Phone Cave!
          </span>
        </h1>
        <p className="text-xl">
          Where phones are{" "}
          <span className="font-extrabold text-orange-500">awesome!</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {phoneData &&
          phoneData.map((phone) => (
            <Link to={`/shoes/${phone.id}`} key={phone.id}>
              <img
                className="w-full"
                src={`assets/images/${phone.imageFileName}`}
                alt=""
              />
              <h1>{phone.name}</h1>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
