import { useEffect, useState } from "react";
import api from "../services/API";

const Home = () => {
  const [shoeData, setShoeData] = useState([null]);

  useEffect(() => {
    api
      .getAll()
      .then((response) => {
        console.log("response: ", response);
        setShoeData(response.data);
        console.log(shoeData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
