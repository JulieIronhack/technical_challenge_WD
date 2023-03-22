import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Spinner from "./Spinner";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PhoneCard = ({
  id,
  name,
  imgSrc,

}) => {
  const params = useParams();

  return (
    <Card sx={{ width: 345, marginBottom: 5 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={imgSrc ? `../../public/images/${imgSrc}` : <Spinner />}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/${id}`}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PhoneCard;
