import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Phoneslist(props) {
  const { telephones } = props;

  return (
    <div>
      <h3>All phones</h3>

      {telephones &&
        telephones.map((phone) => {
          return (
            <Card key={phone.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>{`€${phone.price}`}</Card.Text>
                <Link to={`/telephones/${phone.id}`}><Button variant="primary">See details</Button></Link>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

// `../images/${phone.imageFileName}`
