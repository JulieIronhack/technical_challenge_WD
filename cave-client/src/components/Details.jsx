import { Link, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Details() {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const { phoneId } = useParams();
  
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`http://localhost:5005/api/phone/${phoneId}`)
      .then((response) => {
        setList(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [phoneId]);


  return (
    <div> Details
    <h3>Menu</h3>

    </div>
  )
}

export default Details