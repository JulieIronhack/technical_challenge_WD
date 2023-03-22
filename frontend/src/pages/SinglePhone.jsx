import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";
import SinglePhoneCard from "../components/singlePhoneCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Spinner from "../components/Spinner";

const SinglePhone = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [screen, setScreen] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const getPhone = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${id}`,
        id
      );
      setName(response.data.name);
      setImg(response.data.imageFileName);
      setDescription(response.data.description);
      setColor(response.data.color);
      setPrice(response.data.price.toString());
      setScreen(response.data.screen);
      setProcessor(response.data.processor);
      setRam(response.data.ram.toString());
      setManufacturer(response.data.manufacturer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  return (
    <div>
      <Card sx={{ width: 345, marginBottom: 5 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={img ? `../../public/images/${img}` : <Spinner />}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {color}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Price: {price}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {screen}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SinglePhone;
