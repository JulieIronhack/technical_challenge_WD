import { Link } from "react-router-dom";

// style components from Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";



// this component is a navbar that displays all the phone models from the Server, they come via props from App.js
function MyNavbar() {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const [phones, setPhones] = useState([]);
    const [selectedPhone, selectPhone] = useState([]);
    const { phoneId } = useParams();


    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");

        axios
            .get(`${API_URL}/phones/`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((result) => {
                setPhones(result.data);
            })
            .catch((err) => console.log("Error while retrieving phones:", err));
    }, [API_URL]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
        const storedToken = localStorage.getItem("authToken");

        axios
            .get(`${API_URL}/phones/${phoneId}`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((result) => {
                selectPhone(result.data);
            })
            .catch((err) => console.log("Error while retrieving phones:", err));
    }, [selectedPhone, phoneId]);

    const handlePhoneSelect = () => {
        const phone = phones.find(p => p.id.toString() === phoneId);
        selectPhone(phone.data)
    }

    return (
        <Navbar bg="light" expand="lg" >
            <Container className="nav-container">
                <Link to={`/phones`}>Home</Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {phones.map((eachPhone) => {
                            return (
                                <div className="navbar-links">
                                <Link to={`/phones/${eachPhone.id}`} key={eachPhone.id} onClick={handlePhoneSelect}>
                                    {eachPhone.name}
                                </Link>
                                </div>
                            );
                        })}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;