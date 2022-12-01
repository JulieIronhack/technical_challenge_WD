import { Link, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Details() {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const { phoneId } = useParams();
  console.log(phoneId)
  
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`http://localhost:5005/api/phones/${phoneId}`)
      .then((response) => {
        setList(response.data);
        console.log(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [phoneId]);


  return (
    <div> Details
    <h3>Manu </h3>

    </div>
  )
}

export default Details