import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect} from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PhoneDetails() {
    const [phone, setPhone] = useState([]);
    const phoneName = useParams().id
    console.log(phoneName)
    


    const fetchPhone = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_HOST}/phones/${phoneName}`);
          setPhone(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        fetchPhone();
      }, [phoneName]);


  return (
    <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {`../../${phone.imageFileName}`}
        title="Name"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {phone.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {phone.manufacturer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {phone.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {phone.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{display:'flex' , gap:'30px'}}>
          <div>
            <p style={{fontWeight:'bold'}}>Price</p>
            <p>{phone.price}</p>
          </div>
          <div>
            <p style={{fontWeight:'bold'}}>Processor</p>
            <p>{phone.processor}</p>
          </div>
          <div>
            <p style={{fontWeight:'bold'}}>Ram</p>
            <p>{phone.ram}</p>
          </div>
          <div>
            <p style={{fontWeight:'bold'}}>Screen</p>
            <p>{phone.screen}</p>
          </div>       
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default PhoneDetails