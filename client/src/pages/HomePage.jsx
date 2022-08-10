import {useEffect, useState} from 'react';
import "../App.css";
import Card from '../components/Card';


function HomePage() {

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/api/phones`)
    .then(data => {
      data.json()
      .then(phones => {
        setPhones(phones)
      })
    })
    .catch("error in useEffect", console.log)
  }, [])

  return (

        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll", marginRight: "none"}}>

          {phones.map((phone, i) => {
          return <Card key={i} phone={phone} />
          })}

      </div>

  );
}

export default HomePage;
