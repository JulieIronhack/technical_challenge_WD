import React, { useEffect, useState } from "react";
import { getAllPhonesService } from "../services/phone.services";
import { Link } from "react-router-dom";
import Details from "../components/Details";

function Home() {
  // List items state
  const [list, setList] = useState([]);

  // REST API data collection managing state
  const [isFetching, setIsFetching] = useState(true);

  // Error management
  const [errorMessage, setErrorMessage] = useState("");

  // UseEffect to render when API data loads
  useEffect(() => {
    getData();
  }, []);

  // To get phone list data calling BE
  const getData = async () => {
    try {
      const phoneList = await getAllPhonesService();
      setList(phoneList.data);
      setIsFetching(false);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setErrorMessage(error.response.data.errorMessage);
      }
    }
  };

  // To manage information rendering while API data loads
  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      {list.map((eachPhone) => {
        return (
          <Link to={`/phones/${eachPhone.id}/details`}>
            <div key={eachPhone.id}>
                <img
                src={`../assets/images/${eachPhone.imageFileName}`}
                alt={eachPhone.name}
                />
                <h4>{eachPhone.name}</h4>
            </div>
          </Link>
        );
      })}
      <Details phones={list}/>
    </div>
  );
}

export default Home;
