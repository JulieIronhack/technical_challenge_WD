import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CircularIndeterminate from '../components/Progress';

const Description = () => {
  const{id}= useParams()
  const [phone, setPhone] = useState([]);
  console.log("phone", phone);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/phones/${id}`)
      .then((resPhone) => setPhone(resPhone.data))
      .catch((err) => console.log(err));
  }, [id]);

  if(!phone){<CircularIndeterminate />}
  return (
    <Container>
      <img style={{maxHeight: "200px"}} src={`http://localhost:5005/images/${phone.imageFileName}`} alt="" />
      <Typography variant="h2" color="primary">{phone.name}</Typography>
      <Typography  mt={2}><strong>Manufacturer:</strong> {phone.manufacturer}</Typography>
      <Typography><strong>Description:</strong> {phone.description}</Typography>
      <Typography><strong>Processor:</strong> {phone.processor}</Typography>
      <Typography><strong>Ram:</strong> {phone.ram}</Typography>
      <Typography><strong>Screen:</strong> {phone.screen}</Typography>
      <Link to="/" style={{textDecoration: "none"}}><Button variant='contained' style={{marginTop:"20px"}}>Return</Button></Link>
    </Container>
  )
}

export default Description