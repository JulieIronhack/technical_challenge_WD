import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function PhoneCard({name,imageFileName,price,color,_id}) {
  return (
    <Card style={{ width: '18rem', margin:'2rem' }}>
      <Card.Img variant="top" src= {`./images/${imageFileName}`} alt={name} />
      <Card.Body className='bg-dark text-white'>
        <Card.Title><h2>{name}</h2></Card.Title>
        <Card.Text>
        <p>Price: {price}$</p>
        <p>Color: {color}</p>
        </Card.Text>
        <Button
              className='button'
              as={Link}
              to={`/phones/${_id}`}
              variant='primary'
              size='sm'
            >
              More Details
            </Button>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;