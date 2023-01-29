import React, { useEffect } from "react";
import Details from "../components/Details";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phone");
      setList(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>...loading</h3>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {list.map((eachPhone) => {
          return (
            <div key={eachPhone.id}>
              <Link to={`/phone/${eachPhone.id}`} style={{ color: "white" }}>
                {eachPhone.manufacturer}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
