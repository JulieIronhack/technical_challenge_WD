import "../App.css";
import axios from "axios"
import PulseLoader from "react-spinners/PulseLoader";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import PhonesDetails from "../components/PhonesDetails";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Phones() {

  const navigate = useNavigate()

  // Pasos para llamar a REST API
  // 1. Estados
  const [allPhones, setAllPhones] = useState(null)

  // 2. componentDidMount
  useEffect(() => {
    getPhones();
  }, [])

  // 3. Función que llama a la API
  const getPhones = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/phones`)
      setAllPhones(response.data);
    }
    catch (error) {
      navigate("/error")
    }
  }

  // 4. Spinner
  if (allPhones === null) {
    return (
      <div>
        <br />
        <h6>Loading phones...</h6>
        <PulseLoader />
      </div>
    )
  }

  return (
    <div className="App">
      <br/>
      <h1>Phones</h1>
      <br />

      {
        allPhones.map((eachPhone) => {
          return (
            <Container className="flexcontainer">
              <Row className="justify-content-md-center">
                <Card style={{ width: '23rem' }}>
                  <Card.Body>
                    <div key={eachPhone.id} className="container-phones">
                      <div className="phone-name"><h3>{eachPhone.name}</h3></div>
                        <PhonesDetails id={eachPhone.id}/>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <br/>
            </Container>
            
          )
        })
      }

    </div>
  );
}

export default Phones;
