import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/API";
const ShoeDetail = () => {
  const { id } = useParams();
  const [shoedetail, setShoedetail] = useState([null]);

  useEffect(() => {
    api
      .getOne(id)
      .then((response) => {
        console.log("response: ", response);
        setShoedetail(response.detail);
        console.log(shoedetail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Shoe Detail</h1>
    </div>
  );
};

export default ShoeDetail;
