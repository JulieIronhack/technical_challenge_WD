import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PhoneCard({phones}) {
  return (
    <div>
    {phones.map((phone)=> 
    <Card style={{ width: "18rem"}} key={phone.id}>
      <Card.Img variant="top" src={`../images/${phone.imageFileName}`} style={{width: '200px'}}/>
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Title>{phone.manufacturer}</Card.Title>
        <Card.Text>
          {phone.price}€
        </Card.Text>
        <Link to={`/${phone.id}`}>
        <Button variant="primary">See details</Button>
        </Link>
      </Card.Body>
    </Card>
    )}
    </div>
  );
}

export default PhoneCard;
