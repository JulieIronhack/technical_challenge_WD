    import "../App.css";
    import axios from "axios"
    import PulseLoader from "react-spinners/PulseLoader";
    import React, { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import PhonesDetails from "../components/PhonesDetails";
    import Card from 'react-bootstrap/Card';
    import Container from 'react-bootstrap/Container';
    import Row from 'react-bootstrap/Row';


    function Phones() {

    const navigate = useNavigate()


    const [allPhones, setAllPhones] = useState(null)


    useEffect(() => {
        getPhones();
    }, [])


    const getPhones = async () => {
        try {
        const response = await axios.get(`http://localhost:5005/api/phones`)
        setAllPhones(response.data);
        }
        catch (error) {
        navigate("/error")
        }
    }


    if (allPhones === null) {
        return (
        <div>
            <br />
            <h6>Loading cataloge...</h6>
            <PulseLoader />
        </div>
        )
    }

    return (
        <div className="App">
        <br/>
        <h1>PhonesData</h1>
        <br />

        {
            allPhones.map((eachPhone) => {
            return (
                <Container className="flexcontainer">
                <Row className="justify-content-md-center">
                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <div key={eachPhone.id} className="container-phones">
                        <div className="phone-name"><h3>{eachPhone.name}</h3></div>
                            <hr/>
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