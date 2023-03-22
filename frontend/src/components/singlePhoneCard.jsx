import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Spinner from "./Spinner";

const SinglePhoneCard = (
  id,
  name,
  description,
  imgSrc,
  color,
  price,
  screen,
  processor,
  ram,
  manufacturer
) => {
  return (
    <>
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
      </Card>
    </>
  );
};

export default SinglePhoneCard;
