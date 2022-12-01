import React, { useEffect } from "react";
import Details from "../components/Details";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems:'center', padding: '10px'}}>
      <Details list={list}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {list.map((eachPhone) => {
          return (
            <div key={eachPhone.id} >
              <Link style={{color:'white'}}>{eachPhone.manufacturer}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
