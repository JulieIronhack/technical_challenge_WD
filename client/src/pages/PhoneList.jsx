import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import PhoneDetails from '../components/PhoneDetails';


function PhoneList() {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const [phones, setPhones] = useState([]);


    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");

        axios
            .get(`${API_URL}/phones`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((result) => {
                setPhones(result.data);
            })
            .catch((err) => console.log("Error while retrieving phones:", err));
    }, [API_URL]);


    return (

        phones.map(({ id, name, manufacturer, description, price, imageFileName, screen, processor, ram }) => {
            return (
                <Card
                    className="phone border-0 text-center"
                    key={id}
                    style={{ width: "40rem" }}
                >
                    {imageFileName.length === 0 ? (
                        <></>
                    ) : (
                        <img src={require(`../images/${imageFileName}`)} alt={name} />
                    )}

                    <Card.Title>{name}</Card.Title>
                    {description.length === 0 ? (
                        <></>
                    ) : (
                        <Card.Text>{description}</Card.Text>
                    )}
                    {manufacturer.length === 0 ? (
                        <></>
                    ) : (
                        <Card.Text>{manufacturer}</Card.Text>
                    )}

                    {price === 0 ? (
                        <></>
                    ) : (
                        <Card.Footer>
                            <small className="text-muted">
                                {price} | {screen} | {processor} | {ram}
                            </small>
                        </Card.Footer>
                    )}
                    <Link to={`${API_URL}/phones/${id.toString()}`}>See more</Link>

                </Card>




            );
        })
    )
}

export default PhoneList;